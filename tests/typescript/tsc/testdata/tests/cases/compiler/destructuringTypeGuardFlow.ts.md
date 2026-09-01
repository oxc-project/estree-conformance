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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 18
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 29,
                    "end": 33
                  }
                ],
                "start": 20,
                "end": 33
              },
              "start": 18,
              "end": 33
            },
            "accessibility": null,
            "static": false,
            "start": 15,
            "end": 34
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
              "start": 37,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 42,
                "end": 48
              },
              "start": 40,
              "end": 48
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 49
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 58
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 67
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 69,
                        "end": 75
                      },
                      "start": 67,
                      "end": 75
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 66,
                    "end": 76
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
                      "start": 81,
                      "end": 82
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 84,
                            "end": 90
                          },
                          {
                            "type": "TSNullKeyword",
                            "start": 93,
                            "end": 97
                          }
                        ],
                        "start": 84,
                        "end": 97
                      },
                      "start": 82,
                      "end": 97
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 81,
                    "end": 98
                  }
                ],
                "start": 60,
                "end": 102
              },
              "start": 58,
              "end": 102
            },
            "accessibility": null,
            "static": false,
            "start": 52,
            "end": 102
          }
        ],
        "start": 11,
        "end": 104
      },
      "declare": false,
      "start": 0,
      "end": 105
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
            "name": "aFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 122
                },
                "typeArguments": null,
                "start": 119,
                "end": 122
              },
              "start": 117,
              "end": 122
            },
            "start": 113,
            "end": 122
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 130
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 132,
                  "end": 133
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 127,
                "end": 133
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 138
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 140,
                  "end": 143
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 135,
                "end": 143
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 151
                },
                "value": {
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
                        "start": 155,
                        "end": 156
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 158,
                        "end": 159
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 155,
                      "end": 159
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
                        "start": 161,
                        "end": 162
                      },
                      "value": {
                        "type": "Literal",
                        "value": "y",
                        "raw": "\"y\"",
                        "start": 164,
                        "end": 167
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 161,
                      "end": 167
                    }
                  ],
                  "start": 153,
                  "end": 169
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 145,
                "end": 169
              }
            ],
            "start": 125,
            "end": 171
          },
          "definite": false,
          "start": 113,
          "end": 171
        }
      ],
      "declare": false,
      "start": 107,
      "end": 172
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "aFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 182
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 186
          },
          "optional": false,
          "computed": false,
          "start": 178,
          "end": 186
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "aFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 194
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 201
            },
            "optional": false,
            "computed": false,
            "start": 190,
            "end": 201
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 203
          },
          "optional": false,
          "computed": false,
          "start": 190,
          "end": 203
        },
        "start": 178,
        "end": 203
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 220
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 220
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 217,
                      "end": 220
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 225
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 225
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 222,
                      "end": 225
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nested",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 227,
                        "end": 233
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "decorators": [],
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
                              "start": 236,
                              "end": 237
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 236,
                              "end": 237
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 236,
                            "end": 237
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
                              "start": 239,
                              "end": 240
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "text",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 242,
                              "end": 246
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 239,
                            "end": 246
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 235,
                        "end": 247
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 227,
                      "end": 247
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 249
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 256
                },
                "definite": false,
                "start": 215,
                "end": 256
              }
            ],
            "declare": false,
            "start": 209,
            "end": 257
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
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 273,
                      "end": 279
                    },
                    "start": 271,
                    "end": 279
                  },
                  "start": 266,
                  "end": 279
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "aFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 286
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 287,
                    "end": 290
                  },
                  "optional": false,
                  "computed": false,
                  "start": 282,
                  "end": 290
                },
                "definite": false,
                "start": 266,
                "end": 290
              }
            ],
            "declare": false,
            "start": 260,
            "end": 291
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
                  "name": "wrong",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 307,
                      "end": 313
                    },
                    "start": 305,
                    "end": 313
                  },
                  "start": 300,
                  "end": 313
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 319
                },
                "definite": false,
                "start": 300,
                "end": 319
              }
            ],
            "declare": false,
            "start": 294,
            "end": 320
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
                  "name": "another",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 338,
                      "end": 344
                    },
                    "start": 336,
                    "end": 344
                  },
                  "start": 329,
                  "end": 344
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 350
                },
                "definite": false,
                "start": 329,
                "end": 350
              }
            ],
            "declare": false,
            "start": 323,
            "end": 351
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
                  "name": "aAgain",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 368,
                      "end": 374
                    },
                    "start": 366,
                    "end": 374
                  },
                  "start": 360,
                  "end": 374
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 378
                },
                "definite": false,
                "start": 360,
                "end": 378
              }
            ],
            "declare": false,
            "start": 354,
            "end": 379
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
                  "name": "bAgain",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 396,
                      "end": 402
                    },
                    "start": 394,
                    "end": 402
                  },
                  "start": 388,
                  "end": 402
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 409
                },
                "definite": false,
                "start": 388,
                "end": 409
              }
            ],
            "declare": false,
            "start": 382,
            "end": 410
          }
        ],
        "start": 205,
        "end": 412
      },
      "alternate": null,
      "start": 174,
      "end": 412
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 422
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
              "name": "elem1",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 434
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 436,
                    "end": 442
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 445,
                    "end": 449
                  }
                ],
                "start": 436,
                "end": 449
              },
              "start": 434,
              "end": 449
            },
            "accessibility": null,
            "static": false,
            "start": 429,
            "end": 450
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "elem2",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 458
            },
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 460,
                      "end": 463
                    },
                    "typeArguments": null,
                    "start": 460,
                    "end": 463
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 466,
                    "end": 470
                  }
                ],
                "start": 460,
                "end": 470
              },
              "start": 458,
              "end": 470
            },
            "accessibility": null,
            "static": false,
            "start": 453,
            "end": 471
          }
        ],
        "start": 425,
        "end": 473
      },
      "declare": false,
      "start": 414,
      "end": 474
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
            "name": "bBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 486
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
                  "name": "elem1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 496
                },
                "value": {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 498,
                  "end": 499
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 491,
                "end": 499
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "elem2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 501,
                  "end": 506
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 512
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 501,
                "end": 512
              }
            ],
            "start": 489,
            "end": 514
          },
          "definite": false,
          "start": 482,
          "end": 514
        }
      ],
      "declare": false,
      "start": 476,
      "end": 515
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 525
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "elem2",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 531
            },
            "optional": false,
            "computed": false,
            "start": 521,
            "end": 531
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "bBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 539
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "elem2",
                "optional": false,
                "typeAnnotation": null,
                "start": 540,
                "end": 545
              },
              "optional": false,
              "computed": false,
              "start": 535,
              "end": 545
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 549
            },
            "optional": false,
            "computed": false,
            "start": 535,
            "end": 549
          },
          "start": 521,
          "end": 549
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "bBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 553,
                "end": 557
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "elem2",
                "optional": false,
                "typeAnnotation": null,
                "start": 558,
                "end": 563
              },
              "optional": false,
              "computed": false,
              "start": 553,
              "end": 563
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 564,
              "end": 570
            },
            "optional": false,
            "computed": false,
            "start": 553,
            "end": 570
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 571,
            "end": 572
          },
          "optional": false,
          "computed": false,
          "start": 553,
          "end": 572
        },
        "start": 521,
        "end": 572
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 586,
                        "end": 589
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 586,
                        "end": 589
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 586,
                      "end": 589
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 591,
                        "end": 594
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 591,
                        "end": 594
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 591,
                      "end": 594
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nested",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 596,
                        "end": 602
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "decorators": [],
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
                              "start": 605,
                              "end": 606
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 605,
                              "end": 606
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 605,
                            "end": 606
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
                              "start": 608,
                              "end": 609
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "text",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 611,
                              "end": 615
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 608,
                            "end": 615
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 604,
                        "end": 616
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 596,
                      "end": 616
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 618
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bBar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 621,
                    "end": 625
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "elem2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 626,
                    "end": 631
                  },
                  "optional": false,
                  "computed": false,
                  "start": 621,
                  "end": 631
                },
                "definite": false,
                "start": 584,
                "end": 631
              }
            ],
            "declare": false,
            "start": 578,
            "end": 632
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
                  "name": "right",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 648,
                      "end": 654
                    },
                    "start": 646,
                    "end": 654
                  },
                  "start": 641,
                  "end": 654
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bBar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 661
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "elem2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 662,
                      "end": 667
                    },
                    "optional": false,
                    "computed": false,
                    "start": 657,
                    "end": 667
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 668,
                    "end": 671
                  },
                  "optional": false,
                  "computed": false,
                  "start": 657,
                  "end": 671
                },
                "definite": false,
                "start": 641,
                "end": 671
              }
            ],
            "declare": false,
            "start": 635,
            "end": 672
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
                  "name": "wrong",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 688,
                      "end": 694
                    },
                    "start": 686,
                    "end": 694
                  },
                  "start": 681,
                  "end": 694
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 697,
                  "end": 700
                },
                "definite": false,
                "start": 681,
                "end": 700
              }
            ],
            "declare": false,
            "start": 675,
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
                  "name": "another",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 719,
                      "end": 725
                    },
                    "start": 717,
                    "end": 725
                  },
                  "start": 710,
                  "end": 725
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 728,
                  "end": 731
                },
                "definite": false,
                "start": 710,
                "end": 731
              }
            ],
            "declare": false,
            "start": 704,
            "end": 732
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
                  "name": "aAgain",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 749,
                      "end": 755
                    },
                    "start": 747,
                    "end": 755
                  },
                  "start": 741,
                  "end": 755
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 758,
                  "end": 759
                },
                "definite": false,
                "start": 741,
                "end": 759
              }
            ],
            "declare": false,
            "start": 735,
            "end": 760
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
                  "name": "bAgain",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 777,
                      "end": 783
                    },
                    "start": 775,
                    "end": 783
                  },
                  "start": 769,
                  "end": 783
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 786,
                  "end": 790
                },
                "definite": false,
                "start": 769,
                "end": 790
              }
            ],
            "declare": false,
            "start": 763,
            "end": 791
          }
        ],
        "start": 574,
        "end": 793
      },
      "alternate": null,
      "start": 517,
      "end": 793
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 793
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
    "value": "foo",
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
    "value": "bar",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 27,
    "end": 28
  },
  {
    "type": "Null",
    "value": "null",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 91,
    "end": 92
  },
  {
    "type": "Null",
    "value": "null",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "aFoo",
    "start": 113,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "String",
    "value": "\"y\"",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "aFoo",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 187,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "aFoo",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 209,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 222,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "a",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "text",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "aFoo",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 260,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 266,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "aFoo",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 287,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 294,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "wrong",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 316,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 323,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "another",
    "start": 329,
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
    "value": "string",
    "start": 338,
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
    "value": "baz",
    "start": 347,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 354,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "aAgain",
    "start": 360,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 368,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 382,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "bAgain",
    "start": 388,
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
    "value": "string",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 405,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 414,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "elem1",
    "start": 429,
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
    "value": "number",
    "start": 436,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 443,
    "end": 444
  },
  {
    "type": "Null",
    "value": "null",
    "start": 445,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "elem2",
    "start": 453,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 464,
    "end": 465
  },
  {
    "type": "Null",
    "value": "null",
    "start": 466,
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
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 476,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "bBar",
    "start": 482,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "elem1",
    "start": 491,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "elem2",
    "start": 501,
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
    "value": "aFoo",
    "start": 508,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "bBar",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "elem2",
    "start": 526,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 532,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "bBar",
    "start": 535,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "elem2",
    "start": 540,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 546,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 550,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "bBar",
    "start": 553,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "elem2",
    "start": 558,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 564,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 578,
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
    "value": "bar",
    "start": 586,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 591,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 596,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 611,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "bBar",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "elem2",
    "start": 626,
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
    "value": "const",
    "start": 635,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "right",
    "start": 641,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 648,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "bBar",
    "start": 657,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "elem2",
    "start": 662,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 675,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "wrong",
    "start": 681,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 688,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 697,
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
    "start": 704,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "another",
    "start": 710,
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
    "value": "string",
    "start": 719,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 728,
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
    "value": "const",
    "start": 735,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "aAgain",
    "start": 741,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 749,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 763,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "bAgain",
    "start": 769,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 777,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 786,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793
  }
]
```
