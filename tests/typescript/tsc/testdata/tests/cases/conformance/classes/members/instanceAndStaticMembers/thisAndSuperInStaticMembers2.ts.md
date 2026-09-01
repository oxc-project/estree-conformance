__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 15
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              },
              "start": 30,
              "end": 35
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 22,
            "end": 36
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 53,
                  "end": 59
                },
                "start": 51,
                "end": 59
              },
              "body": null,
              "expression": false,
              "start": 49,
              "end": 60
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 41,
            "end": 60
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 68,
                "end": 74
              },
              "start": 66,
              "end": 74
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 65,
            "end": 75
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 85,
                  "end": 91
                },
                "start": 83,
                "end": 91
              },
              "body": null,
              "expression": false,
              "start": 81,
              "end": 92
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 80,
            "end": 92
          }
        ],
        "start": 16,
        "end": 94
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 94
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 103
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 130,
                "end": 133
              },
              "start": 128,
              "end": 133
            },
            "value": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 145
              },
              "start": 136,
              "end": 146
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 120,
            "end": 147
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 161
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 164,
                "end": 168
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 170
              },
              "optional": false,
              "computed": false,
              "start": 164,
              "end": 170
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 152,
            "end": 171
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y2",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 185
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 188,
                  "end": 192
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 194
                },
                "optional": false,
                "computed": false,
                "start": 188,
                "end": 194
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 188,
              "end": 196
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 176,
            "end": 197
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y3",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 211
            },
            "typeAnnotation": null,
            "value": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 214,
                    "end": 218
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 221
                  },
                  "optional": true,
                  "computed": false,
                  "start": 214,
                  "end": 221
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 214,
                "end": 223
              },
              "start": 214,
              "end": 223
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 202,
            "end": 224
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y4",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 238
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 241,
                  "end": 245
                },
                "property": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 247,
                  "end": 250
                },
                "optional": false,
                "computed": true,
                "start": 241,
                "end": 252
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 241,
              "end": 254
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 229,
            "end": 255
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y5",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 269
            },
            "typeAnnotation": null,
            "value": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 272,
                    "end": 276
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 280,
                    "end": 283
                  },
                  "optional": true,
                  "computed": true,
                  "start": 272,
                  "end": 285
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 272,
                "end": 287
              },
              "start": 272,
              "end": 287
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 260,
            "end": 288
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z1",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 302
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Super",
                "start": 305,
                "end": 310
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 312
              },
              "optional": false,
              "computed": false,
              "start": 305,
              "end": 312
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 293,
            "end": 313
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z2",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 327
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Super",
                "start": 330,
                "end": 335
              },
              "property": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 336,
                "end": 339
              },
              "optional": false,
              "computed": true,
              "start": 330,
              "end": 340
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 318,
            "end": 341
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z3",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 355
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 358,
                  "end": 363
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 365
                },
                "optional": false,
                "computed": false,
                "start": 358,
                "end": 365
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 358,
              "end": 367
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 346,
            "end": 368
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z4",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 382
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 385,
                  "end": 390
                },
                "property": {
                  "type": "Literal",
                  "value": "f",
                  "raw": "\"f\"",
                  "start": 391,
                  "end": 394
                },
                "optional": false,
                "computed": true,
                "start": 385,
                "end": 395
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 385,
              "end": 397
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 373,
            "end": 398
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z5",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 412
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 415,
                  "end": 420
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 422
                },
                "optional": false,
                "computed": false,
                "start": 415,
                "end": 422
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 425,
                "end": 426
              },
              "start": 415,
              "end": 426
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 403,
            "end": 427
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z6",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 441
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 444,
                  "end": 449
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 450,
                  "end": 451
                },
                "optional": false,
                "computed": false,
                "start": 444,
                "end": 451
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 455,
                "end": 456
              },
              "start": 444,
              "end": 456
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 432,
            "end": 457
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z7",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 471
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 483,
                            "end": 488
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 489,
                            "end": 490
                          },
                          "optional": false,
                          "computed": false,
                          "start": 483,
                          "end": 490
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 493,
                          "end": 494
                        },
                        "start": 483,
                        "end": 494
                      },
                      "directive": null,
                      "start": 483,
                      "end": 495
                    }
                  ],
                  "start": 481,
                  "end": 497
                },
                "id": null,
                "generator": false,
                "start": 475,
                "end": 497
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 474,
              "end": 500
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 462,
            "end": 501
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z8",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 515
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 519,
                      "end": 524
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 526
                    },
                    "optional": false,
                    "computed": false,
                    "start": 519,
                    "end": 526
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 527
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 531,
                    "end": 532
                  }
                ],
                "start": 530,
                "end": 533
              },
              "start": 518,
              "end": 533
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 506,
            "end": 534
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z9",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 548
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 552,
                        "end": 557
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 558,
                        "end": 559
                      },
                      "optional": false,
                      "computed": false,
                      "start": 552,
                      "end": 559
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 562,
                      "end": 563
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 563
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 564
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 568,
                    "end": 569
                  }
                ],
                "start": 567,
                "end": 570
              },
              "start": 551,
              "end": 570
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 539,
            "end": 571
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z10",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 586
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 593,
                        "end": 598
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 599,
                        "end": 600
                      },
                      "optional": false,
                      "computed": false,
                      "start": 593,
                      "end": 600
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 590,
                    "end": 600
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 601
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 605,
                    "end": 606
                  }
                ],
                "start": 604,
                "end": 607
              },
              "start": 589,
              "end": 607
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 576,
            "end": 608
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z11",
              "optional": false,
              "typeAnnotation": null,
              "start": 620,
              "end": 623
            },
            "typeAnnotation": null,
            "value": {
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
                      "start": 628,
                      "end": 629
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 631,
                        "end": 636
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 637,
                        "end": 638
                      },
                      "optional": false,
                      "computed": false,
                      "start": 631,
                      "end": 638
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 628,
                    "end": 638
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 640
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 645,
                      "end": 646
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 648,
                      "end": 649
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 645,
                    "end": 649
                  }
                ],
                "start": 643,
                "end": 651
              },
              "start": 626,
              "end": 651
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 613,
            "end": 652
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z12",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 667
            },
            "typeAnnotation": null,
            "value": {
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
                      "start": 672,
                      "end": 673
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 675,
                          "end": 680
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 681,
                          "end": 682
                        },
                        "optional": false,
                        "computed": false,
                        "start": 675,
                        "end": 682
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 685,
                        "end": 686
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 675,
                      "end": 686
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 672,
                    "end": 686
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 688
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 694
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 696,
                      "end": 697
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 693,
                    "end": 697
                  }
                ],
                "start": 691,
                "end": 699
              },
              "start": 670,
              "end": 699
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 657,
            "end": 700
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z13",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 715
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 723,
                        "end": 728
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 729,
                        "end": 730
                      },
                      "optional": false,
                      "computed": false,
                      "start": 723,
                      "end": 730
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 720,
                    "end": 730
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 718,
                "end": 732
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 737,
                      "end": 738
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 740,
                      "end": 741
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 737,
                    "end": 741
                  }
                ],
                "start": 735,
                "end": 743
              },
              "start": 718,
              "end": 743
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 705,
            "end": 744
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z14",
              "optional": false,
              "typeAnnotation": null,
              "start": 756,
              "end": 759
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 764,
                  "end": 769
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 770,
                  "end": 771
                },
                "optional": false,
                "computed": false,
                "start": 764,
                "end": 771
              },
              "start": 762,
              "end": 771
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 749,
            "end": 772
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z15",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 787
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 792,
                  "end": 797
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 798,
                  "end": 799
                },
                "optional": false,
                "computed": false,
                "start": 792,
                "end": 799
              },
              "start": 790,
              "end": 799
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 777,
            "end": 800
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z16",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 815
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 820,
                  "end": 825
                },
                "property": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 827,
                  "end": 830
                },
                "optional": false,
                "computed": true,
                "start": 820,
                "end": 832
              },
              "start": 818,
              "end": 832
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 805,
            "end": 833
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z17",
              "optional": false,
              "typeAnnotation": null,
              "start": 845,
              "end": 848
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 851,
                  "end": 856
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 857,
                  "end": 858
                },
                "optional": false,
                "computed": false,
                "start": 851,
                "end": 858
              },
              "start": 851,
              "end": 860
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 838,
            "end": 861
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z18",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 876
            },
            "typeAnnotation": null,
            "value": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 879,
                  "end": 884
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 885,
                  "end": 886
                },
                "optional": false,
                "computed": false,
                "start": 879,
                "end": 886
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 886,
                    "end": 888
                  }
                ],
                "expressions": [],
                "start": 886,
                "end": 888
              },
              "start": 879,
              "end": 888
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 866,
            "end": 889
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 930
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 933,
              "end": 934
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 929,
            "end": 935
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 940,
              "end": 941
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 944,
                "end": 948
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 949,
                "end": 950
              },
              "optional": false,
              "computed": false,
              "start": 944,
              "end": 950
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 940,
            "end": 951
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 956,
              "end": 957
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 960,
                  "end": 965
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 966,
                  "end": 967
                },
                "optional": false,
                "computed": false,
                "start": 960,
                "end": 967
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 960,
              "end": 969
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 956,
            "end": 970
          }
        ],
        "start": 114,
        "end": 972
      },
      "abstract": false,
      "declare": false,
      "start": 96,
      "end": 972
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 972
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 22,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 41,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "number",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 96,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 104,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 120,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 136,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 152,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 176,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 202,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 218,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 229,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "y4",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 247,
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
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 260,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "y5",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 272,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 293,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "static",
    "start": 318,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 330,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 335,
    "end": 336
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 336,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 346,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "z3",
    "start": 353,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 358,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 364,
    "end": 365
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
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 373,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "z4",
    "start": 380,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 385,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 390,
    "end": 391
  },
  {
    "type": "String",
    "value": "\"f\"",
    "start": 391,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "static",
    "start": 403,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "z5",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 415,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 432,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "z6",
    "start": 439,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 444,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "+=",
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
    "type": "Keyword",
    "value": "static",
    "start": 462,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "z7",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 483,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 493,
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
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 506,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "z8",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 519,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 530,
    "end": 531
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 539,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "z9",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 552,
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
    "value": "a",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 567,
    "end": 568
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 576,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "z10",
    "start": 583,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 590,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 593,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 604,
    "end": 605
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 613,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "z11",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 631,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 646,
    "end": 647
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 657,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "z12",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 675,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 705,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "z13",
    "start": 712,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "...",
    "start": 720,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 723,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 749,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "z14",
    "start": 756,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 762,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 764,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Keyword",
    "value": "static",
    "start": 777,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "z15",
    "start": 784,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 790,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 792,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 805,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "z16",
    "start": 812,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 818,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 820,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 827,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 838,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "z17",
    "start": 845,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 851,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 858,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 866,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "z18",
    "start": 873,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 879,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 885,
    "end": 886
  },
  {
    "type": "Template",
    "value": "``",
    "start": 886,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 944,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 960,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 966,
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
    "value": ")",
    "start": 968,
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
  }
]
```
