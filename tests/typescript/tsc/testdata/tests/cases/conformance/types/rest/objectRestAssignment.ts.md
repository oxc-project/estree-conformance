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
            "name": "ka",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
              },
              "start": 6,
              "end": 11
            },
            "start": 4,
            "end": 11
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
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
            "name": "nested",
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
                      "name": "ki",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 29
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 27,
                    "end": 29
                  }
                ],
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
            },
            "start": 17,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 17,
          "end": 31
        }
      ],
      "declare": false,
      "start": 13,
      "end": 32
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
            "name": "other",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 44,
                "end": 50
              },
              "start": 42,
              "end": 50
            },
            "start": 37,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 37,
          "end": 50
        }
      ],
      "declare": false,
      "start": 33,
      "end": 51
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
            "name": "rest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 62,
                "end": 65
              },
              "start": 60,
              "end": 65
            },
            "start": 56,
            "end": 65
          },
          "init": null,
          "definite": false,
          "start": 56,
          "end": 65
        }
      ],
      "declare": false,
      "start": 52,
      "end": 66
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
            "name": "complex",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 82,
                      "end": 83
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
                              "name": "ka",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 87,
                              "end": 89
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 87,
                            "end": 90
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ki",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 91,
                              "end": 93
                            },
                            "typeAnnotation": null,
                            "accessibility": null,
                            "static": false,
                            "start": 91,
                            "end": 93
                          }
                        ],
                        "start": 85,
                        "end": 95
                      },
                      "start": 83,
                      "end": 95
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 82,
                    "end": 96
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
                      "start": 97,
                      "end": 98
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 100,
                        "end": 106
                      },
                      "start": 98,
                      "end": 106
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 97,
                    "end": 106
                  }
                ],
                "start": 80,
                "end": 108
              },
              "start": 78,
              "end": 108
            },
            "start": 71,
            "end": 108
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 108
        }
      ],
      "declare": false,
      "start": 67,
      "end": 109
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
                "start": 112,
                "end": 113
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
                      "name": "ka",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 119
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ka",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 119
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 117,
                    "end": 119
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 130
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 121,
                    "end": 130
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 132
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 112,
              "end": 132
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
                "start": 134,
                "end": 135
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 142
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 134,
              "end": 142
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 151
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 144,
              "end": 151
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 152
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "complex",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 162
        },
        "start": 111,
        "end": 162
      },
      "directive": null,
      "start": 110,
      "end": 164
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
            "name": "overEmit",
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
                      "start": 196,
                      "end": 197
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
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
                                "name": "ka",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 201,
                                "end": 203
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 205,
                                  "end": 211
                                },
                                "start": 203,
                                "end": 211
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 201,
                              "end": 212
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
                                "start": 213,
                                "end": 214
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 216,
                                  "end": 222
                                },
                                "start": 214,
                                "end": 222
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 213,
                              "end": 222
                            }
                          ],
                          "start": 199,
                          "end": 224
                        },
                        "start": 199,
                        "end": 226
                      },
                      "start": 197,
                      "end": 226
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 196,
                    "end": 227
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
                      "start": 228,
                      "end": 229
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
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 233,
                              "end": 234
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 236,
                                "end": 242
                              },
                              "start": 234,
                              "end": 242
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 233,
                            "end": 243
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ki",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 244,
                              "end": 246
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 248,
                                "end": 254
                              },
                              "start": 246,
                              "end": 254
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 244,
                            "end": 255
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ku",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 256,
                              "end": 258
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 260,
                                "end": 266
                              },
                              "start": 258,
                              "end": 266
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 256,
                            "end": 266
                          }
                        ],
                        "start": 231,
                        "end": 268
                      },
                      "start": 229,
                      "end": 268
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 228,
                    "end": 269
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ke",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 272
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 274,
                        "end": 280
                      },
                      "start": 272,
                      "end": 280
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 270,
                    "end": 281
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ko",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 284
                    },
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
                    "accessibility": null,
                    "static": false,
                    "start": 282,
                    "end": 292
                  }
                ],
                "start": 194,
                "end": 294
              },
              "start": 192,
              "end": 294
            },
            "start": 184,
            "end": 294
          },
          "init": null,
          "definite": false,
          "start": 184,
          "end": 294
        }
      ],
      "declare": false,
      "start": 180,
      "end": 295
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
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
                  "start": 460,
                  "end": 461
                },
                "value": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 469,
                            "end": 476
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null,
                          "start": 466,
                          "end": 476
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 478
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 483,
                        "end": 484
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 480,
                      "end": 484
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 463,
                  "end": 485
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 460,
                "end": 485
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
                  "start": 487,
                  "end": 488
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 492,
                        "end": 493
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 492,
                        "end": 493
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 492,
                      "end": 493
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 498,
                        "end": 499
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 495,
                      "end": 499
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 501
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 487,
                "end": 501
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 511
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 503,
                "end": 511
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 458,
            "end": 513
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "overEmit",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 524
          },
          "definite": false,
          "start": 458,
          "end": 524
        }
      ],
      "declare": false,
      "start": 454,
      "end": 525
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
                "start": 529,
                "end": 530
              },
              "value": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nested2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 538,
                          "end": 545
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 535,
                        "end": 545
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 547
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 553
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 549,
                    "end": 553
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 554
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 529,
              "end": 554
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
                "start": 556,
                "end": 557
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
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 562
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 562
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 561,
                    "end": 562
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 567,
                      "end": 568
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 564,
                    "end": 568
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 559,
                "end": 570
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 556,
              "end": 570
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest2",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 580
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 572,
              "end": 580
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 527,
          "end": 582
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "overEmit",
          "optional": false,
          "typeAnnotation": null,
          "start": 585,
          "end": 593
        },
        "start": 527,
        "end": 593
      },
      "directive": null,
      "start": 526,
      "end": 595
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 595
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
    "value": "ka",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 8,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 13,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "ki",
    "start": 27,
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
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 52,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "complex",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "ka",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "ki",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "ka",
    "start": 117,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 121,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 137,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 144,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "complex",
    "start": 155,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "overEmit",
    "start": 184,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "ka",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 205,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "ki",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "ku",
    "start": 256,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "ke",
    "start": 270,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "ko",
    "start": 282,
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
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 454,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 466,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "nested2",
    "start": 469,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 480,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 495,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 503,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 506,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "overEmit",
    "start": 516,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "[",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 535,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "nested2",
    "start": 538,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 549,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 564,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 572,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "rest2",
    "start": 575,
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
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "overEmit",
    "start": 585,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  }
]
```
