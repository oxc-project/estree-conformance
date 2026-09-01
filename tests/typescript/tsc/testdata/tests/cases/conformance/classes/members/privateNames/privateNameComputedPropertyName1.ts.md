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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "type": "PrivateIdentifier",
              "name": "a",
              "start": 14,
              "end": 16
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 19,
              "end": 22
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 23
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "b",
              "start": 28,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
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
            "start": 28,
            "end": 39
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "c",
              "start": 54,
              "end": 56
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "c",
              "raw": "'c'",
              "start": 59,
              "end": 62
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 45,
            "end": 63
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "d",
              "start": 77,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 68,
            "end": 88
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "e",
              "start": 94,
              "end": 96
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 99,
              "end": 101
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 94,
            "end": 102
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 119
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
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 132,
                          "end": 136
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "b",
                          "start": 137,
                          "end": 139
                        },
                        "optional": false,
                        "computed": false,
                        "start": 132,
                        "end": 139
                      },
                      "right": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "'b'",
                        "start": 142,
                        "end": 145
                      },
                      "start": 132,
                      "end": 145
                    },
                    "directive": null,
                    "start": 132,
                    "end": 146
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 155,
                          "end": 159
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "d",
                          "start": 160,
                          "end": 162
                        },
                        "optional": false,
                        "computed": false,
                        "start": 155,
                        "end": 162
                      },
                      "right": {
                        "type": "Literal",
                        "value": "d",
                        "raw": "'d'",
                        "start": 165,
                        "end": 168
                      },
                      "start": 155,
                      "end": 168
                    },
                    "directive": null,
                    "start": 155,
                    "end": 169
                  }
                ],
                "start": 122,
                "end": 175
              },
              "expression": false,
              "start": 119,
              "end": 175
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 108,
            "end": 175
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 185
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
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Record",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 210,
                                "end": 216
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 217,
                                    "end": 223
                                  },
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 225,
                                    "end": 231
                                  }
                                ],
                                "start": 216,
                                "end": 232
                              },
                              "start": 210,
                              "end": 232
                            },
                            "start": 208,
                            "end": 232
                          },
                          "start": 204,
                          "end": 232
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
                                "start": 237,
                                "end": 238
                              },
                              "value": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "'a'",
                                "start": 240,
                                "end": 243
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 237,
                              "end": 243
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
                                "start": 245,
                                "end": 246
                              },
                              "value": {
                                "type": "Literal",
                                "value": "b",
                                "raw": "'b'",
                                "start": 248,
                                "end": 251
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 245,
                              "end": 251
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
                                "start": 253,
                                "end": 254
                              },
                              "value": {
                                "type": "Literal",
                                "value": "c",
                                "raw": "'c'",
                                "start": 256,
                                "end": 259
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 253,
                              "end": 259
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 261,
                                "end": 262
                              },
                              "value": {
                                "type": "Literal",
                                "value": "d",
                                "raw": "'d'",
                                "start": 264,
                                "end": 267
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 261,
                              "end": 267
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 269,
                                "end": 270
                              },
                              "value": {
                                "type": "Literal",
                                "value": "e",
                                "raw": "'e'",
                                "start": 272,
                                "end": 275
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 269,
                              "end": 275
                            }
                          ],
                          "start": 235,
                          "end": 277
                        },
                        "definite": false,
                        "start": 204,
                        "end": 277
                      }
                    ],
                    "declare": false,
                    "start": 198,
                    "end": 278
                  },
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 308,
                                  "end": 312
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "a",
                                  "start": 313,
                                  "end": 315
                                },
                                "optional": false,
                                "computed": false,
                                "start": 308,
                                "end": 315
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 318,
                                "end": 319
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 307,
                              "end": 319
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 334,
                                  "end": 338
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "b",
                                  "start": 339,
                                  "end": 341
                                },
                                "optional": false,
                                "computed": false,
                                "start": 334,
                                "end": 341
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 344,
                                "end": 345
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 333,
                              "end": 345
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 360,
                                  "end": 364
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "c",
                                  "start": 365,
                                  "end": 367
                                },
                                "optional": false,
                                "computed": false,
                                "start": 360,
                                "end": 367
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 370,
                                "end": 371
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 359,
                              "end": 371
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 386,
                                  "end": 390
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "d",
                                  "start": 391,
                                  "end": 393
                                },
                                "optional": false,
                                "computed": false,
                                "start": 386,
                                "end": 393
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "d",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 396,
                                "end": 397
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 385,
                              "end": 397
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 412,
                                    "end": 416
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "name": "e",
                                    "start": 417,
                                    "end": 419
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 412,
                                  "end": 419
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "e",
                                  "raw": "'e'",
                                  "start": 422,
                                  "end": 425
                                },
                                "start": 412,
                                "end": 425
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 428,
                                "end": 429
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": true,
                              "optional": false,
                              "start": 411,
                              "end": 429
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 293,
                          "end": 440
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 447
                        },
                        "definite": false,
                        "start": 293,
                        "end": 447
                      }
                    ],
                    "declare": false,
                    "start": 287,
                    "end": 448
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
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 457,
                          "end": 464
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 465,
                          "end": 468
                        },
                        "optional": false,
                        "computed": false,
                        "start": 457,
                        "end": 468
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 469,
                          "end": 470
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 472,
                          "end": 473
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 475,
                          "end": 476
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 478,
                          "end": 479
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 481,
                          "end": 482
                        }
                      ],
                      "optional": false,
                      "start": 457,
                      "end": 483
                    },
                    "directive": null,
                    "start": 457,
                    "end": 484
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
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 500,
                          "end": 502
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 505,
                            "end": 509
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 510,
                              "end": 514
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "a",
                              "start": 515,
                              "end": 517
                            },
                            "optional": false,
                            "computed": false,
                            "start": 510,
                            "end": 517
                          },
                          "optional": false,
                          "computed": true,
                          "start": 505,
                          "end": 518
                        },
                        "definite": false,
                        "start": 500,
                        "end": 518
                      }
                    ],
                    "declare": false,
                    "start": 494,
                    "end": 519
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
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 536
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 539,
                            "end": 543
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 544,
                              "end": 548
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "b",
                              "start": 549,
                              "end": 551
                            },
                            "optional": false,
                            "computed": false,
                            "start": 544,
                            "end": 551
                          },
                          "optional": false,
                          "computed": true,
                          "start": 539,
                          "end": 552
                        },
                        "definite": false,
                        "start": 534,
                        "end": 552
                      }
                    ],
                    "declare": false,
                    "start": 528,
                    "end": 553
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
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 568,
                          "end": 570
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 573,
                            "end": 577
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 578,
                              "end": 582
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "c",
                              "start": 583,
                              "end": 585
                            },
                            "optional": false,
                            "computed": false,
                            "start": 578,
                            "end": 585
                          },
                          "optional": false,
                          "computed": true,
                          "start": 573,
                          "end": 586
                        },
                        "definite": false,
                        "start": 568,
                        "end": 586
                      }
                    ],
                    "declare": false,
                    "start": 562,
                    "end": 587
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
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 602,
                          "end": 604
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 607,
                            "end": 611
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 612,
                              "end": 616
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "d",
                              "start": 617,
                              "end": 619
                            },
                            "optional": false,
                            "computed": false,
                            "start": 612,
                            "end": 619
                          },
                          "optional": false,
                          "computed": true,
                          "start": 607,
                          "end": 620
                        },
                        "definite": false,
                        "start": 602,
                        "end": 620
                      }
                    ],
                    "declare": false,
                    "start": 596,
                    "end": 621
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
                          "name": "e1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 638
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 641,
                            "end": 645
                          },
                          "property": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 646,
                              "end": 650
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "e",
                              "start": 651,
                              "end": 653
                            },
                            "optional": false,
                            "computed": false,
                            "start": 646,
                            "end": 653
                          },
                          "optional": false,
                          "computed": true,
                          "start": 641,
                          "end": 654
                        },
                        "definite": false,
                        "start": 636,
                        "end": 654
                      }
                    ],
                    "declare": false,
                    "start": 630,
                    "end": 655
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
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 664,
                          "end": 671
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 672,
                          "end": 675
                        },
                        "optional": false,
                        "computed": false,
                        "start": 664,
                        "end": 675
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 676,
                          "end": 678
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 680,
                          "end": 682
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 684,
                          "end": 686
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 688,
                          "end": 690
                        }
                      ],
                      "optional": false,
                      "start": 664,
                      "end": 691
                    },
                    "directive": null,
                    "start": 664,
                    "end": 692
                  }
                ],
                "start": 188,
                "end": 698
              },
              "expression": false,
              "start": 185,
              "end": 698
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 181,
            "end": 698
          }
        ],
        "start": 8,
        "end": 700
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 700
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 707
            },
            "typeArguments": null,
            "arguments": [],
            "start": 702,
            "end": 709
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 710,
            "end": 714
          },
          "optional": false,
          "computed": false,
          "start": 702,
          "end": 714
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 702,
        "end": 716
      },
      "directive": null,
      "start": 702,
      "end": 717
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 718
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "PrivateIdentifier",
    "value": "a",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "PrivateIdentifier",
    "value": "b",
    "start": 28,
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
    "value": "string",
    "start": 32,
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
    "value": "readonly",
    "start": 45,
    "end": 53
  },
  {
    "type": "PrivateIdentifier",
    "value": "c",
    "start": 54,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 68,
    "end": 76
  },
  {
    "type": "PrivateIdentifier",
    "value": "d",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "PrivateIdentifier",
    "value": "e",
    "start": 94,
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
    "value": "''",
    "start": 99,
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
    "value": "constructor",
    "start": 108,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "this",
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137
  },
  {
    "type": "PrivateIdentifier",
    "value": "b",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 159,
    "end": 160
  },
  {
    "type": "PrivateIdentifier",
    "value": "d",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "String",
    "value": "'d'",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 204,
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
    "value": "Record",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "String",
    "value": "'a'",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 256,
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
    "value": "d",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "String",
    "value": "'d'",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "String",
    "value": "'e'",
    "start": 272,
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
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 312,
    "end": 313
  },
  {
    "type": "PrivateIdentifier",
    "value": "a",
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
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 338,
    "end": 339
  },
  {
    "type": "PrivateIdentifier",
    "value": "b",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 364,
    "end": 365
  },
  {
    "type": "PrivateIdentifier",
    "value": "c",
    "start": 365,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 386,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 390,
    "end": 391
  },
  {
    "type": "PrivateIdentifier",
    "value": "d",
    "start": 391,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 393,
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
    "value": "d",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 412,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 416,
    "end": 417
  },
  {
    "type": "PrivateIdentifier",
    "value": "e",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "String",
    "value": "'e'",
    "start": 422,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 443,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 457,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 465,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 494,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 510,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 514,
    "end": 515
  },
  {
    "type": "PrivateIdentifier",
    "value": "a",
    "start": 515,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 528,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 534,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 539,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549
  },
  {
    "type": "PrivateIdentifier",
    "value": "b",
    "start": 549,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 562,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 568,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 573,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 582,
    "end": 583
  },
  {
    "type": "PrivateIdentifier",
    "value": "c",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 596,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 602,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 607,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 612,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 616,
    "end": 617
  },
  {
    "type": "PrivateIdentifier",
    "value": "d",
    "start": 617,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "const",
    "start": 630,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 636,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 641,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 650,
    "end": 651
  },
  {
    "type": "PrivateIdentifier",
    "value": "e",
    "start": 651,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 664,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 676,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 680,
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
    "value": "c1",
    "start": 684,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 688,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 702,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 710,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 716,
    "end": 717
  }
]
```
