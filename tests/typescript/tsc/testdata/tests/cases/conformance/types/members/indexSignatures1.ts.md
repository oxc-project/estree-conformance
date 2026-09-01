__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 45
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 54
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 48,
            "end": 56
          },
          "definite": false,
          "start": 42,
          "end": 56
        }
      ],
      "declare": false,
      "start": 36,
      "end": 57
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gg3",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 71
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
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 83,
                          "end": 89
                        },
                        "start": 81,
                        "end": 89
                      },
                      "start": 78,
                      "end": 89
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 92,
                      "end": 98
                    },
                    "start": 90,
                    "end": 98
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 77,
                  "end": 98
                }
              ],
              "start": 75,
              "end": 100
            },
            "start": 73,
            "end": 100
          },
          "start": 72,
          "end": 100
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
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 113,
                          "end": 119
                        },
                        "start": 111,
                        "end": 119
                      },
                      "start": 108,
                      "end": 119
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 122,
                      "end": 128
                    },
                    "start": 120,
                    "end": 128
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 107,
                  "end": 128
                }
              ],
              "start": 105,
              "end": 130
            },
            "start": 103,
            "end": 130
          },
          "start": 102,
          "end": 130
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sym",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 138,
                    "end": 141
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    },
                    "start": 142,
                    "end": 150
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 137,
                  "end": 150
                }
              ],
              "start": 135,
              "end": 152
            },
            "start": 133,
            "end": 152
          },
          "start": 132,
          "end": 152
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 161
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 165
              },
              "start": 160,
              "end": 165
            },
            "directive": null,
            "start": 160,
            "end": 166
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 176
              },
              "start": 171,
              "end": 176
            },
            "directive": null,
            "start": 171,
            "end": 177
          }
        ],
        "start": 154,
        "end": 189
      },
      "expression": false,
      "start": 59,
      "end": 189
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gg1",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 236
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
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "a",
                                "cooked": "a"
                              },
                              "tail": false,
                              "start": 248,
                              "end": 252
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 258,
                              "end": 260
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 252,
                              "end": 258
                            }
                          ],
                          "start": 248,
                          "end": 260
                        },
                        "start": 246,
                        "end": 260
                      },
                      "start": 243,
                      "end": 260
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 263,
                      "end": 269
                    },
                    "start": 261,
                    "end": 269
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 242,
                  "end": 270
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": false,
                              "start": 277,
                              "end": 280
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "a",
                                "cooked": "a"
                              },
                              "tail": true,
                              "start": 286,
                              "end": 289
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 280,
                              "end": 286
                            }
                          ],
                          "start": 277,
                          "end": 289
                        },
                        "start": 275,
                        "end": 289
                      },
                      "start": 272,
                      "end": 289
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 292,
                      "end": 298
                    },
                    "start": 290,
                    "end": 298
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 271,
                  "end": 298
                }
              ],
              "start": 240,
              "end": 300
            },
            "start": 238,
            "end": 300
          },
          "start": 237,
          "end": 300
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
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "a",
                                "cooked": "a"
                              },
                              "tail": false,
                              "start": 313,
                              "end": 317
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "a",
                                "cooked": "a"
                              },
                              "tail": true,
                              "start": 323,
                              "end": 326
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 317,
                              "end": 323
                            }
                          ],
                          "start": 313,
                          "end": 326
                        },
                        "start": 311,
                        "end": 326
                      },
                      "start": 308,
                      "end": 326
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 329,
                      "end": 335
                    },
                    "start": 327,
                    "end": 335
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 307,
                  "end": 335
                }
              ],
              "start": 305,
              "end": 337
            },
            "start": 303,
            "end": 337
          },
          "start": 302,
          "end": 337
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 346
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 350
              },
              "start": 345,
              "end": 350
            },
            "directive": null,
            "start": 345,
            "end": 351
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 357
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 360,
                "end": 361
              },
              "start": 356,
              "end": 361
            },
            "directive": null,
            "start": 356,
            "end": 362
          }
        ],
        "start": 339,
        "end": 364
      },
      "expression": false,
      "start": 224,
      "end": 364
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IX",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 378
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false,
                        "start": 387,
                        "end": 391
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 397,
                        "end": 399
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 391,
                        "end": 397
                      }
                    ],
                    "start": 387,
                    "end": 399
                  },
                  "start": 385,
                  "end": 399
                },
                "start": 382,
                "end": 399
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 402,
                "end": 408
              },
              "start": 400,
              "end": 408
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 381,
            "end": 409
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 416,
                        "end": 419
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": true,
                        "start": 425,
                        "end": 428
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 419,
                        "end": 425
                      }
                    ],
                    "start": 416,
                    "end": 428
                  },
                  "start": 414,
                  "end": 428
                },
                "start": 411,
                "end": 428
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 431,
                "end": 437
              },
              "start": 429,
              "end": 437
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 410,
            "end": 437
          }
        ],
        "start": 379,
        "end": 439
      },
      "declare": false,
      "start": 366,
      "end": 439
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IY",
        "optional": false,
        "typeAnnotation": null,
        "start": 450,
        "end": 452
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false,
                        "start": 461,
                        "end": 465
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": true,
                        "start": 471,
                        "end": 474
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 465,
                        "end": 471
                      }
                    ],
                    "start": 461,
                    "end": 474
                  },
                  "start": 459,
                  "end": 474
                },
                "start": 456,
                "end": 474
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 477,
                "end": 483
              },
              "start": 475,
              "end": 483
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 455,
            "end": 483
          }
        ],
        "start": 453,
        "end": 485
      },
      "declare": false,
      "start": 440,
      "end": 485
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gg2",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 499
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
                "name": "IX",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 505
              },
              "typeArguments": null,
              "start": 503,
              "end": 505
            },
            "start": 501,
            "end": 505
          },
          "start": 500,
          "end": 505
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IY",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 512
              },
              "typeArguments": null,
              "start": 510,
              "end": 512
            },
            "start": 508,
            "end": 512
          },
          "start": 507,
          "end": 512
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 521
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 524,
                "end": 525
              },
              "start": 520,
              "end": 525
            },
            "directive": null,
            "start": 520,
            "end": 526
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 546
              },
              "start": 541,
              "end": 546
            },
            "directive": null,
            "start": 541,
            "end": 547
          }
        ],
        "start": 514,
        "end": 549
      },
      "expression": false,
      "start": 487,
      "end": 549
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
            "name": "combo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTemplateLiteralType",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "foo-",
                                      "cooked": "foo-"
                                    },
                                    "tail": false,
                                    "start": 633,
                                    "end": 640
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": true,
                                    "start": 646,
                                    "end": 648
                                  }
                                ],
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 640,
                                    "end": 646
                                  }
                                ],
                                "start": 633,
                                "end": 648
                              },
                              "start": 631,
                              "end": 648
                            },
                            "start": 630,
                            "end": 648
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "'a'",
                                  "start": 651,
                                  "end": 654
                                },
                                "start": 651,
                                "end": 654
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "'b'",
                                  "start": 657,
                                  "end": 660
                                },
                                "start": 657,
                                "end": 660
                              }
                            ],
                            "start": 651,
                            "end": 660
                          },
                          "start": 649,
                          "end": 660
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 629,
                        "end": 660
                      }
                    ],
                    "start": 627,
                    "end": 662
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTemplateLiteralType",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": false,
                                    "start": 671,
                                    "end": 674
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "-bar",
                                      "cooked": "-bar"
                                    },
                                    "tail": true,
                                    "start": 680,
                                    "end": 686
                                  }
                                ],
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 674,
                                    "end": 680
                                  }
                                ],
                                "start": 671,
                                "end": 686
                              },
                              "start": 669,
                              "end": 686
                            },
                            "start": 668,
                            "end": 686
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "'b'",
                                  "start": 689,
                                  "end": 692
                                },
                                "start": 689,
                                "end": 692
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "c",
                                  "raw": "'c'",
                                  "start": 695,
                                  "end": 698
                                },
                                "start": 695,
                                "end": 698
                              }
                            ],
                            "start": 689,
                            "end": 698
                          },
                          "start": 687,
                          "end": 698
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 667,
                        "end": 698
                      }
                    ],
                    "start": 665,
                    "end": 700
                  }
                ],
                "start": 627,
                "end": 700
              },
              "start": 625,
              "end": 700
            },
            "start": 620,
            "end": 700
          },
          "init": null,
          "definite": false,
          "start": 620,
          "end": 700
        }
      ],
      "declare": true,
      "start": 608,
      "end": 701
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 708,
            "end": 710
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null,
              "start": 713,
              "end": 718
            },
            "property": {
              "type": "Literal",
              "value": "foo-test",
              "raw": "'foo-test'",
              "start": 719,
              "end": 729
            },
            "optional": false,
            "computed": true,
            "start": 713,
            "end": 730
          },
          "definite": false,
          "start": 708,
          "end": 730
        }
      ],
      "declare": false,
      "start": 702,
      "end": 731
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 754
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null,
              "start": 757,
              "end": 762
            },
            "property": {
              "type": "Literal",
              "value": "test-bar",
              "raw": "'test-bar'",
              "start": 763,
              "end": 773
            },
            "optional": false,
            "computed": true,
            "start": 757,
            "end": 774
          },
          "definite": false,
          "start": 752,
          "end": 774
        }
      ],
      "declare": false,
      "start": 746,
      "end": 775
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 796,
            "end": 798
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 806
            },
            "property": {
              "type": "Literal",
              "value": "foo-test-bar",
              "raw": "'foo-test-bar'",
              "start": 807,
              "end": 821
            },
            "optional": false,
            "computed": true,
            "start": 801,
            "end": 822
          },
          "definite": false,
          "start": 796,
          "end": 822
        }
      ],
      "declare": false,
      "start": 790,
      "end": 823
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 878,
                "end": 884
              },
              "start": 876,
              "end": 884
            },
            "start": 873,
            "end": 884
          },
          "init": null,
          "definite": false,
          "start": 873,
          "end": 884
        }
      ],
      "declare": true,
      "start": 861,
      "end": 885
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 893,
            "end": 895
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 903
            },
            "property": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false,
                  "start": 904,
                  "end": 911
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 914,
                  "end": 916
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 911,
                  "end": 914
                }
              ],
              "start": 904,
              "end": 916
            },
            "optional": false,
            "computed": true,
            "start": 898,
            "end": 917
          },
          "definite": false,
          "start": 893,
          "end": 917
        }
      ],
      "declare": false,
      "start": 887,
      "end": 918
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": null,
            "start": 925,
            "end": 927
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 935
            },
            "property": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 936,
                  "end": 939
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-bar",
                    "cooked": "-bar"
                  },
                  "tail": true,
                  "start": 942,
                  "end": 948
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 939,
                  "end": 942
                }
              ],
              "start": 936,
              "end": 948
            },
            "optional": false,
            "computed": true,
            "start": 930,
            "end": 949
          },
          "definite": false,
          "start": 925,
          "end": 949
        }
      ],
      "declare": false,
      "start": 919,
      "end": 950
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
            "name": "x6",
            "optional": false,
            "typeAnnotation": null,
            "start": 957,
            "end": 959
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo",
              "optional": false,
              "typeAnnotation": null,
              "start": 962,
              "end": 967
            },
            "property": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false,
                  "start": 968,
                  "end": 975
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-bar",
                    "cooked": "-bar"
                  },
                  "tail": true,
                  "start": 978,
                  "end": 984
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 975,
                  "end": 978
                }
              ],
              "start": 968,
              "end": 984
            },
            "optional": false,
            "computed": true,
            "start": 962,
            "end": 985
          },
          "definite": false,
          "start": 957,
          "end": 985
        }
      ],
      "declare": false,
      "start": 951,
      "end": 986
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
            "name": "combo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTemplateLiteralType",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": false,
                                    "start": 1014,
                                    "end": 1017
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "xxx",
                                      "cooked": "xxx"
                                    },
                                    "tail": false,
                                    "start": 1023,
                                    "end": 1029
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": true,
                                    "start": 1035,
                                    "end": 1037
                                  }
                                ],
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1017,
                                    "end": 1023
                                  },
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1029,
                                    "end": 1035
                                  }
                                ],
                                "start": 1014,
                                "end": 1037
                              },
                              {
                                "type": "TSTemplateLiteralType",
                                "quasis": [
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": false,
                                    "start": 1040,
                                    "end": 1043
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "yyy",
                                      "cooked": "yyy"
                                    },
                                    "tail": false,
                                    "start": 1049,
                                    "end": 1055
                                  },
                                  {
                                    "type": "TemplateElement",
                                    "value": {
                                      "raw": "",
                                      "cooked": ""
                                    },
                                    "tail": true,
                                    "start": 1061,
                                    "end": 1063
                                  }
                                ],
                                "types": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1043,
                                    "end": 1049
                                  },
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1055,
                                    "end": 1061
                                  }
                                ],
                                "start": 1040,
                                "end": 1063
                              }
                            ],
                            "start": 1014,
                            "end": 1063
                          },
                          "start": 1012,
                          "end": 1063
                        },
                        "start": 1011,
                        "end": 1063
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1066,
                        "end": 1072
                      },
                      "start": 1064,
                      "end": 1072
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1010,
                    "end": 1072
                  }
                ],
                "start": 1008,
                "end": 1074
              },
              "start": 1006,
              "end": 1074
            },
            "start": 1000,
            "end": 1074
          },
          "init": null,
          "definite": false,
          "start": 1000,
          "end": 1074
        }
      ],
      "declare": true,
      "start": 988,
      "end": 1075
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
            "name": "x7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1083,
            "end": 1085
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1088,
              "end": 1094
            },
            "property": {
              "type": "Literal",
              "value": "axxxbyyyc",
              "raw": "'axxxbyyyc'",
              "start": 1095,
              "end": 1106
            },
            "optional": false,
            "computed": true,
            "start": 1088,
            "end": 1107
          },
          "definite": false,
          "start": 1083,
          "end": 1107
        }
      ],
      "declare": false,
      "start": 1077,
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
            "name": "x8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1115,
            "end": 1117
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1120,
              "end": 1126
            },
            "property": {
              "type": "Literal",
              "value": "ayyyxxxbc",
              "raw": "'ayyyxxxbc'",
              "start": 1127,
              "end": 1138
            },
            "optional": false,
            "computed": true,
            "start": 1120,
            "end": 1139
          },
          "definite": false,
          "start": 1115,
          "end": 1139
        }
      ],
      "declare": false,
      "start": 1109,
      "end": 1140
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
            "name": "x9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1147,
            "end": 1149
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "combo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1152,
              "end": 1158
            },
            "property": {
              "type": "Literal",
              "value": "axxxbbbyc",
              "raw": "'axxxbbbyc'",
              "start": 1159,
              "end": 1170
            },
            "optional": false,
            "computed": true,
            "start": 1152,
            "end": 1171
          },
          "definite": false,
          "start": 1147,
          "end": 1171
        }
      ],
      "declare": false,
      "start": 1141,
      "end": 1172
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
            "name": "dom",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTemplateLiteralType",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "data",
                                  "cooked": "data"
                                },
                                "tail": false,
                                "start": 1263,
                                "end": 1270
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": true,
                                "start": 1276,
                                "end": 1278
                              }
                            ],
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1270,
                                "end": 1276
                              }
                            ],
                            "start": 1263,
                            "end": 1278
                          },
                          "start": 1261,
                          "end": 1278
                        },
                        "start": 1260,
                        "end": 1278
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1281,
                        "end": 1287
                      },
                      "start": 1279,
                      "end": 1287
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1259,
                    "end": 1287
                  }
                ],
                "start": 1257,
                "end": 1289
              },
              "start": 1255,
              "end": 1289
            },
            "start": 1252,
            "end": 1289
          },
          "init": null,
          "definite": false,
          "start": 1252,
          "end": 1289
        }
      ],
      "declare": true,
      "start": 1240,
      "end": 1290
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1297,
            "end": 1299
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dom",
              "optional": false,
              "typeAnnotation": null,
              "start": 1302,
              "end": 1305
            },
            "property": {
              "type": "Literal",
              "value": "data123",
              "raw": "'data123'",
              "start": 1306,
              "end": 1315
            },
            "optional": false,
            "computed": true,
            "start": 1302,
            "end": 1316
          },
          "definite": false,
          "start": 1297,
          "end": 1316
        }
      ],
      "declare": false,
      "start": 1291,
      "end": 1317
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1324,
            "end": 1326
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dom",
              "optional": false,
              "typeAnnotation": null,
              "start": 1329,
              "end": 1332
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "data123",
              "optional": false,
              "typeAnnotation": null,
              "start": 1333,
              "end": 1340
            },
            "optional": false,
            "computed": false,
            "start": 1329,
            "end": 1340
          },
          "definite": false,
          "start": 1324,
          "end": 1340
        }
      ],
      "declare": false,
      "start": 1318,
      "end": 1341
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null,
          "start": 1409,
          "end": 1412
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
                "name": "data123",
                "optional": false,
                "typeAnnotation": null,
                "start": 1417,
                "end": 1424
              },
              "value": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1426,
                "end": 1433
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1417,
              "end": 1433
            }
          ],
          "start": 1415,
          "end": 1435
        },
        "start": 1409,
        "end": 1435
      },
      "directive": null,
      "start": 1409,
      "end": 1436
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null,
          "start": 1437,
          "end": 1440
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
                "name": "date123",
                "optional": false,
                "typeAnnotation": null,
                "start": 1445,
                "end": 1452
              },
              "value": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1454,
                "end": 1461
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1445,
              "end": 1461
            }
          ],
          "start": 1443,
          "end": 1463
        },
        "start": 1437,
        "end": 1463
      },
      "directive": null,
      "start": 1437,
      "end": 1464
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Funcs",
        "optional": false,
        "typeAnnotation": null,
        "start": 1552,
        "end": 1557
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "s",
                          "cooked": "s"
                        },
                        "tail": false,
                        "start": 1572,
                        "end": 1576
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1582,
                        "end": 1584
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1576,
                        "end": 1582
                      }
                    ],
                    "start": 1572,
                    "end": 1584
                  },
                  "start": 1570,
                  "end": 1584
                },
                "start": 1567,
                "end": 1584
              }
            ],
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
                        "type": "TSStringKeyword",
                        "start": 1591,
                        "end": 1597
                      },
                      "start": 1589,
                      "end": 1597
                    },
                    "start": 1588,
                    "end": 1597
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1602,
                    "end": 1606
                  },
                  "start": 1599,
                  "end": 1606
                },
                "start": 1587,
                "end": 1606
              },
              "start": 1585,
              "end": 1606
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1566,
            "end": 1607
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "n",
                          "cooked": "n"
                        },
                        "tail": false,
                        "start": 1618,
                        "end": 1622
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1628,
                        "end": 1630
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1622,
                        "end": 1628
                      }
                    ],
                    "start": 1618,
                    "end": 1630
                  },
                  "start": 1616,
                  "end": 1630
                },
                "start": 1613,
                "end": 1630
              }
            ],
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
                        "type": "TSNumberKeyword",
                        "start": 1637,
                        "end": 1643
                      },
                      "start": 1635,
                      "end": 1643
                    },
                    "start": 1634,
                    "end": 1643
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1648,
                    "end": 1652
                  },
                  "start": 1645,
                  "end": 1652
                },
                "start": 1633,
                "end": 1652
              },
              "start": 1631,
              "end": 1652
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1612,
            "end": 1653
          }
        ],
        "start": 1560,
        "end": 1655
      },
      "declare": false,
      "start": 1547,
      "end": 1655
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
            "name": "funcs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Funcs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1670,
                  "end": 1675
                },
                "typeArguments": null,
                "start": 1670,
                "end": 1675
              },
              "start": 1668,
              "end": 1675
            },
            "start": 1663,
            "end": 1675
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
                  "name": "sfoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1684,
                  "end": 1688
                },
                "value": {
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
                      "typeAnnotation": null,
                      "start": 1690,
                      "end": 1691
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1695,
                      "end": 1696
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1697,
                      "end": 1703
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1695,
                    "end": 1703
                  },
                  "id": null,
                  "generator": false,
                  "start": 1690,
                  "end": 1703
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1684,
                "end": 1703
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nfoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1723,
                  "end": 1727
                },
                "value": {
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
                      "typeAnnotation": null,
                      "start": 1729,
                      "end": 1730
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1734,
                      "end": 1735
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1738,
                      "end": 1739
                    },
                    "start": 1734,
                    "end": 1739
                  },
                  "id": null,
                  "generator": false,
                  "start": 1729,
                  "end": 1739
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1723,
                "end": 1739
              }
            ],
            "start": 1678,
            "end": 1759
          },
          "definite": false,
          "start": 1663,
          "end": 1759
        }
      ],
      "declare": false,
      "start": 1657,
      "end": 1759
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Duplicates",
        "optional": false,
        "typeAnnotation": null,
        "start": 1805,
        "end": 1815
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1830,
                        "end": 1836
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 1839,
                        "end": 1845
                      }
                    ],
                    "start": 1830,
                    "end": 1845
                  },
                  "start": 1828,
                  "end": 1845
                },
                "start": 1825,
                "end": 1845
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1848,
                "end": 1851
              },
              "start": 1846,
              "end": 1851
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1824,
            "end": 1852
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1873,
                        "end": 1879
                      },
                      {
                        "type": "TSSymbolKeyword",
                        "start": 1882,
                        "end": 1888
                      }
                    ],
                    "start": 1873,
                    "end": 1888
                  },
                  "start": 1871,
                  "end": 1888
                },
                "start": 1868,
                "end": 1888
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1891,
                "end": 1894
              },
              "start": 1889,
              "end": 1894
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1867,
            "end": 1895
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSSymbolKeyword",
                        "start": 1916,
                        "end": 1922
                      },
                      {
                        "type": "TSTemplateLiteralType",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "foo",
                              "cooked": "foo"
                            },
                            "tail": false,
                            "start": 1925,
                            "end": 1931
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 1937,
                            "end": 1939
                          }
                        ],
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1931,
                            "end": 1937
                          }
                        ],
                        "start": 1925,
                        "end": 1939
                      }
                    ],
                    "start": 1916,
                    "end": 1939
                  },
                  "start": 1914,
                  "end": 1939
                },
                "start": 1911,
                "end": 1939
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1942,
                "end": 1945
              },
              "start": 1940,
              "end": 1945
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1910,
            "end": 1946
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 1967,
                        "end": 1973
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1979,
                        "end": 1981
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1973,
                        "end": 1979
                      }
                    ],
                    "start": 1967,
                    "end": 1981
                  },
                  "start": 1965,
                  "end": 1981
                },
                "start": 1962,
                "end": 1981
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1984,
                "end": 1987
              },
              "start": 1982,
              "end": 1987
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1961,
            "end": 1988
          }
        ],
        "start": 1818,
        "end": 2000
      },
      "declare": false,
      "start": 1800,
      "end": 2000
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Conflicting",
        "optional": false,
        "typeAnnotation": null,
        "start": 2048,
        "end": 2059
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false,
                        "start": 2074,
                        "end": 2078
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 2084,
                        "end": 2086
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2078,
                        "end": 2084
                      }
                    ],
                    "start": 2074,
                    "end": 2086
                  },
                  "start": 2072,
                  "end": 2086
                },
                "start": 2069,
                "end": 2086
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 2089,
                  "end": 2092
                },
                "start": 2089,
                "end": 2092
              },
              "start": 2087,
              "end": 2092
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2068,
            "end": 2093
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 2104,
                        "end": 2107
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": true,
                        "start": 2113,
                        "end": 2116
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2107,
                        "end": 2113
                      }
                    ],
                    "start": 2104,
                    "end": 2116
                  },
                  "start": 2102,
                  "end": 2116
                },
                "start": 2099,
                "end": 2116
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 2119,
                  "end": 2122
                },
                "start": 2119,
                "end": 2122
              },
              "start": 2117,
              "end": 2122
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2098,
            "end": 2123
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": false,
                        "start": 2134,
                        "end": 2138
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "a",
                          "cooked": "a"
                        },
                        "tail": true,
                        "start": 2144,
                        "end": 2147
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2138,
                        "end": 2144
                      }
                    ],
                    "start": 2134,
                    "end": 2147
                  },
                  "start": 2132,
                  "end": 2147
                },
                "start": 2129,
                "end": 2147
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "'c'",
                  "start": 2150,
                  "end": 2153
                },
                "start": 2150,
                "end": 2153
              },
              "start": 2148,
              "end": 2153
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2128,
            "end": 2154
          }
        ],
        "start": 2062,
        "end": 2166
      },
      "declare": false,
      "start": 2043,
      "end": 2166
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Invalid",
        "optional": false,
        "typeAnnotation": null,
        "start": 2202,
        "end": 2209
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
              "start": 2210,
              "end": 2211
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2220,
              "end": 2226
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2210,
            "end": 2226
          }
        ],
        "start": 2209,
        "end": 2227
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
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
                          "value": "a",
                          "raw": "'a'",
                          "start": 2242,
                          "end": 2245
                        },
                        "start": 2242,
                        "end": 2245
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "'b'",
                          "start": 2248,
                          "end": 2251
                        },
                        "start": 2248,
                        "end": 2251
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "c",
                          "raw": "'c'",
                          "start": 2254,
                          "end": 2257
                        },
                        "start": 2254,
                        "end": 2257
                      }
                    ],
                    "start": 2242,
                    "end": 2257
                  },
                  "start": 2240,
                  "end": 2257
                },
                "start": 2237,
                "end": 2257
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2260,
                "end": 2266
              },
              "start": 2258,
              "end": 2266
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2236,
            "end": 2267
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2288,
                          "end": 2289
                        },
                        "typeArguments": null,
                        "start": 2288,
                        "end": 2289
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 2292,
                        "end": 2298
                      }
                    ],
                    "start": 2288,
                    "end": 2298
                  },
                  "start": 2286,
                  "end": 2298
                },
                "start": 2283,
                "end": 2298
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2301,
                "end": 2307
              },
              "start": 2299,
              "end": 2307
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2282,
            "end": 2308
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2329,
                      "end": 2334
                    },
                    "typeArguments": null,
                    "start": 2329,
                    "end": 2334
                  },
                  "start": 2327,
                  "end": 2334
                },
                "start": 2324,
                "end": 2334
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2337,
                "end": 2343
              },
              "start": 2335,
              "end": 2343
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2323,
            "end": 2344
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2365,
                          "end": 2366
                        },
                        "typeArguments": null,
                        "start": 2365,
                        "end": 2366
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 2369,
                        "end": 2375
                      }
                    ],
                    "start": 2365,
                    "end": 2375
                  },
                  "start": 2363,
                  "end": 2375
                },
                "start": 2360,
                "end": 2375
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2378,
                "end": 2384
              },
              "start": 2376,
              "end": 2384
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2359,
            "end": 2385
          }
        ],
        "start": 2230,
        "end": 2397
      },
      "declare": false,
      "start": 2197,
      "end": 2397
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2442,
        "end": 2446
      },
      "typeParameters": null,
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
              "name": "__tag1__",
              "optional": false,
              "typeAnnotation": null,
              "start": 2451,
              "end": 2459
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2461,
                "end": 2465
              },
              "start": 2459,
              "end": 2465
            },
            "accessibility": null,
            "static": false,
            "start": 2451,
            "end": 2465
          }
        ],
        "start": 2449,
        "end": 2467
      },
      "declare": false,
      "start": 2437,
      "end": 2468
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2474,
        "end": 2478
      },
      "typeParameters": null,
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
              "name": "__tag2__",
              "optional": false,
              "typeAnnotation": null,
              "start": 2483,
              "end": 2491
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2493,
                "end": 2497
              },
              "start": 2491,
              "end": 2497
            },
            "accessibility": null,
            "static": false,
            "start": 2483,
            "end": 2497
          }
        ],
        "start": 2481,
        "end": 2499
      },
      "declare": false,
      "start": 2469,
      "end": 2500
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TaggedString1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2507,
        "end": 2520
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2523,
            "end": 2529
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tag1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2532,
              "end": 2536
            },
            "typeArguments": null,
            "start": 2532,
            "end": 2536
          }
        ],
        "start": 2523,
        "end": 2536
      },
      "declare": false,
      "start": 2502,
      "end": 2537
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TaggedString2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2543,
        "end": 2556
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2559,
            "end": 2565
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tag2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2568,
              "end": 2572
            },
            "typeArguments": null,
            "start": 2568,
            "end": 2572
          }
        ],
        "start": 2559,
        "end": 2572
      },
      "declare": false,
      "start": 2538,
      "end": 2573
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
            "name": "s0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2591,
                "end": 2597
              },
              "start": 2589,
              "end": 2597
            },
            "start": 2587,
            "end": 2597
          },
          "init": null,
          "definite": false,
          "start": 2587,
          "end": 2597
        }
      ],
      "declare": true,
      "start": 2575,
      "end": 2598
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TaggedString1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2615,
                  "end": 2628
                },
                "typeArguments": null,
                "start": 2615,
                "end": 2628
              },
              "start": 2613,
              "end": 2628
            },
            "start": 2611,
            "end": 2628
          },
          "init": null,
          "definite": false,
          "start": 2611,
          "end": 2628
        }
      ],
      "declare": true,
      "start": 2599,
      "end": 2629
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TaggedString2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2646,
                  "end": 2659
                },
                "typeArguments": null,
                "start": 2646,
                "end": 2659
              },
              "start": 2644,
              "end": 2659
            },
            "start": 2642,
            "end": 2659
          },
          "init": null,
          "definite": false,
          "start": 2642,
          "end": 2659
        }
      ],
      "declare": true,
      "start": 2630,
      "end": 2660
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
            "name": "s3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TaggedString1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2677,
                      "end": 2690
                    },
                    "typeArguments": null,
                    "start": 2677,
                    "end": 2690
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TaggedString2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2693,
                      "end": 2706
                    },
                    "typeArguments": null,
                    "start": 2693,
                    "end": 2706
                  }
                ],
                "start": 2677,
                "end": 2706
              },
              "start": 2675,
              "end": 2706
            },
            "start": 2673,
            "end": 2706
          },
          "init": null,
          "definite": false,
          "start": 2673,
          "end": 2706
        }
      ],
      "declare": true,
      "start": 2661,
      "end": 2707
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
            "name": "s4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TaggedString1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2724,
                      "end": 2737
                    },
                    "typeArguments": null,
                    "start": 2724,
                    "end": 2737
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TaggedString2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2740,
                      "end": 2753
                    },
                    "typeArguments": null,
                    "start": 2740,
                    "end": 2753
                  }
                ],
                "start": 2724,
                "end": 2753
              },
              "start": 2722,
              "end": 2753
            },
            "start": 2720,
            "end": 2753
          },
          "init": null,
          "definite": false,
          "start": 2720,
          "end": 2753
        }
      ],
      "declare": true,
      "start": 2708,
      "end": 2754
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2766,
        "end": 2768
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TaggedString1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2777,
                      "end": 2790
                    },
                    "typeArguments": null,
                    "start": 2777,
                    "end": 2790
                  },
                  "start": 2775,
                  "end": 2790
                },
                "start": 2772,
                "end": 2790
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2793,
                "end": 2799
              },
              "start": 2791,
              "end": 2799
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2771,
            "end": 2799
          }
        ],
        "start": 2769,
        "end": 2801
      },
      "declare": false,
      "start": 2756,
      "end": 2801
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2812,
        "end": 2814
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TaggedString2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2823,
                      "end": 2836
                    },
                    "typeArguments": null,
                    "start": 2823,
                    "end": 2836
                  },
                  "start": 2821,
                  "end": 2836
                },
                "start": 2818,
                "end": 2836
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2839,
                "end": 2845
              },
              "start": 2837,
              "end": 2845
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2817,
            "end": 2845
          }
        ],
        "start": 2815,
        "end": 2847
      },
      "declare": false,
      "start": 2802,
      "end": 2847
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2858,
        "end": 2860
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TaggedString1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2869,
                          "end": 2882
                        },
                        "typeArguments": null,
                        "start": 2869,
                        "end": 2882
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TaggedString2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2885,
                          "end": 2898
                        },
                        "typeArguments": null,
                        "start": 2885,
                        "end": 2898
                      }
                    ],
                    "start": 2869,
                    "end": 2898
                  },
                  "start": 2867,
                  "end": 2898
                },
                "start": 2864,
                "end": 2898
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2901,
                "end": 2907
              },
              "start": 2899,
              "end": 2907
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2863,
            "end": 2907
          }
        ],
        "start": 2861,
        "end": 2909
      },
      "declare": false,
      "start": 2848,
      "end": 2909
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2920,
        "end": 2922
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TaggedString1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2931,
                          "end": 2944
                        },
                        "typeArguments": null,
                        "start": 2931,
                        "end": 2944
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TaggedString2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2947,
                          "end": 2960
                        },
                        "typeArguments": null,
                        "start": 2947,
                        "end": 2960
                      }
                    ],
                    "start": 2931,
                    "end": 2960
                  },
                  "start": 2929,
                  "end": 2960
                },
                "start": 2926,
                "end": 2960
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2963,
                "end": 2969
              },
              "start": 2961,
              "end": 2969
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2925,
            "end": 2969
          }
        ],
        "start": 2923,
        "end": 2971
      },
      "declare": false,
      "start": 2910,
      "end": 2971
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2989,
                  "end": 2991
                },
                "typeArguments": null,
                "start": 2989,
                "end": 2991
              },
              "start": 2987,
              "end": 2991
            },
            "start": 2985,
            "end": 2991
          },
          "init": null,
          "definite": false,
          "start": 2985,
          "end": 2991
        }
      ],
      "declare": true,
      "start": 2973,
      "end": 2992
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3009,
                  "end": 3011
                },
                "typeArguments": null,
                "start": 3009,
                "end": 3011
              },
              "start": 3007,
              "end": 3011
            },
            "start": 3005,
            "end": 3011
          },
          "init": null,
          "definite": false,
          "start": 3005,
          "end": 3011
        }
      ],
      "declare": true,
      "start": 2993,
      "end": 3012
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
            "name": "i3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3029,
                  "end": 3031
                },
                "typeArguments": null,
                "start": 3029,
                "end": 3031
              },
              "start": 3027,
              "end": 3031
            },
            "start": 3025,
            "end": 3031
          },
          "init": null,
          "definite": false,
          "start": 3025,
          "end": 3031
        }
      ],
      "declare": true,
      "start": 3013,
      "end": 3032
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
            "name": "i4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3049,
                  "end": 3051
                },
                "typeArguments": null,
                "start": 3049,
                "end": 3051
              },
              "start": 3047,
              "end": 3051
            },
            "start": 3045,
            "end": 3051
          },
          "init": null,
          "definite": false,
          "start": 3045,
          "end": 3051
        }
      ],
      "declare": true,
      "start": 3033,
      "end": 3052
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3054,
          "end": 3056
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3057,
          "end": 3059
        },
        "optional": false,
        "computed": true,
        "start": 3054,
        "end": 3060
      },
      "directive": null,
      "start": 3054,
      "end": 3061
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3072,
          "end": 3074
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3075,
          "end": 3077
        },
        "optional": false,
        "computed": true,
        "start": 3072,
        "end": 3078
      },
      "directive": null,
      "start": 3072,
      "end": 3079
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3080,
          "end": 3082
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3083,
          "end": 3085
        },
        "optional": false,
        "computed": true,
        "start": 3080,
        "end": 3086
      },
      "directive": null,
      "start": 3080,
      "end": 3087
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3098,
          "end": 3100
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3101,
          "end": 3103
        },
        "optional": false,
        "computed": true,
        "start": 3098,
        "end": 3104
      },
      "directive": null,
      "start": 3098,
      "end": 3105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3116,
          "end": 3118
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3119,
          "end": 3121
        },
        "optional": false,
        "computed": true,
        "start": 3116,
        "end": 3122
      },
      "directive": null,
      "start": 3116,
      "end": 3123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3125,
          "end": 3127
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3128,
          "end": 3130
        },
        "optional": false,
        "computed": true,
        "start": 3125,
        "end": 3131
      },
      "directive": null,
      "start": 3125,
      "end": 3132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3143,
          "end": 3145
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3146,
          "end": 3148
        },
        "optional": false,
        "computed": true,
        "start": 3143,
        "end": 3149
      },
      "directive": null,
      "start": 3143,
      "end": 3150
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3161,
          "end": 3163
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3164,
          "end": 3166
        },
        "optional": false,
        "computed": true,
        "start": 3161,
        "end": 3167
      },
      "directive": null,
      "start": 3161,
      "end": 3168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3169,
          "end": 3171
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3172,
          "end": 3174
        },
        "optional": false,
        "computed": true,
        "start": 3169,
        "end": 3175
      },
      "directive": null,
      "start": 3169,
      "end": 3176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3187,
          "end": 3189
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3190,
          "end": 3192
        },
        "optional": false,
        "computed": true,
        "start": 3187,
        "end": 3193
      },
      "directive": null,
      "start": 3187,
      "end": 3194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3196,
          "end": 3198
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3199,
          "end": 3201
        },
        "optional": false,
        "computed": true,
        "start": 3196,
        "end": 3202
      },
      "directive": null,
      "start": 3196,
      "end": 3203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3214,
          "end": 3216
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3217,
          "end": 3219
        },
        "optional": false,
        "computed": true,
        "start": 3214,
        "end": 3220
      },
      "directive": null,
      "start": 3214,
      "end": 3221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3222,
          "end": 3224
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3225,
          "end": 3227
        },
        "optional": false,
        "computed": true,
        "start": 3222,
        "end": 3228
      },
      "directive": null,
      "start": 3222,
      "end": 3229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3230,
          "end": 3232
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3233,
          "end": 3235
        },
        "optional": false,
        "computed": true,
        "start": 3230,
        "end": 3236
      },
      "directive": null,
      "start": 3230,
      "end": 3237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3238,
          "end": 3240
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3241,
          "end": 3243
        },
        "optional": false,
        "computed": true,
        "start": 3238,
        "end": 3244
      },
      "directive": null,
      "start": 3238,
      "end": 3245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3247,
          "end": 3249
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3250,
          "end": 3252
        },
        "optional": false,
        "computed": true,
        "start": 3247,
        "end": 3253
      },
      "directive": null,
      "start": 3247,
      "end": 3254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3265,
          "end": 3267
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3268,
          "end": 3270
        },
        "optional": false,
        "computed": true,
        "start": 3265,
        "end": 3271
      },
      "directive": null,
      "start": 3265,
      "end": 3272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3283,
          "end": 3285
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3286,
          "end": 3288
        },
        "optional": false,
        "computed": true,
        "start": 3283,
        "end": 3289
      },
      "directive": null,
      "start": 3283,
      "end": 3290
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3301,
          "end": 3303
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3304,
          "end": 3306
        },
        "optional": false,
        "computed": true,
        "start": 3301,
        "end": 3307
      },
      "directive": null,
      "start": 3301,
      "end": 3308
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3319,
          "end": 3321
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3322,
          "end": 3324
        },
        "optional": false,
        "computed": true,
        "start": 3319,
        "end": 3325
      },
      "directive": null,
      "start": 3319,
      "end": 3326
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3328,
          "end": 3330
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3333,
          "end": 3335
        },
        "start": 3328,
        "end": 3335
      },
      "directive": null,
      "start": 3328,
      "end": 3336
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3347,
          "end": 3349
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3352,
          "end": 3354
        },
        "start": 3347,
        "end": 3354
      },
      "directive": null,
      "start": 3347,
      "end": 3355
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3356,
          "end": 3358
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3361,
          "end": 3363
        },
        "start": 3356,
        "end": 3363
      },
      "directive": null,
      "start": 3356,
      "end": 3364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3376,
          "end": 3378
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3381,
          "end": 3383
        },
        "start": 3376,
        "end": 3383
      },
      "directive": null,
      "start": 3376,
      "end": 3384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3395,
          "end": 3397
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3400,
          "end": 3402
        },
        "start": 3395,
        "end": 3402
      },
      "directive": null,
      "start": 3395,
      "end": 3403
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3404,
          "end": 3406
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3409,
          "end": 3411
        },
        "start": 3404,
        "end": 3411
      },
      "directive": null,
      "start": 3404,
      "end": 3412
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3424,
          "end": 3426
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3429,
          "end": 3431
        },
        "start": 3424,
        "end": 3431
      },
      "directive": null,
      "start": 3424,
      "end": 3432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3443,
          "end": 3445
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3448,
          "end": 3450
        },
        "start": 3443,
        "end": 3450
      },
      "directive": null,
      "start": 3443,
      "end": 3451
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3462,
          "end": 3464
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3467,
          "end": 3469
        },
        "start": 3462,
        "end": 3469
      },
      "directive": null,
      "start": 3462,
      "end": 3470
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3482,
          "end": 3484
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3487,
          "end": 3489
        },
        "start": 3482,
        "end": 3489
      },
      "directive": null,
      "start": 3482,
      "end": 3490
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3491,
          "end": 3493
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3496,
          "end": 3498
        },
        "start": 3491,
        "end": 3498
      },
      "directive": null,
      "start": 3491,
      "end": 3499
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3500,
          "end": 3502
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3505,
          "end": 3507
        },
        "start": 3500,
        "end": 3507
      },
      "directive": null,
      "start": 3500,
      "end": 3508
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TaggedString1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3534,
                              "end": 3547
                            },
                            "typeArguments": null,
                            "start": 3534,
                            "end": 3547
                          },
                          "start": 3532,
                          "end": 3547
                        },
                        "start": 3529,
                        "end": 3547
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3550,
                        "end": 3556
                      },
                      "start": 3548,
                      "end": 3556
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 3528,
                    "end": 3556
                  }
                ],
                "start": 3526,
                "end": 3558
              },
              "start": 3524,
              "end": 3558
            },
            "start": 3522,
            "end": 3558
          },
          "init": null,
          "definite": false,
          "start": 3522,
          "end": 3558
        }
      ],
      "declare": true,
      "start": 3510,
      "end": 3559
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TaggedString2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3584,
                              "end": 3597
                            },
                            "typeArguments": null,
                            "start": 3584,
                            "end": 3597
                          },
                          "start": 3582,
                          "end": 3597
                        },
                        "start": 3579,
                        "end": 3597
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3600,
                        "end": 3606
                      },
                      "start": 3598,
                      "end": 3606
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 3578,
                    "end": 3606
                  }
                ],
                "start": 3576,
                "end": 3608
              },
              "start": 3574,
              "end": 3608
            },
            "start": 3572,
            "end": 3608
          },
          "init": null,
          "definite": false,
          "start": 3572,
          "end": 3608
        }
      ],
      "declare": true,
      "start": 3560,
      "end": 3609
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TaggedString1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3634,
                                  "end": 3647
                                },
                                "typeArguments": null,
                                "start": 3634,
                                "end": 3647
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TaggedString2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3650,
                                  "end": 3663
                                },
                                "typeArguments": null,
                                "start": 3650,
                                "end": 3663
                              }
                            ],
                            "start": 3634,
                            "end": 3663
                          },
                          "start": 3632,
                          "end": 3663
                        },
                        "start": 3629,
                        "end": 3663
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3666,
                        "end": 3672
                      },
                      "start": 3664,
                      "end": 3672
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 3628,
                    "end": 3672
                  }
                ],
                "start": 3626,
                "end": 3674
              },
              "start": 3624,
              "end": 3674
            },
            "start": 3622,
            "end": 3674
          },
          "init": null,
          "definite": false,
          "start": 3622,
          "end": 3674
        }
      ],
      "declare": true,
      "start": 3610,
      "end": 3675
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TaggedString1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3700,
                                  "end": 3713
                                },
                                "typeArguments": null,
                                "start": 3700,
                                "end": 3713
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TaggedString2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3716,
                                  "end": 3729
                                },
                                "typeArguments": null,
                                "start": 3716,
                                "end": 3729
                              }
                            ],
                            "start": 3700,
                            "end": 3729
                          },
                          "start": 3698,
                          "end": 3729
                        },
                        "start": 3695,
                        "end": 3729
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3732,
                        "end": 3738
                      },
                      "start": 3730,
                      "end": 3738
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 3694,
                    "end": 3738
                  }
                ],
                "start": 3692,
                "end": 3740
              },
              "start": 3690,
              "end": 3740
            },
            "start": 3688,
            "end": 3740
          },
          "init": null,
          "definite": false,
          "start": 3688,
          "end": 3740
        }
      ],
      "declare": true,
      "start": 3676,
      "end": 3741
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3743,
          "end": 3745
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3746,
          "end": 3748
        },
        "optional": false,
        "computed": true,
        "start": 3743,
        "end": 3749
      },
      "directive": null,
      "start": 3743,
      "end": 3750
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3761,
          "end": 3763
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3764,
          "end": 3766
        },
        "optional": false,
        "computed": true,
        "start": 3761,
        "end": 3767
      },
      "directive": null,
      "start": 3761,
      "end": 3768
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3769,
          "end": 3771
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3772,
          "end": 3774
        },
        "optional": false,
        "computed": true,
        "start": 3769,
        "end": 3775
      },
      "directive": null,
      "start": 3769,
      "end": 3776
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3787,
          "end": 3789
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3790,
          "end": 3792
        },
        "optional": false,
        "computed": true,
        "start": 3787,
        "end": 3793
      },
      "directive": null,
      "start": 3787,
      "end": 3794
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3805,
          "end": 3807
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3808,
          "end": 3810
        },
        "optional": false,
        "computed": true,
        "start": 3805,
        "end": 3811
      },
      "directive": null,
      "start": 3805,
      "end": 3812
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3814,
          "end": 3816
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3817,
          "end": 3819
        },
        "optional": false,
        "computed": true,
        "start": 3814,
        "end": 3820
      },
      "directive": null,
      "start": 3814,
      "end": 3821
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3832,
          "end": 3834
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3835,
          "end": 3837
        },
        "optional": false,
        "computed": true,
        "start": 3832,
        "end": 3838
      },
      "directive": null,
      "start": 3832,
      "end": 3839
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3850,
          "end": 3852
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3853,
          "end": 3855
        },
        "optional": false,
        "computed": true,
        "start": 3850,
        "end": 3856
      },
      "directive": null,
      "start": 3850,
      "end": 3857
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3858,
          "end": 3860
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3861,
          "end": 3863
        },
        "optional": false,
        "computed": true,
        "start": 3858,
        "end": 3864
      },
      "directive": null,
      "start": 3858,
      "end": 3865
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3876,
          "end": 3878
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3879,
          "end": 3881
        },
        "optional": false,
        "computed": true,
        "start": 3876,
        "end": 3882
      },
      "directive": null,
      "start": 3876,
      "end": 3883
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3885,
          "end": 3887
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3888,
          "end": 3890
        },
        "optional": false,
        "computed": true,
        "start": 3885,
        "end": 3891
      },
      "directive": null,
      "start": 3885,
      "end": 3892
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3903,
          "end": 3905
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3906,
          "end": 3908
        },
        "optional": false,
        "computed": true,
        "start": 3903,
        "end": 3909
      },
      "directive": null,
      "start": 3903,
      "end": 3910
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3911,
          "end": 3913
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3914,
          "end": 3916
        },
        "optional": false,
        "computed": true,
        "start": 3911,
        "end": 3917
      },
      "directive": null,
      "start": 3911,
      "end": 3918
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3919,
          "end": 3921
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3922,
          "end": 3924
        },
        "optional": false,
        "computed": true,
        "start": 3919,
        "end": 3925
      },
      "directive": null,
      "start": 3919,
      "end": 3926
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3927,
          "end": 3929
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3930,
          "end": 3932
        },
        "optional": false,
        "computed": true,
        "start": 3927,
        "end": 3933
      },
      "directive": null,
      "start": 3927,
      "end": 3934
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3936,
          "end": 3938
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s0",
          "optional": false,
          "typeAnnotation": null,
          "start": 3939,
          "end": 3941
        },
        "optional": false,
        "computed": true,
        "start": 3936,
        "end": 3942
      },
      "directive": null,
      "start": 3936,
      "end": 3943
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3954,
          "end": 3956
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 3957,
          "end": 3959
        },
        "optional": false,
        "computed": true,
        "start": 3954,
        "end": 3960
      },
      "directive": null,
      "start": 3954,
      "end": 3961
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3972,
          "end": 3974
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3975,
          "end": 3977
        },
        "optional": false,
        "computed": true,
        "start": 3972,
        "end": 3978
      },
      "directive": null,
      "start": 3972,
      "end": 3979
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 3990,
          "end": 3992
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3993,
          "end": 3995
        },
        "optional": false,
        "computed": true,
        "start": 3990,
        "end": 3996
      },
      "directive": null,
      "start": 3990,
      "end": 3997
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4008,
          "end": 4010
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "s4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4011,
          "end": 4013
        },
        "optional": false,
        "computed": true,
        "start": 4008,
        "end": 4014
      },
      "directive": null,
      "start": 4008,
      "end": 4015
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4017,
          "end": 4019
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4022,
          "end": 4024
        },
        "start": 4017,
        "end": 4024
      },
      "directive": null,
      "start": 4017,
      "end": 4025
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4026,
          "end": 4028
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4031,
          "end": 4033
        },
        "start": 4026,
        "end": 4033
      },
      "directive": null,
      "start": 4026,
      "end": 4034
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4035,
          "end": 4037
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4040,
          "end": 4042
        },
        "start": 4035,
        "end": 4042
      },
      "directive": null,
      "start": 4035,
      "end": 4043
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4045,
          "end": 4047
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4050,
          "end": 4052
        },
        "start": 4045,
        "end": 4052
      },
      "directive": null,
      "start": 4045,
      "end": 4053
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4054,
          "end": 4056
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4059,
          "end": 4061
        },
        "start": 4054,
        "end": 4061
      },
      "directive": null,
      "start": 4054,
      "end": 4062
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4063,
          "end": 4065
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4068,
          "end": 4070
        },
        "start": 4063,
        "end": 4070
      },
      "directive": null,
      "start": 4063,
      "end": 4071
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4073,
          "end": 4075
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4078,
          "end": 4080
        },
        "start": 4073,
        "end": 4080
      },
      "directive": null,
      "start": 4073,
      "end": 4081
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4082,
          "end": 4084
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4087,
          "end": 4089
        },
        "start": 4082,
        "end": 4089
      },
      "directive": null,
      "start": 4082,
      "end": 4090
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4091,
          "end": 4093
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4096,
          "end": 4098
        },
        "start": 4091,
        "end": 4098
      },
      "directive": null,
      "start": 4091,
      "end": 4099
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4101,
          "end": 4103
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4106,
          "end": 4108
        },
        "start": 4101,
        "end": 4108
      },
      "directive": null,
      "start": 4101,
      "end": 4109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4110,
          "end": 4112
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4115,
          "end": 4117
        },
        "start": 4110,
        "end": 4117
      },
      "directive": null,
      "start": 4110,
      "end": 4118
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "o4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4119,
          "end": 4121
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4124,
          "end": 4126
        },
        "start": 4119,
        "end": 4126
      },
      "directive": null,
      "start": 4119,
      "end": 4127
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
            "name": "obj10",
            "optional": false,
            "typeAnnotation": null,
            "start": 4194,
            "end": 4199
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 4209,
                  "end": 4212
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 4215,
                    "end": 4216
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4220,
                      "end": 4225
                    },
                    "typeArguments": null,
                    "start": 4220,
                    "end": 4225
                  },
                  "start": 4215,
                  "end": 4225
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4208,
                "end": 4225
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 4232,
                    "end": 4235
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 4238,
                    "end": 4241
                  },
                  "start": 4232,
                  "end": 4241
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4244,
                    "end": 4245
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4249,
                      "end": 4254
                    },
                    "typeArguments": null,
                    "start": 4249,
                    "end": 4254
                  },
                  "start": 4244,
                  "end": 4254
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4231,
                "end": 4254
              }
            ],
            "start": 4202,
            "end": 4257
          },
          "definite": false,
          "start": 4194,
          "end": 4257
        }
      ],
      "declare": false,
      "start": 4188,
      "end": 4258
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
            "name": "obj11",
            "optional": false,
            "typeAnnotation": null,
            "start": 4266,
            "end": 4271
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4281,
                  "end": 4282
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 4285,
                    "end": 4286
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4290,
                      "end": 4295
                    },
                    "typeArguments": null,
                    "start": 4290,
                    "end": 4295
                  },
                  "start": 4285,
                  "end": 4295
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4280,
                "end": 4295
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4302,
                    "end": 4303
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 4306,
                    "end": 4307
                  },
                  "start": 4302,
                  "end": 4307
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 4310,
                    "end": 4311
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4315,
                      "end": 4320
                    },
                    "typeArguments": null,
                    "start": 4315,
                    "end": 4320
                  },
                  "start": 4310,
                  "end": 4320
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4301,
                "end": 4320
              }
            ],
            "start": 4274,
            "end": 4323
          },
          "definite": false,
          "start": 4266,
          "end": 4323
        }
      ],
      "declare": false,
      "start": 4260,
      "end": 4324
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
            "name": "obj12",
            "optional": false,
            "typeAnnotation": null,
            "start": 4332,
            "end": 4337
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
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4347,
                  "end": 4350
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 4353,
                    "end": 4354
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4358,
                      "end": 4363
                    },
                    "typeArguments": null,
                    "start": 4358,
                    "end": 4363
                  },
                  "start": 4353,
                  "end": 4363
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4346,
                "end": 4363
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4370,
                    "end": 4376
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4370,
                  "end": 4378
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 4381,
                    "end": 4382
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4386,
                      "end": 4391
                    },
                    "typeArguments": null,
                    "start": 4386,
                    "end": 4391
                  },
                  "start": 4381,
                  "end": 4391
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4369,
                "end": 4391
              }
            ],
            "start": 4340,
            "end": 4394
          },
          "definite": false,
          "start": 4332,
          "end": 4394
        }
      ],
      "declare": false,
      "start": 4326,
      "end": 4395
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
            "name": "obj13",
            "optional": false,
            "typeAnnotation": null,
            "start": 4403,
            "end": 4408
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "'x'",
                  "start": 4418,
                  "end": 4421
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 4424,
                    "end": 4425
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4429,
                      "end": 4434
                    },
                    "typeArguments": null,
                    "start": 4429,
                    "end": 4434
                  },
                  "start": 4424,
                  "end": 4434
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4417,
                "end": 4434
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 4441,
                    "end": 4444
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 4447,
                    "end": 4450
                  },
                  "start": 4441,
                  "end": 4450
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4453,
                    "end": 4454
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4458,
                      "end": 4463
                    },
                    "typeArguments": null,
                    "start": 4458,
                    "end": 4463
                  },
                  "start": 4453,
                  "end": 4463
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4440,
                "end": 4463
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4470,
                  "end": 4471
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 4474,
                    "end": 4475
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4479,
                      "end": 4484
                    },
                    "typeArguments": null,
                    "start": 4479,
                    "end": 4484
                  },
                  "start": 4474,
                  "end": 4484
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4469,
                "end": 4484
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4491,
                    "end": 4492
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 4495,
                    "end": 4496
                  },
                  "start": 4491,
                  "end": 4496
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 4499,
                    "end": 4500
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4504,
                      "end": 4509
                    },
                    "typeArguments": null,
                    "start": 4504,
                    "end": 4509
                  },
                  "start": 4499,
                  "end": 4509
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4490,
                "end": 4509
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4516,
                  "end": 4519
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 4522,
                    "end": 4523
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4527,
                      "end": 4532
                    },
                    "typeArguments": null,
                    "start": 4527,
                    "end": 4532
                  },
                  "start": 4522,
                  "end": 4532
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4515,
                "end": 4532
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4539,
                    "end": 4545
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4539,
                  "end": 4547
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 4550,
                    "end": 4551
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4555,
                      "end": 4560
                    },
                    "typeArguments": null,
                    "start": 4555,
                    "end": 4560
                  },
                  "start": 4550,
                  "end": 4560
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4538,
                "end": 4560
              }
            ],
            "start": 4411,
            "end": 4563
          },
          "definite": false,
          "start": 4403,
          "end": 4563
        }
      ],
      "declare": false,
      "start": 4397,
      "end": 4564
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
            "name": "system",
            "optional": false,
            "typeAnnotation": null,
            "start": 4594,
            "end": 4600
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 4603,
              "end": 4609
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "system",
                "raw": "'system'",
                "start": 4610,
                "end": 4618
              }
            ],
            "optional": false,
            "start": 4603,
            "end": 4619
          },
          "definite": false,
          "start": 4594,
          "end": 4619
        }
      ],
      "declare": false,
      "start": 4588,
      "end": 4620
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
            "name": "SomeSytePlugin",
            "optional": false,
            "typeAnnotation": null,
            "start": 4627,
            "end": 4641
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 4644,
              "end": 4650
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "SomeSytePlugin",
                "raw": "'SomeSytePlugin'",
                "start": 4651,
                "end": 4667
              }
            ],
            "optional": false,
            "start": 4644,
            "end": 4668
          },
          "definite": false,
          "start": 4627,
          "end": 4668
        }
      ],
      "declare": false,
      "start": 4621,
      "end": 4669
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Plugs",
        "optional": false,
        "typeAnnotation": null,
        "start": 4681,
        "end": 4686
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 4699,
                    "end": 4705
                  },
                  "start": 4697,
                  "end": 4705
                },
                "start": 4694,
                "end": 4705
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4712,
                      "end": 4716
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 4718,
                        "end": 4721
                      },
                      "start": 4716,
                      "end": 4721
                    },
                    "value": null,
                    "start": 4709,
                    "end": 4721
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 4726,
                    "end": 4733
                  },
                  "start": 4723,
                  "end": 4733
                },
                "start": 4708,
                "end": 4733
              },
              "start": 4706,
              "end": 4733
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 4693,
            "end": 4734
          }
        ],
        "start": 4687,
        "end": 4736
      },
      "declare": false,
      "start": 4671,
      "end": 4736
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
            "name": "plugins",
            "optional": false,
            "typeAnnotation": null,
            "start": 4744,
            "end": 4751
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "user",
                  "raw": "\"user\"",
                  "start": 4760,
                  "end": 4766
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 4768,
                    "end": 4770
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Plugs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4774,
                      "end": 4779
                    },
                    "typeArguments": null,
                    "start": 4774,
                    "end": 4779
                  },
                  "start": 4768,
                  "end": 4779
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4760,
                "end": 4779
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "system",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4786,
                  "end": 4792
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 4795,
                    "end": 4797
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Plugs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4801,
                      "end": 4806
                    },
                    "typeArguments": null,
                    "start": 4801,
                    "end": 4806
                  },
                  "start": 4795,
                  "end": 4806
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 4785,
                "end": 4806
              }
            ],
            "start": 4754,
            "end": 4808
          },
          "definite": false,
          "start": 4744,
          "end": 4808
        }
      ],
      "declare": false,
      "start": 4738,
      "end": 4809
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "plugins",
              "optional": false,
              "typeAnnotation": null,
              "start": 4811,
              "end": 4818
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "system",
              "optional": false,
              "typeAnnotation": null,
              "start": 4819,
              "end": 4825
            },
            "optional": false,
            "computed": true,
            "start": 4811,
            "end": 4826
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeSytePlugin",
            "optional": false,
            "typeAnnotation": null,
            "start": 4827,
            "end": 4841
          },
          "optional": false,
          "computed": true,
          "start": 4811,
          "end": 4842
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "console",
                "optional": false,
                "typeAnnotation": null,
                "start": 4851,
                "end": 4858
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "log",
                "optional": false,
                "typeAnnotation": null,
                "start": 4859,
                "end": 4862
              },
              "optional": false,
              "computed": false,
              "start": 4851,
              "end": 4862
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "awsome",
                "raw": "'awsome'",
                "start": 4863,
                "end": 4871
              }
            ],
            "optional": false,
            "start": 4851,
            "end": 4872
          },
          "id": null,
          "generator": false,
          "start": 4845,
          "end": 4872
        },
        "start": 4811,
        "end": 4872
      },
      "directive": null,
      "start": 4811,
      "end": 4873
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "plugins",
              "optional": false,
              "typeAnnotation": null,
              "start": 4874,
              "end": 4881
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "system",
              "optional": false,
              "typeAnnotation": null,
              "start": 4882,
              "end": 4888
            },
            "optional": false,
            "computed": true,
            "start": 4874,
            "end": 4889
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeSytePlugin",
            "optional": false,
            "typeAnnotation": null,
            "start": 4890,
            "end": 4904
          },
          "optional": false,
          "computed": true,
          "start": 4874,
          "end": 4905
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 4874,
        "end": 4907
      },
      "directive": null,
      "start": 4874,
      "end": 4908
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
            "name": "theAnswer",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 4925,
                "end": 4931
              },
              "start": 4923,
              "end": 4931
            },
            "start": 4914,
            "end": 4931
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 4934,
              "end": 4940
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "secret",
                "raw": "'secret'",
                "start": 4941,
                "end": 4949
              }
            ],
            "optional": false,
            "start": 4934,
            "end": 4950
          },
          "definite": false,
          "start": 4914,
          "end": 4950
        }
      ],
      "declare": false,
      "start": 4910,
      "end": 4951
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 4956,
            "end": 4959
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 4962,
              "end": 4964
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 4968,
                "end": 4974
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSSymbolKeyword",
                    "start": 4975,
                    "end": 4981
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 4983,
                    "end": 4989
                  }
                ],
                "start": 4974,
                "end": 4990
              },
              "start": 4968,
              "end": 4990
            },
            "start": 4962,
            "end": 4990
          },
          "definite": false,
          "start": 4956,
          "end": 4990
        }
      ],
      "declare": false,
      "start": 4952,
      "end": 4991
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 4992,
            "end": 4995
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "theAnswer",
            "optional": false,
            "typeAnnotation": null,
            "start": 4996,
            "end": 5005
          },
          "optional": false,
          "computed": true,
          "start": 4992,
          "end": 5006
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 5009,
          "end": 5011
        },
        "start": 4992,
        "end": 5011
      },
      "directive": null,
      "start": 4992,
      "end": 5012
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
            "name": "directive",
            "optional": false,
            "typeAnnotation": null,
            "start": 5042,
            "end": 5051
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 5054,
              "end": 5060
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "directive",
                "raw": "'directive'",
                "start": 5061,
                "end": 5072
              }
            ],
            "optional": false,
            "start": 5054,
            "end": 5073
          },
          "definite": false,
          "start": 5042,
          "end": 5073
        }
      ],
      "declare": false,
      "start": 5036,
      "end": 5074
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5092,
        "end": 5095
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
              "name": "TArg",
              "optional": false,
              "typeAnnotation": null,
              "start": 5096,
              "end": 5100
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5096,
            "end": 5100
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TRet",
              "optional": false,
              "typeAnnotation": null,
              "start": 5102,
              "end": 5106
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5102,
            "end": 5106
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDir",
              "optional": false,
              "typeAnnotation": null,
              "start": 5108,
              "end": 5112
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5108,
            "end": 5112
          }
        ],
        "start": 5095,
        "end": 5113
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5126,
                    "end": 5127
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 5131,
                    "end": 5137
                  },
                  "nameType": null,
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
                              "name": "TArg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5146,
                              "end": 5150
                            },
                            "typeArguments": null,
                            "start": 5146,
                            "end": 5150
                          },
                          "start": 5144,
                          "end": 5150
                        },
                        "start": 5141,
                        "end": 5150
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TRet",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5155,
                          "end": 5159
                        },
                        "typeArguments": null,
                        "start": 5155,
                        "end": 5159
                      },
                      "start": 5152,
                      "end": 5159
                    },
                    "start": 5140,
                    "end": 5159
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 5123,
                  "end": 5161
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "directive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5167,
                        "end": 5176
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TDir",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5180,
                            "end": 5184
                          },
                          "typeArguments": null,
                          "start": 5180,
                          "end": 5184
                        },
                        "start": 5178,
                        "end": 5184
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5166,
                      "end": 5184
                    }
                  ],
                  "start": 5164,
                  "end": 5186
                }
              ],
              "start": 5123,
              "end": 5186
            },
            "start": 5121,
            "end": 5186
          },
          "start": 5114,
          "end": 5186
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5189,
          "end": 5193
        },
        "start": 5187,
        "end": 5193
      },
      "body": null,
      "expression": false,
      "start": 5075,
      "end": 5194
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
            "name": "case1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5200,
            "end": 5205
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 5208,
              "end": 5211
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
                      "name": "directive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5219,
                      "end": 5228
                    },
                    "value": {
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
                              "start": 5235,
                              "end": 5241
                            },
                            "start": 5233,
                            "end": 5241
                          },
                          "start": 5232,
                          "end": 5241
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "str",
                        "raw": "'str'",
                        "start": 5246,
                        "end": 5251
                      },
                      "id": null,
                      "generator": false,
                      "start": 5231,
                      "end": 5251
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 5218,
                    "end": 5251
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addOne",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5257,
                      "end": 5263
                    },
                    "value": {
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
                              "type": "TSNumberKeyword",
                              "start": 5269,
                              "end": 5275
                            },
                            "start": 5267,
                            "end": 5275
                          },
                          "start": 5266,
                          "end": 5275
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5280,
                          "end": 5281
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 5284,
                          "end": 5285
                        },
                        "start": 5280,
                        "end": 5285
                      },
                      "id": null,
                      "generator": false,
                      "start": 5265,
                      "end": 5285
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5257,
                    "end": 5285
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "double",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5291,
                      "end": 5297
                    },
                    "value": {
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
                              "type": "TSNumberKeyword",
                              "start": 5303,
                              "end": 5309
                            },
                            "start": 5301,
                            "end": 5309
                          },
                          "start": 5300,
                          "end": 5309
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5314,
                          "end": 5315
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5318,
                          "end": 5319
                        },
                        "start": 5314,
                        "end": 5319
                      },
                      "id": null,
                      "generator": false,
                      "start": 5299,
                      "end": 5319
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5291,
                    "end": 5319
                  }
                ],
                "start": 5212,
                "end": 5322
              }
            ],
            "optional": false,
            "start": 5208,
            "end": 5323
          },
          "definite": false,
          "start": 5200,
          "end": 5323
        }
      ],
      "declare": false,
      "start": 5196,
      "end": 5324
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
            "name": "case2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5330,
            "end": 5335
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 5338,
              "end": 5341
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
                      "name": "addOne",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5348,
                      "end": 5354
                    },
                    "value": {
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
                              "type": "TSNumberKeyword",
                              "start": 5360,
                              "end": 5366
                            },
                            "start": 5358,
                            "end": 5366
                          },
                          "start": 5357,
                          "end": 5366
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5371,
                          "end": 5372
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 5375,
                          "end": 5376
                        },
                        "start": 5371,
                        "end": 5376
                      },
                      "id": null,
                      "generator": false,
                      "start": 5356,
                      "end": 5376
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5348,
                    "end": 5376
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "double",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5382,
                      "end": 5388
                    },
                    "value": {
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
                              "type": "TSNumberKeyword",
                              "start": 5394,
                              "end": 5400
                            },
                            "start": 5392,
                            "end": 5400
                          },
                          "start": 5391,
                          "end": 5400
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5405,
                          "end": 5406
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5409,
                          "end": 5410
                        },
                        "start": 5405,
                        "end": 5410
                      },
                      "id": null,
                      "generator": false,
                      "start": 5390,
                      "end": 5410
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5382,
                    "end": 5410
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "directive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5417,
                      "end": 5426
                    },
                    "value": {
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
                              "start": 5433,
                              "end": 5439
                            },
                            "start": 5431,
                            "end": 5439
                          },
                          "start": 5430,
                          "end": 5439
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "str",
                        "raw": "'str'",
                        "start": 5444,
                        "end": 5449
                      },
                      "id": null,
                      "generator": false,
                      "start": 5429,
                      "end": 5449
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 5416,
                    "end": 5449
                  }
                ],
                "start": 5342,
                "end": 5452
              }
            ],
            "optional": false,
            "start": 5338,
            "end": 5453
          },
          "definite": false,
          "start": 5330,
          "end": 5453
        }
      ],
      "declare": false,
      "start": 5326,
      "end": 5454
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
            "name": "case3",
            "optional": false,
            "typeAnnotation": null,
            "start": 5460,
            "end": 5465
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 5468,
              "end": 5471
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
                      "name": "directive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5479,
                      "end": 5488
                    },
                    "value": {
                      "type": "Literal",
                      "value": "str",
                      "raw": "'str'",
                      "start": 5491,
                      "end": 5496
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 5478,
                    "end": 5496
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addOne",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5502,
                      "end": 5508
                    },
                    "value": {
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
                              "type": "TSNumberKeyword",
                              "start": 5514,
                              "end": 5520
                            },
                            "start": 5512,
                            "end": 5520
                          },
                          "start": 5511,
                          "end": 5520
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5525,
                          "end": 5526
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 5529,
                          "end": 5530
                        },
                        "start": 5525,
                        "end": 5530
                      },
                      "id": null,
                      "generator": false,
                      "start": 5510,
                      "end": 5530
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5502,
                    "end": 5530
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "double",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5536,
                      "end": 5542
                    },
                    "value": {
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
                              "type": "TSNumberKeyword",
                              "start": 5548,
                              "end": 5554
                            },
                            "start": 5546,
                            "end": 5554
                          },
                          "start": 5545,
                          "end": 5554
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5559,
                          "end": 5560
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5563,
                          "end": 5564
                        },
                        "start": 5559,
                        "end": 5564
                      },
                      "id": null,
                      "generator": false,
                      "start": 5544,
                      "end": 5564
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5536,
                    "end": 5564
                  }
                ],
                "start": 5472,
                "end": 5567
              }
            ],
            "optional": false,
            "start": 5468,
            "end": 5568
          },
          "definite": false,
          "start": 5460,
          "end": 5568
        }
      ],
      "declare": false,
      "start": 5456,
      "end": 5569
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pseudo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5599,
        "end": 5605
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "&:",
              "cooked": "&:"
            },
            "tail": false,
            "start": 5608,
            "end": 5613
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 5619,
            "end": 5621
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 5613,
            "end": 5619
          }
        ],
        "start": 5608,
        "end": 5621
      },
      "declare": false,
      "start": 5594,
      "end": 5622
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
            "name": "AmIPseudo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pseudo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5642,
                  "end": 5648
                },
                "typeArguments": null,
                "start": 5642,
                "end": 5648
              },
              "start": 5640,
              "end": 5648
            },
            "start": 5630,
            "end": 5648
          },
          "init": {
            "type": "Literal",
            "value": "&:test",
            "raw": "'&:test'",
            "start": 5651,
            "end": 5659
          },
          "definite": false,
          "start": 5630,
          "end": 5659
        }
      ],
      "declare": false,
      "start": 5624,
      "end": 5660
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
            "name": "AmIPseudo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pseudo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5678,
                  "end": 5684
                },
                "typeArguments": null,
                "start": 5678,
                "end": 5684
              },
              "start": 5676,
              "end": 5684
            },
            "start": 5667,
            "end": 5684
          },
          "init": {
            "type": "Literal",
            "value": "&",
            "raw": "'&'",
            "start": 5687,
            "end": 5690
          },
          "definite": false,
          "start": 5667,
          "end": 5690
        }
      ],
      "declare": false,
      "start": 5661,
      "end": 5691
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PseudoDeclaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 5708,
        "end": 5725
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 5731,
          "end": 5734
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pseudo",
            "optional": false,
            "typeAnnotation": null,
            "start": 5738,
            "end": 5744
          },
          "typeArguments": null,
          "start": 5738,
          "end": 5744
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 5747,
          "end": 5753
        },
        "optional": false,
        "readonly": null,
        "start": 5728,
        "end": 5755
      },
      "declare": false,
      "start": 5703,
      "end": 5756
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PseudoDeclaration",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5770,
                  "end": 5787
                },
                "typeArguments": null,
                "start": 5770,
                "end": 5787
              },
              "start": 5768,
              "end": 5787
            },
            "start": 5764,
            "end": 5787
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "someKey",
                  "raw": "'someKey'",
                  "start": 5792,
                  "end": 5801
                },
                "value": {
                  "type": "Literal",
                  "value": "someValue",
                  "raw": "'someValue'",
                  "start": 5804,
                  "end": 5815
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5792,
                "end": 5815
              }
            ],
            "start": 5790,
            "end": 5817
          },
          "definite": false,
          "start": 5764,
          "end": 5817
        }
      ],
      "declare": false,
      "start": 5758,
      "end": 5818
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FieldPattern",
        "optional": false,
        "typeAnnotation": null,
        "start": 5835,
        "end": 5847
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "/",
              "cooked": "/"
            },
            "tail": false,
            "start": 5850,
            "end": 5854
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 5860,
            "end": 5862
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 5854,
            "end": 5860
          }
        ],
        "start": 5850,
        "end": 5862
      },
      "declare": false,
      "start": 5830,
      "end": 5863
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
            "name": "path1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldPattern",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5878,
                  "end": 5890
                },
                "typeArguments": null,
                "start": 5878,
                "end": 5890
              },
              "start": 5876,
              "end": 5890
            },
            "start": 5871,
            "end": 5890
          },
          "init": {
            "type": "Literal",
            "value": "/one",
            "raw": "'/one'",
            "start": 5893,
            "end": 5899
          },
          "definite": false,
          "start": 5871,
          "end": 5899
        }
      ],
      "declare": false,
      "start": 5865,
      "end": 5900
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
            "name": "path2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FieldPattern",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5914,
                  "end": 5926
                },
                "typeArguments": null,
                "start": 5914,
                "end": 5926
              },
              "start": 5912,
              "end": 5926
            },
            "start": 5907,
            "end": 5926
          },
          "init": {
            "type": "Literal",
            "value": "two",
            "raw": "'two'",
            "start": 5929,
            "end": 5934
          },
          "definite": false,
          "start": 5907,
          "end": 5934
        }
      ],
      "declare": false,
      "start": 5901,
      "end": 5935
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PathsObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 5952,
        "end": 5963
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 5969,
          "end": 5970
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "FieldPattern",
            "optional": false,
            "typeAnnotation": null,
            "start": 5974,
            "end": 5986
          },
          "typeArguments": null,
          "start": 5974,
          "end": 5986
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 5989,
          "end": 5995
        },
        "optional": false,
        "readonly": null,
        "start": 5966,
        "end": 5998
      },
      "declare": false,
      "start": 5947,
      "end": 5999
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
            "name": "pathObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PathsObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6018,
                  "end": 6029
                },
                "typeArguments": null,
                "start": 6018,
                "end": 6029
              },
              "start": 6016,
              "end": 6029
            },
            "start": 6006,
            "end": 6029
          },
          "init": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 6032,
            "end": 6035
          },
          "definite": false,
          "start": 6006,
          "end": 6035
        }
      ],
      "declare": false,
      "start": 6000,
      "end": 6036
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IdType",
        "optional": false,
        "typeAnnotation": null,
        "start": 6053,
        "end": 6059
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 6062,
            "end": 6065
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false,
            "start": 6071,
            "end": 6075
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false,
            "start": 6081,
            "end": 6085
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false,
            "start": 6091,
            "end": 6095
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 6101,
            "end": 6103
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 6065,
            "end": 6071
          },
          {
            "type": "TSNumberKeyword",
            "start": 6075,
            "end": 6081
          },
          {
            "type": "TSNumberKeyword",
            "start": 6085,
            "end": 6091
          },
          {
            "type": "TSNumberKeyword",
            "start": 6095,
            "end": 6101
          }
        ],
        "start": 6062,
        "end": 6103
      },
      "declare": false,
      "start": 6048,
      "end": 6103
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
            "name": "id",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IdType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6114,
                  "end": 6120
                },
                "typeArguments": null,
                "start": 6114,
                "end": 6120
              },
              "start": 6112,
              "end": 6120
            },
            "start": 6110,
            "end": 6120
          },
          "init": {
            "type": "Literal",
            "value": "0000-0000-0000-0001",
            "raw": "'0000-0000-0000-0001'",
            "start": 6123,
            "end": 6144
          },
          "definite": false,
          "start": 6110,
          "end": 6144
        }
      ],
      "declare": false,
      "start": 6104,
      "end": 6145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6152,
        "end": 6153
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 6156,
          "end": 6162
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IdType",
                "optional": false,
                "typeAnnotation": null,
                "start": 6163,
                "end": 6169
              },
              "typeArguments": null,
              "start": 6163,
              "end": 6169
            },
            {
              "type": "TSStringKeyword",
              "start": 6171,
              "end": 6177
            }
          ],
          "start": 6162,
          "end": 6178
        },
        "start": 6156,
        "end": 6178
      },
      "declare": false,
      "start": 6147,
      "end": 6179
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6190,
                  "end": 6191
                },
                "typeArguments": null,
                "start": 6190,
                "end": 6191
              },
              "start": 6188,
              "end": 6191
            },
            "start": 6187,
            "end": 6191
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
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6197,
                  "end": 6199
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 6202,
                  "end": 6208
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 6196,
                "end": 6208
              }
            ],
            "start": 6194,
            "end": 6210
          },
          "definite": false,
          "start": 6187,
          "end": 6210
        }
      ],
      "declare": false,
      "start": 6181,
      "end": 6210
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
            "name": "aid",
            "optional": false,
            "typeAnnotation": null,
            "start": 6216,
            "end": 6219
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 6222,
              "end": 6223
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 6224,
              "end": 6226
            },
            "optional": false,
            "computed": true,
            "start": 6222,
            "end": 6227
          },
          "definite": false,
          "start": 6216,
          "end": 6227
        }
      ],
      "declare": false,
      "start": 6212,
      "end": 6228
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 6262,
        "end": 6264
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 6271,
              "end": 6272
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6275,
                "end": 6281
              },
              "start": 6273,
              "end": 6281
            },
            "accessibility": null,
            "static": false,
            "start": 6271,
            "end": 6282
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 6287,
              "end": 6288
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6291,
                "end": 6297
              },
              "start": 6289,
              "end": 6297
            },
            "accessibility": null,
            "static": false,
            "start": 6287,
            "end": 6298
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 6309,
                    "end": 6315
                  },
                  "start": 6307,
                  "end": 6315
                },
                "start": 6304,
                "end": 6315
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6318,
                "end": 6324
              },
              "start": 6316,
              "end": 6324
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 6303,
            "end": 6325
          }
        ],
        "start": 6265,
        "end": 6327
      },
      "declare": false,
      "start": 6252,
      "end": 6327
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
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6339,
                  "end": 6341
                },
                "typeArguments": null,
                "start": 6339,
                "end": 6341
              },
              "start": 6337,
              "end": 6341
            },
            "start": 6335,
            "end": 6341
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
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6347,
                  "end": 6350
                },
                "value": {
                  "type": "Literal",
                  "value": "123",
                  "raw": "'123'",
                  "start": 6353,
                  "end": 6358
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 6346,
                "end": 6358
              }
            ],
            "start": 6344,
            "end": 6360
          },
          "definite": false,
          "start": 6335,
          "end": 6360
        }
      ],
      "declare": false,
      "start": 6329,
      "end": 6361
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 6383,
                            "end": 6389
                          },
                          "start": 6381,
                          "end": 6389
                        },
                        "start": 6378,
                        "end": 6389
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 6392,
                        "end": 6398
                      },
                      "start": 6390,
                      "end": 6398
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 6377,
                    "end": 6398
                  }
                ],
                "start": 6375,
                "end": 6400
              },
              "start": 6373,
              "end": 6400
            },
            "start": 6369,
            "end": 6400
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
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6406,
                  "end": 6409
                },
                "value": {
                  "type": "Literal",
                  "value": "hello ",
                  "raw": "'hello '",
                  "start": 6412,
                  "end": 6420
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 6405,
                "end": 6420
              }
            ],
            "start": 6403,
            "end": 6421
          },
          "definite": false,
          "start": 6369,
          "end": 6421
        }
      ],
      "declare": false,
      "start": 6363,
      "end": 6422
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 6443,
                            "end": 6449
                          },
                          "start": 6441,
                          "end": 6449
                        },
                        "start": 6438,
                        "end": 6449
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 6452,
                        "end": 6458
                      },
                      "start": 6450,
                      "end": 6458
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 6437,
                    "end": 6458
                  }
                ],
                "start": 6435,
                "end": 6460
              },
              "start": 6433,
              "end": 6460
            },
            "start": 6429,
            "end": 6460
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
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6466,
                  "end": 6469
                },
                "value": {
                  "type": "Literal",
                  "value": "hello ",
                  "raw": "'hello '",
                  "start": 6472,
                  "end": 6480
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 6465,
                "end": 6480
              }
            ],
            "start": 6463,
            "end": 6481
          },
          "definite": false,
          "start": 6429,
          "end": 6481
        }
      ],
      "declare": false,
      "start": 6423,
      "end": 6482
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
            "name": "obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 6545,
                            "end": 6551
                          },
                          "start": 6543,
                          "end": 6551
                        },
                        "start": 6540,
                        "end": 6551
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 6554,
                        "end": 6560
                      },
                      "start": 6552,
                      "end": 6560
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 6539,
                    "end": 6560
                  }
                ],
                "start": 6537,
                "end": 6562
              },
              "start": 6535,
              "end": 6562
            },
            "start": 6531,
            "end": 6562
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
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6568,
                  "end": 6571
                },
                "value": {
                  "type": "Literal",
                  "value": "hello ",
                  "raw": "'hello '",
                  "start": 6574,
                  "end": 6582
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 6567,
                "end": 6582
              }
            ],
            "start": 6565,
            "end": 6583
          },
          "definite": false,
          "start": 6531,
          "end": 6583
        }
      ],
      "declare": false,
      "start": 6525,
      "end": 6584
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Id",
        "optional": false,
        "typeAnnotation": null,
        "start": 6623,
        "end": 6625
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 6628,
            "end": 6634
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
                  "name": "__tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6639,
                  "end": 6644
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "id ",
                      "raw": "'id '",
                      "start": 6646,
                      "end": 6651
                    },
                    "start": 6646,
                    "end": 6651
                  },
                  "start": 6644,
                  "end": 6651
                },
                "accessibility": null,
                "static": false,
                "start": 6639,
                "end": 6651
              }
            ],
            "start": 6637,
            "end": 6652
          }
        ],
        "start": 6628,
        "end": 6652
      },
      "declare": false,
      "start": 6618,
      "end": 6653
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rec1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6659,
        "end": 6663
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6674,
                      "end": 6676
                    },
                    "typeArguments": null,
                    "start": 6674,
                    "end": 6676
                  },
                  "start": 6672,
                  "end": 6676
                },
                "start": 6669,
                "end": 6676
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6679,
                "end": 6685
              },
              "start": 6677,
              "end": 6685
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 6668,
            "end": 6685
          }
        ],
        "start": 6666,
        "end": 6687
      },
      "declare": false,
      "start": 6654,
      "end": 6688
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rec2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6694,
        "end": 6698
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 6701,
          "end": 6707
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Id",
                "optional": false,
                "typeAnnotation": null,
                "start": 6708,
                "end": 6710
              },
              "typeArguments": null,
              "start": 6708,
              "end": 6710
            },
            {
              "type": "TSNumberKeyword",
              "start": 6712,
              "end": 6718
            }
          ],
          "start": 6707,
          "end": 6719
        },
        "start": 6701,
        "end": 6719
      },
      "declare": false,
      "start": 6689,
      "end": 6720
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6727,
        "end": 6729
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rec1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6738,
            "end": 6742
          },
          "typeArguments": null,
          "start": 6738,
          "end": 6742
        },
        "start": 6732,
        "end": 6742
      },
      "declare": false,
      "start": 6722,
      "end": 6743
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6756,
        "end": 6758
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Rec2",
            "optional": false,
            "typeAnnotation": null,
            "start": 6767,
            "end": 6771
          },
          "typeArguments": null,
          "start": 6767,
          "end": 6771
        },
        "start": 6761,
        "end": 6771
      },
      "declare": false,
      "start": 6751,
      "end": 6772
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 36,
  "end": 6779
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 36,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 59,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "gg3",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "value": "y",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 224,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "gg1",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 243,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 248,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 252,
    "end": 258
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 272,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 280,
    "end": 286
  },
  {
    "type": "Template",
    "value": "}a`",
    "start": 286,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 292,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 313,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 317,
    "end": 323
  },
  {
    "type": "Template",
    "value": "}a`",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "x",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 366,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "IX",
    "start": 376,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 387,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 391,
    "end": 397
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 397,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "string",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 416,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 419,
    "end": 425
  },
  {
    "type": "Template",
    "value": "}a`",
    "start": 425,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 440,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "IY",
    "start": 450,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 461,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 465,
    "end": 471
  },
  {
    "type": "Template",
    "value": "}a`",
    "start": 471,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 487,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "gg2",
    "start": 496,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "IX",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "IY",
    "start": 510,
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
    "value": "{",
    "start": 514,
    "end": 515
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
    "value": "y",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 608,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "combo",
    "start": 620,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632
  },
  {
    "type": "Template",
    "value": "`foo-${",
    "start": 633,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 640,
    "end": 646
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 646,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 651,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 655,
    "end": 656
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 671,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 674,
    "end": 680
  },
  {
    "type": "Template",
    "value": "}-bar`",
    "start": 680,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 693,
    "end": 694
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 695,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "const",
    "start": 702,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "combo",
    "start": 713,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 718,
    "end": 719
  },
  {
    "type": "String",
    "value": "'foo-test'",
    "start": 719,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 746,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "combo",
    "start": 757,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 762,
    "end": 763
  },
  {
    "type": "String",
    "value": "'test-bar'",
    "start": 763,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 790,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 796,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "combo",
    "start": 801,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 806,
    "end": 807
  },
  {
    "type": "String",
    "value": "'foo-test-bar'",
    "start": 807,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 821,
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
    "value": "declare",
    "start": 861,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 869,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 873,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 878,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 887,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 893,
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
    "value": "combo",
    "start": 898,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 903,
    "end": 904
  },
  {
    "type": "Template",
    "value": "`foo-${",
    "start": 904,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 911,
    "end": 914
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 914,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 919,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "x5",
    "start": 925,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "combo",
    "start": 930,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 935,
    "end": 936
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 936,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 939,
    "end": 942
  },
  {
    "type": "Template",
    "value": "}-bar`",
    "start": 942,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 949,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 951,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "x6",
    "start": 957,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "combo",
    "start": 962,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 967,
    "end": 968
  },
  {
    "type": "Template",
    "value": "`foo-${",
    "start": 968,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 975,
    "end": 978
  },
  {
    "type": "Template",
    "value": "}-bar`",
    "start": 978,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 988,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 996,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "combo2",
    "start": 1000,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1017,
    "end": 1023
  },
  {
    "type": "Template",
    "value": "}xxx${",
    "start": 1023,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1029,
    "end": 1035
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1035,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1043,
    "end": 1049
  },
  {
    "type": "Template",
    "value": "}yyy${",
    "start": 1049,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1055,
    "end": 1061
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1061,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1066,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "const",
    "start": 1077,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "x7",
    "start": 1083,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "combo2",
    "start": 1088,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "String",
    "value": "'axxxbyyyc'",
    "start": 1095,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1109,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "x8",
    "start": 1115,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "combo2",
    "start": 1120,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "String",
    "value": "'ayyyxxxbc'",
    "start": 1127,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1141,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "x9",
    "start": 1147,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "combo2",
    "start": 1152,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "String",
    "value": "'axxxbbbyc'",
    "start": 1159,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1240,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1248,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 1252,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Template",
    "value": "`data${",
    "start": 1263,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1270,
    "end": 1276
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1276,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1281,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1291,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1297,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 1302,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "String",
    "value": "'data123'",
    "start": 1306,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1318,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1324,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "data123",
    "start": 1333,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 1409,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "data123",
    "start": 1417,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1426,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "dom",
    "start": 1437,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "date123",
    "start": 1445,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1454,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1547,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 1552,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1567,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Template",
    "value": "`s${",
    "start": 1572,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1576,
    "end": 1582
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1582,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1591,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1599,
    "end": 1601
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1602,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1613,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Template",
    "value": "`n${",
    "start": 1618,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1622,
    "end": 1628
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1628,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1637,
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
    "value": "=>",
    "start": 1645,
    "end": 1647
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1648,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1657,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "funcs",
    "start": 1663,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "Funcs",
    "start": 1670,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "sfoo",
    "start": 1684,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1692,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1697,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "nfoo",
    "start": 1723,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1731,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1800,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "Duplicates",
    "start": 1805,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1825,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1830,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1839,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1848,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1868,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1873,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1882,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1891,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1911,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1916,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1925,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1931,
    "end": 1937
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1937,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1942,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1962,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 1967,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1973,
    "end": 1979
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1979,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1984,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2043,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "Conflicting",
    "start": 2048,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2069,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 2074,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2078,
    "end": 2084
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2084,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2089,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2099,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2104,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2107,
    "end": 2113
  },
  {
    "type": "Template",
    "value": "}a`",
    "start": 2113,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 2119,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2129,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Template",
    "value": "`a${",
    "start": 2134,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2138,
    "end": 2144
  },
  {
    "type": "Template",
    "value": "}a`",
    "start": 2144,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 2150,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2197,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "Invalid",
    "start": 2202,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2212,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2220,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2237,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2242,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 2248,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 2254,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2260,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2283,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2292,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2301,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2324,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2329,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2337,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2360,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2369,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2378,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2437,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "Tag1",
    "start": 2442,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "__tag1__",
    "start": 2451,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2461,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2469,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "Tag2",
    "start": 2474,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "__tag2__",
    "start": 2483,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2493,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2502,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "TaggedString1",
    "start": 2507,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2523,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "Tag1",
    "start": 2532,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2538,
    "end": 2542
  },
  {
    "type": "Identifier",
    "value": "TaggedString2",
    "start": 2543,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2559,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "Tag2",
    "start": 2568,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2575,
    "end": 2582
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2583,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 2587,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2591,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2599,
    "end": 2606
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2607,
    "end": 2610
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2611,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "TaggedString1",
    "start": 2615,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2630,
    "end": 2637
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2638,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2642,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "TaggedString2",
    "start": 2646,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2661,
    "end": 2668
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2669,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 2673,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "TaggedString1",
    "start": 2677,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "TaggedString2",
    "start": 2693,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2708,
    "end": 2715
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2716,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 2720,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Identifier",
    "value": "TaggedString1",
    "start": 2724,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "TaggedString2",
    "start": 2740,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2756,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 2766,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2772,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "TaggedString1",
    "start": 2777,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2793,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2802,
    "end": 2811
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2812,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2818,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Identifier",
    "value": "TaggedString2",
    "start": 2823,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2839,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2848,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 2858,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2864,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Identifier",
    "value": "TaggedString1",
    "start": 2869,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "TaggedString2",
    "start": 2885,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2901,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2910,
    "end": 2919
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 2920,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2926,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "TaggedString1",
    "start": 2931,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Identifier",
    "value": "TaggedString2",
    "start": 2947,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2963,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2973,
    "end": 2980
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2981,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 2985,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 2989,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2993,
    "end": 3000
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3001,
    "end": 3004
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 3005,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 3009,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3013,
    "end": 3020
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3021,
    "end": 3024
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 3025,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 3029,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3033,
    "end": 3040
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3041,
    "end": 3044
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 3045,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 3049,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 3054,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 3057,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 3072,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3075,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 3080,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3083,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 3098,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 3101,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 3116,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 3119,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 3125,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 3128,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 3143,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3146,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 3161,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3164,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 3169,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 3172,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 3187,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 3190,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 3196,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 3199,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 3214,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3217,
    "end": 3219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 3222,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3225,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 3230,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 3233,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 3238,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 3241,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 3247,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 3250,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 3265,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3268,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 3283,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3286,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 3301,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 3304,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 3319,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 3322,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 3328,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 3333,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 3347,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 3352,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 3356,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 3361,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 3376,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 3381,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 3395,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 3400,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 3404,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 3409,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 3424,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 3429,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 3443,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 3448,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 3462,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 3467,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 3482,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 3487,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 3491,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 3496,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Identifier",
    "value": "i4",
    "start": 3500,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 3505,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3507,
    "end": 3508
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3510,
    "end": 3517
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3518,
    "end": 3521
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 3522,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3529,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Identifier",
    "value": "TaggedString1",
    "start": 3534,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3550,
    "end": 3556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3560,
    "end": 3567
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3568,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 3572,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3579,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Identifier",
    "value": "TaggedString2",
    "start": 3584,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3600,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3610,
    "end": 3617
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3618,
    "end": 3621
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 3622,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3626,
    "end": 3627
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3628,
    "end": 3629
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3629,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "TaggedString1",
    "start": 3634,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Identifier",
    "value": "TaggedString2",
    "start": 3650,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3666,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3676,
    "end": 3683
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3684,
    "end": 3687
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 3688,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3694,
    "end": 3695
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3695,
    "end": 3698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Identifier",
    "value": "TaggedString1",
    "start": 3700,
    "end": 3713
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3714,
    "end": 3715
  },
  {
    "type": "Identifier",
    "value": "TaggedString2",
    "start": 3716,
    "end": 3729
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3729,
    "end": 3730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3730,
    "end": 3731
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3732,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 3743,
    "end": 3745
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3745,
    "end": 3746
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 3746,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3749,
    "end": 3750
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 3761,
    "end": 3763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3764,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3767,
    "end": 3768
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 3769,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3772,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 3787,
    "end": 3789
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3789,
    "end": 3790
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 3790,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 3805,
    "end": 3807
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 3808,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3811,
    "end": 3812
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 3814,
    "end": 3816
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 3817,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3819,
    "end": 3820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 3832,
    "end": 3834
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3834,
    "end": 3835
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3835,
    "end": 3837
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3837,
    "end": 3838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 3850,
    "end": 3852
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3853,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 3858,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 3861,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 3876,
    "end": 3878
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3878,
    "end": 3879
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 3879,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3881,
    "end": 3882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 3885,
    "end": 3887
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 3888,
    "end": 3890
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3891,
    "end": 3892
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 3903,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3906,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 3911,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3914,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 3919,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 3922,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 3927,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 3930,
    "end": 3932
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3932,
    "end": 3933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 3936,
    "end": 3938
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3938,
    "end": 3939
  },
  {
    "type": "Identifier",
    "value": "s0",
    "start": 3939,
    "end": 3941
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 3954,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3957,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 3972,
    "end": 3974
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3975,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 3990,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 3993,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 4008,
    "end": 4010
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4011,
    "end": 4013
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4013,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 4017,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 4022,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 4026,
    "end": 4028
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 4031,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 4035,
    "end": 4037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 4040,
    "end": 4042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 4045,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 4050,
    "end": 4052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 4054,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 4059,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 4063,
    "end": 4065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4066,
    "end": 4067
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 4068,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 4073,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4076,
    "end": 4077
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 4078,
    "end": 4080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4080,
    "end": 4081
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 4082,
    "end": 4084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4085,
    "end": 4086
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 4087,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 4091,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4094,
    "end": 4095
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 4096,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 4101,
    "end": 4103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 4106,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 4110,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 4115,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Identifier",
    "value": "o4",
    "start": 4119,
    "end": 4121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 4124,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4188,
    "end": 4193
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 4194,
    "end": 4199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4208,
    "end": 4209
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 4209,
    "end": 4212
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4213,
    "end": 4214
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4215,
    "end": 4216
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4217,
    "end": 4219
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4220,
    "end": 4225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4225,
    "end": 4226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4232,
    "end": 4235
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 4238,
    "end": 4241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4241,
    "end": 4242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4246,
    "end": 4248
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4249,
    "end": 4254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4256,
    "end": 4257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4260,
    "end": 4265
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 4266,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4274,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4280,
    "end": 4281
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4285,
    "end": 4286
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4287,
    "end": 4289
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4290,
    "end": 4295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4301,
    "end": 4302
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4302,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4304,
    "end": 4305
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4306,
    "end": 4307
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4308,
    "end": 4309
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4310,
    "end": 4311
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4312,
    "end": 4314
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4315,
    "end": 4320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4320,
    "end": 4321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4322,
    "end": 4323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4323,
    "end": 4324
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4326,
    "end": 4331
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 4332,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4340,
    "end": 4341
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4346,
    "end": 4347
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 4347,
    "end": 4350
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4350,
    "end": 4351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4351,
    "end": 4352
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4355,
    "end": 4357
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4358,
    "end": 4363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4370,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4377,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4381,
    "end": 4382
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4383,
    "end": 4385
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4386,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4394,
    "end": 4395
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4397,
    "end": 4402
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 4403,
    "end": 4408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4411,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4417,
    "end": 4418
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 4418,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4422,
    "end": 4423
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4424,
    "end": 4425
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4426,
    "end": 4428
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4429,
    "end": 4434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4440,
    "end": 4441
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4441,
    "end": 4444
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4445,
    "end": 4446
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 4447,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4450,
    "end": 4451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4451,
    "end": 4452
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4453,
    "end": 4454
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4455,
    "end": 4457
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4458,
    "end": 4463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4470,
    "end": 4471
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4471,
    "end": 4472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4472,
    "end": 4473
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4476,
    "end": 4478
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4479,
    "end": 4484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4490,
    "end": 4491
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4491,
    "end": 4492
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4493,
    "end": 4494
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4495,
    "end": 4496
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4496,
    "end": 4497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4497,
    "end": 4498
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4499,
    "end": 4500
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4501,
    "end": 4503
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4504,
    "end": 4509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4509,
    "end": 4510
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4515,
    "end": 4516
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 4516,
    "end": 4519
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4520,
    "end": 4521
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4524,
    "end": 4526
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4527,
    "end": 4532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4532,
    "end": 4533
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4539,
    "end": 4545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4545,
    "end": 4546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4546,
    "end": 4547
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4547,
    "end": 4548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4552,
    "end": 4554
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 4555,
    "end": 4560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4560,
    "end": 4561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4562,
    "end": 4563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4563,
    "end": 4564
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4588,
    "end": 4593
  },
  {
    "type": "Identifier",
    "value": "system",
    "start": 4594,
    "end": 4600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4601,
    "end": 4602
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4603,
    "end": 4609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4609,
    "end": 4610
  },
  {
    "type": "String",
    "value": "'system'",
    "start": 4610,
    "end": 4618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4619,
    "end": 4620
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4621,
    "end": 4626
  },
  {
    "type": "Identifier",
    "value": "SomeSytePlugin",
    "start": 4627,
    "end": 4641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4642,
    "end": 4643
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4644,
    "end": 4650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4650,
    "end": 4651
  },
  {
    "type": "String",
    "value": "'SomeSytePlugin'",
    "start": 4651,
    "end": 4667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4668,
    "end": 4669
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4671,
    "end": 4680
  },
  {
    "type": "Identifier",
    "value": "Plugs",
    "start": 4681,
    "end": 4686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4687,
    "end": 4688
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4693,
    "end": 4694
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4694,
    "end": 4697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4697,
    "end": 4698
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 4699,
    "end": 4705
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4705,
    "end": 4706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4706,
    "end": 4707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4708,
    "end": 4709
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4709,
    "end": 4712
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4712,
    "end": 4716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4716,
    "end": 4717
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4718,
    "end": 4721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4721,
    "end": 4722
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4723,
    "end": 4725
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4726,
    "end": 4733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4733,
    "end": 4734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4735,
    "end": 4736
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4738,
    "end": 4743
  },
  {
    "type": "Identifier",
    "value": "plugins",
    "start": 4744,
    "end": 4751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "String",
    "value": "\"user\"",
    "start": 4760,
    "end": 4766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4768,
    "end": 4769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4769,
    "end": 4770
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4771,
    "end": 4773
  },
  {
    "type": "Identifier",
    "value": "Plugs",
    "start": 4774,
    "end": 4779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4779,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4785,
    "end": 4786
  },
  {
    "type": "Identifier",
    "value": "system",
    "start": 4786,
    "end": 4792
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4792,
    "end": 4793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4793,
    "end": 4794
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4795,
    "end": 4796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4796,
    "end": 4797
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4798,
    "end": 4800
  },
  {
    "type": "Identifier",
    "value": "Plugs",
    "start": 4801,
    "end": 4806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4807,
    "end": 4808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4808,
    "end": 4809
  },
  {
    "type": "Identifier",
    "value": "plugins",
    "start": 4811,
    "end": 4818
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4818,
    "end": 4819
  },
  {
    "type": "Identifier",
    "value": "system",
    "start": 4819,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4825,
    "end": 4826
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Identifier",
    "value": "SomeSytePlugin",
    "start": 4827,
    "end": 4841
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4841,
    "end": 4842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4843,
    "end": 4844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4846,
    "end": 4847
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4848,
    "end": 4850
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4851,
    "end": 4858
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4858,
    "end": 4859
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4859,
    "end": 4862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4862,
    "end": 4863
  },
  {
    "type": "String",
    "value": "'awsome'",
    "start": 4863,
    "end": 4871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4871,
    "end": 4872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4872,
    "end": 4873
  },
  {
    "type": "Identifier",
    "value": "plugins",
    "start": 4874,
    "end": 4881
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4881,
    "end": 4882
  },
  {
    "type": "Identifier",
    "value": "system",
    "start": 4882,
    "end": 4888
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4888,
    "end": 4889
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4889,
    "end": 4890
  },
  {
    "type": "Identifier",
    "value": "SomeSytePlugin",
    "start": 4890,
    "end": 4904
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4905,
    "end": 4906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4906,
    "end": 4907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4907,
    "end": 4908
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4910,
    "end": 4913
  },
  {
    "type": "Identifier",
    "value": "theAnswer",
    "start": 4914,
    "end": 4923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4923,
    "end": 4924
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 4925,
    "end": 4931
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4932,
    "end": 4933
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4934,
    "end": 4940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4940,
    "end": 4941
  },
  {
    "type": "String",
    "value": "'secret'",
    "start": 4941,
    "end": 4949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4950,
    "end": 4951
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4952,
    "end": 4955
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4956,
    "end": 4959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4960,
    "end": 4961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4962,
    "end": 4963
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4963,
    "end": 4964
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4965,
    "end": 4967
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 4968,
    "end": 4974
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4974,
    "end": 4975
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 4975,
    "end": 4981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4981,
    "end": 4982
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4983,
    "end": 4989
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4989,
    "end": 4990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4992,
    "end": 4995
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4995,
    "end": 4996
  },
  {
    "type": "Identifier",
    "value": "theAnswer",
    "start": 4996,
    "end": 5005
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5005,
    "end": 5006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5007,
    "end": 5008
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 5009,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5036,
    "end": 5041
  },
  {
    "type": "Identifier",
    "value": "directive",
    "start": 5042,
    "end": 5051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5052,
    "end": 5053
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 5054,
    "end": 5060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5060,
    "end": 5061
  },
  {
    "type": "String",
    "value": "'directive'",
    "start": 5061,
    "end": 5072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5072,
    "end": 5073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5073,
    "end": 5074
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5075,
    "end": 5082
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5083,
    "end": 5091
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5092,
    "end": 5095
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5095,
    "end": 5096
  },
  {
    "type": "Identifier",
    "value": "TArg",
    "start": 5096,
    "end": 5100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5100,
    "end": 5101
  },
  {
    "type": "Identifier",
    "value": "TRet",
    "start": 5102,
    "end": 5106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5106,
    "end": 5107
  },
  {
    "type": "Identifier",
    "value": "TDir",
    "start": 5108,
    "end": 5112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5112,
    "end": 5113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5113,
    "end": 5114
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 5114,
    "end": 5121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5121,
    "end": 5122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5123,
    "end": 5124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5125,
    "end": 5126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5126,
    "end": 5127
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5128,
    "end": 5130
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5131,
    "end": 5137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5137,
    "end": 5138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5138,
    "end": 5139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5140,
    "end": 5141
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 5141,
    "end": 5144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5144,
    "end": 5145
  },
  {
    "type": "Identifier",
    "value": "TArg",
    "start": 5146,
    "end": 5150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5150,
    "end": 5151
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5152,
    "end": 5154
  },
  {
    "type": "Identifier",
    "value": "TRet",
    "start": 5155,
    "end": 5159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5160,
    "end": 5161
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5162,
    "end": 5163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5164,
    "end": 5165
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5166,
    "end": 5167
  },
  {
    "type": "Identifier",
    "value": "directive",
    "start": 5167,
    "end": 5176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5176,
    "end": 5177
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5177,
    "end": 5178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5178,
    "end": 5179
  },
  {
    "type": "Identifier",
    "value": "TDir",
    "start": 5180,
    "end": 5184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5185,
    "end": 5186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5186,
    "end": 5187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5187,
    "end": 5188
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5189,
    "end": 5193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5193,
    "end": 5194
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5196,
    "end": 5199
  },
  {
    "type": "Identifier",
    "value": "case1",
    "start": 5200,
    "end": 5205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5206,
    "end": 5207
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5208,
    "end": 5211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5211,
    "end": 5212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5212,
    "end": 5213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5218,
    "end": 5219
  },
  {
    "type": "Identifier",
    "value": "directive",
    "start": 5219,
    "end": 5228
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5228,
    "end": 5229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5229,
    "end": 5230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5231,
    "end": 5232
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5232,
    "end": 5233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5233,
    "end": 5234
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5235,
    "end": 5241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5241,
    "end": 5242
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5243,
    "end": 5245
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 5246,
    "end": 5251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5251,
    "end": 5252
  },
  {
    "type": "Identifier",
    "value": "addOne",
    "start": 5257,
    "end": 5263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5263,
    "end": 5264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5265,
    "end": 5266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5266,
    "end": 5267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5267,
    "end": 5268
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5269,
    "end": 5275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5275,
    "end": 5276
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5277,
    "end": 5279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5280,
    "end": 5281
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5282,
    "end": 5283
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5284,
    "end": 5285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5285,
    "end": 5286
  },
  {
    "type": "Identifier",
    "value": "double",
    "start": 5291,
    "end": 5297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5297,
    "end": 5298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5299,
    "end": 5300
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5300,
    "end": 5301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5301,
    "end": 5302
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5303,
    "end": 5309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5309,
    "end": 5310
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5311,
    "end": 5313
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5314,
    "end": 5315
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5316,
    "end": 5317
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5318,
    "end": 5319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5319,
    "end": 5320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5321,
    "end": 5322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5322,
    "end": 5323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5323,
    "end": 5324
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5326,
    "end": 5329
  },
  {
    "type": "Identifier",
    "value": "case2",
    "start": 5330,
    "end": 5335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5336,
    "end": 5337
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5338,
    "end": 5341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5341,
    "end": 5342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5342,
    "end": 5343
  },
  {
    "type": "Identifier",
    "value": "addOne",
    "start": 5348,
    "end": 5354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5354,
    "end": 5355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5356,
    "end": 5357
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5357,
    "end": 5358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5358,
    "end": 5359
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5360,
    "end": 5366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5366,
    "end": 5367
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5368,
    "end": 5370
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5373,
    "end": 5374
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5375,
    "end": 5376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5376,
    "end": 5377
  },
  {
    "type": "Identifier",
    "value": "double",
    "start": 5382,
    "end": 5388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5388,
    "end": 5389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5390,
    "end": 5391
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5391,
    "end": 5392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5392,
    "end": 5393
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5394,
    "end": 5400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5400,
    "end": 5401
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5402,
    "end": 5404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5405,
    "end": 5406
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5407,
    "end": 5408
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5409,
    "end": 5410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5410,
    "end": 5411
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5416,
    "end": 5417
  },
  {
    "type": "Identifier",
    "value": "directive",
    "start": 5417,
    "end": 5426
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5426,
    "end": 5427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5427,
    "end": 5428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5429,
    "end": 5430
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5430,
    "end": 5431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5431,
    "end": 5432
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5433,
    "end": 5439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5439,
    "end": 5440
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5441,
    "end": 5443
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 5444,
    "end": 5449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5449,
    "end": 5450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5451,
    "end": 5452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5452,
    "end": 5453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5453,
    "end": 5454
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5456,
    "end": 5459
  },
  {
    "type": "Identifier",
    "value": "case3",
    "start": 5460,
    "end": 5465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5466,
    "end": 5467
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5468,
    "end": 5471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5471,
    "end": 5472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5472,
    "end": 5473
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5478,
    "end": 5479
  },
  {
    "type": "Identifier",
    "value": "directive",
    "start": 5479,
    "end": 5488
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5488,
    "end": 5489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5489,
    "end": 5490
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 5491,
    "end": 5496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5496,
    "end": 5497
  },
  {
    "type": "Identifier",
    "value": "addOne",
    "start": 5502,
    "end": 5508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5508,
    "end": 5509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5510,
    "end": 5511
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5511,
    "end": 5512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5512,
    "end": 5513
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5514,
    "end": 5520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5520,
    "end": 5521
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5522,
    "end": 5524
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5525,
    "end": 5526
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5527,
    "end": 5528
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5529,
    "end": 5530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5530,
    "end": 5531
  },
  {
    "type": "Identifier",
    "value": "double",
    "start": 5536,
    "end": 5542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5542,
    "end": 5543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5544,
    "end": 5545
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5545,
    "end": 5546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5546,
    "end": 5547
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5548,
    "end": 5554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5554,
    "end": 5555
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5556,
    "end": 5558
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5559,
    "end": 5560
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 5561,
    "end": 5562
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5563,
    "end": 5564
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5564,
    "end": 5565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5566,
    "end": 5567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5567,
    "end": 5568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5568,
    "end": 5569
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5594,
    "end": 5598
  },
  {
    "type": "Identifier",
    "value": "Pseudo",
    "start": 5599,
    "end": 5605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5606,
    "end": 5607
  },
  {
    "type": "Template",
    "value": "`&:${",
    "start": 5608,
    "end": 5613
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5613,
    "end": 5619
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5619,
    "end": 5621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5621,
    "end": 5622
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5624,
    "end": 5629
  },
  {
    "type": "Identifier",
    "value": "AmIPseudo1",
    "start": 5630,
    "end": 5640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5640,
    "end": 5641
  },
  {
    "type": "Identifier",
    "value": "Pseudo",
    "start": 5642,
    "end": 5648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5649,
    "end": 5650
  },
  {
    "type": "String",
    "value": "'&:test'",
    "start": 5651,
    "end": 5659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5659,
    "end": 5660
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5661,
    "end": 5666
  },
  {
    "type": "Identifier",
    "value": "AmIPseudo",
    "start": 5667,
    "end": 5676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5676,
    "end": 5677
  },
  {
    "type": "Identifier",
    "value": "Pseudo",
    "start": 5678,
    "end": 5684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5685,
    "end": 5686
  },
  {
    "type": "String",
    "value": "'&'",
    "start": 5687,
    "end": 5690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5690,
    "end": 5691
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5703,
    "end": 5707
  },
  {
    "type": "Identifier",
    "value": "PseudoDeclaration",
    "start": 5708,
    "end": 5725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5726,
    "end": 5727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5728,
    "end": 5729
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5730,
    "end": 5731
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 5731,
    "end": 5734
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5735,
    "end": 5737
  },
  {
    "type": "Identifier",
    "value": "Pseudo",
    "start": 5738,
    "end": 5744
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5744,
    "end": 5745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5745,
    "end": 5746
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5747,
    "end": 5753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5754,
    "end": 5755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5755,
    "end": 5756
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5758,
    "end": 5763
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 5764,
    "end": 5768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5768,
    "end": 5769
  },
  {
    "type": "Identifier",
    "value": "PseudoDeclaration",
    "start": 5770,
    "end": 5787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5788,
    "end": 5789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5790,
    "end": 5791
  },
  {
    "type": "String",
    "value": "'someKey'",
    "start": 5792,
    "end": 5801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5802,
    "end": 5803
  },
  {
    "type": "String",
    "value": "'someValue'",
    "start": 5804,
    "end": 5815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5816,
    "end": 5817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5817,
    "end": 5818
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5830,
    "end": 5834
  },
  {
    "type": "Identifier",
    "value": "FieldPattern",
    "start": 5835,
    "end": 5847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5848,
    "end": 5849
  },
  {
    "type": "Template",
    "value": "`/${",
    "start": 5850,
    "end": 5854
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5854,
    "end": 5860
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 5860,
    "end": 5862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5862,
    "end": 5863
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5865,
    "end": 5870
  },
  {
    "type": "Identifier",
    "value": "path1",
    "start": 5871,
    "end": 5876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5876,
    "end": 5877
  },
  {
    "type": "Identifier",
    "value": "FieldPattern",
    "start": 5878,
    "end": 5890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5891,
    "end": 5892
  },
  {
    "type": "String",
    "value": "'/one'",
    "start": 5893,
    "end": 5899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5899,
    "end": 5900
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5901,
    "end": 5906
  },
  {
    "type": "Identifier",
    "value": "path2",
    "start": 5907,
    "end": 5912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5912,
    "end": 5913
  },
  {
    "type": "Identifier",
    "value": "FieldPattern",
    "start": 5914,
    "end": 5926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5927,
    "end": 5928
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 5929,
    "end": 5934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5934,
    "end": 5935
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5947,
    "end": 5951
  },
  {
    "type": "Identifier",
    "value": "PathsObject",
    "start": 5952,
    "end": 5963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5964,
    "end": 5965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5966,
    "end": 5967
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5968,
    "end": 5969
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 5969,
    "end": 5970
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5971,
    "end": 5973
  },
  {
    "type": "Identifier",
    "value": "FieldPattern",
    "start": 5974,
    "end": 5986
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5986,
    "end": 5987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5987,
    "end": 5988
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 5989,
    "end": 5995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5995,
    "end": 5996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5997,
    "end": 5998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5998,
    "end": 5999
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6000,
    "end": 6005
  },
  {
    "type": "Identifier",
    "value": "pathObject",
    "start": 6006,
    "end": 6016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6016,
    "end": 6017
  },
  {
    "type": "Identifier",
    "value": "PathsObject",
    "start": 6018,
    "end": 6029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6030,
    "end": 6031
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 6032,
    "end": 6035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6035,
    "end": 6036
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6048,
    "end": 6052
  },
  {
    "type": "Identifier",
    "value": "IdType",
    "start": 6053,
    "end": 6059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6060,
    "end": 6061
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 6062,
    "end": 6065
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6065,
    "end": 6071
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 6071,
    "end": 6075
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6075,
    "end": 6081
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 6081,
    "end": 6085
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6085,
    "end": 6091
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 6091,
    "end": 6095
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6095,
    "end": 6101
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 6101,
    "end": 6103
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6104,
    "end": 6109
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 6110,
    "end": 6112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6112,
    "end": 6113
  },
  {
    "type": "Identifier",
    "value": "IdType",
    "start": 6114,
    "end": 6120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6121,
    "end": 6122
  },
  {
    "type": "String",
    "value": "'0000-0000-0000-0001'",
    "start": 6123,
    "end": 6144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6144,
    "end": 6145
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6147,
    "end": 6151
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6152,
    "end": 6153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6154,
    "end": 6155
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 6156,
    "end": 6162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6162,
    "end": 6163
  },
  {
    "type": "Identifier",
    "value": "IdType",
    "start": 6163,
    "end": 6169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6169,
    "end": 6170
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6171,
    "end": 6177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6177,
    "end": 6178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6178,
    "end": 6179
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6181,
    "end": 6186
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6187,
    "end": 6188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6188,
    "end": 6189
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6190,
    "end": 6191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6192,
    "end": 6193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6194,
    "end": 6195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6196,
    "end": 6197
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 6197,
    "end": 6199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6199,
    "end": 6200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6200,
    "end": 6201
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 6202,
    "end": 6208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6209,
    "end": 6210
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6212,
    "end": 6215
  },
  {
    "type": "Identifier",
    "value": "aid",
    "start": 6216,
    "end": 6219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6220,
    "end": 6221
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6222,
    "end": 6223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6223,
    "end": 6224
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 6224,
    "end": 6226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6226,
    "end": 6227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6227,
    "end": 6228
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6252,
    "end": 6261
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 6262,
    "end": 6264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6265,
    "end": 6266
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6271,
    "end": 6272
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6272,
    "end": 6273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6273,
    "end": 6274
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6275,
    "end": 6281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6281,
    "end": 6282
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 6287,
    "end": 6288
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6288,
    "end": 6289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6289,
    "end": 6290
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6291,
    "end": 6297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6297,
    "end": 6298
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6303,
    "end": 6304
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6304,
    "end": 6307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6307,
    "end": 6308
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 6309,
    "end": 6315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6315,
    "end": 6316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6316,
    "end": 6317
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6318,
    "end": 6324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6324,
    "end": 6325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6326,
    "end": 6327
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6329,
    "end": 6334
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 6335,
    "end": 6337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6337,
    "end": 6338
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 6339,
    "end": 6341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6342,
    "end": 6343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6344,
    "end": 6345
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6346,
    "end": 6347
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 6347,
    "end": 6350
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6350,
    "end": 6351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6351,
    "end": 6352
  },
  {
    "type": "String",
    "value": "'123'",
    "start": 6353,
    "end": 6358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6359,
    "end": 6360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6360,
    "end": 6361
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6363,
    "end": 6368
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 6369,
    "end": 6373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6373,
    "end": 6374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6375,
    "end": 6376
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6377,
    "end": 6378
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6378,
    "end": 6381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6381,
    "end": 6382
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 6383,
    "end": 6389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6389,
    "end": 6390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6390,
    "end": 6391
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6392,
    "end": 6398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6399,
    "end": 6400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6401,
    "end": 6402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6403,
    "end": 6404
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6405,
    "end": 6406
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 6406,
    "end": 6409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6409,
    "end": 6410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6410,
    "end": 6411
  },
  {
    "type": "String",
    "value": "'hello '",
    "start": 6412,
    "end": 6420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6420,
    "end": 6421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6421,
    "end": 6422
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6423,
    "end": 6428
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 6429,
    "end": 6433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6433,
    "end": 6434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6435,
    "end": 6436
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6437,
    "end": 6438
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6438,
    "end": 6441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6441,
    "end": 6442
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6443,
    "end": 6449
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6449,
    "end": 6450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6450,
    "end": 6451
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6452,
    "end": 6458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6459,
    "end": 6460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6461,
    "end": 6462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6463,
    "end": 6464
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6465,
    "end": 6466
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 6466,
    "end": 6469
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6469,
    "end": 6470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6470,
    "end": 6471
  },
  {
    "type": "String",
    "value": "'hello '",
    "start": 6472,
    "end": 6480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6480,
    "end": 6481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6481,
    "end": 6482
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6525,
    "end": 6530
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 6531,
    "end": 6535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6535,
    "end": 6536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6537,
    "end": 6538
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6539,
    "end": 6540
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6540,
    "end": 6543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6543,
    "end": 6544
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6545,
    "end": 6551
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6551,
    "end": 6552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6552,
    "end": 6553
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6554,
    "end": 6560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6561,
    "end": 6562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6563,
    "end": 6564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6565,
    "end": 6566
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6567,
    "end": 6568
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 6568,
    "end": 6571
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6571,
    "end": 6572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6572,
    "end": 6573
  },
  {
    "type": "String",
    "value": "'hello '",
    "start": 6574,
    "end": 6582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6582,
    "end": 6583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6583,
    "end": 6584
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6618,
    "end": 6622
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 6623,
    "end": 6625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6626,
    "end": 6627
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6628,
    "end": 6634
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 6635,
    "end": 6636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6637,
    "end": 6638
  },
  {
    "type": "Identifier",
    "value": "__tag",
    "start": 6639,
    "end": 6644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6644,
    "end": 6645
  },
  {
    "type": "String",
    "value": "'id '",
    "start": 6646,
    "end": 6651
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6651,
    "end": 6652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6652,
    "end": 6653
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6654,
    "end": 6658
  },
  {
    "type": "Identifier",
    "value": "Rec1",
    "start": 6659,
    "end": 6663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6664,
    "end": 6665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6666,
    "end": 6667
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6668,
    "end": 6669
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6669,
    "end": 6672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6672,
    "end": 6673
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 6674,
    "end": 6676
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6676,
    "end": 6677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6677,
    "end": 6678
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6679,
    "end": 6685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6686,
    "end": 6687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6687,
    "end": 6688
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6689,
    "end": 6693
  },
  {
    "type": "Identifier",
    "value": "Rec2",
    "start": 6694,
    "end": 6698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6699,
    "end": 6700
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 6701,
    "end": 6707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6707,
    "end": 6708
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 6708,
    "end": 6710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6710,
    "end": 6711
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6712,
    "end": 6718
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6718,
    "end": 6719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6719,
    "end": 6720
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6722,
    "end": 6726
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 6727,
    "end": 6729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6730,
    "end": 6731
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 6732,
    "end": 6737
  },
  {
    "type": "Identifier",
    "value": "Rec1",
    "start": 6738,
    "end": 6742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6742,
    "end": 6743
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6751,
    "end": 6755
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 6756,
    "end": 6758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6759,
    "end": 6760
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 6761,
    "end": 6766
  },
  {
    "type": "Identifier",
    "value": "Rec2",
    "start": 6767,
    "end": 6771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6771,
    "end": 6772
  }
]
```
