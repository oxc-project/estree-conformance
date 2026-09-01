__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 26
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 30,
                "end": 31
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 33,
                "end": 34
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 36,
                "end": 37
              }
            ],
            "start": 29,
            "end": 38
          },
          "definite": false,
          "start": 23,
          "end": 38
        }
      ],
      "declare": false,
      "start": 17,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 40,
          "end": 43
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 49
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 64
            },
            "optional": false,
            "computed": false,
            "start": 46,
            "end": 64
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 46,
          "end": 66
        },
        "start": 40,
        "end": 66
      },
      "directive": null,
      "start": 40,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 77
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 83
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 98
            },
            "optional": false,
            "computed": false,
            "start": 80,
            "end": 98
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 99,
              "end": 106
            }
          ],
          "optional": false,
          "start": 80,
          "end": 107
        },
        "start": 74,
        "end": 107
      },
      "directive": null,
      "start": 74,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 118
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 124
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 139
            },
            "optional": false,
            "computed": false,
            "start": 121,
            "end": 139
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 140,
              "end": 147
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 156
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 158,
                    "end": 168
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 151,
                  "end": 168
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 178
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 180,
                    "end": 185
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 170,
                  "end": 185
                }
              ],
              "start": 149,
              "end": 187
            }
          ],
          "optional": false,
          "start": 121,
          "end": 188
        },
        "start": 115,
        "end": 188
      },
      "directive": null,
      "start": 115,
      "end": 189
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
            "name": "dates",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 219,
                    "end": 223
                  },
                  "start": 219,
                  "end": 225
                },
                "start": 210,
                "end": 225
              },
              "start": 208,
              "end": 225
            },
            "start": 203,
            "end": 225
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 237
                },
                "typeArguments": null,
                "arguments": [],
                "start": 229,
                "end": 239
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 249
                },
                "typeArguments": null,
                "arguments": [],
                "start": 241,
                "end": 251
              }
            ],
            "start": 228,
            "end": 252
          },
          "definite": false,
          "start": 203,
          "end": 252
        }
      ],
      "declare": false,
      "start": 197,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 254,
          "end": 257
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 265
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 280
            },
            "optional": false,
            "computed": false,
            "start": 260,
            "end": 280
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 260,
          "end": 282
        },
        "start": 254,
        "end": 282
      },
      "directive": null,
      "start": 254,
      "end": 283
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 293
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 301
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 316
            },
            "optional": false,
            "computed": false,
            "start": 296,
            "end": 316
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "fr",
              "raw": "'fr'",
              "start": 317,
              "end": 321
            }
          ],
          "optional": false,
          "start": 296,
          "end": 322
        },
        "start": 290,
        "end": 322
      },
      "directive": null,
      "start": 290,
      "end": 323
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 330,
          "end": 333
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "dates",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 341
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 356
            },
            "optional": false,
            "computed": false,
            "start": 336,
            "end": 356
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "fr",
              "raw": "'fr'",
              "start": 357,
              "end": 361
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "timeZone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 373
                  },
                  "value": {
                    "type": "Literal",
                    "value": "UTC",
                    "raw": "'UTC'",
                    "start": 375,
                    "end": 380
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 365,
                  "end": 380
                }
              ],
              "start": 363,
              "end": 382
            }
          ],
          "optional": false,
          "start": 336,
          "end": 383
        },
        "start": 330,
        "end": 383
      },
      "directive": null,
      "start": 330,
      "end": 384
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
            "name": "mixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 403
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 407,
                "end": 408
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 418
                },
                "typeArguments": null,
                "arguments": [],
                "start": 410,
                "end": 420
              },
              {
                "type": "Literal",
                "value": 59782,
                "raw": "59782",
                "start": 422,
                "end": 427
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 437
                },
                "typeArguments": null,
                "arguments": [],
                "start": 429,
                "end": 439
              }
            ],
            "start": 406,
            "end": 440
          },
          "definite": false,
          "start": 398,
          "end": 440
        }
      ],
      "declare": false,
      "start": 392,
      "end": 441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 445
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 453
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 468
            },
            "optional": false,
            "computed": false,
            "start": 448,
            "end": 468
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 448,
          "end": 470
        },
        "start": 442,
        "end": 470
      },
      "directive": null,
      "start": 442,
      "end": 471
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 481
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 489
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 504
            },
            "optional": false,
            "computed": false,
            "start": 484,
            "end": 504
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de",
              "raw": "'de'",
              "start": 505,
              "end": 509
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 513,
                    "end": 518
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 520,
                    "end": 530
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 513,
                  "end": 530
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 532,
                    "end": 540
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 542,
                    "end": 547
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 532,
                  "end": 547
                }
              ],
              "start": 511,
              "end": 549
            }
          ],
          "optional": false,
          "start": 484,
          "end": 550
        },
        "start": 478,
        "end": 550
      },
      "directive": null,
      "start": 478,
      "end": 551
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 558,
          "end": 561
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "mixed",
                "optional": false,
                "typeAnnotation": null,
                "start": 565,
                "end": 570
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 587
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 588,
                          "end": 594
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 597,
                            "end": 601
                          },
                          "typeArguments": null,
                          "start": 597,
                          "end": 601
                        }
                      ],
                      "start": 588,
                      "end": 601
                    }
                  ],
                  "start": 587,
                  "end": 602
                },
                "start": 574,
                "end": 602
              },
              "start": 565,
              "end": 602
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 618
            },
            "optional": false,
            "computed": false,
            "start": 564,
            "end": 618
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "de",
              "raw": "'de'",
              "start": 619,
              "end": 623
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 627,
                    "end": 635
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 637,
                    "end": 642
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 627,
                  "end": 642
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 644,
                    "end": 649
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 651,
                    "end": 661
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 644,
                  "end": 661
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "timeZone",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 663,
                    "end": 671
                  },
                  "value": {
                    "type": "Literal",
                    "value": "UTC",
                    "raw": "'UTC'",
                    "start": 673,
                    "end": 678
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 663,
                  "end": 678
                }
              ],
              "start": 625,
              "end": 680
            }
          ],
          "optional": false,
          "start": 564,
          "end": 681
        },
        "start": 558,
        "end": 681
      },
      "directive": null,
      "start": 558,
      "end": 682
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
            "name": "bigInts",
            "optional": false,
            "typeAnnotation": null,
            "start": 696,
            "end": 703
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 713
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 714,
                    "end": 715
                  }
                ],
                "optional": false,
                "start": 707,
                "end": 716
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 724
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 725,
                    "end": 726
                  }
                ],
                "optional": false,
                "start": 718,
                "end": 727
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 735
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 736,
                    "end": 737
                  }
                ],
                "optional": false,
                "start": 729,
                "end": 738
              }
            ],
            "start": 706,
            "end": 739
          },
          "definite": false,
          "start": 696,
          "end": 739
        }
      ],
      "declare": false,
      "start": 690,
      "end": 740
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 741,
          "end": 744
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigInts",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 754
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 769
            },
            "optional": false,
            "computed": false,
            "start": 747,
            "end": 769
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 747,
          "end": 771
        },
        "start": 741,
        "end": 771
      },
      "directive": null,
      "start": 741,
      "end": 772
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 779,
          "end": 782
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigInts",
              "optional": false,
              "typeAnnotation": null,
              "start": 785,
              "end": 792
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 807
            },
            "optional": false,
            "computed": false,
            "start": 785,
            "end": 807
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 808,
              "end": 815
            }
          ],
          "optional": false,
          "start": 785,
          "end": 816
        },
        "start": 779,
        "end": 816
      },
      "directive": null,
      "start": 779,
      "end": 817
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 824,
          "end": 827
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigInts",
              "optional": false,
              "typeAnnotation": null,
              "start": 830,
              "end": 837
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 838,
              "end": 852
            },
            "optional": false,
            "computed": false,
            "start": 830,
            "end": 852
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 853,
              "end": 860
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 864,
                    "end": 869
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 871,
                    "end": 881
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 864,
                  "end": 881
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 883,
                    "end": 891
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 893,
                    "end": 898
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 883,
                  "end": 898
                }
              ],
              "start": 862,
              "end": 900
            }
          ],
          "optional": false,
          "start": 830,
          "end": 901
        },
        "start": 824,
        "end": 901
      },
      "directive": null,
      "start": 824,
      "end": 902
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
            "name": "int8Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 916,
            "end": 925
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 932,
              "end": 941
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 942,
                "end": 943
              }
            ],
            "start": 928,
            "end": 944
          },
          "definite": false,
          "start": 916,
          "end": 944
        }
      ],
      "declare": false,
      "start": 910,
      "end": 945
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 946,
          "end": 949
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 952,
              "end": 961
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 962,
              "end": 976
            },
            "optional": false,
            "computed": false,
            "start": 952,
            "end": 976
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 952,
          "end": 978
        },
        "start": 946,
        "end": 978
      },
      "directive": null,
      "start": 946,
      "end": 979
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 986,
          "end": 989
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 992,
              "end": 1001
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1016
            },
            "optional": false,
            "computed": false,
            "start": 992,
            "end": 1016
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1017,
              "end": 1024
            }
          ],
          "optional": false,
          "start": 992,
          "end": 1025
        },
        "start": 986,
        "end": 1025
      },
      "directive": null,
      "start": 986,
      "end": 1026
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1033,
          "end": 1036
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1039,
              "end": 1048
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1049,
              "end": 1063
            },
            "optional": false,
            "computed": false,
            "start": 1039,
            "end": 1063
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1064,
              "end": 1071
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1075,
                    "end": 1080
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1082,
                    "end": 1092
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1075,
                  "end": 1092
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1094,
                    "end": 1102
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1104,
                    "end": 1109
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1094,
                  "end": 1109
                }
              ],
              "start": 1073,
              "end": 1111
            }
          ],
          "optional": false,
          "start": 1039,
          "end": 1112
        },
        "start": 1033,
        "end": 1112
      },
      "directive": null,
      "start": 1033,
      "end": 1113
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
            "name": "uint8Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1127,
            "end": 1137
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1144,
              "end": 1154
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1155,
                "end": 1156
              }
            ],
            "start": 1140,
            "end": 1157
          },
          "definite": false,
          "start": 1127,
          "end": 1157
        }
      ],
      "declare": false,
      "start": 1121,
      "end": 1158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1159,
          "end": 1162
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1165,
              "end": 1175
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1176,
              "end": 1190
            },
            "optional": false,
            "computed": false,
            "start": 1165,
            "end": 1190
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1165,
          "end": 1192
        },
        "start": 1159,
        "end": 1192
      },
      "directive": null,
      "start": 1159,
      "end": 1193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1200,
          "end": 1203
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1206,
              "end": 1216
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1217,
              "end": 1231
            },
            "optional": false,
            "computed": false,
            "start": 1206,
            "end": 1231
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1232,
              "end": 1239
            }
          ],
          "optional": false,
          "start": 1206,
          "end": 1240
        },
        "start": 1200,
        "end": 1240
      },
      "directive": null,
      "start": 1200,
      "end": 1241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1248,
          "end": 1251
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1254,
              "end": 1264
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1265,
              "end": 1279
            },
            "optional": false,
            "computed": false,
            "start": 1254,
            "end": 1279
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1280,
              "end": 1287
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1291,
                    "end": 1296
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1298,
                    "end": 1308
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1291,
                  "end": 1308
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1310,
                    "end": 1318
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1320,
                    "end": 1325
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1310,
                  "end": 1325
                }
              ],
              "start": 1289,
              "end": 1327
            }
          ],
          "optional": false,
          "start": 1254,
          "end": 1328
        },
        "start": 1248,
        "end": 1328
      },
      "directive": null,
      "start": 1248,
      "end": 1329
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
            "name": "uint8ClampedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 1343,
            "end": 1360
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1367,
              "end": 1384
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1385,
                "end": 1386
              }
            ],
            "start": 1363,
            "end": 1387
          },
          "definite": false,
          "start": 1343,
          "end": 1387
        }
      ],
      "declare": false,
      "start": 1337,
      "end": 1388
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1389,
          "end": 1392
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1395,
              "end": 1412
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1413,
              "end": 1427
            },
            "optional": false,
            "computed": false,
            "start": 1395,
            "end": 1427
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1395,
          "end": 1429
        },
        "start": 1389,
        "end": 1429
      },
      "directive": null,
      "start": 1389,
      "end": 1430
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1437,
          "end": 1440
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1443,
              "end": 1460
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1461,
              "end": 1475
            },
            "optional": false,
            "computed": false,
            "start": 1443,
            "end": 1475
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1476,
              "end": 1483
            }
          ],
          "optional": false,
          "start": 1443,
          "end": 1484
        },
        "start": 1437,
        "end": 1484
      },
      "directive": null,
      "start": 1437,
      "end": 1485
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1492,
          "end": 1495
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1498,
              "end": 1515
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1516,
              "end": 1530
            },
            "optional": false,
            "computed": false,
            "start": 1498,
            "end": 1530
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1531,
              "end": 1538
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1542,
                    "end": 1547
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1549,
                    "end": 1559
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1542,
                  "end": 1559
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1561,
                    "end": 1569
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1571,
                    "end": 1576
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1561,
                  "end": 1576
                }
              ],
              "start": 1540,
              "end": 1578
            }
          ],
          "optional": false,
          "start": 1498,
          "end": 1579
        },
        "start": 1492,
        "end": 1579
      },
      "directive": null,
      "start": 1492,
      "end": 1580
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
            "name": "int16Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1594,
            "end": 1604
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1611,
              "end": 1621
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1622,
                "end": 1623
              }
            ],
            "start": 1607,
            "end": 1624
          },
          "definite": false,
          "start": 1594,
          "end": 1624
        }
      ],
      "declare": false,
      "start": 1588,
      "end": 1625
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1626,
          "end": 1629
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1632,
              "end": 1642
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1643,
              "end": 1657
            },
            "optional": false,
            "computed": false,
            "start": 1632,
            "end": 1657
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1632,
          "end": 1659
        },
        "start": 1626,
        "end": 1659
      },
      "directive": null,
      "start": 1626,
      "end": 1660
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1667,
          "end": 1670
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1673,
              "end": 1683
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1684,
              "end": 1698
            },
            "optional": false,
            "computed": false,
            "start": 1673,
            "end": 1698
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1699,
              "end": 1706
            }
          ],
          "optional": false,
          "start": 1673,
          "end": 1707
        },
        "start": 1667,
        "end": 1707
      },
      "directive": null,
      "start": 1667,
      "end": 1708
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1715,
          "end": 1718
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1721,
              "end": 1731
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1732,
              "end": 1746
            },
            "optional": false,
            "computed": false,
            "start": 1721,
            "end": 1746
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1747,
              "end": 1754
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1758,
                    "end": 1763
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1765,
                    "end": 1775
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1758,
                  "end": 1775
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1777,
                    "end": 1785
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 1787,
                    "end": 1792
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1777,
                  "end": 1792
                }
              ],
              "start": 1756,
              "end": 1794
            }
          ],
          "optional": false,
          "start": 1721,
          "end": 1795
        },
        "start": 1715,
        "end": 1795
      },
      "directive": null,
      "start": 1715,
      "end": 1796
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
            "name": "uint16Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1810,
            "end": 1821
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1828,
              "end": 1839
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1840,
                "end": 1841
              }
            ],
            "start": 1824,
            "end": 1842
          },
          "definite": false,
          "start": 1810,
          "end": 1842
        }
      ],
      "declare": false,
      "start": 1804,
      "end": 1843
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1844,
          "end": 1847
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1850,
              "end": 1861
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1862,
              "end": 1876
            },
            "optional": false,
            "computed": false,
            "start": 1850,
            "end": 1876
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1850,
          "end": 1878
        },
        "start": 1844,
        "end": 1878
      },
      "directive": null,
      "start": 1844,
      "end": 1879
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1886,
          "end": 1889
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1892,
              "end": 1903
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1904,
              "end": 1918
            },
            "optional": false,
            "computed": false,
            "start": 1892,
            "end": 1918
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1919,
              "end": 1926
            }
          ],
          "optional": false,
          "start": 1892,
          "end": 1927
        },
        "start": 1886,
        "end": 1927
      },
      "directive": null,
      "start": 1886,
      "end": 1928
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1935,
          "end": 1938
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1941,
              "end": 1952
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1953,
              "end": 1967
            },
            "optional": false,
            "computed": false,
            "start": 1941,
            "end": 1967
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 1968,
              "end": 1975
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1979,
                    "end": 1984
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 1986,
                    "end": 1996
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1979,
                  "end": 1996
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1998,
                    "end": 2006
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2008,
                    "end": 2013
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1998,
                  "end": 2013
                }
              ],
              "start": 1977,
              "end": 2015
            }
          ],
          "optional": false,
          "start": 1941,
          "end": 2016
        },
        "start": 1935,
        "end": 2016
      },
      "directive": null,
      "start": 1935,
      "end": 2017
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
            "name": "int32Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2031,
            "end": 2041
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2048,
              "end": 2058
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2059,
                "end": 2060
              }
            ],
            "start": 2044,
            "end": 2061
          },
          "definite": false,
          "start": 2031,
          "end": 2061
        }
      ],
      "declare": false,
      "start": 2025,
      "end": 2062
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2063,
          "end": 2066
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2069,
              "end": 2079
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2080,
              "end": 2094
            },
            "optional": false,
            "computed": false,
            "start": 2069,
            "end": 2094
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2069,
          "end": 2096
        },
        "start": 2063,
        "end": 2096
      },
      "directive": null,
      "start": 2063,
      "end": 2097
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2104,
          "end": 2107
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2110,
              "end": 2120
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2121,
              "end": 2135
            },
            "optional": false,
            "computed": false,
            "start": 2110,
            "end": 2135
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2136,
              "end": 2143
            }
          ],
          "optional": false,
          "start": 2110,
          "end": 2144
        },
        "start": 2104,
        "end": 2144
      },
      "directive": null,
      "start": 2104,
      "end": 2145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2152,
          "end": 2155
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2158,
              "end": 2168
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2169,
              "end": 2183
            },
            "optional": false,
            "computed": false,
            "start": 2158,
            "end": 2183
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2184,
              "end": 2191
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2195,
                    "end": 2200
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2202,
                    "end": 2212
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2195,
                  "end": 2212
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2214,
                    "end": 2222
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2224,
                    "end": 2229
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2214,
                  "end": 2229
                }
              ],
              "start": 2193,
              "end": 2231
            }
          ],
          "optional": false,
          "start": 2158,
          "end": 2232
        },
        "start": 2152,
        "end": 2232
      },
      "directive": null,
      "start": 2152,
      "end": 2233
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
            "name": "uint32Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2247,
            "end": 2258
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2265,
              "end": 2276
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2277,
                "end": 2278
              }
            ],
            "start": 2261,
            "end": 2279
          },
          "definite": false,
          "start": 2247,
          "end": 2279
        }
      ],
      "declare": false,
      "start": 2241,
      "end": 2280
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2281,
          "end": 2284
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2287,
              "end": 2298
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2299,
              "end": 2313
            },
            "optional": false,
            "computed": false,
            "start": 2287,
            "end": 2313
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2287,
          "end": 2315
        },
        "start": 2281,
        "end": 2315
      },
      "directive": null,
      "start": 2281,
      "end": 2316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2323,
          "end": 2326
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2329,
              "end": 2340
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2341,
              "end": 2355
            },
            "optional": false,
            "computed": false,
            "start": 2329,
            "end": 2355
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2356,
              "end": 2363
            }
          ],
          "optional": false,
          "start": 2329,
          "end": 2364
        },
        "start": 2323,
        "end": 2364
      },
      "directive": null,
      "start": 2323,
      "end": 2365
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2372,
          "end": 2375
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2378,
              "end": 2389
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2390,
              "end": 2404
            },
            "optional": false,
            "computed": false,
            "start": 2378,
            "end": 2404
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2405,
              "end": 2412
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2416,
                    "end": 2421
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2423,
                    "end": 2433
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2416,
                  "end": 2433
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2435,
                    "end": 2443
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2445,
                    "end": 2450
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2435,
                  "end": 2450
                }
              ],
              "start": 2414,
              "end": 2452
            }
          ],
          "optional": false,
          "start": 2378,
          "end": 2453
        },
        "start": 2372,
        "end": 2453
      },
      "directive": null,
      "start": 2372,
      "end": 2454
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
            "name": "float32Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2468,
            "end": 2480
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2487,
              "end": 2499
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2500,
                "end": 2501
              }
            ],
            "start": 2483,
            "end": 2502
          },
          "definite": false,
          "start": 2468,
          "end": 2502
        }
      ],
      "declare": false,
      "start": 2462,
      "end": 2503
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2504,
          "end": 2507
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2510,
              "end": 2522
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2523,
              "end": 2537
            },
            "optional": false,
            "computed": false,
            "start": 2510,
            "end": 2537
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2510,
          "end": 2539
        },
        "start": 2504,
        "end": 2539
      },
      "directive": null,
      "start": 2504,
      "end": 2540
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2547,
          "end": 2550
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2553,
              "end": 2565
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2566,
              "end": 2580
            },
            "optional": false,
            "computed": false,
            "start": 2553,
            "end": 2580
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2581,
              "end": 2588
            }
          ],
          "optional": false,
          "start": 2553,
          "end": 2589
        },
        "start": 2547,
        "end": 2589
      },
      "directive": null,
      "start": 2547,
      "end": 2590
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2597,
          "end": 2600
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2603,
              "end": 2615
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2616,
              "end": 2630
            },
            "optional": false,
            "computed": false,
            "start": 2603,
            "end": 2630
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2631,
              "end": 2638
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2642,
                    "end": 2647
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2649,
                    "end": 2659
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2642,
                  "end": 2659
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2661,
                    "end": 2669
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2671,
                    "end": 2676
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2661,
                  "end": 2676
                }
              ],
              "start": 2640,
              "end": 2678
            }
          ],
          "optional": false,
          "start": 2603,
          "end": 2679
        },
        "start": 2597,
        "end": 2679
      },
      "directive": null,
      "start": 2597,
      "end": 2680
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
            "name": "float64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2694,
            "end": 2706
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2713,
              "end": 2725
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2726,
                "end": 2727
              }
            ],
            "start": 2709,
            "end": 2728
          },
          "definite": false,
          "start": 2694,
          "end": 2728
        }
      ],
      "declare": false,
      "start": 2688,
      "end": 2729
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2730,
          "end": 2733
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2736,
              "end": 2748
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2749,
              "end": 2763
            },
            "optional": false,
            "computed": false,
            "start": 2736,
            "end": 2763
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2736,
          "end": 2765
        },
        "start": 2730,
        "end": 2765
      },
      "directive": null,
      "start": 2730,
      "end": 2766
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2773,
          "end": 2776
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2779,
              "end": 2791
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2792,
              "end": 2806
            },
            "optional": false,
            "computed": false,
            "start": 2779,
            "end": 2806
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2807,
              "end": 2814
            }
          ],
          "optional": false,
          "start": 2779,
          "end": 2815
        },
        "start": 2773,
        "end": 2815
      },
      "directive": null,
      "start": 2773,
      "end": 2816
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2823,
          "end": 2826
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2829,
              "end": 2841
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2842,
              "end": 2856
            },
            "optional": false,
            "computed": false,
            "start": 2829,
            "end": 2856
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 2857,
              "end": 2864
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2868,
                    "end": 2873
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 2875,
                    "end": 2885
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2868,
                  "end": 2885
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2887,
                    "end": 2895
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 2897,
                    "end": 2902
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 2887,
                  "end": 2902
                }
              ],
              "start": 2866,
              "end": 2904
            }
          ],
          "optional": false,
          "start": 2829,
          "end": 2905
        },
        "start": 2823,
        "end": 2905
      },
      "directive": null,
      "start": 2823,
      "end": 2906
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
            "name": "bigInt64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2920,
            "end": 2933
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2940,
              "end": 2953
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 2954,
                "end": 2955
              }
            ],
            "start": 2936,
            "end": 2956
          },
          "definite": false,
          "start": 2920,
          "end": 2956
        }
      ],
      "declare": false,
      "start": 2914,
      "end": 2957
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 2958,
          "end": 2961
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 2964,
              "end": 2977
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 2978,
              "end": 2992
            },
            "optional": false,
            "computed": false,
            "start": 2964,
            "end": 2992
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2964,
          "end": 2994
        },
        "start": 2958,
        "end": 2994
      },
      "directive": null,
      "start": 2958,
      "end": 2995
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3002,
          "end": 3005
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 3008,
              "end": 3021
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 3022,
              "end": 3036
            },
            "optional": false,
            "computed": false,
            "start": 3008,
            "end": 3036
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 3037,
              "end": 3044
            }
          ],
          "optional": false,
          "start": 3008,
          "end": 3045
        },
        "start": 3002,
        "end": 3045
      },
      "directive": null,
      "start": 3002,
      "end": 3046
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3053,
          "end": 3056
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 3059,
              "end": 3072
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 3073,
              "end": 3087
            },
            "optional": false,
            "computed": false,
            "start": 3059,
            "end": 3087
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 3088,
              "end": 3095
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3099,
                    "end": 3104
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 3106,
                    "end": 3116
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3099,
                  "end": 3116
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3118,
                    "end": 3126
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 3128,
                    "end": 3133
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3118,
                  "end": 3133
                }
              ],
              "start": 3097,
              "end": 3135
            }
          ],
          "optional": false,
          "start": 3059,
          "end": 3136
        },
        "start": 3053,
        "end": 3136
      },
      "directive": null,
      "start": 3053,
      "end": 3137
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
            "name": "bigIntUint64Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 3151,
            "end": 3168
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 3175,
              "end": 3189
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 3190,
                "end": 3191
              }
            ],
            "start": 3171,
            "end": 3192
          },
          "definite": false,
          "start": 3151,
          "end": 3192
        }
      ],
      "declare": false,
      "start": 3145,
      "end": 3193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3194,
          "end": 3197
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntUint64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 3200,
              "end": 3217
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 3218,
              "end": 3232
            },
            "optional": false,
            "computed": false,
            "start": 3200,
            "end": 3232
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 3200,
          "end": 3234
        },
        "start": 3194,
        "end": 3234
      },
      "directive": null,
      "start": 3194,
      "end": 3235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3242,
          "end": 3245
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntUint64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 3248,
              "end": 3265
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 3266,
              "end": 3280
            },
            "optional": false,
            "computed": false,
            "start": 3248,
            "end": 3280
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 3281,
              "end": 3288
            }
          ],
          "optional": false,
          "start": 3248,
          "end": 3289
        },
        "start": 3242,
        "end": 3289
      },
      "directive": null,
      "start": 3242,
      "end": 3290
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3297,
          "end": 3300
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bigIntUint64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 3303,
              "end": 3320
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleString",
              "optional": false,
              "typeAnnotation": null,
              "start": 3321,
              "end": 3335
            },
            "optional": false,
            "computed": false,
            "start": 3303,
            "end": 3335
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "en-US",
              "raw": "'en-US'",
              "start": 3336,
              "end": 3343
            },
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "style",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3347,
                    "end": 3352
                  },
                  "value": {
                    "type": "Literal",
                    "value": "currency",
                    "raw": "'currency'",
                    "start": 3354,
                    "end": 3364
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3347,
                  "end": 3364
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currency",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3366,
                    "end": 3374
                  },
                  "value": {
                    "type": "Literal",
                    "value": "EUR",
                    "raw": "'EUR'",
                    "start": 3376,
                    "end": 3381
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3366,
                  "end": 3381
                }
              ],
              "start": 3345,
              "end": 3383
            }
          ],
          "optional": false,
          "start": 3303,
          "end": 3384
        },
        "start": 3297,
        "end": 3384
      },
      "directive": null,
      "start": 3297,
      "end": 3385
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3391
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 17,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 29,
    "end": 30
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Numeric",
    "value": "2",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 50,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 84,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 99,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 125,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Identifier",
    "value": "style",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 158,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 170,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 180,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 197,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "dates",
    "start": 203,
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
    "value": "readonly",
    "start": 210,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 229,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 245,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "dates",
    "start": 260,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 266,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 290,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "dates",
    "start": 296,
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
    "value": "toLocaleString",
    "start": 302,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "String",
    "value": "'fr'",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 330,
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
    "value": "dates",
    "start": 336,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 342,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "String",
    "value": "'fr'",
    "start": 357,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "timeZone",
    "start": 365,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "String",
    "value": "'UTC'",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 392,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 398,
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
    "value": "[",
    "start": 406,
    "end": 407
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 410,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 414,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 420,
    "end": 421
  },
  {
    "type": "Numeric",
    "value": "59782",
    "start": 422,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 429,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 433,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 448,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 454,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 478,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 484,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 490,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "String",
    "value": "'de'",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 513,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 520,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 532,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 542,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 565,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 571,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 574,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 588,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 597,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 601,
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
    "value": ".",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 604,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "String",
    "value": "'de'",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 627,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 637,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 644,
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
    "value": "'currency'",
    "start": 651,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "timeZone",
    "start": 663,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 671,
    "end": 672
  },
  {
    "type": "String",
    "value": "'UTC'",
    "start": 673,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
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
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 690,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "bigInts",
    "start": 696,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 707,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 718,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 725,
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
    "value": ",",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
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
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 741,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "bigInts",
    "start": 747,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 755,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 779,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "bigInts",
    "start": 785,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 793,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 807,
    "end": 808
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 808,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 824,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "bigInts",
    "start": 830,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 838,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 853,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 864,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 871,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 883,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 893,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 910,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "int8Array",
    "start": 916,
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
    "value": "new",
    "start": 928,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "Int8Array",
    "start": 932,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 941,
    "end": 942
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 946,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "int8Array",
    "start": 952,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 962,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 986,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "int8Array",
    "start": 992,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1002,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1017,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "int8Array",
    "start": 1039,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1049,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1064,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1075,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1082,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1094,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 1104,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1121,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "uint8Array",
    "start": 1127,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 1144,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1159,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "uint8Array",
    "start": 1165,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1176,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1200,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "uint8Array",
    "start": 1206,
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
    "value": "toLocaleString",
    "start": 1217,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1232,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1248,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "uint8Array",
    "start": 1254,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1265,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1280,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "style",
    "start": 1291,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1298,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1310,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 1320,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1337,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArray",
    "start": 1343,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1363,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "Uint8ClampedArray",
    "start": 1367,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1389,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArray",
    "start": 1395,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1413,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "str",
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
    "type": "Identifier",
    "value": "uint8ClampedArray",
    "start": 1443,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1461,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1476,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1492,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArray",
    "start": 1498,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1516,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1531,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1542,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1549,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1561,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 1571,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1588,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "int16Array",
    "start": 1594,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1607,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "Int16Array",
    "start": 1611,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1626,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "int16Array",
    "start": 1632,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1643,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1667,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "int16Array",
    "start": 1673,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1684,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1699,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1715,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "int16Array",
    "start": 1721,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1732,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1747,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1758,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1765,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1777,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 1787,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "const",
    "start": 1804,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "uint16Array",
    "start": 1810,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1824,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "Uint16Array",
    "start": 1828,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1844,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "uint16Array",
    "start": 1850,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1862,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1886,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "uint16Array",
    "start": 1892,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1904,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1919,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1935,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "uint16Array",
    "start": 1941,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 1953,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 1968,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 1979,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 1986,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 1998,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 2008,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2025,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "int32Array",
    "start": 2031,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2044,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "Int32Array",
    "start": 2048,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2063,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "int32Array",
    "start": 2069,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2080,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2104,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "int32Array",
    "start": 2110,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2121,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2136,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2152,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "int32Array",
    "start": 2158,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2169,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2184,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 2195,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 2202,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 2214,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 2224,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2241,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "uint32Array",
    "start": 2247,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2261,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "Uint32Array",
    "start": 2265,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2281,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "uint32Array",
    "start": 2287,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2299,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2323,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "uint32Array",
    "start": 2329,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2341,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2356,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2372,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "uint32Array",
    "start": 2378,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2390,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2405,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 2416,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 2423,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 2435,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 2445,
    "end": 2450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2462,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "float32Array",
    "start": 2468,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2483,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "Float32Array",
    "start": 2487,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2504,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "float32Array",
    "start": 2510,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2523,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2547,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "float32Array",
    "start": 2553,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2566,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2581,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2597,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "float32Array",
    "start": 2603,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2616,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2631,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 2642,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 2649,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 2661,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 2671,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2688,
    "end": 2693
  },
  {
    "type": "Identifier",
    "value": "float64Array",
    "start": 2694,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2709,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "Float64Array",
    "start": 2713,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2730,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Identifier",
    "value": "float64Array",
    "start": 2736,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2749,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2773,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "float64Array",
    "start": 2779,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2792,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2807,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2823,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Identifier",
    "value": "float64Array",
    "start": 2829,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2842,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 2857,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 2868,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 2875,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 2887,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 2897,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2914,
    "end": 2919
  },
  {
    "type": "Identifier",
    "value": "bigInt64Array",
    "start": 2920,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2936,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 2940,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 2958,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "bigInt64Array",
    "start": 2964,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 2978,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 3002,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "bigInt64Array",
    "start": 3008,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 3022,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 3037,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 3053,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Identifier",
    "value": "bigInt64Array",
    "start": 3059,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 3073,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 3088,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 3099,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 3106,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 3118,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 3128,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3145,
    "end": 3150
  },
  {
    "type": "Identifier",
    "value": "bigIntUint64Array",
    "start": 3151,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3171,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 3175,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 3194,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "bigIntUint64Array",
    "start": 3200,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 3218,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 3242,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "bigIntUint64Array",
    "start": 3248,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 3266,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 3281,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "str",
    "start": 3297,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Identifier",
    "value": "bigIntUint64Array",
    "start": 3303,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 3321,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 3336,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Identifier",
    "value": "style",
    "start": 3347,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 3354,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 3366,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "String",
    "value": "'EUR'",
    "start": 3376,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3384,
    "end": 3385
  }
]
```
