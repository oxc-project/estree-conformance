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
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 19,
                    "end": 20
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 23,
                      "end": 29
                    },
                    "start": 21,
                    "end": 29
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 19,
                  "end": 29
                }
              ],
              "start": 17,
              "end": 31
            },
            "start": 15,
            "end": 31
          },
          "start": 12,
          "end": 31
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
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 46
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 48
              },
              "optional": false,
              "computed": false,
              "start": 43,
              "end": 48
            },
            "consequent": {
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
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 63
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 66,
                      "end": 68
                    },
                    "start": 60,
                    "end": 68
                  },
                  "directive": null,
                  "start": 60,
                  "end": 69
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
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 84
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 87,
                          "end": 90
                        },
                        "property": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 91,
                          "end": 94
                        },
                        "optional": false,
                        "computed": true,
                        "start": 87,
                        "end": 95
                      },
                      "definite": false,
                      "start": 82,
                      "end": 95
                    }
                  ],
                  "declare": false,
                  "start": 78,
                  "end": 96
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
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 132,
                        "end": 134
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 137,
                          "end": 140
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 141,
                          "end": 142
                        },
                        "optional": false,
                        "computed": false,
                        "start": 137,
                        "end": 142
                      },
                      "definite": false,
                      "start": 132,
                      "end": 142
                    }
                  ],
                  "declare": false,
                  "start": 128,
                  "end": 143
                }
              ],
              "start": 50,
              "end": 172
            },
            "alternate": null,
            "start": 39,
            "end": 172
          }
        ],
        "start": 33,
        "end": 174
      },
      "expression": false,
      "start": 0,
      "end": 174
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 187
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 194,
                      "end": 200
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 202,
                      "end": 208
                    }
                  ],
                  "start": 193,
                  "end": 209
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNullKeyword",
                    "start": 212,
                    "end": 216
                  },
                  "start": 212,
                  "end": 218
                }
              ],
              "start": 193,
              "end": 218
            },
            "start": 191,
            "end": 218
          },
          "start": 188,
          "end": 218
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
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 232
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 238
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 239,
                    "end": 240
                  },
                  "optional": false,
                  "computed": true,
                  "start": 235,
                  "end": 241
                },
                "definite": false,
                "start": 230,
                "end": 241
              }
            ],
            "declare": false,
            "start": 226,
            "end": 242
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
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 269,
                  "end": 271
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 274,
                    "end": 277
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 278,
                    "end": 279
                  },
                  "optional": false,
                  "computed": true,
                  "start": 274,
                  "end": 280
                },
                "definite": false,
                "start": 269,
                "end": 280
              }
            ],
            "declare": false,
            "start": 265,
            "end": 281
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 309,
                      "end": 311
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 313,
                      "end": 315
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 316
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 322
                },
                "definite": false,
                "start": 308,
                "end": 322
              }
            ],
            "declare": false,
            "start": 304,
            "end": 323
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 330,
                    "end": 332
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 334,
                    "end": 336
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 337
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 343
              },
              "start": 329,
              "end": 343
            },
            "directive": null,
            "start": 328,
            "end": 345
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 357
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 358,
                  "end": 359
                },
                "optional": false,
                "computed": true,
                "start": 354,
                "end": 360
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 367
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 368,
                  "end": 369
                },
                "optional": false,
                "computed": true,
                "start": 364,
                "end": 370
              },
              "start": 354,
              "end": 370
            },
            "consequent": {
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
                        "name": "c0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 386,
                        "end": 388
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 391,
                          "end": 394
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 395,
                          "end": 396
                        },
                        "optional": false,
                        "computed": true,
                        "start": 391,
                        "end": 397
                      },
                      "definite": false,
                      "start": 386,
                      "end": 397
                    }
                  ],
                  "declare": false,
                  "start": 382,
                  "end": 398
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
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 422,
                        "end": 424
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 427,
                          "end": 430
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 431,
                          "end": 432
                        },
                        "optional": false,
                        "computed": true,
                        "start": 427,
                        "end": 433
                      },
                      "definite": false,
                      "start": 422,
                      "end": 433
                    }
                  ],
                  "declare": false,
                  "start": 418,
                  "end": 434
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 459,
                            "end": 461
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 463,
                            "end": 465
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 458,
                        "end": 466
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 469,
                        "end": 472
                      },
                      "definite": false,
                      "start": 458,
                      "end": 472
                    }
                  ],
                  "declare": false,
                  "start": 454,
                  "end": 473
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 486
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 488,
                          "end": 490
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 483,
                      "end": 491
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 497
                    },
                    "start": 483,
                    "end": 497
                  },
                  "directive": null,
                  "start": 482,
                  "end": 499
                }
              ],
              "start": 372,
              "end": 505
            },
            "alternate": null,
            "start": 350,
            "end": 505
          }
        ],
        "start": 220,
        "end": 507
      },
      "expression": false,
      "start": 176,
      "end": 507
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 518,
        "end": 520
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 528,
                    "end": 529
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 532,
                      "end": 538
                    },
                    "start": 530,
                    "end": 538
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 528,
                  "end": 539
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
                    "start": 540,
                    "end": 541
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 544,
                      "end": 550
                    },
                    "start": 542,
                    "end": 550
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 540,
                  "end": 550
                }
              ],
              "start": 526,
              "end": 552
            },
            "start": 524,
            "end": 552
          },
          "start": 521,
          "end": 552
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 564,
                  "end": 567
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 569
                },
                "optional": false,
                "computed": false,
                "start": 564,
                "end": 569
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 576
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 577,
                  "end": 578
                },
                "optional": false,
                "computed": false,
                "start": 573,
                "end": 578
              },
              "start": 564,
              "end": 578
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 596,
                              "end": 597
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 596,
                              "end": 597
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 596,
                            "end": 597
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
                              "start": 599,
                              "end": 600
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 599,
                              "end": 600
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 599,
                            "end": 600
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 594,
                        "end": 602
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 605,
                        "end": 608
                      },
                      "definite": false,
                      "start": 594,
                      "end": 608
                    }
                  ],
                  "declare": false,
                  "start": 590,
                  "end": 609
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
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
                            "start": 640,
                            "end": 641
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 640,
                            "end": 641
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 640,
                          "end": 641
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
                            "start": 643,
                            "end": 644
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 643,
                            "end": 644
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 643,
                          "end": 644
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 638,
                      "end": 646
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 649,
                      "end": 652
                    },
                    "start": 638,
                    "end": 652
                  },
                  "directive": null,
                  "start": 637,
                  "end": 654
                }
              ],
              "start": 580,
              "end": 660
            },
            "alternate": null,
            "start": 560,
            "end": 660
          }
        ],
        "start": 554,
        "end": 662
      },
      "expression": false,
      "start": 509,
      "end": 662
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 675
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 691,
                      "end": 698
                    },
                    "start": 689,
                    "end": 698
                  },
                  "start": 688,
                  "end": 698
                },
                "init": null,
                "definite": false,
                "start": 688,
                "end": 698
              }
            ],
            "declare": false,
            "start": 684,
            "end": 699
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 707,
                      "end": 708
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 707,
                      "end": 708
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 707,
                    "end": 708
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 710
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 713,
                "end": 714
              },
              "start": 705,
              "end": 714
            },
            "directive": null,
            "start": 704,
            "end": 716
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 735,
                      "end": 738
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 741,
                      "end": 742
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 734,
                    "end": 742
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 744
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 747,
                "end": 748
              },
              "start": 732,
              "end": 748
            },
            "directive": null,
            "start": 731,
            "end": 750
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 769,
                        "end": 772
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 775,
                        "end": 777
                      },
                      "start": 769,
                      "end": 777
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 780,
                      "end": 781
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 768,
                    "end": 781
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 766,
                "end": 783
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 786,
                "end": 787
              },
              "start": 766,
              "end": 787
            },
            "directive": null,
            "start": 765,
            "end": 789
          }
        ],
        "start": 678,
        "end": 801
      },
      "expression": false,
      "start": 664,
      "end": 801
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeyValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 830,
        "end": 838
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 842,
            "end": 848
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 850,
              "end": 856
            },
            "start": 850,
            "end": 857
          }
        ],
        "start": 841,
        "end": 858
      },
      "declare": false,
      "start": 825,
      "end": 859
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 865,
                "end": 868
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 870,
                "end": 875
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KeyValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 878,
                  "end": 886
                },
                "typeArguments": null,
                "start": 878,
                "end": 886
              },
              "start": 876,
              "end": 886
            },
            "start": 864,
            "end": 886
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 890,
                "end": 895
              }
            ],
            "start": 889,
            "end": 896
          },
          "definite": false,
          "start": 864,
          "end": 896
        }
      ],
      "declare": false,
      "start": 860,
      "end": 897
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
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 898,
            "end": 903
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 904,
            "end": 915
          },
          "optional": false,
          "computed": false,
          "start": 898,
          "end": 915
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 898,
        "end": 917
      },
      "directive": null,
      "start": 898,
      "end": 918
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 928
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
    "value": "obj",
    "start": 12,
    "end": 15
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
    "value": "a",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
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
    "value": ")",
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
    "type": "Keyword",
    "value": "if",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 78,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 90,
    "end": 91
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 176,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 210,
    "end": 211
  },
  {
    "type": "Null",
    "value": "null",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 226,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 230,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 238,
    "end": 239
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 277,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 309,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 313,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "obj",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 361,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 364,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 367,
    "end": 368
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 369,
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
    "type": "Keyword",
    "value": "let",
    "start": 382,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 386,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 394,
    "end": 395
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "let",
    "start": 418,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 422,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 427,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 430,
    "end": 431
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 454,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "d0",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 463,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 469,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 484,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 488,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 494,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 509,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 518,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 521,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "a",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 532,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "?",
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
    "value": "string",
    "start": 544,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 560,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 570,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 573,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 590,
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
    "value": ",",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 649,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 664,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 673,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 684,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 691,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 711,
    "end": 712
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 734,
    "end": 735
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 735,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 745,
    "end": 746
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 768,
    "end": 769
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 769,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 773,
    "end": 774
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 775,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "x",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 784,
    "end": 785
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 825,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "KeyValue",
    "start": 830,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 842,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 850,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 860,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 865,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 870,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 875,
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
    "value": "KeyValue",
    "start": 878,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 889,
    "end": 890
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 890,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 898,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 904,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 915,
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
    "value": ";",
    "start": 917,
    "end": 918
  }
]
```
