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
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
                        "start": 19,
                        "end": 23
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 25,
                            "end": 30
                          },
                          "start": 25,
                          "end": 30
                        },
                        "start": 23,
                        "end": 30
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 19,
                      "end": 31
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
                        "start": 32,
                        "end": 33
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 35,
                          "end": 41
                        },
                        "start": 33,
                        "end": 41
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 32,
                      "end": 41
                    }
                  ],
                  "start": 17,
                  "end": 43
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
                        "start": 48,
                        "end": 52
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 54,
                            "end": 58
                          },
                          "start": 54,
                          "end": 58
                        },
                        "start": 52,
                        "end": 58
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 48,
                      "end": 59
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
                        "start": 60,
                        "end": 61
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 63,
                          "end": 69
                        },
                        "start": 61,
                        "end": 69
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 60,
                      "end": 69
                    }
                  ],
                  "start": 46,
                  "end": 71
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
                        "start": 76,
                        "end": 80
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 82,
                          "end": 88
                        },
                        "start": 80,
                        "end": 88
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 76,
                      "end": 89
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 90,
                        "end": 91
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 93,
                          "end": 99
                        },
                        "start": 91,
                        "end": 99
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 90,
                      "end": 99
                    }
                  ],
                  "start": 74,
                  "end": 101
                }
              ],
              "start": 17,
              "end": 101
            },
            "start": 15,
            "end": 101
          },
          "start": 13,
          "end": 101
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 114
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 119
                },
                "optional": false,
                "computed": false,
                "start": 113,
                "end": 119
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 124,
                "end": 129
              },
              "start": 113,
              "end": 129
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 144
                    },
                    "optional": false,
                    "computed": false,
                    "start": 141,
                    "end": 144
                  },
                  "directive": null,
                  "start": 141,
                  "end": 145
                }
              ],
              "start": 131,
              "end": 151
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 171
                  },
                  "optional": false,
                  "computed": false,
                  "start": 165,
                  "end": 171
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 176,
                  "end": 180
                },
                "start": 165,
                "end": 180
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 192,
                        "end": 193
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 194,
                        "end": 195
                      },
                      "optional": false,
                      "computed": false,
                      "start": 192,
                      "end": 195
                    },
                    "directive": null,
                    "start": 192,
                    "end": 196
                  }
                ],
                "start": 182,
                "end": 202
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 223
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 224,
                        "end": 225
                      },
                      "optional": false,
                      "computed": false,
                      "start": 222,
                      "end": 225
                    },
                    "directive": null,
                    "start": 222,
                    "end": 226
                  }
                ],
                "start": 212,
                "end": 232
              },
              "start": 161,
              "end": 232
            },
            "start": 109,
            "end": 232
          }
        ],
        "start": 103,
        "end": 234
      },
      "expression": false,
      "start": 0,
      "end": 234
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 248
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
                        "start": 255,
                        "end": 259
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 261,
                            "end": 266
                          },
                          "start": 261,
                          "end": 266
                        },
                        "start": 259,
                        "end": 266
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 255,
                      "end": 267
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
                        "start": 268,
                        "end": 269
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 271,
                          "end": 277
                        },
                        "start": 269,
                        "end": 277
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 268,
                      "end": 277
                    }
                  ],
                  "start": 253,
                  "end": 279
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
                        "start": 284,
                        "end": 288
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 290,
                            "end": 294
                          },
                          "start": 290,
                          "end": 294
                        },
                        "start": 288,
                        "end": 294
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 284,
                      "end": 295
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
                        "start": 296,
                        "end": 297
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 299,
                          "end": 305
                        },
                        "start": 297,
                        "end": 305
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 296,
                      "end": 305
                    }
                  ],
                  "start": 282,
                  "end": 307
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
                        "start": 312,
                        "end": 316
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 318,
                          "end": 324
                        },
                        "start": 316,
                        "end": 324
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 312,
                      "end": 325
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 326,
                        "end": 327
                      },
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
                      "accessibility": null,
                      "static": false,
                      "start": 326,
                      "end": 335
                    }
                  ],
                  "start": 310,
                  "end": 337
                }
              ],
              "start": 253,
              "end": 337
            },
            "start": 251,
            "end": 337
          },
          "start": 249,
          "end": 337
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
                "start": 353,
                "end": 354
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 359
              },
              "optional": false,
              "computed": false,
              "start": 353,
              "end": 359
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 376,
                  "end": 381
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 395,
                        "end": 396
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 398
                      },
                      "optional": false,
                      "computed": false,
                      "start": 395,
                      "end": 398
                    },
                    "directive": null,
                    "start": 395,
                    "end": 399
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 412,
                    "end": 418
                  }
                ],
                "start": 371,
                "end": 418
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 432,
                  "end": 436
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 451
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 452,
                        "end": 453
                      },
                      "optional": false,
                      "computed": false,
                      "start": 450,
                      "end": 453
                    },
                    "directive": null,
                    "start": 450,
                    "end": 454
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 467,
                    "end": 473
                  }
                ],
                "start": 427,
                "end": 473
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 503,
                        "end": 504
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 505,
                        "end": 506
                      },
                      "optional": false,
                      "computed": false,
                      "start": 503,
                      "end": 506
                    },
                    "directive": null,
                    "start": 503,
                    "end": 507
                  }
                ],
                "start": 482,
                "end": 507
              }
            ],
            "start": 345,
            "end": 513
          }
        ],
        "start": 339,
        "end": 515
      },
      "expression": false,
      "start": 236,
      "end": 515
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 529
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 535,
                        "end": 536
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNullKeyword",
                          "start": 538,
                          "end": 542
                        },
                        "start": 536,
                        "end": 542
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 535,
                      "end": 543
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
                        "start": 544,
                        "end": 545
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 547,
                          "end": 553
                        },
                        "start": 545,
                        "end": 553
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 544,
                      "end": 553
                    }
                  ],
                  "start": 533,
                  "end": 555
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 560,
                        "end": 561
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 563,
                          "end": 569
                        },
                        "start": 561,
                        "end": 569
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 560,
                      "end": 570
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 571,
                        "end": 572
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 574,
                          "end": 580
                        },
                        "start": 572,
                        "end": 580
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 571,
                      "end": 580
                    }
                  ],
                  "start": 558,
                  "end": 582
                }
              ],
              "start": 533,
              "end": 582
            },
            "start": 531,
            "end": 582
          },
          "start": 530,
          "end": 582
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
                "start": 590,
                "end": 591
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 597
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 599,
                      "end": 603
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 596,
                    "end": 603
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 606
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 608,
                      "end": 613
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 605,
                    "end": 613
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 615,
                      "end": 616
                    },
                    "value": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 618,
                      "end": 619
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 615,
                    "end": 619
                  }
                ],
                "start": 594,
                "end": 620
              },
              "start": 590,
              "end": 620
            },
            "directive": null,
            "start": 590,
            "end": 621
          }
        ],
        "start": 584,
        "end": 633
      },
      "expression": false,
      "start": 517,
      "end": 633
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 644,
        "end": 647
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 648,
              "end": 649
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 648,
            "end": 649
          }
        ],
        "start": 647,
        "end": 650
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 656,
                        "end": 657
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 659,
                            "end": 660
                          },
                          "start": 659,
                          "end": 660
                        },
                        "start": 657,
                        "end": 660
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 656,
                      "end": 661
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
                        "start": 662,
                        "end": 663
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 665,
                          "end": 671
                        },
                        "start": 663,
                        "end": 671
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 662,
                      "end": 671
                    }
                  ],
                  "start": 654,
                  "end": 673
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 678,
                        "end": 679
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
                            "start": 681,
                            "end": 682
                          },
                          "typeArguments": null,
                          "start": 681,
                          "end": 682
                        },
                        "start": 679,
                        "end": 682
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 678,
                      "end": 683
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 684,
                        "end": 685
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 687,
                          "end": 693
                        },
                        "start": 685,
                        "end": 693
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 684,
                      "end": 693
                    }
                  ],
                  "start": 676,
                  "end": 695
                }
              ],
              "start": 654,
              "end": 695
            },
            "start": 652,
            "end": 695
          },
          "start": 651,
          "end": 695
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 708
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 710
                },
                "optional": false,
                "computed": false,
                "start": 707,
                "end": 710
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 715,
                "end": 716
              },
              "start": 707,
              "end": 716
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 728,
                      "end": 729
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 731
                    },
                    "optional": false,
                    "computed": false,
                    "start": 728,
                    "end": 731
                  },
                  "directive": null,
                  "start": 728,
                  "end": 732
                }
              ],
              "start": 718,
              "end": 748
            },
            "alternate": null,
            "start": 703,
            "end": 748
          }
        ],
        "start": 697,
        "end": 750
      },
      "expression": false,
      "start": 635,
      "end": 750
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null,
        "start": 757,
        "end": 763
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
              "start": 764,
              "end": 765
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 764,
            "end": 765
          }
        ],
        "start": 763,
        "end": 766
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 776
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 779,
                    "end": 788
                  },
                  "start": 777,
                  "end": 788
                },
                "accessibility": null,
                "static": false,
                "start": 771,
                "end": 789
              },
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
                  "start": 790,
                  "end": 795
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
                      "start": 797,
                      "end": 798
                    },
                    "typeArguments": null,
                    "start": 797,
                    "end": 798
                  },
                  "start": 795,
                  "end": 798
                },
                "accessibility": null,
                "static": false,
                "start": 790,
                "end": 798
              }
            ],
            "start": 769,
            "end": 800
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
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 810
                },
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
                      "start": 812,
                      "end": 817
                    },
                    "typeArguments": null,
                    "start": 812,
                    "end": 817
                  },
                  "start": 810,
                  "end": 817
                },
                "accessibility": null,
                "static": false,
                "start": 805,
                "end": 817
              }
            ],
            "start": 803,
            "end": 819
          }
        ],
        "start": 769,
        "end": 819
      },
      "declare": false,
      "start": 752,
      "end": 820
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 831,
        "end": 834
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
                "name": "Result",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 844
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 845,
                    "end": 851
                  }
                ],
                "start": 844,
                "end": 852
              },
              "start": 838,
              "end": 852
            },
            "start": 836,
            "end": 852
          },
          "start": 835,
          "end": 852
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 866
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 867,
                  "end": 872
                },
                "optional": false,
                "computed": false,
                "start": 865,
                "end": 872
              },
              "prefix": true,
              "start": 864,
              "end": 872
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 884,
                      "end": 885
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 886,
                      "end": 891
                    },
                    "optional": false,
                    "computed": false,
                    "start": 884,
                    "end": 891
                  },
                  "directive": null,
                  "start": 884,
                  "end": 892
                }
              ],
              "start": 874,
              "end": 898
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 918,
                        "end": 919
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 920,
                        "end": 925
                      },
                      "optional": false,
                      "computed": false,
                      "start": 918,
                      "end": 925
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 926,
                      "end": 933
                    },
                    "optional": false,
                    "computed": false,
                    "start": 918,
                    "end": 933
                  },
                  "directive": null,
                  "start": 918,
                  "end": 934
                }
              ],
              "start": 908,
              "end": 940
            },
            "start": 860,
            "end": 940
          }
        ],
        "start": 854,
        "end": 942
      },
      "expression": false,
      "start": 822,
      "end": 942
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f15",
          "optional": false,
          "typeAnnotation": null,
          "start": 944,
          "end": 947
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
                  "start": 950,
                  "end": 955
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 957,
                  "end": 959
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 950,
                "end": 959
              }
            ],
            "start": 948,
            "end": 961
          }
        ],
        "optional": false,
        "start": 944,
        "end": 962
      },
      "directive": null,
      "start": 944,
      "end": 963
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f15",
          "optional": false,
          "typeAnnotation": null,
          "start": 964,
          "end": 967
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
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 970,
                  "end": 975
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 981,
                    "end": 986
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "boom",
                      "raw": "\"boom\"",
                      "start": 987,
                      "end": 993
                    }
                  ],
                  "start": 977,
                  "end": 994
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 970,
                "end": 994
              }
            ],
            "start": 968,
            "end": 996
          }
        ],
        "optional": false,
        "start": 964,
        "end": 997
      },
      "directive": null,
      "start": 964,
      "end": 998
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1032,
        "end": 1041
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
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 1048,
              "end": 1053
            },
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
                  "start": 1055,
                  "end": 1060
                },
                "typeArguments": null,
                "start": 1055,
                "end": 1060
              },
              "start": 1053,
              "end": 1060
            },
            "accessibility": null,
            "static": false,
            "start": 1048,
            "end": 1060
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1069
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 1071,
                "end": 1075
              },
              "start": 1069,
              "end": 1075
            },
            "accessibility": null,
            "static": false,
            "start": 1065,
            "end": 1075
          }
        ],
        "start": 1042,
        "end": 1077
      },
      "declare": false,
      "start": 1022,
      "end": 1077
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithoutError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1089,
        "end": 1101
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1102,
              "end": 1106
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1102,
            "end": 1106
          }
        ],
        "start": 1101,
        "end": 1107
      },
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
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 1114,
              "end": 1119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 1121,
                "end": 1125
              },
              "start": 1119,
              "end": 1125
            },
            "accessibility": null,
            "static": false,
            "start": 1114,
            "end": 1125
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1130,
              "end": 1134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1136,
                  "end": 1140
                },
                "typeArguments": null,
                "start": 1136,
                "end": 1140
              },
              "start": 1134,
              "end": 1140
            },
            "accessibility": null,
            "static": false,
            "start": 1130,
            "end": 1140
          }
        ],
        "start": 1108,
        "end": 1142
      },
      "declare": false,
      "start": 1079,
      "end": 1142
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DataCarrier",
        "optional": false,
        "typeAnnotation": null,
        "start": 1149,
        "end": 1160
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1161,
              "end": 1165
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1161,
            "end": 1165
          }
        ],
        "start": 1160,
        "end": 1166
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1169,
              "end": 1178
            },
            "typeArguments": null,
            "start": 1169,
            "end": 1178
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithoutError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1181,
              "end": 1193
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1194,
                    "end": 1198
                  },
                  "typeArguments": null,
                  "start": 1194,
                  "end": 1198
                }
              ],
              "start": 1193,
              "end": 1199
            },
            "start": 1181,
            "end": 1199
          }
        ],
        "start": 1169,
        "end": 1199
      },
      "declare": false,
      "start": 1144,
      "end": 1199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1210,
        "end": 1213
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1218
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1214,
            "end": 1218
          }
        ],
        "start": 1213,
        "end": 1219
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "carrier",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DataCarrier",
                "optional": false,
                "typeAnnotation": null,
                "start": 1229,
                "end": 1240
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1241,
                      "end": 1245
                    },
                    "typeArguments": null,
                    "start": 1241,
                    "end": 1245
                  }
                ],
                "start": 1240,
                "end": 1246
              },
              "start": 1229,
              "end": 1246
            },
            "start": 1227,
            "end": 1246
          },
          "start": 1220,
          "end": 1246
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "carrier",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1258,
                  "end": 1265
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1266,
                  "end": 1271
                },
                "optional": false,
                "computed": false,
                "start": 1258,
                "end": 1271
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1276,
                "end": 1280
              },
              "start": 1258,
              "end": 1280
            },
            "consequent": {
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
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNullKeyword",
                            "start": 1305,
                            "end": 1309
                          },
                          "start": 1303,
                          "end": 1309
                        },
                        "start": 1298,
                        "end": 1309
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "carrier",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1312,
                          "end": 1319
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1320,
                          "end": 1325
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1312,
                        "end": 1325
                      },
                      "definite": false,
                      "start": 1298,
                      "end": 1325
                    }
                  ],
                  "declare": false,
                  "start": 1292,
                  "end": 1325
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1346,
                              "end": 1350
                            },
                            "typeArguments": null,
                            "start": 1346,
                            "end": 1350
                          },
                          "start": 1344,
                          "end": 1350
                        },
                        "start": 1340,
                        "end": 1350
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "carrier",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1353,
                          "end": 1360
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1361,
                          "end": 1365
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1353,
                        "end": 1365
                      },
                      "definite": false,
                      "start": 1340,
                      "end": 1365
                    }
                  ],
                  "declare": false,
                  "start": 1334,
                  "end": 1365
                }
              ],
              "start": 1282,
              "end": 1371
            },
            "alternate": {
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
                        "name": "error",
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
                              "start": 1400,
                              "end": 1405
                            },
                            "typeArguments": null,
                            "start": 1400,
                            "end": 1405
                          },
                          "start": 1398,
                          "end": 1405
                        },
                        "start": 1393,
                        "end": 1405
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "carrier",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1408,
                          "end": 1415
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1416,
                          "end": 1421
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1408,
                        "end": 1421
                      },
                      "definite": false,
                      "start": 1393,
                      "end": 1421
                    }
                  ],
                  "declare": false,
                  "start": 1387,
                  "end": 1421
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNullKeyword",
                            "start": 1442,
                            "end": 1446
                          },
                          "start": 1440,
                          "end": 1446
                        },
                        "start": 1436,
                        "end": 1446
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "carrier",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1449,
                          "end": 1456
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1457,
                          "end": 1461
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1449,
                        "end": 1461
                      },
                      "definite": false,
                      "start": 1436,
                      "end": 1461
                    }
                  ],
                  "declare": false,
                  "start": 1430,
                  "end": 1461
                }
              ],
              "start": 1377,
              "end": 1467
            },
            "start": 1254,
            "end": 1467
          }
        ],
        "start": 1248,
        "end": 1469
      },
      "expression": false,
      "start": 1201,
      "end": 1469
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1498,
        "end": 1501
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1506,
                  "end": 1509
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1511,
                      "end": 1515
                    },
                    "start": 1511,
                    "end": 1515
                  },
                  "start": 1509,
                  "end": 1515
                },
                "accessibility": null,
                "static": false,
                "start": 1506,
                "end": 1516
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1517,
                  "end": 1518
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1520,
                    "end": 1526
                  },
                  "start": 1518,
                  "end": 1526
                },
                "accessibility": null,
                "static": false,
                "start": 1517,
                "end": 1526
              }
            ],
            "start": 1504,
            "end": 1528
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1533,
                  "end": 1536
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1538,
                      "end": 1543
                    },
                    "start": 1538,
                    "end": 1543
                  },
                  "start": 1536,
                  "end": 1543
                },
                "accessibility": null,
                "static": false,
                "start": 1533,
                "end": 1544
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1545,
                  "end": 1546
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1548,
                    "end": 1554
                  },
                  "start": 1546,
                  "end": 1554
                },
                "accessibility": null,
                "static": false,
                "start": 1545,
                "end": 1554
              }
            ],
            "start": 1531,
            "end": 1556
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
                        "type": "TSStringKeyword",
                        "start": 1565,
                        "end": 1571
                      },
                      "start": 1563,
                      "end": 1571
                    },
                    "start": 1562,
                    "end": 1571
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1574,
                    "end": 1580
                  },
                  "start": 1572,
                  "end": 1580
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 1561,
                "end": 1580
              }
            ],
            "start": 1559,
            "end": 1582
          }
        ],
        "start": 1504,
        "end": 1582
      },
      "declare": false,
      "start": 1493,
      "end": 1583
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 1594,
        "end": 1597
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1603,
                "end": 1606
              },
              "typeArguments": null,
              "start": 1603,
              "end": 1606
            },
            "start": 1601,
            "end": 1606
          },
          "start": 1598,
          "end": 1606
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1618,
                "end": 1621
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1622,
                "end": 1625
              },
              "optional": false,
              "computed": false,
              "start": 1618,
              "end": 1625
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1637,
                    "end": 1640
                  },
                  "directive": null,
                  "start": 1637,
                  "end": 1641
                }
              ],
              "start": 1627,
              "end": 1647
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1667,
                    "end": 1670
                  },
                  "directive": null,
                  "start": 1667,
                  "end": 1671
                }
              ],
              "start": 1657,
              "end": 1677
            },
            "start": 1614,
            "end": 1677
          }
        ],
        "start": 1608,
        "end": 1679
      },
      "expression": false,
      "start": 1585,
      "end": 1679
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null,
        "start": 1690,
        "end": 1693
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1699,
                "end": 1702
              },
              "typeArguments": null,
              "start": 1699,
              "end": 1702
            },
            "start": 1697,
            "end": 1702
          },
          "start": 1694,
          "end": 1702
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1714,
                  "end": 1717
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1718,
                  "end": 1721
                },
                "optional": false,
                "computed": false,
                "start": 1714,
                "end": 1721
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1726,
                "end": 1730
              },
              "start": 1714,
              "end": 1730
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1742,
                    "end": 1745
                  },
                  "directive": null,
                  "start": 1742,
                  "end": 1746
                }
              ],
              "start": 1732,
              "end": 1752
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1772,
                    "end": 1775
                  },
                  "directive": null,
                  "start": 1772,
                  "end": 1776
                }
              ],
              "start": 1762,
              "end": 1782
            },
            "start": 1710,
            "end": 1782
          }
        ],
        "start": 1704,
        "end": 1784
      },
      "expression": false,
      "start": 1681,
      "end": 1784
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1813,
        "end": 1814
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1823,
              "end": 1827
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 1829,
                  "end": 1832
                },
                "start": 1829,
                "end": 1832
              },
              "start": 1827,
              "end": 1832
            },
            "accessibility": null,
            "static": false,
            "start": 1823,
            "end": 1833
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1838,
              "end": 1842
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1844,
                "end": 1850
              },
              "start": 1842,
              "end": 1850
            },
            "accessibility": null,
            "static": false,
            "start": 1838,
            "end": 1850
          }
        ],
        "start": 1817,
        "end": 1852
      },
      "declare": false,
      "start": 1808,
      "end": 1852
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1858,
        "end": 1859
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1868,
              "end": 1872
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 1874,
                  "end": 1877
                },
                "start": 1874,
                "end": 1877
              },
              "start": 1872,
              "end": 1877
            },
            "accessibility": null,
            "static": false,
            "start": 1868,
            "end": 1878
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1883,
              "end": 1887
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1889,
                "end": 1895
              },
              "start": 1887,
              "end": 1895
            },
            "accessibility": null,
            "static": false,
            "start": 1883,
            "end": 1895
          }
        ],
        "start": 1862,
        "end": 1897
      },
      "declare": false,
      "start": 1853,
      "end": 1897
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1903,
        "end": 1904
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1913,
              "end": 1917
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "'c'",
                  "start": 1919,
                  "end": 1922
                },
                "start": 1919,
                "end": 1922
              },
              "start": 1917,
              "end": 1922
            },
            "accessibility": null,
            "static": false,
            "start": 1913,
            "end": 1923
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 1928,
              "end": 1933
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1935,
                "end": 1941
              },
              "start": 1933,
              "end": 1941
            },
            "accessibility": null,
            "static": false,
            "start": 1928,
            "end": 1941
          }
        ],
        "start": 1907,
        "end": 1943
      },
      "declare": false,
      "start": 1898,
      "end": 1943
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "abc",
        "optional": false,
        "typeAnnotation": null,
        "start": 1950,
        "end": 1953
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1956,
              "end": 1957
            },
            "typeArguments": null,
            "start": 1956,
            "end": 1957
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1960,
              "end": 1961
            },
            "typeArguments": null,
            "start": 1960,
            "end": 1961
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1964,
              "end": 1965
            },
            "typeArguments": null,
            "start": 1964,
            "end": 1965
          }
        ],
        "start": 1956,
        "end": 1965
      },
      "declare": false,
      "start": 1945,
      "end": 1966
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1977,
        "end": 1978
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "problem",
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
                    "name": "abc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1988,
                    "end": 1991
                  },
                  "typeArguments": null,
                  "start": 1988,
                  "end": 1991
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1995,
                        "end": 1996
                      },
                      "typeArguments": null,
                      "start": 1995,
                      "end": 1996
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1999,
                        "end": 2000
                      },
                      "typeArguments": null,
                      "start": 1999,
                      "end": 2000
                    }
                  ],
                  "start": 1995,
                  "end": 2000
                }
              ],
              "start": 1988,
              "end": 2001
            },
            "start": 1986,
            "end": 2001
          },
          "start": 1979,
          "end": 2001
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "problem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2013,
                  "end": 2020
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2021,
                  "end": 2025
                },
                "optional": false,
                "computed": false,
                "start": 2013,
                "end": 2025
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 2030,
                "end": 2033
              },
              "start": 2013,
              "end": 2033
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "problem",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2045,
                      "end": 2052
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2053,
                      "end": 2057
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2045,
                    "end": 2057
                  },
                  "directive": null,
                  "start": 2045,
                  "end": 2058
                }
              ],
              "start": 2035,
              "end": 2064
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "problem",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2084,
                      "end": 2091
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2092,
                      "end": 2097
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2084,
                    "end": 2097
                  },
                  "directive": null,
                  "start": 2084,
                  "end": 2098
                }
              ],
              "start": 2074,
              "end": 2104
            },
            "start": 2009,
            "end": 2104
          }
        ],
        "start": 2003,
        "end": 2106
      },
      "expression": false,
      "start": 1968,
      "end": 2106
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RuntimeValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 2113,
        "end": 2125
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2136,
                  "end": 2140
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "'number'",
                      "start": 2142,
                      "end": 2150
                    },
                    "start": 2142,
                    "end": 2150
                  },
                  "start": 2140,
                  "end": 2150
                },
                "accessibility": null,
                "static": false,
                "start": 2136,
                "end": 2151
              },
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
                  "start": 2152,
                  "end": 2157
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2159,
                    "end": 2165
                  },
                  "start": 2157,
                  "end": 2165
                },
                "accessibility": null,
                "static": false,
                "start": 2152,
                "end": 2165
              }
            ],
            "start": 2134,
            "end": 2167
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2176,
                  "end": 2180
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 2182,
                      "end": 2190
                    },
                    "start": 2182,
                    "end": 2190
                  },
                  "start": 2180,
                  "end": 2190
                },
                "accessibility": null,
                "static": false,
                "start": 2176,
                "end": 2191
              },
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
                  "start": 2192,
                  "end": 2197
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2199,
                    "end": 2205
                  },
                  "start": 2197,
                  "end": 2205
                },
                "accessibility": null,
                "static": false,
                "start": 2192,
                "end": 2205
              }
            ],
            "start": 2174,
            "end": 2207
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2216,
                  "end": 2220
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "'boolean'",
                      "start": 2222,
                      "end": 2231
                    },
                    "start": 2222,
                    "end": 2231
                  },
                  "start": 2220,
                  "end": 2231
                },
                "accessibility": null,
                "static": false,
                "start": 2216,
                "end": 2232
              },
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
                  "start": 2233,
                  "end": 2238
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2240,
                    "end": 2247
                  },
                  "start": 2238,
                  "end": 2247
                },
                "accessibility": null,
                "static": false,
                "start": 2233,
                "end": 2247
              }
            ],
            "start": 2214,
            "end": 2249
          }
        ],
        "start": 2132,
        "end": 2249
      },
      "declare": false,
      "start": 2108,
      "end": 2250
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2261,
        "end": 2265
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RuntimeValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2269,
                    "end": 2281
                  },
                  "typeArguments": null,
                  "start": 2269,
                  "end": 2281
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2286,
                        "end": 2290
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "number",
                            "raw": "'number'",
                            "start": 2292,
                            "end": 2300
                          },
                          "start": 2292,
                          "end": 2300
                        },
                        "start": 2290,
                        "end": 2300
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2286,
                      "end": 2300
                    }
                  ],
                  "start": 2284,
                  "end": 2302
                }
              ],
              "start": 2269,
              "end": 2302
            },
            "start": 2267,
            "end": 2302
          },
          "start": 2266,
          "end": 2302
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2314,
                  "end": 2315
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2316,
                  "end": 2320
                },
                "optional": false,
                "computed": false,
                "start": 2314,
                "end": 2320
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 2325,
                "end": 2333
              },
              "start": 2314,
              "end": 2333
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2345,
                      "end": 2346
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2347,
                      "end": 2352
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2345,
                    "end": 2352
                  },
                  "directive": null,
                  "start": 2345,
                  "end": 2353
                }
              ],
              "start": 2335,
              "end": 2370
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2390,
                      "end": 2391
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2392,
                      "end": 2397
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2390,
                    "end": 2397
                  },
                  "directive": null,
                  "start": 2390,
                  "end": 2398
                }
              ],
              "start": 2380,
              "end": 2415
            },
            "start": 2310,
            "end": 2415
          }
        ],
        "start": 2304,
        "end": 2417
      },
      "expression": false,
      "start": 2252,
      "end": 2417
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2428,
        "end": 2432
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RuntimeValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2436,
                    "end": 2448
                  },
                  "typeArguments": null,
                  "start": 2436,
                  "end": 2448
                },
                {
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
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2454,
                            "end": 2458
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "number",
                                "raw": "'number'",
                                "start": 2460,
                                "end": 2468
                              },
                              "start": 2460,
                              "end": 2468
                            },
                            "start": 2458,
                            "end": 2468
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2454,
                          "end": 2468
                        }
                      ],
                      "start": 2452,
                      "end": 2470
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
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2475,
                            "end": 2479
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "'string'",
                                "start": 2481,
                                "end": 2489
                              },
                              "start": 2481,
                              "end": 2489
                            },
                            "start": 2479,
                            "end": 2489
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2475,
                          "end": 2489
                        }
                      ],
                      "start": 2473,
                      "end": 2491
                    }
                  ],
                  "start": 2452,
                  "end": 2491
                }
              ],
              "start": 2436,
              "end": 2492
            },
            "start": 2434,
            "end": 2492
          },
          "start": 2433,
          "end": 2492
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2504,
                  "end": 2505
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2506,
                  "end": 2510
                },
                "optional": false,
                "computed": false,
                "start": 2504,
                "end": 2510
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 2515,
                "end": 2523
              },
              "start": 2504,
              "end": 2523
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2535,
                      "end": 2536
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2537,
                      "end": 2542
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2535,
                    "end": 2542
                  },
                  "directive": null,
                  "start": 2535,
                  "end": 2543
                }
              ],
              "start": 2525,
              "end": 2560
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2580,
                      "end": 2581
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2582,
                      "end": 2587
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2580,
                    "end": 2587
                  },
                  "directive": null,
                  "start": 2580,
                  "end": 2588
                }
              ],
              "start": 2570,
              "end": 2605
            },
            "start": 2500,
            "end": 2605
          }
        ],
        "start": 2494,
        "end": 2607
      },
      "expression": false,
      "start": 2419,
      "end": 2607
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2607
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
    "value": "f10",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 25,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 120,
    "end": 123
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 156,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 172,
    "end": 175
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 176,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "x",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 236,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 261,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 284,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 290,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 312,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 318,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Keyword",
    "value": "switch",
    "start": 345,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 371,
    "end": 375
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 376,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 412,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 427,
    "end": 431
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 432,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 451,
    "end": 452
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
    "value": "break",
    "start": 467,
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
    "value": "default",
    "start": 482,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Punctuator",
    "value": "}",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 517,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 526,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Null",
    "value": "null",
    "start": 538,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 547,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 563,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 574,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 597,
    "end": 598
  },
  {
    "type": "Null",
    "value": "null",
    "start": 599,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 603,
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
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 635,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Numeric",
    "value": "0",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 665,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 687,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 703,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 711,
    "end": 714
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 729,
    "end": 730
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
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 752,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 757,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 771,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 779,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 790,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 805,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 812,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "function",
    "start": 822,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 831,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 838,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 845,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 860,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 867,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 886,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 903,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 920,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 926,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 944,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 950,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 957,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 964,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 970,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 977,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 981,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 986,
    "end": 987
  },
  {
    "type": "String",
    "value": "\"boom\"",
    "start": 987,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1022,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "WithError",
    "start": 1032,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1048,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1055,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1065,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1071,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1079,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "WithoutError",
    "start": 1089,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 1102,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1114,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1121,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1130,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 1136,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1144,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "DataCarrier",
    "start": 1149,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 1161,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "WithError",
    "start": 1169,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "WithoutError",
    "start": 1181,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 1194,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1201,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1210,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 1214,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "carrier",
    "start": 1220,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "DataCarrier",
    "start": 1229,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 1241,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1254,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "carrier",
    "start": 1258,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1266,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1276,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1292,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1298,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1305,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "carrier",
    "start": 1312,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1320,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1334,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1340,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 1346,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "carrier",
    "start": 1353,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1361,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1372,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1387,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1393,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1400,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "carrier",
    "start": 1408,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1416,
    "end": 1421
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1430,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1436,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1442,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "carrier",
    "start": 1449,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1457,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1493,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1498,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1506,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1511,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1520,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1533,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1538,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "number",
    "start": 1548,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1565,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1574,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1585,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "f30",
    "start": 1594,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1598,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1603,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1614,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1618,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1637,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1652,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1667,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1681,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "f31",
    "start": 1690,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1694,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1699,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1710,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1714,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1718,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1722,
    "end": 1725
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1726,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1742,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1757,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1772,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1808,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1823,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1829,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1838,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1844,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1853,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1868,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1874,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1883,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1889,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1898,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1913,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 1919,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1928,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1945,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 1950,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1968,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "problem",
    "start": 1979,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 1988,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2009,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "problem",
    "start": 2013,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2021,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2026,
    "end": 2029
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 2030,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "problem",
    "start": 2045,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2053,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2069,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "problem",
    "start": 2084,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 2092,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2108,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "RuntimeValue",
    "start": 2113,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2136,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 2142,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2152,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2159,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2176,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 2182,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2192,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2199,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2216,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 2222,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2233,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2240,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2252,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2261,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "RuntimeValue",
    "start": 2269,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2286,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 2292,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2310,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2316,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2321,
    "end": 2324
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 2325,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2347,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2375,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2392,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2419,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2428,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "RuntimeValue",
    "start": 2436,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2454,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 2460,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2475,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 2481,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2500,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2506,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2511,
    "end": 2514
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 2515,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2537,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2565,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2582,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2606,
    "end": 2607
  }
]
```
