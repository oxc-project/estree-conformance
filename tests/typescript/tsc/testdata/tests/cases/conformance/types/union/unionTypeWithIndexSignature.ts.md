__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 13,
                  "end": 16
                },
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
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 20,
                          "end": 23
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 25,
                              "end": 29
                            },
                            "start": 25,
                            "end": 29
                          },
                          "start": 23,
                          "end": 29
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 20,
                        "end": 29
                      }
                    ],
                    "start": 18,
                    "end": 31
                  },
                  "start": 16,
                  "end": 31
                },
                "accessibility": null,
                "static": false,
                "start": 13,
                "end": 32
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 36
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 38,
                      "end": 42
                    },
                    "start": 38,
                    "end": 42
                  },
                  "start": 36,
                  "end": 42
                },
                "accessibility": null,
                "static": false,
                "start": 33,
                "end": 42
              }
            ],
            "start": 11,
            "end": 44
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 53,
                        "end": 59
                      },
                      "start": 51,
                      "end": 59
                    },
                    "start": 50,
                    "end": 59
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
                  },
                  "start": 60,
                  "end": 68
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 49,
                "end": 68
              }
            ],
            "start": 47,
            "end": 70
          }
        ],
        "start": 11,
        "end": 70
      },
      "declare": false,
      "start": 0,
      "end": 71
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
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Two",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 90
                },
                "typeArguments": null,
                "start": 87,
                "end": 90
              },
              "start": 85,
              "end": 90
            },
            "start": 84,
            "end": 90
          },
          "init": null,
          "definite": false,
          "start": 84,
          "end": 90
        }
      ],
      "declare": true,
      "start": 72,
      "end": 90
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
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 92
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 96
          },
          "optional": false,
          "computed": false,
          "start": 91,
          "end": 96
        },
        "right": {
          "type": "Literal",
          "value": "bye",
          "raw": "'bye'",
          "start": 99,
          "end": 104
        },
        "start": 91,
        "end": 104
      },
      "directive": null,
      "start": 91,
      "end": 104
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
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 106
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 110
          },
          "optional": false,
          "computed": false,
          "start": 105,
          "end": 110
        },
        "right": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 113,
          "end": 117
        },
        "start": 105,
        "end": 117
      },
      "directive": null,
      "start": 105,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Three",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 128
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 136
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 138,
                    "end": 144
                  },
                  "start": 136,
                  "end": 144
                },
                "accessibility": null,
                "static": false,
                "start": 133,
                "end": 144
              }
            ],
            "start": 131,
            "end": 146
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 155,
                        "end": 161
                      },
                      "start": 153,
                      "end": 161
                    },
                    "start": 152,
                    "end": 161
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  },
                  "start": 162,
                  "end": 170
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 151,
                "end": 170
              }
            ],
            "start": 149,
            "end": 172
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      },
                      "start": 179,
                      "end": 187
                    },
                    "start": 178,
                    "end": 187
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 190,
                    "end": 197
                  },
                  "start": 188,
                  "end": 197
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 177,
                "end": 197
              }
            ],
            "start": 175,
            "end": 199
          }
        ],
        "start": 131,
        "end": 199
      },
      "declare": false,
      "start": 118,
      "end": 200
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 221
                },
                "typeArguments": null,
                "start": 216,
                "end": 221
              },
              "start": 214,
              "end": 221
            },
            "start": 213,
            "end": 221
          },
          "init": null,
          "definite": false,
          "start": 213,
          "end": 221
        }
      ],
      "declare": true,
      "start": 201,
      "end": 221
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 223
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 227
          },
          "optional": false,
          "computed": false,
          "start": 222,
          "end": 227
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 230,
          "end": 235
        },
        "start": 222,
        "end": 235
      },
      "directive": null,
      "start": 222,
      "end": 235
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Missing",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 248
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 256
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 258,
                    "end": 264
                  },
                  "start": 256,
                  "end": 264
                },
                "accessibility": null,
                "static": false,
                "start": 253,
                "end": 265
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 269
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 271,
                      "end": 275
                    },
                    "start": 271,
                    "end": 275
                  },
                  "start": 269,
                  "end": 275
                },
                "accessibility": null,
                "static": false,
                "start": 266,
                "end": 275
              }
            ],
            "start": 251,
            "end": 277
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 286,
                        "end": 292
                      },
                      "start": 284,
                      "end": 292
                    },
                    "start": 283,
                    "end": 292
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 295,
                    "end": 301
                  },
                  "start": 293,
                  "end": 301
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 282,
                "end": 301
              }
            ],
            "start": 280,
            "end": 303
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 311
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 313,
                    "end": 320
                  },
                  "start": 311,
                  "end": 320
                },
                "accessibility": null,
                "static": false,
                "start": 308,
                "end": 320
              }
            ],
            "start": 306,
            "end": 322
          }
        ],
        "start": 251,
        "end": 322
      },
      "declare": false,
      "start": 236,
      "end": 322
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Missing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 338,
                  "end": 345
                },
                "typeArguments": null,
                "start": 338,
                "end": 345
              },
              "start": 336,
              "end": 345
            },
            "start": 335,
            "end": 345
          },
          "init": null,
          "definite": false,
          "start": 335,
          "end": 345
        }
      ],
      "declare": true,
      "start": 323,
      "end": 345
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 346,
            "end": 347
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 351
          },
          "optional": false,
          "computed": false,
          "start": 346,
          "end": 351
        },
        "right": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 354,
          "end": 358
        },
        "start": 346,
        "end": 358
      },
      "directive": null,
      "start": 346,
      "end": 358
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 359,
          "end": 360
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 361,
          "end": 364
        },
        "optional": false,
        "computed": false,
        "start": 359,
        "end": 364
      },
      "directive": null,
      "start": 359,
      "end": 364
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RO",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 372
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 380
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 382,
                    "end": 388
                  },
                  "start": 380,
                  "end": 388
                },
                "accessibility": null,
                "static": false,
                "start": 377,
                "end": 388
              }
            ],
            "start": 375,
            "end": 390
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 408,
                        "end": 414
                      },
                      "start": 406,
                      "end": 414
                    },
                    "start": 405,
                    "end": 414
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 417,
                    "end": 423
                  },
                  "start": 415,
                  "end": 423
                },
                "readonly": true,
                "static": false,
                "accessibility": null,
                "start": 395,
                "end": 423
              }
            ],
            "start": 393,
            "end": 425
          }
        ],
        "start": 375,
        "end": 425
      },
      "declare": false,
      "start": 365,
      "end": 425
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
            "name": "ro",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RO",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 444
                },
                "typeArguments": null,
                "start": 442,
                "end": 444
              },
              "start": 440,
              "end": 444
            },
            "start": 438,
            "end": 444
          },
          "init": null,
          "definite": false,
          "start": 438,
          "end": 444
        }
      ],
      "declare": true,
      "start": 426,
      "end": 444
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
            "name": "ro",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 447
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 451
          },
          "optional": false,
          "computed": false,
          "start": 445,
          "end": 451
        },
        "right": {
          "type": "Literal",
          "value": "not allowed",
          "raw": "'not allowed'",
          "start": 454,
          "end": 467
        },
        "start": 445,
        "end": 467
      },
      "directive": null,
      "start": 445,
      "end": 467
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Num",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 476
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
                  "type": "Literal",
                  "value": "0",
                  "raw": "'0'",
                  "start": 481,
                  "end": 484
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 486,
                    "end": 492
                  },
                  "start": 484,
                  "end": 492
                },
                "accessibility": null,
                "static": false,
                "start": 481,
                "end": 492
              }
            ],
            "start": 479,
            "end": 494
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 503,
                        "end": 509
                      },
                      "start": 501,
                      "end": 509
                    },
                    "start": 500,
                    "end": 509
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 512,
                    "end": 518
                  },
                  "start": 510,
                  "end": 518
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 499,
                "end": 518
              }
            ],
            "start": 497,
            "end": 520
          }
        ],
        "start": 479,
        "end": 520
      },
      "declare": false,
      "start": 468,
      "end": 520
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 538,
                  "end": 541
                },
                "typeArguments": null,
                "start": 538,
                "end": 541
              },
              "start": 536,
              "end": 541
            },
            "start": 533,
            "end": 541
          },
          "init": null,
          "definite": false,
          "start": 533,
          "end": 541
        }
      ],
      "declare": true,
      "start": 521,
      "end": 541
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
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 545
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 546,
            "end": 547
          },
          "optional": false,
          "computed": true,
          "start": 542,
          "end": 548
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 551,
          "end": 552
        },
        "start": 542,
        "end": 552
      },
      "directive": null,
      "start": 542,
      "end": 552
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
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 556
          },
          "property": {
            "type": "Literal",
            "value": "0",
            "raw": "'0'",
            "start": 557,
            "end": 560
          },
          "optional": false,
          "computed": true,
          "start": 553,
          "end": 561
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "'ok'",
          "start": 564,
          "end": 568
        },
        "start": 553,
        "end": 568
      },
      "directive": null,
      "start": 553,
      "end": 568
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
            "name": "sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 578
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 587
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 581,
            "end": 589
          },
          "definite": false,
          "start": 575,
          "end": 589
        }
      ],
      "declare": false,
      "start": 569,
      "end": 589
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 599
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 605
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 607,
                    "end": 613
                  },
                  "start": 605,
                  "end": 613
                },
                "accessibility": null,
                "static": false,
                "start": 604,
                "end": 614
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Literal",
                  "value": "0",
                  "raw": "'0'",
                  "start": 615,
                  "end": 618
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 620,
                    "end": 626
                  },
                  "start": 618,
                  "end": 626
                },
                "accessibility": null,
                "static": false,
                "start": 615,
                "end": 627
              },
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
                  "start": 629,
                  "end": 632
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 635,
                    "end": 642
                  },
                  "start": 633,
                  "end": 642
                },
                "accessibility": null,
                "static": false,
                "start": 628,
                "end": 642
              }
            ],
            "start": 602,
            "end": 644
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
                    "name": "n",
                    "optional": false,
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
                    "start": 650,
                    "end": 659
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 662,
                    "end": 668
                  },
                  "start": 660,
                  "end": 668
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 649,
                "end": 669
              },
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 674,
                        "end": 680
                      },
                      "start": 672,
                      "end": 680
                    },
                    "start": 671,
                    "end": 680
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 683,
                        "end": 689
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 692,
                        "end": 698
                      }
                    ],
                    "start": 683,
                    "end": 698
                  },
                  "start": 681,
                  "end": 698
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 670,
                "end": 698
              }
            ],
            "start": 647,
            "end": 700
          }
        ],
        "start": 602,
        "end": 700
      },
      "declare": false,
      "start": 590,
      "end": 700
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
            "name": "both",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Both",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 719,
                  "end": 723
                },
                "typeArguments": null,
                "start": 719,
                "end": 723
              },
              "start": 717,
              "end": 723
            },
            "start": 713,
            "end": 723
          },
          "init": null,
          "definite": false,
          "start": 713,
          "end": 723
        }
      ],
      "declare": true,
      "start": 701,
      "end": 723
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
            "name": "both",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 728
          },
          "property": {
            "type": "Literal",
            "value": "s",
            "raw": "'s'",
            "start": 729,
            "end": 732
          },
          "optional": false,
          "computed": true,
          "start": 724,
          "end": 733
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "'ok'",
          "start": 736,
          "end": 740
        },
        "start": 724,
        "end": 740
      },
      "directive": null,
      "start": 724,
      "end": 740
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
            "name": "both",
            "optional": false,
            "typeAnnotation": null,
            "start": 741,
            "end": 745
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 746,
            "end": 747
          },
          "optional": false,
          "computed": true,
          "start": 741,
          "end": 748
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 751,
          "end": 752
        },
        "start": 741,
        "end": 752
      },
      "directive": null,
      "start": 741,
      "end": 752
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
            "name": "both",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 757
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 758,
            "end": 759
          },
          "optional": false,
          "computed": true,
          "start": 753,
          "end": 760
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 763,
          "end": 764
        },
        "start": 753,
        "end": 764
      },
      "directive": null,
      "start": 753,
      "end": 764
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
            "name": "both",
            "optional": false,
            "typeAnnotation": null,
            "start": 775,
            "end": 779
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 780,
            "end": 781
          },
          "optional": false,
          "computed": true,
          "start": 775,
          "end": 782
        },
        "right": {
          "type": "Literal",
          "value": "not ok",
          "raw": "'not ok'",
          "start": 785,
          "end": 793
        },
        "start": 775,
        "end": 793
      },
      "directive": null,
      "start": 775,
      "end": 793
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
            "name": "both",
            "optional": false,
            "typeAnnotation": null,
            "start": 794,
            "end": 798
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 802
          },
          "optional": false,
          "computed": true,
          "start": 794,
          "end": 803
        },
        "right": {
          "type": "Literal",
          "value": "not ok",
          "raw": "'not ok'",
          "start": 806,
          "end": 814
        },
        "start": 794,
        "end": 814
      },
      "directive": null,
      "start": 794,
      "end": 814
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 814
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
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
    "value": "bar",
    "start": 20,
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
    "value": "true",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 72,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 80,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Two",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "String",
    "value": "'bye'",
    "start": 99,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 113,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 118,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "foo",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "boolean",
    "start": 190,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 201,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "Three",
    "start": 216,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": "foo",
    "start": 224,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 230,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 236,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "Missing",
    "start": 241,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 253,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 258,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 271,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "string",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "foo",
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
    "type": "Identifier",
    "value": "boolean",
    "start": 313,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 323,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 331,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "Missing",
    "start": 338,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 348,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 354,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 361,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 365,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "RO",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 395,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "string",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 426,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "ro",
    "start": 438,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "RO",
    "start": 442,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "ro",
    "start": 445,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 448,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453
  },
  {
    "type": "String",
    "value": "'not allowed'",
    "start": 454,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 468,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 473,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 479,
    "end": 480
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 486,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "number",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 521,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 529,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 538,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 542,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 545,
    "end": 546
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 556,
    "end": 557
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 564,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 569,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 575,
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
    "value": "Symbol",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 590,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "Both",
    "start": 595,
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
    "value": "{",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 607,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 620,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 629,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 635,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "]",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 662,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 674,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 683,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 692,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 701,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 709,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 713,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "Both",
    "start": 719,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 724,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 728,
    "end": 729
  },
  {
    "type": "String",
    "value": "'s'",
    "start": 729,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 736,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 741,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 745,
    "end": 746
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 749,
    "end": 750
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 753,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 757,
    "end": 758
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "both",
    "start": 775,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 779,
    "end": 780
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "String",
    "value": "'not ok'",
    "start": 785,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 794,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 799,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805
  },
  {
    "type": "String",
    "value": "'not ok'",
    "start": 806,
    "end": 814
  }
]
```
