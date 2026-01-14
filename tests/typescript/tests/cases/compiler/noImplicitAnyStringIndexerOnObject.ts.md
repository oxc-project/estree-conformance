__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 8,
              "end": 10
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 11,
              "end": 18
            },
            "optional": false,
            "computed": true,
            "start": 8,
            "end": 19
          },
          "definite": false,
          "start": 4,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "start": 25,
            "end": 34
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 39,
                    "end": 41
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 43,
                    "end": 48
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 39,
                  "end": 48
                }
              ],
              "start": 37,
              "end": 50
            },
            "property": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 51,
              "end": 53
            },
            "optional": false,
            "computed": true,
            "start": 37,
            "end": 54
          },
          "definite": false,
          "start": 25,
          "end": 54
        }
      ],
      "declare": false,
      "start": 21,
      "end": 55
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
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
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 72
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
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 80,
                          "end": 86
                        },
                        "start": 78,
                        "end": 86
                      },
                      "start": 75,
                      "end": 86
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "foobar",
                    "raw": "'foobar'",
                    "start": 91,
                    "end": 99
                  },
                  "id": null,
                  "generator": false,
                  "start": 74,
                  "end": 99
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 69,
                "end": 99
              }
            ],
            "start": 65,
            "end": 101
          },
          "definite": false,
          "start": 61,
          "end": 101
        }
      ],
      "declare": false,
      "start": 57,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "property": {
          "type": "Literal",
          "value": "hello",
          "raw": "'hello'",
          "start": 105,
          "end": 112
        },
        "optional": false,
        "computed": true,
        "start": 103,
        "end": 113
      },
      "directive": null,
      "start": 103,
      "end": 114
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 124
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 129,
              "end": 136
            },
            "optional": false,
            "computed": true,
            "start": 127,
            "end": 137
          },
          "definite": false,
          "start": 121,
          "end": 137
        }
      ],
      "declare": false,
      "start": 115,
      "end": 138
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
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
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 155
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
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 163,
                          "end": 169
                        },
                        "start": 161,
                        "end": 169
                      },
                      "start": 158,
                      "end": 169
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "foobar",
                    "raw": "'foobar'",
                    "start": 174,
                    "end": 182
                  },
                  "id": null,
                  "generator": false,
                  "start": 157,
                  "end": 182
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 152,
                "end": 182
              }
            ],
            "start": 148,
            "end": 184
          },
          "definite": false,
          "start": 144,
          "end": 184
        }
      ],
      "declare": false,
      "start": 140,
      "end": 185
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 195
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 200,
              "end": 207
            },
            "optional": false,
            "computed": true,
            "start": 198,
            "end": 208
          },
          "definite": false,
          "start": 192,
          "end": 208
        }
      ],
      "declare": false,
      "start": 186,
      "end": 209
    },
    {
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
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 220
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
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 229,
                      "end": 232
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
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 240,
                              "end": 246
                            },
                            "start": 238,
                            "end": 246
                          },
                          "start": 235,
                          "end": 246
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "foobar",
                        "raw": "'foobar'",
                        "start": 251,
                        "end": 259
                      },
                      "id": null,
                      "generator": false,
                      "start": 234,
                      "end": 259
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 229,
                    "end": 259
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 268
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
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 276,
                              "end": 282
                            },
                            "start": 274,
                            "end": 282
                          },
                          "start": 271,
                          "end": 282
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "foobar",
                        "raw": "'foobar'",
                        "start": 287,
                        "end": 295
                      },
                      "id": null,
                      "generator": false,
                      "start": 270,
                      "end": 295
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 265,
                    "end": 295
                  }
                ],
                "start": 223,
                "end": 299
              },
              "definite": false,
              "start": 219,
              "end": 299
            }
          ],
          "declare": false,
          "start": 215,
          "end": 300
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 304
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 305,
              "end": 312
            },
            "optional": false,
            "computed": true,
            "start": 303,
            "end": 313
          },
          "directive": null,
          "start": 303,
          "end": 314
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
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 318
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 319,
                "end": 326
              },
              "optional": false,
              "computed": true,
              "start": 317,
              "end": 327
            },
            "right": {
              "type": "Literal",
              "value": "modified",
              "raw": "'modified'",
              "start": 330,
              "end": 340
            },
            "start": 317,
            "end": 340
          },
          "directive": null,
          "start": 317,
          "end": 341
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 345
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 346,
                "end": 353
              },
              "optional": false,
              "computed": true,
              "start": 344,
              "end": 354
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 358,
              "end": 359
            },
            "start": 344,
            "end": 359
          },
          "directive": null,
          "start": 344,
          "end": 360
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 364
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 365,
                "end": 372
              },
              "optional": false,
              "computed": true,
              "start": 363,
              "end": 373
            },
            "start": 363,
            "end": 376
          },
          "directive": null,
          "start": 363,
          "end": 377
        }
      ],
      "start": 211,
      "end": 379
    },
    {
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
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 390
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
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 399,
                      "end": 402
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
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 410,
                              "end": 416
                            },
                            "start": 408,
                            "end": 416
                          },
                          "start": 405,
                          "end": 416
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "foobar",
                        "raw": "'foobar'",
                        "start": 421,
                        "end": 429
                      },
                      "id": null,
                      "generator": false,
                      "start": 404,
                      "end": 429
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 399,
                    "end": 429
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 435,
                      "end": 438
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
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 446,
                              "end": 452
                            },
                            "start": 444,
                            "end": 452
                          },
                          "start": 441,
                          "end": 452
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 461,
                              "end": 467
                            },
                            "start": 459,
                            "end": 467
                          },
                          "start": 454,
                          "end": 467
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "foobar",
                        "raw": "'foobar'",
                        "start": 472,
                        "end": 480
                      },
                      "id": null,
                      "generator": false,
                      "start": 440,
                      "end": 480
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 435,
                    "end": 480
                  }
                ],
                "start": 393,
                "end": 484
              },
              "definite": false,
              "start": 389,
              "end": 484
            }
          ],
          "declare": false,
          "start": 385,
          "end": 485
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 490,
              "end": 497
            },
            "optional": false,
            "computed": true,
            "start": 488,
            "end": 498
          },
          "directive": null,
          "start": 488,
          "end": 499
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
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 502,
                "end": 503
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 504,
                "end": 511
              },
              "optional": false,
              "computed": true,
              "start": 502,
              "end": 512
            },
            "right": {
              "type": "Literal",
              "value": "modified",
              "raw": "'modified'",
              "start": 515,
              "end": 525
            },
            "start": 502,
            "end": 525
          },
          "directive": null,
          "start": 502,
          "end": 526
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 530
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 531,
                "end": 538
              },
              "optional": false,
              "computed": true,
              "start": 529,
              "end": 539
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 543,
              "end": 544
            },
            "start": 529,
            "end": 544
          },
          "directive": null,
          "start": 529,
          "end": 545
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 548,
                "end": 549
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 550,
                "end": 557
              },
              "optional": false,
              "computed": true,
              "start": 548,
              "end": 558
            },
            "start": 548,
            "end": 561
          },
          "directive": null,
          "start": 548,
          "end": 562
        }
      ],
      "start": 381,
      "end": 564
    },
    {
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
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 575
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
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 584,
                      "end": 587
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
                                    "value": "hello",
                                    "raw": "\"hello\"",
                                    "start": 595,
                                    "end": 602
                                  },
                                  "start": 595,
                                  "end": 602
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "world",
                                    "raw": "\"world\"",
                                    "start": 605,
                                    "end": 612
                                  },
                                  "start": 605,
                                  "end": 612
                                }
                              ],
                              "start": 595,
                              "end": 612
                            },
                            "start": 593,
                            "end": 612
                          },
                          "start": 590,
                          "end": 612
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "foobar",
                        "raw": "'foobar'",
                        "start": 617,
                        "end": 625
                      },
                      "id": null,
                      "generator": false,
                      "start": 589,
                      "end": 625
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 584,
                    "end": 625
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 631,
                      "end": 634
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
                                    "value": "hello",
                                    "raw": "\"hello\"",
                                    "start": 642,
                                    "end": 649
                                  },
                                  "start": 642,
                                  "end": 649
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "world",
                                    "raw": "\"world\"",
                                    "start": 652,
                                    "end": 659
                                  },
                                  "start": 652,
                                  "end": 659
                                }
                              ],
                              "start": 642,
                              "end": 659
                            },
                            "start": 640,
                            "end": 659
                          },
                          "start": 637,
                          "end": 659
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 668,
                              "end": 674
                            },
                            "start": 666,
                            "end": 674
                          },
                          "start": 661,
                          "end": 674
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "foobar",
                        "raw": "'foobar'",
                        "start": 679,
                        "end": 687
                      },
                      "id": null,
                      "generator": false,
                      "start": 636,
                      "end": 687
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 631,
                    "end": 687
                  }
                ],
                "start": 578,
                "end": 691
              },
              "definite": false,
              "start": 574,
              "end": 691
            }
          ],
          "declare": false,
          "start": 570,
          "end": 692
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 696
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 697,
              "end": 704
            },
            "optional": false,
            "computed": true,
            "start": 695,
            "end": 705
          },
          "directive": null,
          "start": 695,
          "end": 706
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
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 709,
                "end": 710
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 711,
                "end": 718
              },
              "optional": false,
              "computed": true,
              "start": 709,
              "end": 719
            },
            "right": {
              "type": "Literal",
              "value": "modified",
              "raw": "'modified'",
              "start": 722,
              "end": 732
            },
            "start": 709,
            "end": 732
          },
          "directive": null,
          "start": 709,
          "end": 733
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 737
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 738,
                "end": 745
              },
              "optional": false,
              "computed": true,
              "start": 736,
              "end": 746
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 750,
              "end": 751
            },
            "start": 736,
            "end": 751
          },
          "directive": null,
          "start": 736,
          "end": 752
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 755,
                "end": 756
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 757,
                "end": 764
              },
              "optional": false,
              "computed": true,
              "start": 755,
              "end": 765
            },
            "start": 755,
            "end": 768
          },
          "directive": null,
          "start": 755,
          "end": 769
        }
      ],
      "start": 566,
      "end": 771
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 780,
                    "end": 783
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 791,
                            "end": 797
                          },
                          "start": 789,
                          "end": 797
                        },
                        "start": 786,
                        "end": 797
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "'hello'",
                      "start": 802,
                      "end": 809
                    },
                    "id": null,
                    "generator": false,
                    "start": 785,
                    "end": 809
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 780,
                  "end": 809
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 811,
                    "end": 814
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 822,
                            "end": 828
                          },
                          "start": 820,
                          "end": 828
                        },
                        "start": 817,
                        "end": 828
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 837,
                            "end": 843
                          },
                          "start": 835,
                          "end": 843
                        },
                        "start": 830,
                        "end": 843
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 848,
                      "end": 850
                    },
                    "id": null,
                    "generator": false,
                    "start": 816,
                    "end": 850
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 811,
                  "end": 850
                }
              ],
              "start": 778,
              "end": 852
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 854,
              "end": 861
            },
            "optional": false,
            "computed": true,
            "start": 777,
            "end": 862
          },
          "directive": null,
          "start": 777,
          "end": 863
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 869,
                      "end": 872
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
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 880,
                              "end": 886
                            },
                            "start": 878,
                            "end": 886
                          },
                          "start": 875,
                          "end": 886
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 891,
                        "end": 898
                      },
                      "id": null,
                      "generator": false,
                      "start": 874,
                      "end": 898
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 869,
                    "end": 898
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 900,
                      "end": 903
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 911,
                              "end": 917
                            },
                            "start": 909,
                            "end": 917
                          },
                          "start": 906,
                          "end": 917
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 926,
                              "end": 932
                            },
                            "start": 924,
                            "end": 932
                          },
                          "start": 919,
                          "end": 932
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 937,
                        "end": 939
                      },
                      "id": null,
                      "generator": false,
                      "start": 905,
                      "end": 939
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 900,
                    "end": 939
                  }
                ],
                "start": 867,
                "end": 941
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 943,
                "end": 950
              },
              "optional": false,
              "computed": true,
              "start": 866,
              "end": 951
            },
            "right": {
              "type": "Literal",
              "value": "modified",
              "raw": "'modified'",
              "start": 954,
              "end": 964
            },
            "start": 866,
            "end": 964
          },
          "directive": null,
          "start": 866,
          "end": 965
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 971,
                      "end": 974
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
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 982,
                              "end": 988
                            },
                            "start": 980,
                            "end": 988
                          },
                          "start": 977,
                          "end": 988
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 993,
                        "end": 1000
                      },
                      "id": null,
                      "generator": false,
                      "start": 976,
                      "end": 1000
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 971,
                    "end": 1000
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1002,
                      "end": 1005
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1013,
                              "end": 1019
                            },
                            "start": 1011,
                            "end": 1019
                          },
                          "start": 1008,
                          "end": 1019
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1028,
                              "end": 1034
                            },
                            "start": 1026,
                            "end": 1034
                          },
                          "start": 1021,
                          "end": 1034
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1039,
                        "end": 1041
                      },
                      "id": null,
                      "generator": false,
                      "start": 1007,
                      "end": 1041
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1002,
                    "end": 1041
                  }
                ],
                "start": 969,
                "end": 1043
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1045,
                "end": 1052
              },
              "optional": false,
              "computed": true,
              "start": 968,
              "end": 1053
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1057,
              "end": 1058
            },
            "start": 968,
            "end": 1058
          },
          "directive": null,
          "start": 968,
          "end": 1059
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1065,
                      "end": 1068
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
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1076,
                              "end": 1082
                            },
                            "start": 1074,
                            "end": 1082
                          },
                          "start": 1071,
                          "end": 1082
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 1087,
                        "end": 1094
                      },
                      "id": null,
                      "generator": false,
                      "start": 1070,
                      "end": 1094
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1065,
                    "end": 1094
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1096,
                      "end": 1099
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1107,
                              "end": 1113
                            },
                            "start": 1105,
                            "end": 1113
                          },
                          "start": 1102,
                          "end": 1113
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1122,
                              "end": 1128
                            },
                            "start": 1120,
                            "end": 1128
                          },
                          "start": 1115,
                          "end": 1128
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1133,
                        "end": 1135
                      },
                      "id": null,
                      "generator": false,
                      "start": 1101,
                      "end": 1135
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1096,
                    "end": 1135
                  }
                ],
                "start": 1063,
                "end": 1137
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1139,
                "end": 1146
              },
              "optional": false,
              "computed": true,
              "start": 1062,
              "end": 1147
            },
            "start": 1062,
            "end": 1150
          },
          "directive": null,
          "start": 1062,
          "end": 1151
        }
      ],
      "start": 773,
      "end": 1153
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1162,
                      "end": 1165
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
                            "name": "get",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1169,
                            "end": 1172
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
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1180,
                                    "end": 1186
                                  },
                                  "start": 1178,
                                  "end": 1186
                                },
                                "start": 1175,
                                "end": 1186
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "hello",
                              "raw": "'hello'",
                              "start": 1191,
                              "end": 1198
                            },
                            "id": null,
                            "generator": false,
                            "start": 1174,
                            "end": 1198
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1169,
                          "end": 1198
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "set",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1200,
                            "end": 1203
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1211,
                                    "end": 1217
                                  },
                                  "start": 1209,
                                  "end": 1217
                                },
                                "start": 1206,
                                "end": 1217
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1226,
                                    "end": 1232
                                  },
                                  "start": 1224,
                                  "end": 1232
                                },
                                "start": 1219,
                                "end": 1232
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 1237,
                              "end": 1239
                            },
                            "id": null,
                            "generator": false,
                            "start": 1205,
                            "end": 1239
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1200,
                          "end": 1239
                        }
                      ],
                      "start": 1167,
                      "end": 1241
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1162,
                    "end": 1241
                  }
                ],
                "start": 1160,
                "end": 1243
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1245,
                "end": 1248
              },
              "optional": false,
              "computed": false,
              "start": 1159,
              "end": 1248
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 1249,
              "end": 1256
            },
            "optional": false,
            "computed": true,
            "start": 1159,
            "end": 1257
          },
          "directive": null,
          "start": 1159,
          "end": 1258
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
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1264,
                        "end": 1267
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
                              "name": "get",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1271,
                              "end": 1274
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
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1282,
                                      "end": 1288
                                    },
                                    "start": 1280,
                                    "end": 1288
                                  },
                                  "start": 1277,
                                  "end": 1288
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "'hello'",
                                "start": 1293,
                                "end": 1300
                              },
                              "id": null,
                              "generator": false,
                              "start": 1276,
                              "end": 1300
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1271,
                            "end": 1300
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "set",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1302,
                              "end": 1305
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1313,
                                      "end": 1319
                                    },
                                    "start": 1311,
                                    "end": 1319
                                  },
                                  "start": 1308,
                                  "end": 1319
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1328,
                                      "end": 1334
                                    },
                                    "start": 1326,
                                    "end": 1334
                                  },
                                  "start": 1321,
                                  "end": 1334
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 1339,
                                "end": 1341
                              },
                              "id": null,
                              "generator": false,
                              "start": 1307,
                              "end": 1341
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1302,
                            "end": 1341
                          }
                        ],
                        "start": 1269,
                        "end": 1343
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1264,
                      "end": 1343
                    }
                  ],
                  "start": 1262,
                  "end": 1345
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1350
                },
                "optional": false,
                "computed": false,
                "start": 1261,
                "end": 1350
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1351,
                "end": 1358
              },
              "optional": false,
              "computed": true,
              "start": 1261,
              "end": 1359
            },
            "right": {
              "type": "Literal",
              "value": "modified",
              "raw": "'modified'",
              "start": 1362,
              "end": 1372
            },
            "start": 1261,
            "end": 1372
          },
          "directive": null,
          "start": 1261,
          "end": 1373
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1379,
                        "end": 1382
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
                              "name": "get",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1386,
                              "end": 1389
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
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1397,
                                      "end": 1403
                                    },
                                    "start": 1395,
                                    "end": 1403
                                  },
                                  "start": 1392,
                                  "end": 1403
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "'hello'",
                                "start": 1408,
                                "end": 1415
                              },
                              "id": null,
                              "generator": false,
                              "start": 1391,
                              "end": 1415
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1386,
                            "end": 1415
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "set",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1417,
                              "end": 1420
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1428,
                                      "end": 1434
                                    },
                                    "start": 1426,
                                    "end": 1434
                                  },
                                  "start": 1423,
                                  "end": 1434
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1443,
                                      "end": 1449
                                    },
                                    "start": 1441,
                                    "end": 1449
                                  },
                                  "start": 1436,
                                  "end": 1449
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 1454,
                                "end": 1456
                              },
                              "id": null,
                              "generator": false,
                              "start": 1422,
                              "end": 1456
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1417,
                            "end": 1456
                          }
                        ],
                        "start": 1384,
                        "end": 1458
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1379,
                      "end": 1458
                    }
                  ],
                  "start": 1377,
                  "end": 1460
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1462,
                  "end": 1465
                },
                "optional": false,
                "computed": false,
                "start": 1376,
                "end": 1465
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1466,
                "end": 1473
              },
              "optional": false,
              "computed": true,
              "start": 1376,
              "end": 1474
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1478,
              "end": 1479
            },
            "start": 1376,
            "end": 1479
          },
          "directive": null,
          "start": 1376,
          "end": 1480
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1486,
                        "end": 1489
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
                              "name": "get",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1493,
                              "end": 1496
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
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1504,
                                      "end": 1510
                                    },
                                    "start": 1502,
                                    "end": 1510
                                  },
                                  "start": 1499,
                                  "end": 1510
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "'hello'",
                                "start": 1515,
                                "end": 1522
                              },
                              "id": null,
                              "generator": false,
                              "start": 1498,
                              "end": 1522
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1493,
                            "end": 1522
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "set",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1524,
                              "end": 1527
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1535,
                                      "end": 1541
                                    },
                                    "start": 1533,
                                    "end": 1541
                                  },
                                  "start": 1530,
                                  "end": 1541
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1550,
                                      "end": 1556
                                    },
                                    "start": 1548,
                                    "end": 1556
                                  },
                                  "start": 1543,
                                  "end": 1556
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 1561,
                                "end": 1563
                              },
                              "id": null,
                              "generator": false,
                              "start": 1529,
                              "end": 1563
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1524,
                            "end": 1563
                          }
                        ],
                        "start": 1491,
                        "end": 1565
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1486,
                      "end": 1565
                    }
                  ],
                  "start": 1484,
                  "end": 1567
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1569,
                  "end": 1572
                },
                "optional": false,
                "computed": false,
                "start": 1483,
                "end": 1572
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1573,
                "end": 1580
              },
              "optional": false,
              "computed": true,
              "start": 1483,
              "end": 1581
            },
            "start": 1483,
            "end": 1584
          },
          "directive": null,
          "start": 1483,
          "end": 1585
        }
      ],
      "start": 1155,
      "end": 1587
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1595,
            "end": 1596
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1601,
                  "end": 1602
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1604,
                  "end": 1605
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1601,
                "end": 1605
              }
            ],
            "start": 1599,
            "end": 1607
          },
          "definite": false,
          "start": 1595,
          "end": 1607
        }
      ],
      "declare": false,
      "start": 1589,
      "end": 1608
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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 1627,
                      "end": 1630
                    },
                    "start": 1627,
                    "end": 1630
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 1633,
                      "end": 1636
                    },
                    "start": 1633,
                    "end": 1636
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 1639,
                      "end": 1642
                    },
                    "start": 1639,
                    "end": 1642
                  }
                ],
                "start": 1627,
                "end": 1642
              },
              "start": 1625,
              "end": 1642
            },
            "start": 1624,
            "end": 1642
          },
          "init": null,
          "definite": false,
          "start": 1624,
          "end": 1642
        }
      ],
      "declare": true,
      "start": 1610,
      "end": 1643
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1644,
          "end": 1645
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 1646,
          "end": 1647
        },
        "optional": false,
        "computed": true,
        "start": 1644,
        "end": 1648
      },
      "directive": null,
      "start": 1644,
      "end": 1649
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 1670,
                  "end": 1673
                },
                "start": 1670,
                "end": 1673
              },
              "start": 1668,
              "end": 1673
            },
            "start": 1666,
            "end": 1673
          },
          "init": null,
          "definite": false,
          "start": 1666,
          "end": 1673
        }
      ],
      "declare": true,
      "start": 1652,
      "end": 1674
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1675,
          "end": 1676
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1677,
          "end": 1679
        },
        "optional": false,
        "computed": true,
        "start": 1675,
        "end": 1680
      },
      "directive": null,
      "start": 1675,
      "end": 1681
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 1710,
                  "end": 1716
                },
                "start": 1703,
                "end": 1716
              },
              "start": 1701,
              "end": 1716
            },
            "start": 1697,
            "end": 1716
          },
          "init": null,
          "definite": false,
          "start": 1697,
          "end": 1716
        }
      ],
      "declare": true,
      "start": 1683,
      "end": 1717
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1718,
          "end": 1719
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 1720,
          "end": 1723
        },
        "optional": false,
        "computed": true,
        "start": 1718,
        "end": 1724
      },
      "directive": null,
      "start": 1718,
      "end": 1725
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 1732,
        "end": 1739
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1742,
              "end": 1743
            },
            "initializer": null,
            "computed": false,
            "start": 1742,
            "end": 1743
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1745,
              "end": 1746
            },
            "initializer": null,
            "computed": false,
            "start": 1745,
            "end": 1746
          }
        ],
        "start": 1740,
        "end": 1748
      },
      "const": false,
      "declare": false,
      "start": 1727,
      "end": 1748
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
            "name": "numEnumKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1773,
                  "end": 1780
                },
                "typeArguments": null,
                "start": 1773,
                "end": 1780
              },
              "start": 1771,
              "end": 1780
            },
            "start": 1761,
            "end": 1780
          },
          "init": null,
          "definite": false,
          "start": 1761,
          "end": 1780
        }
      ],
      "declare": true,
      "start": 1749,
      "end": 1781
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1782,
          "end": 1783
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "numEnumKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 1784,
          "end": 1794
        },
        "optional": false,
        "computed": true,
        "start": 1782,
        "end": 1795
      },
      "directive": null,
      "start": 1782,
      "end": 1796
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 1804,
        "end": 1811
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1814,
              "end": 1815
            },
            "initializer": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 1818,
              "end": 1821
            },
            "computed": false,
            "start": 1814,
            "end": 1821
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1823,
              "end": 1824
            },
            "initializer": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 1827,
              "end": 1830
            },
            "computed": false,
            "start": 1823,
            "end": 1830
          }
        ],
        "start": 1812,
        "end": 1832
      },
      "const": false,
      "declare": false,
      "start": 1799,
      "end": 1832
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
            "name": "strEnumKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StrEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1857,
                  "end": 1864
                },
                "typeArguments": null,
                "start": 1857,
                "end": 1864
              },
              "start": 1855,
              "end": 1864
            },
            "start": 1845,
            "end": 1864
          },
          "init": null,
          "definite": false,
          "start": 1845,
          "end": 1864
        }
      ],
      "declare": true,
      "start": 1833,
      "end": 1865
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1866,
          "end": 1867
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "strEnumKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 1868,
          "end": 1878
        },
        "optional": false,
        "computed": true,
        "start": 1866,
        "end": 1879
      },
      "directive": null,
      "start": 1866,
      "end": 1880
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1893,
        "end": 1898
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1899,
              "end": 1900
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1899,
            "end": 1900
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1902,
              "end": 1903
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1902,
            "end": 1903
          }
        ],
        "start": 1898,
        "end": 1904
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1909,
              "end": 1912
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1918,
                      "end": 1919
                    },
                    "typeArguments": null,
                    "start": 1918,
                    "end": 1919
                  },
                  "start": 1916,
                  "end": 1919
                },
                "start": 1913,
                "end": 1919
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1922,
                  "end": 1923
                },
                "typeArguments": null,
                "start": 1922,
                "end": 1923
              },
              "start": 1920,
              "end": 1923
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1909,
            "end": 1924
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1927,
              "end": 1930
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
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
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1936,
                      "end": 1937
                    },
                    "typeArguments": null,
                    "start": 1936,
                    "end": 1937
                  },
                  "start": 1934,
                  "end": 1937
                },
                "start": 1931,
                "end": 1937
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1946,
                      "end": 1947
                    },
                    "typeArguments": null,
                    "start": 1946,
                    "end": 1947
                  },
                  "start": 1944,
                  "end": 1947
                },
                "start": 1939,
                "end": 1947
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1950,
                "end": 1954
              },
              "start": 1948,
              "end": 1954
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1927,
            "end": 1955
          }
        ],
        "start": 1905,
        "end": 1957
      },
      "declare": false,
      "start": 1883,
      "end": 1957
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null,
        "start": 1969,
        "end": 1972
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
              "name": "bark",
              "optional": false,
              "typeAnnotation": null,
              "start": 1975,
              "end": 1979
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
                "start": 1983,
                "end": 1987
              },
              "start": 1981,
              "end": 1987
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1975,
            "end": 1988
          }
        ],
        "start": 1973,
        "end": 1990
      },
      "declare": false,
      "start": 1959,
      "end": 1990
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
            "name": "rover",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dog",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2002,
                  "end": 2005
                },
                "typeArguments": null,
                "start": 2002,
                "end": 2005
              },
              "start": 2000,
              "end": 2005
            },
            "start": 1995,
            "end": 2005
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
                  "name": "bark",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2010,
                  "end": 2014
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
                    "start": 2017,
                    "end": 2019
                  },
                  "expression": false,
                  "start": 2014,
                  "end": 2019
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2010,
                "end": 2019
              }
            ],
            "start": 2008,
            "end": 2021
          },
          "definite": false,
          "start": 1995,
          "end": 2021
        }
      ],
      "declare": false,
      "start": 1991,
      "end": 2022
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
            "name": "map",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2041,
                  "end": 2046
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Dog",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2047,
                        "end": 2050
                      },
                      "typeArguments": null,
                      "start": 2047,
                      "end": 2050
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 2052,
                      "end": 2058
                    }
                  ],
                  "start": 2046,
                  "end": 2059
                },
                "start": 2041,
                "end": 2059
              },
              "start": 2039,
              "end": 2059
            },
            "start": 2036,
            "end": 2059
          },
          "init": null,
          "definite": false,
          "start": 2036,
          "end": 2059
        }
      ],
      "declare": true,
      "start": 2024,
      "end": 2060
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
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 2061,
            "end": 2064
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rover",
            "optional": false,
            "typeAnnotation": null,
            "start": 2065,
            "end": 2070
          },
          "optional": false,
          "computed": true,
          "start": 2061,
          "end": 2071
        },
        "right": {
          "type": "Literal",
          "value": "Rover",
          "raw": "\"Rover\"",
          "start": 2074,
          "end": 2081
        },
        "start": 2061,
        "end": 2081
      },
      "directive": null,
      "start": 2061,
      "end": 2082
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 2094,
        "end": 2095
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2100,
              "end": 2104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2106,
                  "end": 2111
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2112,
                      "end": 2118
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 2120,
                      "end": 2126
                    }
                  ],
                  "start": 2111,
                  "end": 2127
                },
                "start": 2106,
                "end": 2127
              },
              "start": 2104,
              "end": 2127
            },
            "accessibility": null,
            "static": false,
            "start": 2100,
            "end": 2127
          }
        ],
        "start": 2096,
        "end": 2129
      },
      "declare": false,
      "start": 2084,
      "end": 2129
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2147,
                  "end": 2148
                },
                "typeArguments": null,
                "start": 2147,
                "end": 2148
              },
              "start": 2145,
              "end": 2148
            },
            "start": 2144,
            "end": 2148
          },
          "init": null,
          "definite": false,
          "start": 2144,
          "end": 2148
        }
      ],
      "declare": true,
      "start": 2130,
      "end": 2149
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 2150,
            "end": 2151
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 2152,
            "end": 2156
          },
          "optional": false,
          "computed": false,
          "start": 2150,
          "end": 2156
        },
        "property": {
          "type": "Literal",
          "value": "a",
          "raw": "'a'",
          "start": 2157,
          "end": 2160
        },
        "optional": false,
        "computed": true,
        "start": 2150,
        "end": 2161
      },
      "directive": null,
      "start": 2150,
      "end": 2162
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2162
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10,
    "end": 11
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 11,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 21,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "String",
    "value": "''",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 50,
    "end": 51
  },
  {
    "type": "String",
    "value": "''",
    "start": 51,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 88,
    "end": 90
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 91,
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
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 104,
    "end": 105
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 115,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 128,
    "end": 129
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 129,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 140,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 163,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 171,
    "end": 173
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 174,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 186,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 199,
    "end": 200
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 235,
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
    "value": "string",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 248,
    "end": 250
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 251,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 284,
    "end": 286
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 287,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 304,
    "end": 305
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 305,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 319,
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
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "String",
    "value": "'modified'",
    "start": 330,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 345,
    "end": 346
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 346,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 355,
    "end": 357
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 364,
    "end": 365
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 365,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 418,
    "end": 420
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 421,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 441,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 454,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 461,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 469,
    "end": 471
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 472,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 489,
    "end": 490
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 490,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "e",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 503,
    "end": 504
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 504,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 513,
    "end": 514
  },
  {
    "type": "String",
    "value": "'modified'",
    "start": 515,
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
    "value": "e",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 530,
    "end": 531
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 531,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 540,
    "end": 542
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 549,
    "end": 550
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 550,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 559,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 570,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 595,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 603,
    "end": 604
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 605,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 614,
    "end": 616
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 617,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 631,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 637,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 642,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 650,
    "end": 651
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 652,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 661,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 668,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 676,
    "end": 678
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 679,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 696,
    "end": 697
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 697,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 710,
    "end": 711
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 711,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "String",
    "value": "'modified'",
    "start": 722,
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
    "value": "e",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 737,
    "end": 738
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 738,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 747,
    "end": 749
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 756,
    "end": 757
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 757,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 786,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 791,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 799,
    "end": 801
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 802,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 811,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 817,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 822,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 830,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 837,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 845,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "[",
    "start": 853,
    "end": 854
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 854,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 869,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 875,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 880,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 888,
    "end": 890
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 891,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 900,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 906,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 911,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 919,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 926,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 934,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 942,
    "end": 943
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 943,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "String",
    "value": "'modified'",
    "start": 954,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 971,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 977,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 982,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 990,
    "end": 992
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 993,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1008,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1013,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1021,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1028,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1036,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1045,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1054,
    "end": 1056
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1065,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1071,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1076,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1084,
    "end": 1086
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1087,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1096,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1107,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1115,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1122,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1130,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1139,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1148,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1162,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
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
    "value": "get",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1175,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1180,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1188,
    "end": 1190
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1191,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1200,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1206,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1211,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1219,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1226,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1234,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1245,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1249,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1264,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1271,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1277,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1290,
    "end": 1292
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1293,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1302,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1313,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1321,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1328,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1336,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1347,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1351,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "String",
    "value": "'modified'",
    "start": 1362,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1379,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
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
    "value": "get",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1392,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1397,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1405,
    "end": 1407
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1408,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1417,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1423,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1428,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1436,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1443,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1451,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1462,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1466,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1475,
    "end": 1477
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1486,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1493,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1499,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1504,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1512,
    "end": 1514
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1515,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1524,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1535,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1543,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1550,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1558,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1569,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1573,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1582,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1589,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1610,
    "end": 1617
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1618,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1627,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1633,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1639,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1652,
    "end": 1659
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1660,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 1666,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1670,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 1677,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1683,
    "end": 1690
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1691,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 1697,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1703,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1710,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 1720,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1727,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "NumEnum",
    "start": 1732,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1749,
    "end": 1756
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1757,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "numEnumKey",
    "start": 1761,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "NumEnum",
    "start": 1773,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "numEnumKey",
    "start": 1784,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1799,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "StrEnum",
    "start": 1804,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1818,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1827,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1833,
    "end": 1840
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1841,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "strEnumKey",
    "start": 1845,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "StrEnum",
    "start": 1857,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "strEnumKey",
    "start": 1868,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "interface",
    "start": 1883,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "MyMap",
    "start": 1893,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1909,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1913,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1927,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1931,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1939,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1950,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1959,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 1969,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "bark",
    "start": 1975,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1983,
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
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1991,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "rover",
    "start": 1995,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 2002,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "bark",
    "start": 2010,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2024,
    "end": 2031
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2032,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2036,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "MyMap",
    "start": 2041,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 2047,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2052,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2061,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "rover",
    "start": 2065,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "String",
    "value": "\"Rover\"",
    "start": 2074,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2084,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2100,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "MyMap",
    "start": 2106,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2112,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2120,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2130,
    "end": 2137
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2138,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2152,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2157,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2161,
    "end": 2162
  }
]
```
