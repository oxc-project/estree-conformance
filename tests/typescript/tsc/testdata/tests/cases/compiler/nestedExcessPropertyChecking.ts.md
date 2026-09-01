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
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
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
                      "start": 17,
                      "end": 18
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 21,
                        "end": 27
                      },
                      "start": 19,
                      "end": 27
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 17,
                    "end": 27
                  }
                ],
                "start": 15,
                "end": 29
              },
              "start": 13,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 12,
            "end": 29
          }
        ],
        "start": 10,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 40
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 51
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      },
                      "start": 52,
                      "end": 60
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 50,
                    "end": 60
                  }
                ],
                "start": 48,
                "end": 62
              },
              "start": 46,
              "end": 62
            },
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 62
          }
        ],
        "start": 43,
        "end": 64
      },
      "declare": false,
      "start": 33,
      "end": 65
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 74
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 85
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 87,
                        "end": 93
                      },
                      "start": 85,
                      "end": 93
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 84,
                    "end": 93
                  }
                ],
                "start": 82,
                "end": 95
              },
              "start": 80,
              "end": 95
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 95
          }
        ],
        "start": 77,
        "end": 97
      },
      "declare": false,
      "start": 67,
      "end": 98
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
            "name": "ab1",
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
                      "name": "A1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 113
                    },
                    "typeArguments": null,
                    "start": 111,
                    "end": 113
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 118
                    },
                    "typeArguments": null,
                    "start": 116,
                    "end": 118
                  }
                ],
                "start": 111,
                "end": 118
              },
              "start": 109,
              "end": 118
            },
            "start": 106,
            "end": 118
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 121,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 129
              },
              "typeArguments": null,
              "start": 127,
              "end": 129
            },
            "start": 121,
            "end": 129
          },
          "definite": false,
          "start": 106,
          "end": 129
        }
      ],
      "declare": false,
      "start": 100,
      "end": 130
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
      },
      "typeParameters": null,
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
              "start": 154,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 154,
            "end": 164
          }
        ],
        "start": 152,
        "end": 166
      },
      "declare": false,
      "start": 142,
      "end": 167
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 175
      },
      "typeParameters": null,
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 181
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              },
              "start": 182,
              "end": 190
            },
            "accessibility": null,
            "static": false,
            "start": 180,
            "end": 190
          }
        ],
        "start": 178,
        "end": 192
      },
      "declare": false,
      "start": 168,
      "end": 193
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 202
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 208
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 210,
                "end": 216
              },
              "start": 208,
              "end": 216
            },
            "accessibility": null,
            "static": false,
            "start": 207,
            "end": 216
          }
        ],
        "start": 205,
        "end": 218
      },
      "declare": false,
      "start": 195,
      "end": 219
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
            "name": "ab2",
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
                      "name": "A2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 234
                    },
                    "typeArguments": null,
                    "start": 232,
                    "end": 234
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 239
                    },
                    "typeArguments": null,
                    "start": 237,
                    "end": 239
                  }
                ],
                "start": 232,
                "end": 239
              },
              "start": 230,
              "end": 239
            },
            "start": 227,
            "end": 239
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 242,
              "end": 244
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 250
              },
              "typeArguments": null,
              "start": 248,
              "end": 250
            },
            "start": 242,
            "end": 250
          },
          "definite": false,
          "start": 227,
          "end": 250
        }
      ],
      "declare": false,
      "start": 221,
      "end": 251
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 269
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
              "start": 272,
              "end": 273
            },
            "initializer": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 276,
              "end": 279
            },
            "computed": false,
            "start": 272,
            "end": 279
          }
        ],
        "start": 270,
        "end": 281
      },
      "const": false,
      "declare": false,
      "start": 263,
      "end": 281
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
            "name": "x",
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
                      "name": "nope",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 296
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 299,
                        "end": 302
                      },
                      "start": 297,
                      "end": 302
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 292,
                    "end": 302
                  }
                ],
                "start": 290,
                "end": 304
              },
              "start": 288,
              "end": 304
            },
            "start": 287,
            "end": 304
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 310
            },
            "optional": false,
            "computed": false,
            "start": 307,
            "end": 310
          },
          "definite": false,
          "start": 287,
          "end": 310
        }
      ],
      "declare": false,
      "start": 283,
      "end": 311
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
            "name": "y",
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
                      "name": "nope",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 331,
                      "end": 335
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 338,
                        "end": 341
                      },
                      "start": 336,
                      "end": 341
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 331,
                    "end": 341
                  }
                ],
                "start": 329,
                "end": 343
              },
              "start": 327,
              "end": 343
            },
            "start": 326,
            "end": 343
          },
          "init": {
            "type": "Literal",
            "value": "A",
            "raw": "\"A\"",
            "start": 346,
            "end": 349
          },
          "definite": false,
          "start": 326,
          "end": 349
        }
      ],
      "declare": false,
      "start": 322,
      "end": 350
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverridesInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 390,
        "end": 404
      },
      "typeParameters": null,
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
              "name": "someProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 421
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 424,
                      "end": 427
                    },
                    "start": 424,
                    "end": 427
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 430,
                      "end": 433
                    },
                    "start": 430,
                    "end": 433
                  }
                ],
                "start": 424,
                "end": 433
              },
              "start": 422,
              "end": 433
            },
            "accessibility": null,
            "static": false,
            "start": 413,
            "end": 433
          }
        ],
        "start": 407,
        "end": 435
      },
      "declare": false,
      "start": 385,
      "end": 435
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
            "name": "foo1",
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
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 456
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
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
                                "name": "something",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 459,
                                "end": 468
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 470,
                                  "end": 473
                                },
                                "start": 468,
                                "end": 473
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 459,
                              "end": 473
                            }
                          ],
                          "start": 457,
                          "end": 475
                        }
                      ],
                      "start": 456,
                      "end": 476
                    },
                    "start": 449,
                    "end": 476
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
                          "name": "variables",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 481,
                          "end": 490
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
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
                                      "name": "overrides",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 498,
                                      "end": 507
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "OverridesInput",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 510,
                                          "end": 524
                                        },
                                        "typeArguments": null,
                                        "start": 510,
                                        "end": 524
                                      },
                                      "start": 508,
                                      "end": 524
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 498,
                                    "end": 525
                                  }
                                ],
                                "start": 492,
                                "end": 527
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Partial",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 530,
                                  "end": 537
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
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
                                            "name": "overrides",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 544,
                                            "end": 553
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "OverridesInput",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 556,
                                                "end": 570
                                              },
                                              "typeArguments": null,
                                              "start": 556,
                                              "end": 570
                                            },
                                            "start": 554,
                                            "end": 570
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 544,
                                          "end": 571
                                        }
                                      ],
                                      "start": 538,
                                      "end": 573
                                    }
                                  ],
                                  "start": 537,
                                  "end": 574
                                },
                                "start": 530,
                                "end": 574
                              }
                            ],
                            "start": 492,
                            "end": 574
                          },
                          "start": 490,
                          "end": 574
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 481,
                        "end": 574
                      }
                    ],
                    "start": 479,
                    "end": 575
                  }
                ],
                "start": 449,
                "end": 575
              },
              "start": 447,
              "end": 575
            },
            "start": 443,
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
                  "name": "variables",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 580,
                  "end": 589
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
                        "name": "overrides",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 593,
                        "end": 602
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 604,
                        "end": 609
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 593,
                      "end": 609
                    }
                  ],
                  "start": 591,
                  "end": 611
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 580,
                "end": 611
              }
            ],
            "start": 578,
            "end": 613
          },
          "definite": false,
          "start": 443,
          "end": 613
        }
      ],
      "declare": false,
      "start": 437,
      "end": 614
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unrelated",
        "optional": false,
        "typeAnnotation": null,
        "start": 637,
        "end": 646
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 649,
              "end": 650
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 653,
                "end": 656
              },
              "start": 651,
              "end": 656
            },
            "accessibility": null,
            "static": false,
            "start": 649,
            "end": 656
          }
        ],
        "start": 647,
        "end": 658
      },
      "declare": false,
      "start": 627,
      "end": 658
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VariablesA",
        "optional": false,
        "typeAnnotation": null,
        "start": 670,
        "end": 680
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overrides",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 692
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverridesInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 695,
                  "end": 709
                },
                "typeArguments": null,
                "start": 695,
                "end": 709
              },
              "start": 693,
              "end": 709
            },
            "accessibility": null,
            "static": false,
            "start": 683,
            "end": 710
          }
        ],
        "start": 681,
        "end": 712
      },
      "declare": false,
      "start": 660,
      "end": 712
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VariablesB",
        "optional": false,
        "typeAnnotation": null,
        "start": 723,
        "end": 733
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overrides",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 745
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverridesInput",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 748,
                  "end": 762
                },
                "typeArguments": null,
                "start": 748,
                "end": 762
              },
              "start": 746,
              "end": 762
            },
            "accessibility": null,
            "static": false,
            "start": 736,
            "end": 763
          }
        ],
        "start": 734,
        "end": 765
      },
      "declare": false,
      "start": 713,
      "end": 765
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
            "name": "foo2",
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
                      "name": "Unrelated",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 779,
                      "end": 788
                    },
                    "typeArguments": null,
                    "start": 779,
                    "end": 788
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
                          "name": "variables",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 793,
                          "end": 802
                        },
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
                                  "name": "VariablesA",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 804,
                                  "end": 814
                                },
                                "typeArguments": null,
                                "start": 804,
                                "end": 814
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "VariablesB",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 817,
                                  "end": 827
                                },
                                "typeArguments": null,
                                "start": 817,
                                "end": 827
                              }
                            ],
                            "start": 804,
                            "end": 827
                          },
                          "start": 802,
                          "end": 827
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 793,
                        "end": 827
                      }
                    ],
                    "start": 791,
                    "end": 829
                  }
                ],
                "start": 779,
                "end": 829
              },
              "start": 777,
              "end": 829
            },
            "start": 773,
            "end": 829
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
                  "name": "variables",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 838,
                  "end": 847
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
                        "name": "overrides",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 859,
                        "end": 868
                      },
                      "value": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 870,
                        "end": 875
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 859,
                      "end": 875
                    }
                  ],
                  "start": 849,
                  "end": 891
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 838,
                "end": 891
              }
            ],
            "start": 832,
            "end": 893
          },
          "definite": false,
          "start": 773,
          "end": 893
        }
      ],
      "declare": false,
      "start": 767,
      "end": 894
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 934,
        "end": 936
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
              "name": "primary",
              "optional": false,
              "typeAnnotation": null,
              "start": 945,
              "end": 952
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
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
                          "name": "__typename",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 956,
                          "end": 966
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "Feature",
                              "raw": "'Feature'",
                              "start": 969,
                              "end": 978
                            },
                            "start": 969,
                            "end": 978
                          },
                          "start": 967,
                          "end": 978
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 956,
                        "end": 978
                      }
                    ],
                    "start": 954,
                    "end": 980
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
                          "name": "colors",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 985,
                          "end": 991
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
                                  "name": "light",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 995,
                                  "end": 1000
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1002,
                                    "end": 1008
                                  },
                                  "start": 1000,
                                  "end": 1008
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 995,
                                "end": 1009
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dark",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1010,
                                  "end": 1014
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1016,
                                    "end": 1022
                                  },
                                  "start": 1014,
                                  "end": 1022
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1010,
                                "end": 1022
                              }
                            ],
                            "start": 993,
                            "end": 1024
                          },
                          "start": 991,
                          "end": 1024
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 985,
                        "end": 1024
                      }
                    ],
                    "start": 983,
                    "end": 1026
                  }
                ],
                "start": 954,
                "end": 1026
              },
              "start": 952,
              "end": 1026
            },
            "accessibility": null,
            "static": false,
            "start": 945,
            "end": 1027
          }
        ],
        "start": 939,
        "end": 1029
      },
      "declare": false,
      "start": 929,
      "end": 1030
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1037,
        "end": 1039
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
              "name": "primary",
              "optional": false,
              "typeAnnotation": null,
              "start": 1048,
              "end": 1055
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
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
                          "name": "__typename",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1059,
                          "end": 1069
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "Feature",
                              "raw": "'Feature'",
                              "start": 1072,
                              "end": 1081
                            },
                            "start": 1072,
                            "end": 1081
                          },
                          "start": 1070,
                          "end": 1081
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1059,
                        "end": 1081
                      }
                    ],
                    "start": 1057,
                    "end": 1083
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
                          "name": "colors",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1088,
                          "end": 1094
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
                                  "name": "light",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1098,
                                  "end": 1103
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1105,
                                    "end": 1111
                                  },
                                  "start": 1103,
                                  "end": 1111
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 1098,
                                "end": 1111
                              }
                            ],
                            "start": 1096,
                            "end": 1113
                          },
                          "start": 1094,
                          "end": 1113
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1088,
                        "end": 1113
                      }
                    ],
                    "start": 1086,
                    "end": 1115
                  }
                ],
                "start": 1057,
                "end": 1115
              },
              "start": 1055,
              "end": 1115
            },
            "accessibility": null,
            "static": false,
            "start": 1048,
            "end": 1116
          }
        ],
        "start": 1042,
        "end": 1118
      },
      "declare": false,
      "start": 1032,
      "end": 1119
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null,
        "start": 1126,
        "end": 1131
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1134,
              "end": 1136
            },
            "typeArguments": null,
            "start": 1134,
            "end": 1136
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1139,
              "end": 1141
            },
            "typeArguments": null,
            "start": 1139,
            "end": 1141
          }
        ],
        "start": 1134,
        "end": 1141
      },
      "declare": false,
      "start": 1121,
      "end": 1142
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
            "name": "response",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1160,
                  "end": 1165
                },
                "typeArguments": null,
                "start": 1160,
                "end": 1165
              },
              "start": 1158,
              "end": 1165
            },
            "start": 1150,
            "end": 1165
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
                  "name": "primary",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1174,
                  "end": 1181
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
                        "name": "colors",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1193,
                        "end": 1199
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
                              "name": "light",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1215,
                              "end": 1220
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1222,
                              "end": 1223
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1215,
                            "end": 1223
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dark",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1237,
                              "end": 1241
                            },
                            "value": {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 1243,
                              "end": 1244
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1237,
                            "end": 1244
                          }
                        ],
                        "start": 1201,
                        "end": 1255
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1193,
                      "end": 1255
                    }
                  ],
                  "start": 1183,
                  "end": 1262
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1174,
                "end": 1262
              }
            ],
            "start": 1168,
            "end": 1265
          },
          "definite": false,
          "start": 1150,
          "end": 1265
        }
      ],
      "declare": false,
      "start": 1144,
      "end": 1266
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 1295,
        "end": 1303
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1312,
              "end": 1314
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1316,
                "end": 1322
              },
              "start": 1314,
              "end": 1322
            },
            "accessibility": null,
            "static": false,
            "start": 1312,
            "end": 1323
          }
        ],
        "start": 1306,
        "end": 1325
      },
      "declare": false,
      "start": 1290,
      "end": 1325
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendedItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 1331,
        "end": 1343
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseItem",
              "optional": false,
              "typeAnnotation": null,
              "start": 1346,
              "end": 1354
            },
            "typeArguments": null,
            "start": 1346,
            "end": 1354
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
                  "name": "description",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1363,
                  "end": 1374
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1376,
                        "end": 1382
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 1385,
                        "end": 1389
                      }
                    ],
                    "start": 1376,
                    "end": 1389
                  },
                  "start": 1374,
                  "end": 1389
                },
                "accessibility": null,
                "static": false,
                "start": 1363,
                "end": 1389
              }
            ],
            "start": 1357,
            "end": 1391
          }
        ],
        "start": 1346,
        "end": 1391
      },
      "declare": false,
      "start": 1326,
      "end": 1392
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 1401,
        "end": 1410
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
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1454
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BaseItem",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1456,
                    "end": 1464
                  },
                  "typeArguments": null,
                  "start": 1456,
                  "end": 1464
                },
                "start": 1456,
                "end": 1466
              },
              "start": 1454,
              "end": 1466
            },
            "accessibility": null,
            "static": false,
            "start": 1449,
            "end": 1467
          }
        ],
        "start": 1413,
        "end": 1469
      },
      "declare": false,
      "start": 1396,
      "end": 1469
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendedValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 1475,
        "end": 1488
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BaseValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1491,
              "end": 1500
            },
            "typeArguments": null,
            "start": 1491,
            "end": 1500
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
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1539,
                  "end": 1544
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExtendedItem",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1546,
                        "end": 1558
                      },
                      "typeArguments": null,
                      "start": 1546,
                      "end": 1558
                    },
                    "start": 1546,
                    "end": 1560
                  },
                  "start": 1544,
                  "end": 1560
                },
                "accessibility": null,
                "static": false,
                "start": 1539,
                "end": 1561
              }
            ],
            "start": 1503,
            "end": 1563
          }
        ],
        "start": 1491,
        "end": 1563
      },
      "declare": false,
      "start": 1470,
      "end": 1563
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
            "name": "TEST_VALUE",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ExtendedValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1583,
                  "end": 1596
                },
                "typeArguments": null,
                "start": 1583,
                "end": 1596
              },
              "start": 1581,
              "end": 1596
            },
            "start": 1571,
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
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1605,
                  "end": 1610
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1623,
                            "end": 1625
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1627,
                            "end": 1628
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1623,
                          "end": 1628
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "description",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1630,
                            "end": 1641
                          },
                          "value": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 1643,
                            "end": 1647
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1630,
                          "end": 1647
                        }
                      ],
                      "start": 1622,
                      "end": 1648
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
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1659,
                            "end": 1661
                          },
                          "value": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1663,
                            "end": 1664
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1659,
                          "end": 1664
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "description",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1666,
                            "end": 1677
                          },
                          "value": {
                            "type": "Literal",
                            "value": "wigglytubble",
                            "raw": "'wigglytubble'",
                            "start": 1679,
                            "end": 1693
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1666,
                          "end": 1693
                        }
                      ],
                      "start": 1658,
                      "end": 1694
                    }
                  ],
                  "start": 1612,
                  "end": 1701
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1605,
                "end": 1701
              }
            ],
            "start": 1599,
            "end": 1703
          },
          "definite": false,
          "start": 1571,
          "end": 1703
        }
      ],
      "declare": false,
      "start": 1565,
      "end": 1704
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1704
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
    "value": "A1",
    "start": 5,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
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
    "type": "Identifier",
    "value": "type",
    "start": 33,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 67,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "string",
    "start": 87,
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
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "ab1",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 124,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 142,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "string",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 168,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 195,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "c",
    "start": 207,
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
    "value": "string",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 221,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "ab2",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 245,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 263,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 283,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "nope",
    "start": 292,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "any",
    "start": 299,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 322,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "nope",
    "start": 331,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "any",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 346,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 385,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "OverridesInput",
    "start": 390,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "someProp",
    "start": 413,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 424,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 428,
    "end": 429
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 430,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 437,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 443,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 449,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 459,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 470,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "type": "Identifier",
    "value": "variables",
    "start": 481,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "overrides",
    "start": 498,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "OverridesInput",
    "start": 510,
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
    "value": "}",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 530,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "overrides",
    "start": 544,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "OverridesInput",
    "start": 556,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "variables",
    "start": 580,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "overrides",
    "start": 593,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 604,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 627,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "Unrelated",
    "start": 637,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "any",
    "start": 653,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 660,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "VariablesA",
    "start": 670,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "overrides",
    "start": 683,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "OverridesInput",
    "start": 695,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 713,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "VariablesB",
    "start": 723,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "overrides",
    "start": 736,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "OverridesInput",
    "start": 748,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 767,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 773,
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
    "value": "Unrelated",
    "start": 779,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "variables",
    "start": 793,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "VariablesA",
    "start": 804,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "VariablesB",
    "start": 817,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "variables",
    "start": 838,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "overrides",
    "start": 859,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 868,
    "end": 869
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 870,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 929,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 934,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 945,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "__typename",
    "start": 956,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968
  },
  {
    "type": "String",
    "value": "'Feature'",
    "start": 969,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "colors",
    "start": 985,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "light",
    "start": 995,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1002,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "dark",
    "start": 1010,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1016,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1032,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1037,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1040,
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
    "value": "primary",
    "start": 1048,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "__typename",
    "start": 1059,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "String",
    "value": "'Feature'",
    "start": 1072,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "colors",
    "start": 1088,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "light",
    "start": 1098,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1105,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1121,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 1126,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1134,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1139,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1144,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 1150,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 1160,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "primary",
    "start": 1174,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "colors",
    "start": 1193,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "light",
    "start": 1215,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "dark",
    "start": 1237,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1290,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "BaseItem",
    "start": 1295,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1312,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1316,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1326,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "ExtendedItem",
    "start": 1331,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "BaseItem",
    "start": 1346,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 1363,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1376,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1385,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1396,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "BaseValue",
    "start": 1401,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 1449,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "BaseItem",
    "start": 1456,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 1470,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "ExtendedValue",
    "start": 1475,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "BaseValue",
    "start": 1491,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 1539,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "ExtendedItem",
    "start": 1546,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1565,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "TEST_VALUE",
    "start": 1571,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "ExtendedValue",
    "start": 1583,
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
    "value": "items",
    "start": 1605,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1623,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 1630,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1643,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1659,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 1666,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "String",
    "value": "'wigglytubble'",
    "start": 1679,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1703,
    "end": 1704
  }
]
```
