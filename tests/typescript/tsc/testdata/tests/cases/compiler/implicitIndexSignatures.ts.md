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
        "name": "StringMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
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
                "name": "x",
                "optional": false,
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
                "start": 20,
                "end": 29
              }
            ],
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
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 19,
            "end": 38
          }
        ],
        "start": 17,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 41
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
            "name": "empty1",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 55
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 58,
            "end": 60
          },
          "definite": false,
          "start": 49,
          "end": 60
        }
      ],
      "declare": false,
      "start": 43,
      "end": 61
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
            "name": "empty2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 74,
                "end": 76
              },
              "start": 72,
              "end": 76
            },
            "start": 66,
            "end": 76
          },
          "init": null,
          "definite": false,
          "start": 66,
          "end": 76
        }
      ],
      "declare": false,
      "start": 62,
      "end": 77
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
            "name": "names1",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 90
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
                  "start": 95,
                  "end": 96
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 98,
                  "end": 103
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 95,
                "end": 103
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
                  "start": 105,
                  "end": 106
                },
                "value": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 108,
                  "end": 113
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 105,
                "end": 113
              }
            ],
            "start": 93,
            "end": 115
          },
          "definite": false,
          "start": 84,
          "end": 115
        }
      ],
      "declare": false,
      "start": 78,
      "end": 116
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
            "name": "names2",
            "optional": false,
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
                      "start": 131,
                      "end": 132
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 134,
                        "end": 140
                      },
                      "start": 132,
                      "end": 140
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 131,
                    "end": 141
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
                      "start": 142,
                      "end": 143
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 145,
                        "end": 151
                      },
                      "start": 143,
                      "end": 151
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 142,
                    "end": 151
                  }
                ],
                "start": 129,
                "end": 153
              },
              "start": 127,
              "end": 153
            },
            "start": 121,
            "end": 153
          },
          "init": null,
          "definite": false,
          "start": 121,
          "end": 153
        }
      ],
      "declare": false,
      "start": 117,
      "end": 154
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
                  "name": "StringMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 173
                },
                "typeArguments": null,
                "start": 164,
                "end": 173
              },
              "start": 162,
              "end": 173
            },
            "start": 159,
            "end": 173
          },
          "init": null,
          "definite": false,
          "start": 159,
          "end": 173
        }
      ],
      "declare": false,
      "start": 155,
      "end": 174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 178
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
                "start": 183,
                "end": 184
              },
              "value": {
                "type": "Literal",
                "value": "xxx",
                "raw": "\"xxx\"",
                "start": 186,
                "end": 191
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 183,
              "end": 191
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 194
              },
              "value": {
                "type": "Literal",
                "value": "yyy",
                "raw": "\"yyy\"",
                "start": 196,
                "end": 201
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 193,
              "end": 201
            }
          ],
          "start": 181,
          "end": 203
        },
        "start": 175,
        "end": 203
      },
      "directive": null,
      "start": 175,
      "end": 204
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 208
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "empty1",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 217
        },
        "start": 205,
        "end": 217
      },
      "directive": null,
      "start": 205,
      "end": 218
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 222
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "empty2",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 231
        },
        "start": 219,
        "end": 231
      },
      "directive": null,
      "start": 219,
      "end": 232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 236
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "names1",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 245
        },
        "start": 233,
        "end": 245
      },
      "directive": null,
      "start": 233,
      "end": 246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 250
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "names2",
          "optional": false,
          "typeAnnotation": null,
          "start": 253,
          "end": 259
        },
        "start": 247,
        "end": 259
      },
      "directive": null,
      "start": 247,
      "end": 260
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getStringIndexValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 279,
        "end": 298
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 300
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 299,
            "end": 300
          }
        ],
        "start": 298,
        "end": 301
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
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
                          "type": "TSStringKeyword",
                          "start": 313,
                          "end": 319
                        },
                        "start": 311,
                        "end": 319
                      },
                      "start": 310,
                      "end": 319
                    }
                  ],
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
                        "start": 322,
                        "end": 323
                      },
                      "typeArguments": null,
                      "start": 322,
                      "end": 323
                    },
                    "start": 320,
                    "end": 323
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 309,
                  "end": 323
                }
              ],
              "start": 307,
              "end": 325
            },
            "start": 305,
            "end": 325
          },
          "start": 302,
          "end": 325
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
            "start": 328,
            "end": 329
          },
          "typeArguments": null,
          "start": 328,
          "end": 329
        },
        "start": 326,
        "end": 329
      },
      "body": null,
      "expression": false,
      "start": 262,
      "end": 330
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getNumberIndexValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 348,
        "end": 367
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 369
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 368,
            "end": 369
          }
        ],
        "start": 367,
        "end": 370
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
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
                          "type": "TSNumberKeyword",
                          "start": 382,
                          "end": 388
                        },
                        "start": 380,
                        "end": 388
                      },
                      "start": 379,
                      "end": 388
                    }
                  ],
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
                        "start": 391,
                        "end": 392
                      },
                      "typeArguments": null,
                      "start": 391,
                      "end": 392
                    },
                    "start": 389,
                    "end": 392
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 378,
                  "end": 392
                }
              ],
              "start": 376,
              "end": 394
            },
            "start": 374,
            "end": 394
          },
          "start": 371,
          "end": 394
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
            "start": 397,
            "end": 398
          },
          "typeArguments": null,
          "start": 397,
          "end": 398
        },
        "start": 395,
        "end": 398
      },
      "body": null,
      "expression": false,
      "start": 331,
      "end": 399
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 412
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 429
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
                        "start": 434,
                        "end": 435
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 437,
                        "end": 438
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 434,
                      "end": 438
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
                        "start": 440,
                        "end": 441
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 443,
                        "end": 444
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 440,
                      "end": 444
                    }
                  ],
                  "start": 432,
                  "end": 446
                },
                "definite": false,
                "start": 427,
                "end": 446
              }
            ],
            "declare": false,
            "start": 421,
            "end": 447
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
                            "start": 462,
                            "end": 463
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 465,
                              "end": 471
                            },
                            "start": 463,
                            "end": 471
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 462,
                          "end": 472
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
                            "start": 473,
                            "end": 474
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 476,
                              "end": 482
                            },
                            "start": 474,
                            "end": 482
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 473,
                          "end": 482
                        }
                      ],
                      "start": 460,
                      "end": 484
                    },
                    "start": 458,
                    "end": 484
                  },
                  "start": 456,
                  "end": 484
                },
                "init": null,
                "definite": false,
                "start": 456,
                "end": 484
              }
            ],
            "declare": false,
            "start": 452,
            "end": 485
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 498
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 501,
                    "end": 520
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 521,
                      "end": 523
                    }
                  ],
                  "optional": false,
                  "start": 501,
                  "end": 524
                },
                "definite": false,
                "start": 496,
                "end": 524
              }
            ],
            "declare": false,
            "start": 490,
            "end": 525
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 538
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 541,
                    "end": 560
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 563
                    }
                  ],
                  "optional": false,
                  "start": 541,
                  "end": 564
                },
                "definite": false,
                "start": 536,
                "end": 564
              }
            ],
            "declare": false,
            "start": 530,
            "end": 565
          }
        ],
        "start": 415,
        "end": 567
      },
      "expression": false,
      "start": 401,
      "end": 567
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 580
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 597
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
                        "start": 602,
                        "end": 603
                      },
                      "value": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "\"1\"",
                        "start": 605,
                        "end": 608
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 602,
                      "end": 608
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
                        "start": 610,
                        "end": 611
                      },
                      "value": {
                        "type": "Literal",
                        "value": "2",
                        "raw": "\"2\"",
                        "start": 613,
                        "end": 616
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 610,
                      "end": 616
                    }
                  ],
                  "start": 600,
                  "end": 618
                },
                "definite": false,
                "start": 595,
                "end": 618
              }
            ],
            "declare": false,
            "start": 589,
            "end": 619
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
                            "start": 634,
                            "end": 635
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 637,
                              "end": 643
                            },
                            "start": 635,
                            "end": 643
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 634,
                          "end": 644
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
                            "start": 645,
                            "end": 646
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 648,
                              "end": 654
                            },
                            "start": 646,
                            "end": 654
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 645,
                          "end": 654
                        }
                      ],
                      "start": 632,
                      "end": 656
                    },
                    "start": 630,
                    "end": 656
                  },
                  "start": 628,
                  "end": 656
                },
                "init": null,
                "definite": false,
                "start": 628,
                "end": 656
              }
            ],
            "declare": false,
            "start": 624,
            "end": 657
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 668,
                  "end": 670
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 673,
                    "end": 692
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 695
                    }
                  ],
                  "optional": false,
                  "start": 673,
                  "end": 696
                },
                "definite": false,
                "start": 668,
                "end": 696
              }
            ],
            "declare": false,
            "start": 662,
            "end": 697
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 708,
                  "end": 710
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 713,
                    "end": 732
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 733,
                      "end": 735
                    }
                  ],
                  "optional": false,
                  "start": 713,
                  "end": 736
                },
                "definite": false,
                "start": 708,
                "end": 736
              }
            ],
            "declare": false,
            "start": 702,
            "end": 737
          }
        ],
        "start": 583,
        "end": 739
      },
      "expression": false,
      "start": 569,
      "end": 739
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 752
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 769
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
                        "start": 774,
                        "end": 775
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 777,
                        "end": 778
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 774,
                      "end": 778
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
                        "start": 780,
                        "end": 781
                      },
                      "value": {
                        "type": "Literal",
                        "value": "2",
                        "raw": "\"2\"",
                        "start": 783,
                        "end": 786
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 780,
                      "end": 786
                    }
                  ],
                  "start": 772,
                  "end": 788
                },
                "definite": false,
                "start": 767,
                "end": 788
              }
            ],
            "declare": false,
            "start": 761,
            "end": 789
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
                            "start": 804,
                            "end": 805
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 807,
                              "end": 813
                            },
                            "start": 805,
                            "end": 813
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 804,
                          "end": 814
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
                            "start": 815,
                            "end": 816
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 818,
                              "end": 824
                            },
                            "start": 816,
                            "end": 824
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 815,
                          "end": 824
                        }
                      ],
                      "start": 802,
                      "end": 826
                    },
                    "start": 800,
                    "end": 826
                  },
                  "start": 798,
                  "end": 826
                },
                "init": null,
                "definite": false,
                "start": 798,
                "end": 826
              }
            ],
            "declare": false,
            "start": 794,
            "end": 827
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 838,
                  "end": 840
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 843,
                    "end": 862
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 865
                    }
                  ],
                  "optional": false,
                  "start": 843,
                  "end": 866
                },
                "definite": false,
                "start": 838,
                "end": 866
              }
            ],
            "declare": false,
            "start": 832,
            "end": 867
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 878,
                  "end": 880
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 883,
                    "end": 902
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 903,
                      "end": 905
                    }
                  ],
                  "optional": false,
                  "start": 883,
                  "end": 906
                },
                "definite": false,
                "start": 878,
                "end": 906
              }
            ],
            "declare": false,
            "start": 872,
            "end": 907
          }
        ],
        "start": 755,
        "end": 909
      },
      "expression": false,
      "start": 741,
      "end": 909
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 920,
        "end": 922
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 937,
                  "end": 939
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 944,
                        "end": 945
                      },
                      "value": {
                        "type": "Literal",
                        "value": "0",
                        "raw": "\"0\"",
                        "start": 947,
                        "end": 950
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 944,
                      "end": 950
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 952,
                        "end": 953
                      },
                      "value": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "\"1\"",
                        "start": 955,
                        "end": 958
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 952,
                      "end": 958
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "count",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 960,
                        "end": 965
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 967,
                        "end": 968
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 960,
                      "end": 968
                    }
                  ],
                  "start": 942,
                  "end": 970
                },
                "definite": false,
                "start": 937,
                "end": 970
              }
            ],
            "declare": false,
            "start": 931,
            "end": 971
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
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 986,
                            "end": 987
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 989,
                              "end": 995
                            },
                            "start": 987,
                            "end": 995
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 986,
                          "end": 996
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 997,
                            "end": 998
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1000,
                              "end": 1006
                            },
                            "start": 998,
                            "end": 1006
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 997,
                          "end": 1007
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "count",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1008,
                            "end": 1013
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1015,
                              "end": 1021
                            },
                            "start": 1013,
                            "end": 1021
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1008,
                          "end": 1021
                        }
                      ],
                      "start": 984,
                      "end": 1023
                    },
                    "start": 982,
                    "end": 1023
                  },
                  "start": 980,
                  "end": 1023
                },
                "init": null,
                "definite": false,
                "start": 980,
                "end": 1023
              }
            ],
            "declare": false,
            "start": 976,
            "end": 1024
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1041
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1063
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1064,
                      "end": 1066
                    }
                  ],
                  "optional": false,
                  "start": 1044,
                  "end": 1067
                },
                "definite": false,
                "start": 1039,
                "end": 1067
              }
            ],
            "declare": false,
            "start": 1033,
            "end": 1068
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1079,
                  "end": 1081
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1084,
                    "end": 1103
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1104,
                      "end": 1106
                    }
                  ],
                  "optional": false,
                  "start": 1084,
                  "end": 1107
                },
                "definite": false,
                "start": 1079,
                "end": 1107
              }
            ],
            "declare": false,
            "start": 1073,
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1119,
                  "end": 1121
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getNumberIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1124,
                    "end": 1143
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1144,
                      "end": 1146
                    }
                  ],
                  "optional": false,
                  "start": 1124,
                  "end": 1147
                },
                "definite": false,
                "start": 1119,
                "end": 1147
              }
            ],
            "declare": false,
            "start": 1113,
            "end": 1148
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1159,
                  "end": 1161
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getNumberIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1164,
                    "end": 1183
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1184,
                      "end": 1186
                    }
                  ],
                  "optional": false,
                  "start": 1164,
                  "end": 1187
                },
                "definite": false,
                "start": 1159,
                "end": 1187
              }
            ],
            "declare": false,
            "start": 1153,
            "end": 1188
          }
        ],
        "start": 925,
        "end": 1190
      },
      "expression": false,
      "start": 911,
      "end": 1190
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1201,
        "end": 1203
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
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1217,
              "end": 1219
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1222,
                    "end": 1223
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1222,
                  "end": 1223
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1225,
                    "end": 1226
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1225,
                  "end": 1226
                }
              ],
              "start": 1220,
              "end": 1228
            },
            "const": false,
            "declare": false,
            "start": 1212,
            "end": 1228
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1240
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1243,
                    "end": 1244
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 1247,
                    "end": 1250
                  },
                  "computed": false,
                  "start": 1243,
                  "end": 1250
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1252,
                    "end": 1253
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 1256,
                    "end": 1259
                  },
                  "computed": false,
                  "start": 1252,
                  "end": 1259
                }
              ],
              "start": 1241,
              "end": 1261
            },
            "const": false,
            "declare": false,
            "start": 1233,
            "end": 1261
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1271,
              "end": 1273
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1276,
                    "end": 1277
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1280,
                    "end": 1281
                  },
                  "computed": false,
                  "start": 1276,
                  "end": 1281
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1283,
                    "end": 1284
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 1287,
                    "end": 1290
                  },
                  "computed": false,
                  "start": 1283,
                  "end": 1290
                }
              ],
              "start": 1274,
              "end": 1292
            },
            "const": false,
            "declare": false,
            "start": 1266,
            "end": 1292
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1303,
                  "end": 1305
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1308,
                    "end": 1327
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1328,
                      "end": 1330
                    }
                  ],
                  "optional": false,
                  "start": 1308,
                  "end": 1331
                },
                "definite": false,
                "start": 1303,
                "end": 1331
              }
            ],
            "declare": false,
            "start": 1297,
            "end": 1332
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1343,
                  "end": 1345
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1348,
                    "end": 1367
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1368,
                      "end": 1370
                    }
                  ],
                  "optional": false,
                  "start": 1348,
                  "end": 1371
                },
                "definite": false,
                "start": 1343,
                "end": 1371
              }
            ],
            "declare": false,
            "start": 1337,
            "end": 1372
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1383,
                  "end": 1385
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1388,
                    "end": 1407
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1408,
                      "end": 1410
                    }
                  ],
                  "optional": false,
                  "start": 1388,
                  "end": 1411
                },
                "definite": false,
                "start": 1383,
                "end": 1411
              }
            ],
            "declare": false,
            "start": 1377,
            "end": 1412
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1423,
                  "end": 1425
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getNumberIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1428,
                    "end": 1447
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1448,
                      "end": 1450
                    }
                  ],
                  "optional": false,
                  "start": 1428,
                  "end": 1451
                },
                "definite": false,
                "start": 1423,
                "end": 1451
              }
            ],
            "declare": false,
            "start": 1417,
            "end": 1452
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
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1463,
                  "end": 1465
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getNumberIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1468,
                    "end": 1487
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1488,
                      "end": 1490
                    }
                  ],
                  "optional": false,
                  "start": 1468,
                  "end": 1491
                },
                "definite": false,
                "start": 1463,
                "end": 1491
              }
            ],
            "declare": false,
            "start": 1457,
            "end": 1492
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
                  "name": "v6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1503,
                  "end": 1505
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getNumberIndexValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1508,
                    "end": 1527
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1528,
                      "end": 1530
                    }
                  ],
                  "optional": false,
                  "start": 1508,
                  "end": 1531
                },
                "definite": false,
                "start": 1503,
                "end": 1531
              }
            ],
            "declare": false,
            "start": 1497,
            "end": 1532
          }
        ],
        "start": 1206,
        "end": 1534
      },
      "expression": false,
      "start": 1192,
      "end": 1534
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1534
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
    "value": "StringMap",
    "start": 5,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "[",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "]",
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
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "empty1",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 62,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "empty2",
    "start": 66,
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
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "names1",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "names2",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 159,
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
    "value": "StringMap",
    "start": 164,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "String",
    "value": "\"xxx\"",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "String",
    "value": "\"yyy\"",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 205,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "empty1",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "empty2",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "names1",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "names2",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 262,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 270,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "getStringIndexValue",
    "start": 279,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 310,
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
    "value": "string",
    "start": 313,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 331,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 339,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "getNumberIndexValue",
    "start": 348,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 379,
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
    "value": "]",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "function",
    "start": 401,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 410,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 421,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 427,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 452,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 456,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 465,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 476,
    "end": 482
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
    "type": "Keyword",
    "value": "const",
    "start": 490,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "getStringIndexValue",
    "start": 501,
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
    "value": "o1",
    "start": 521,
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
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 530,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 536,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "getStringIndexValue",
    "start": 541,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 561,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 569,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 589,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 595,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 613,
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
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 624,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 628,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 637,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Identifier",
    "value": "string",
    "start": 648,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 662,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 668,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "getStringIndexValue",
    "start": 673,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 693,
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
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 702,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "v2",
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
    "value": "getStringIndexValue",
    "start": 713,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 733,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 741,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 761,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 767,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 783,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "let",
    "start": 794,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 798,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 807,
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
    "value": "b",
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
    "type": "Identifier",
    "value": "string",
    "start": 818,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 832,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 838,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "getStringIndexValue",
    "start": 843,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 863,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 872,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 878,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "getStringIndexValue",
    "start": 883,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 903,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 908,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 911,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 920,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 931,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 937,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 947,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 950,
    "end": 951
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 955,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 960,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 965,
    "end": 966
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 976,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 980,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 984,
    "end": 985
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 989,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1000,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 1008,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1015,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1033,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1039,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "getStringIndexValue",
    "start": 1044,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 1064,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1073,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1079,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "getStringIndexValue",
    "start": 1084,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 1104,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 1113,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 1119,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "getNumberIndexValue",
    "start": 1124,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 1144,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1153,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 1159,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "getNumberIndexValue",
    "start": 1164,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 1184,
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
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1192,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1201,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1212,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1217,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1233,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1238,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1247,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 1256,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1266,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 1271,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 1287,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1297,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1303,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "getStringIndexValue",
    "start": 1308,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1328,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1337,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1343,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "getStringIndexValue",
    "start": 1348,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1368,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1377,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 1383,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "getStringIndexValue",
    "start": 1388,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 1408,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1417,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 1423,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "getNumberIndexValue",
    "start": 1428,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1448,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1457,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 1463,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "getNumberIndexValue",
    "start": 1468,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1488,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1497,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "v6",
    "start": 1503,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "getNumberIndexValue",
    "start": 1508,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 1528,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1533,
    "end": 1534
  }
]
```
