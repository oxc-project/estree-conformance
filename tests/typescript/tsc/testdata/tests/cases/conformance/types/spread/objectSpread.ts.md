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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
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
                  "start": 10,
                  "end": 11
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 13,
                  "end": 14
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 10,
                "end": 14
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
                  "start": 16,
                  "end": 17
                },
                "value": {
                  "type": "Literal",
                  "value": "no",
                  "raw": "'no'",
                  "start": 19,
                  "end": 23
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 23
              }
            ],
            "start": 8,
            "end": 25
          },
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 25
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
            "typeAnnotation": null,
            "start": 30,
            "end": 32
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 38
                },
                "value": {
                  "type": "Literal",
                  "value": "yes",
                  "raw": "'yes'",
                  "start": 40,
                  "end": 45
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 37,
                "end": 45
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
                  "start": 47,
                  "end": 48
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 50,
                  "end": 54
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 47,
                "end": 54
              }
            ],
            "start": 35,
            "end": 56
          },
          "definite": false,
          "start": 30,
          "end": 56
        }
      ],
      "declare": false,
      "start": 26,
      "end": 56
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
            "name": "swap",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 65
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
                  "start": 70,
                  "end": 71
                },
                "value": {
                  "type": "Literal",
                  "value": "yes",
                  "raw": "'yes'",
                  "start": 73,
                  "end": 78
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 70,
                "end": 78
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
                  "start": 80,
                  "end": 81
                },
                "value": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 84,
                    "end": 85
                  },
                  "prefix": true,
                  "start": 83,
                  "end": 85
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 80,
                "end": 85
              }
            ],
            "start": 68,
            "end": 87
          },
          "definite": false,
          "start": 61,
          "end": 87
        }
      ],
      "declare": false,
      "start": 57,
      "end": 88
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
            "name": "addAfter",
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
                      "start": 106,
                      "end": 107
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 109,
                        "end": 115
                      },
                      "start": 107,
                      "end": 115
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 106,
                    "end": 116
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
                      "start": 117,
                      "end": 118
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 120,
                        "end": 126
                      },
                      "start": 118,
                      "end": 126
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 117,
                    "end": 127
                  },
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
                      "start": 128,
                      "end": 129
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 131,
                        "end": 138
                      },
                      "start": 129,
                      "end": 138
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 128,
                    "end": 138
                  }
                ],
                "start": 104,
                "end": 140
              },
              "start": 102,
              "end": 140
            },
            "start": 94,
            "end": 140
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 153
                },
                "start": 149,
                "end": 153
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
                  "start": 155,
                  "end": 156
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 158,
                  "end": 163
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 155,
                "end": 163
              }
            ],
            "start": 147,
            "end": 165
          },
          "definite": false,
          "start": 94,
          "end": 165
        }
      ],
      "declare": false,
      "start": 90,
      "end": 165
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
            "name": "addBefore",
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
                      "start": 183,
                      "end": 184
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 186,
                        "end": 192
                      },
                      "start": 184,
                      "end": 192
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 183,
                    "end": 193
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
                      "start": 194,
                      "end": 195
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 197,
                        "end": 203
                      },
                      "start": 195,
                      "end": 203
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 194,
                    "end": 204
                  },
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
                      "start": 205,
                      "end": 206
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 208,
                        "end": 215
                      },
                      "start": 206,
                      "end": 215
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 205,
                    "end": 215
                  }
                ],
                "start": 181,
                "end": 217
              },
              "start": 179,
              "end": 217
            },
            "start": 170,
            "end": 217
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 227
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 229,
                  "end": 234
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 226,
                "end": 234
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 240
                },
                "start": 236,
                "end": 240
              }
            ],
            "start": 224,
            "end": 242
          },
          "definite": false,
          "start": 170,
          "end": 242
        }
      ],
      "declare": false,
      "start": 166,
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
            "name": "override",
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
                      "start": 259,
                      "end": 260
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 262,
                        "end": 268
                      },
                      "start": 260,
                      "end": 268
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 259,
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 271
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 273,
                        "end": 279
                      },
                      "start": 271,
                      "end": 279
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 270,
                    "end": 279
                  }
                ],
                "start": 257,
                "end": 281
              },
              "start": 255,
              "end": 281
            },
            "start": 247,
            "end": 281
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 293,
                  "end": 294
                },
                "start": 290,
                "end": 294
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
                  "start": 296,
                  "end": 297
                },
                "value": {
                  "type": "Literal",
                  "value": "override",
                  "raw": "'override'",
                  "start": 299,
                  "end": 309
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 296,
                "end": 309
              }
            ],
            "start": 288,
            "end": 311
          },
          "definite": false,
          "start": 247,
          "end": 311
        }
      ],
      "declare": false,
      "start": 243,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 327
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 329,
                        "end": 335
                      },
                      "start": 327,
                      "end": 335
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 326,
                    "end": 336
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
                      "start": 337,
                      "end": 338
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 340,
                        "end": 347
                      },
                      "start": 338,
                      "end": 347
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 337,
                    "end": 348
                  },
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
                      "start": 349,
                      "end": 350
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 352,
                        "end": 358
                      },
                      "start": 350,
                      "end": 358
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 349,
                    "end": 358
                  }
                ],
                "start": 324,
                "end": 360
              },
              "start": 322,
              "end": 360
            },
            "start": 316,
            "end": 360
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
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
                        "start": 374,
                        "end": 375
                      },
                      "value": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 377,
                        "end": 378
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 374,
                      "end": 378
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 385,
                              "end": 386
                            },
                            "value": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 388,
                              "end": 393
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 385,
                            "end": 393
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
                              "start": 395,
                              "end": 396
                            },
                            "value": {
                              "type": "Literal",
                              "value": "overriden",
                              "raw": "'overriden'",
                              "start": 398,
                              "end": 409
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 395,
                            "end": 409
                          }
                        ],
                        "start": 383,
                        "end": 411
                      },
                      "start": 380,
                      "end": 411
                    }
                  ],
                  "start": 372,
                  "end": 413
                },
                "start": 369,
                "end": 413
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
                  "start": 415,
                  "end": 416
                },
                "value": {
                  "type": "Literal",
                  "value": "whatever",
                  "raw": "'whatever'",
                  "start": 418,
                  "end": 428
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 415,
                "end": 428
              }
            ],
            "start": 367,
            "end": 430
          },
          "definite": false,
          "start": 316,
          "end": 430
        }
      ],
      "declare": false,
      "start": 312,
      "end": 430
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
            "name": "combined",
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
                      "start": 447,
                      "end": 448
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 450,
                        "end": 456
                      },
                      "start": 448,
                      "end": 456
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 447,
                    "end": 457
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
                      "start": 458,
                      "end": 459
                    },
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
                    "accessibility": null,
                    "static": false,
                    "start": 458,
                    "end": 468
                  },
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
                      "start": 469,
                      "end": 470
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 472,
                        "end": 479
                      },
                      "start": 470,
                      "end": 479
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 469,
                    "end": 479
                  }
                ],
                "start": 445,
                "end": 481
              },
              "start": 443,
              "end": 481
            },
            "start": 435,
            "end": 481
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 494
                },
                "start": 490,
                "end": 494
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 501
                },
                "start": 496,
                "end": 501
              }
            ],
            "start": 488,
            "end": 503
          },
          "definite": false,
          "start": 435,
          "end": 503
        }
      ],
      "declare": false,
      "start": 431,
      "end": 503
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
            "name": "combinedAfter",
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
                      "start": 525,
                      "end": 526
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 528,
                        "end": 534
                      },
                      "start": 526,
                      "end": 534
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 525,
                    "end": 535
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
                      "start": 536,
                      "end": 537
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 539,
                        "end": 545
                      },
                      "start": 537,
                      "end": 545
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 536,
                    "end": 546
                  },
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
                      "start": 547,
                      "end": 548
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 550,
                        "end": 557
                      },
                      "start": 548,
                      "end": 557
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 547,
                    "end": 557
                  }
                ],
                "start": 523,
                "end": 559
              },
              "start": 521,
              "end": 559
            },
            "start": 508,
            "end": 559
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 572
                },
                "start": 568,
                "end": 572
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 577,
                  "end": 579
                },
                "start": 574,
                "end": 579
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
                  "start": 581,
                  "end": 582
                },
                "value": {
                  "type": "Literal",
                  "value": "ok",
                  "raw": "'ok'",
                  "start": 584,
                  "end": 588
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 581,
                "end": 588
              }
            ],
            "start": 566,
            "end": 590
          },
          "definite": false,
          "start": 508,
          "end": 590
        }
      ],
      "declare": false,
      "start": 504,
      "end": 590
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
            "name": "combinedNestedChangeType",
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
                      "start": 623,
                      "end": 624
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 626,
                        "end": 632
                      },
                      "start": 624,
                      "end": 632
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 623,
                    "end": 633
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
                      "start": 634,
                      "end": 635
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 637,
                        "end": 644
                      },
                      "start": 635,
                      "end": 644
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 634,
                    "end": 645
                  },
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
                      "start": 646,
                      "end": 647
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 649,
                        "end": 655
                      },
                      "start": 647,
                      "end": 655
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 646,
                    "end": 655
                  }
                ],
                "start": 621,
                "end": 657
              },
              "start": 619,
              "end": 657
            },
            "start": 595,
            "end": 657
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
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
                        "start": 671,
                        "end": 672
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 674,
                        "end": 675
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 671,
                      "end": 675
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 682,
                              "end": 683
                            },
                            "value": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 685,
                              "end": 690
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 682,
                            "end": 690
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
                              "start": 692,
                              "end": 693
                            },
                            "value": {
                              "type": "Literal",
                              "value": "overriden",
                              "raw": "'overriden'",
                              "start": 695,
                              "end": 706
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 692,
                            "end": 706
                          }
                        ],
                        "start": 680,
                        "end": 708
                      },
                      "start": 677,
                      "end": 708
                    }
                  ],
                  "start": 669,
                  "end": 710
                },
                "start": 666,
                "end": 710
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
                  "start": 712,
                  "end": 713
                },
                "value": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 716,
                    "end": 717
                  },
                  "prefix": true,
                  "start": 715,
                  "end": 717
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 712,
                "end": 717
              }
            ],
            "start": 664,
            "end": 719
          },
          "definite": false,
          "start": 595,
          "end": 719
        }
      ],
      "declare": false,
      "start": 591,
      "end": 719
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
            "name": "propertyNested",
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
                      "start": 742,
                      "end": 743
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
                              "start": 747,
                              "end": 748
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 750,
                                "end": 756
                              },
                              "start": 748,
                              "end": 756
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 747,
                            "end": 757
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
                              "start": 758,
                              "end": 759
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 761,
                                "end": 767
                              },
                              "start": 759,
                              "end": 767
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 758,
                            "end": 767
                          }
                        ],
                        "start": 745,
                        "end": 769
                      },
                      "start": 743,
                      "end": 769
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 742,
                    "end": 769
                  }
                ],
                "start": 740,
                "end": 771
              },
              "start": 738,
              "end": 771
            },
            "start": 724,
            "end": 771
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
                  "start": 780,
                  "end": 781
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 789,
                        "end": 790
                      },
                      "start": 785,
                      "end": 790
                    }
                  ],
                  "start": 783,
                  "end": 792
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 780,
                "end": 792
              }
            ],
            "start": 778,
            "end": 794
          },
          "definite": false,
          "start": 724,
          "end": 794
        }
      ],
      "declare": false,
      "start": 720,
      "end": 794
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
            "name": "op",
            "optional": false,
            "typeAnnotation": null,
            "start": 906,
            "end": 908
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 917,
                  "end": 918
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 931,
                          "end": 932
                        },
                        "start": 924,
                        "end": 932
                      }
                    ],
                    "start": 922,
                    "end": 934
                  },
                  "expression": false,
                  "start": 919,
                  "end": 934
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 913,
                "end": 934
              }
            ],
            "start": 911,
            "end": 936
          },
          "definite": false,
          "start": 906,
          "end": 936
        }
      ],
      "declare": false,
      "start": 902,
      "end": 937
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
            "name": "getter",
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
                      "start": 952,
                      "end": 953
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 955,
                        "end": 961
                      },
                      "start": 953,
                      "end": 961
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 952,
                    "end": 962
                  },
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
                      "start": 963,
                      "end": 964
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 966,
                        "end": 972
                      },
                      "start": 964,
                      "end": 972
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 963,
                    "end": 972
                  }
                ],
                "start": 950,
                "end": 974
              },
              "start": 948,
              "end": 974
            },
            "start": 942,
            "end": 974
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "op",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 986,
                  "end": 988
                },
                "start": 983,
                "end": 988
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
                  "start": 990,
                  "end": 991
                },
                "value": {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 993,
                  "end": 994
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 990,
                "end": 994
              }
            ],
            "start": 981,
            "end": 996
          },
          "definite": false,
          "start": 942,
          "end": 996
        }
      ],
      "declare": false,
      "start": 938,
      "end": 996
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
            "name": "getter",
            "optional": false,
            "typeAnnotation": null,
            "start": 997,
            "end": 1003
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1004,
            "end": 1005
          },
          "optional": false,
          "computed": false,
          "start": 997,
          "end": 1005
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 1008,
          "end": 1010
        },
        "start": 997,
        "end": 1010
      },
      "directive": null,
      "start": 997,
      "end": 1011
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
            "name": "spreadFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 1044,
            "end": 1054
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
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
                    "start": 1075,
                    "end": 1078
                  },
                  "expression": false,
                  "start": 1063,
                  "end": 1078
                },
                "start": 1059,
                "end": 1079
              }
            ],
            "start": 1057,
            "end": 1081
          },
          "definite": false,
          "start": 1044,
          "end": 1081
        }
      ],
      "declare": false,
      "start": 1040,
      "end": 1082
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Header",
        "optional": false,
        "typeAnnotation": null,
        "start": 1089,
        "end": 1095
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
              "name": "head",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1106,
                "end": 1112
              },
              "start": 1104,
              "end": 1112
            },
            "accessibility": null,
            "static": false,
            "start": 1100,
            "end": 1113
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "body",
              "optional": false,
              "typeAnnotation": null,
              "start": 1114,
              "end": 1118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1120,
                "end": 1126
              },
              "start": 1118,
              "end": 1126
            },
            "accessibility": null,
            "static": false,
            "start": 1114,
            "end": 1127
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "authToken",
              "optional": false,
              "typeAnnotation": null,
              "start": 1128,
              "end": 1137
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1139,
                "end": 1145
              },
              "start": 1137,
              "end": 1145
            },
            "accessibility": null,
            "static": false,
            "start": 1128,
            "end": 1145
          }
        ],
        "start": 1098,
        "end": 1147
      },
      "declare": false,
      "start": 1084,
      "end": 1147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from16326",
        "optional": false,
        "typeAnnotation": null,
        "start": 1157,
        "end": 1166
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                    "name": "header",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1175,
                    "end": 1181
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Header",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1183,
                        "end": 1189
                      },
                      "typeArguments": null,
                      "start": 1183,
                      "end": 1189
                    },
                    "start": 1181,
                    "end": 1189
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1175,
                  "end": 1189
                }
              ],
              "start": 1173,
              "end": 1191
            },
            "start": 1171,
            "end": 1191
          },
          "start": 1167,
          "end": 1191
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "header",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Header",
                "optional": false,
                "typeAnnotation": null,
                "start": 1201,
                "end": 1207
              },
              "typeArguments": null,
              "start": 1201,
              "end": 1207
            },
            "start": 1199,
            "end": 1207
          },
          "start": 1193,
          "end": 1207
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "authToken",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1220,
              "end": 1226
            },
            "start": 1218,
            "end": 1226
          },
          "start": 1209,
          "end": 1226
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Header",
            "optional": false,
            "typeAnnotation": null,
            "start": 1229,
            "end": 1235
          },
          "typeArguments": null,
          "start": 1229,
          "end": 1235
        },
        "start": 1227,
        "end": 1235
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 1262,
                      "end": 1266
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "header",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1267,
                      "end": 1273
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1262,
                    "end": 1273
                  },
                  "start": 1259,
                  "end": 1273
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "header",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1286,
                    "end": 1292
                  },
                  "start": 1283,
                  "end": 1292
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "authToken",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1305,
                      "end": 1314
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "authToken",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1320,
                            "end": 1329
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "authToken",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1320,
                            "end": 1329
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1320,
                          "end": 1329
                        }
                      ],
                      "start": 1318,
                      "end": 1331
                    },
                    "start": 1305,
                    "end": 1331
                  },
                  "start": 1302,
                  "end": 1331
                }
              ],
              "start": 1249,
              "end": 1337
            },
            "start": 1242,
            "end": 1337
          }
        ],
        "start": 1236,
        "end": 1339
      },
      "expression": false,
      "start": 1148,
      "end": 1339
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conditionalSpreadBoolean",
        "optional": false,
        "typeAnnotation": null,
        "start": 1387,
        "end": 1411
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1415,
              "end": 1422
            },
            "start": 1413,
            "end": 1422
          },
          "start": 1412,
          "end": 1422
        }
      ],
      "returnType": {
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
                "start": 1428,
                "end": 1429
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1431,
                  "end": 1437
                },
                "start": 1429,
                "end": 1437
              },
              "accessibility": null,
              "static": false,
              "start": 1428,
              "end": 1438
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
                "start": 1439,
                "end": 1440
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1442,
                  "end": 1448
                },
                "start": 1440,
                "end": 1448
              },
              "accessibility": null,
              "static": false,
              "start": 1439,
              "end": 1448
            }
          ],
          "start": 1426,
          "end": 1450
        },
        "start": 1424,
        "end": 1450
      },
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1461,
                  "end": 1462
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1467,
                        "end": 1468
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 1470,
                        "end": 1472
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1467,
                      "end": 1472
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
                        "start": 1474,
                        "end": 1475
                      },
                      "value": {
                        "type": "Literal",
                        "value": 13,
                        "raw": "13",
                        "start": 1477,
                        "end": 1479
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1474,
                      "end": 1479
                    }
                  ],
                  "start": 1465,
                  "end": 1481
                },
                "definite": false,
                "start": 1461,
                "end": 1481
              }
            ],
            "declare": false,
            "start": 1457,
            "end": 1481
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1486,
                "end": 1487
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1503,
                      "end": 1504
                    },
                    "start": 1500,
                    "end": 1504
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1517,
                        "end": 1518
                      },
                      "operator": "&&",
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
                              "start": 1524,
                              "end": 1525
                            },
                            "value": {
                              "type": "Literal",
                              "value": 14,
                              "raw": "14",
                              "start": 1527,
                              "end": 1529
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1524,
                            "end": 1529
                          }
                        ],
                        "start": 1522,
                        "end": 1531
                      },
                      "start": 1517,
                      "end": 1531
                    },
                    "start": 1514,
                    "end": 1531
                  }
                ],
                "start": 1490,
                "end": 1537
              },
              "start": 1486,
              "end": 1537
            },
            "directive": null,
            "start": 1486,
            "end": 1537
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
                  "typeAnnotation": null,
                  "start": 1546,
                  "end": 1548
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1556,
                          "end": 1557
                        },
                        "operator": "&&",
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
                                "start": 1563,
                                "end": 1564
                              },
                              "value": {
                                "type": "Literal",
                                "value": 21,
                                "raw": "21",
                                "start": 1566,
                                "end": 1568
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1563,
                              "end": 1568
                            }
                          ],
                          "start": 1561,
                          "end": 1570
                        },
                        "start": 1556,
                        "end": 1570
                      },
                      "start": 1553,
                      "end": 1570
                    }
                  ],
                  "start": 1551,
                  "end": 1571
                },
                "definite": false,
                "start": 1546,
                "end": 1571
              }
            ],
            "declare": false,
            "start": 1542,
            "end": 1571
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 1583,
              "end": 1584
            },
            "start": 1576,
            "end": 1585
          }
        ],
        "start": 1451,
        "end": 1587
      },
      "expression": false,
      "start": 1378,
      "end": 1587
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conditionalSpreadNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 1597,
        "end": 1620
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1625,
              "end": 1631
            },
            "start": 1623,
            "end": 1631
          },
          "start": 1621,
          "end": 1631
        }
      ],
      "returnType": {
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
                "start": 1636,
                "end": 1637
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1639,
                  "end": 1645
                },
                "start": 1637,
                "end": 1645
              },
              "accessibility": null,
              "static": false,
              "start": 1636,
              "end": 1646
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
                "start": 1647,
                "end": 1648
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1650,
                  "end": 1656
                },
                "start": 1648,
                "end": 1656
              },
              "accessibility": null,
              "static": false,
              "start": 1647,
              "end": 1656
            }
          ],
          "start": 1634,
          "end": 1658
        },
        "start": 1632,
        "end": 1658
      },
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1669,
                  "end": 1670
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1675,
                        "end": 1676
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 1678,
                        "end": 1680
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1675,
                      "end": 1680
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
                        "start": 1682,
                        "end": 1683
                      },
                      "value": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16",
                        "start": 1685,
                        "end": 1687
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1682,
                      "end": 1687
                    }
                  ],
                  "start": 1673,
                  "end": 1689
                },
                "definite": false,
                "start": 1669,
                "end": 1689
              }
            ],
            "declare": false,
            "start": 1665,
            "end": 1689
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1695
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1711,
                      "end": 1712
                    },
                    "start": 1708,
                    "end": 1712
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1725,
                        "end": 1727
                      },
                      "operator": "&&",
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
                              "start": 1733,
                              "end": 1734
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "nt",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1736,
                              "end": 1738
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1733,
                            "end": 1738
                          }
                        ],
                        "start": 1731,
                        "end": 1740
                      },
                      "start": 1725,
                      "end": 1740
                    },
                    "start": 1722,
                    "end": 1740
                  }
                ],
                "start": 1698,
                "end": 1746
              },
              "start": 1694,
              "end": 1746
            },
            "directive": null,
            "start": 1694,
            "end": 1746
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
                  "typeAnnotation": null,
                  "start": 1755,
                  "end": 1757
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nt",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1765,
                          "end": 1767
                        },
                        "operator": "&&",
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
                                "start": 1773,
                                "end": 1774
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "nt",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1776,
                                "end": 1778
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1773,
                              "end": 1778
                            }
                          ],
                          "start": 1771,
                          "end": 1780
                        },
                        "start": 1765,
                        "end": 1780
                      },
                      "start": 1762,
                      "end": 1780
                    }
                  ],
                  "start": 1760,
                  "end": 1781
                },
                "definite": false,
                "start": 1755,
                "end": 1781
              }
            ],
            "declare": false,
            "start": 1751,
            "end": 1781
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 1793,
              "end": 1794
            },
            "start": 1786,
            "end": 1795
          }
        ],
        "start": 1659,
        "end": 1797
      },
      "expression": false,
      "start": 1588,
      "end": 1797
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conditionalSpreadString",
        "optional": false,
        "typeAnnotation": null,
        "start": 1807,
        "end": 1830
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "st",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1835,
              "end": 1841
            },
            "start": 1833,
            "end": 1841
          },
          "start": 1831,
          "end": 1841
        }
      ],
      "returnType": {
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
                "start": 1846,
                "end": 1847
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1849,
                  "end": 1855
                },
                "start": 1847,
                "end": 1855
              },
              "accessibility": null,
              "static": false,
              "start": 1846,
              "end": 1856
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
                "start": 1857,
                "end": 1858
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1860,
                  "end": 1866
                },
                "start": 1858,
                "end": 1866
              },
              "accessibility": null,
              "static": false,
              "start": 1857,
              "end": 1866
            }
          ],
          "start": 1844,
          "end": 1868
        },
        "start": 1842,
        "end": 1868
      },
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1879,
                  "end": 1880
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1885,
                        "end": 1886
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 1888,
                        "end": 1892
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1885,
                      "end": 1892
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
                        "start": 1894,
                        "end": 1895
                      },
                      "value": {
                        "type": "Literal",
                        "value": 17,
                        "raw": "17",
                        "start": 1897,
                        "end": 1899
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1894,
                      "end": 1899
                    }
                  ],
                  "start": 1883,
                  "end": 1901
                },
                "definite": false,
                "start": 1879,
                "end": 1901
              }
            ],
            "declare": false,
            "start": 1875,
            "end": 1901
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 1906,
                "end": 1907
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1923,
                      "end": 1924
                    },
                    "start": 1920,
                    "end": 1924
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "st",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1937,
                        "end": 1939
                      },
                      "operator": "&&",
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
                              "start": 1945,
                              "end": 1946
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "st",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1948,
                              "end": 1950
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1945,
                            "end": 1950
                          }
                        ],
                        "start": 1943,
                        "end": 1952
                      },
                      "start": 1937,
                      "end": 1952
                    },
                    "start": 1934,
                    "end": 1952
                  }
                ],
                "start": 1910,
                "end": 1958
              },
              "start": 1906,
              "end": 1958
            },
            "directive": null,
            "start": 1906,
            "end": 1958
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
                  "typeAnnotation": null,
                  "start": 1967,
                  "end": 1969
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "st",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1977,
                          "end": 1979
                        },
                        "operator": "&&",
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
                                "start": 1985,
                                "end": 1986
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "st",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1988,
                                "end": 1990
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1985,
                              "end": 1990
                            }
                          ],
                          "start": 1983,
                          "end": 1992
                        },
                        "start": 1977,
                        "end": 1992
                      },
                      "start": 1974,
                      "end": 1992
                    }
                  ],
                  "start": 1972,
                  "end": 1993
                },
                "definite": false,
                "start": 1967,
                "end": 1993
              }
            ],
            "declare": false,
            "start": 1963,
            "end": 1993
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 2005,
              "end": 2006
            },
            "start": 1998,
            "end": 2007
          }
        ],
        "start": 1869,
        "end": 2009
      },
      "expression": false,
      "start": 1798,
      "end": 2009
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
            "name": "anything",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2047,
                "end": 2050
              },
              "start": 2045,
              "end": 2050
            },
            "start": 2037,
            "end": 2050
          },
          "init": null,
          "definite": false,
          "start": 2037,
          "end": 2050
        }
      ],
      "declare": false,
      "start": 2033,
      "end": 2051
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
            "name": "spreadAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 2056,
            "end": 2065
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anything",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2073,
                  "end": 2081
                },
                "start": 2070,
                "end": 2081
              }
            ],
            "start": 2068,
            "end": 2083
          },
          "definite": false,
          "start": 2056,
          "end": 2083
        }
      ],
      "declare": false,
      "start": 2052,
      "end": 2084
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
        "start": 2122,
        "end": 2123
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 2126,
              "end": 2127
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2130,
              "end": 2131
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2126,
            "end": 2132
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 2133,
              "end": 2134
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
                "start": 2137,
                "end": 2140
              },
              "expression": false,
              "start": 2134,
              "end": 2140
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2133,
            "end": 2140
          }
        ],
        "start": 2124,
        "end": 2142
      },
      "abstract": false,
      "declare": false,
      "start": 2116,
      "end": 2142
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2150,
                  "end": 2151
                },
                "typeArguments": null,
                "start": 2150,
                "end": 2151
              },
              "start": 2148,
              "end": 2151
            },
            "start": 2147,
            "end": 2151
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2158,
              "end": 2159
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2154,
            "end": 2161
          },
          "definite": false,
          "start": 2147,
          "end": 2161
        }
      ],
      "declare": false,
      "start": 2143,
      "end": 2161
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
            "name": "spreadC",
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2177,
                      "end": 2178
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2180,
                        "end": 2186
                      },
                      "start": 2178,
                      "end": 2186
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2177,
                    "end": 2186
                  }
                ],
                "start": 2175,
                "end": 2188
              },
              "start": 2173,
              "end": 2188
            },
            "start": 2166,
            "end": 2188
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2196,
                  "end": 2197
                },
                "start": 2193,
                "end": 2197
              }
            ],
            "start": 2191,
            "end": 2199
          },
          "definite": false,
          "start": 2166,
          "end": 2199
        }
      ],
      "declare": false,
      "start": 2162,
      "end": 2199
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
            "name": "cplus",
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2244,
                      "end": 2245
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2247,
                        "end": 2253
                      },
                      "start": 2245,
                      "end": 2253
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2244,
                    "end": 2254
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "plus",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2255,
                      "end": 2259
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
                        "start": 2263,
                        "end": 2267
                      },
                      "start": 2261,
                      "end": 2267
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2255,
                    "end": 2267
                  }
                ],
                "start": 2242,
                "end": 2269
              },
              "start": 2240,
              "end": 2269
            },
            "start": 2235,
            "end": 2269
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2277,
                  "end": 2278
                },
                "start": 2274,
                "end": 2278
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "plus",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2280,
                  "end": 2284
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 2296,
                              "end": 2300
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2301,
                              "end": 2302
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2296,
                            "end": 2302
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2305,
                            "end": 2306
                          },
                          "start": 2296,
                          "end": 2306
                        },
                        "start": 2289,
                        "end": 2307
                      }
                    ],
                    "start": 2287,
                    "end": 2309
                  },
                  "expression": false,
                  "start": 2284,
                  "end": 2309
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2280,
                "end": 2309
              }
            ],
            "start": 2272,
            "end": 2311
          },
          "definite": false,
          "start": 2235,
          "end": 2311
        }
      ],
      "declare": false,
      "start": 2231,
      "end": 2312
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
            "name": "cplus",
            "optional": false,
            "typeAnnotation": null,
            "start": 2313,
            "end": 2318
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "plus",
            "optional": false,
            "typeAnnotation": null,
            "start": 2319,
            "end": 2323
          },
          "optional": false,
          "computed": false,
          "start": 2313,
          "end": 2323
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2313,
        "end": 2325
      },
      "directive": null,
      "start": 2313,
      "end": 2326
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
            "name": "changeTypeAfter",
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
                      "start": 2409,
                      "end": 2410
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2412,
                        "end": 2418
                      },
                      "start": 2410,
                      "end": 2418
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2409,
                    "end": 2419
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
                      "start": 2420,
                      "end": 2421
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2423,
                        "end": 2429
                      },
                      "start": 2421,
                      "end": 2429
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2420,
                    "end": 2429
                  }
                ],
                "start": 2407,
                "end": 2431
              },
              "start": 2405,
              "end": 2431
            },
            "start": 2390,
            "end": 2431
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2443,
                  "end": 2444
                },
                "start": 2440,
                "end": 2444
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2446,
                  "end": 2447
                },
                "value": {
                  "type": "Literal",
                  "value": "wrong type?",
                  "raw": "'wrong type?'",
                  "start": 2449,
                  "end": 2462
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2446,
                "end": 2462
              }
            ],
            "start": 2438,
            "end": 2464
          },
          "definite": false,
          "start": 2390,
          "end": 2464
        }
      ],
      "declare": false,
      "start": 2386,
      "end": 2464
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
            "name": "changeTypeBoth",
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
                      "start": 2487,
                      "end": 2488
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2490,
                        "end": 2496
                      },
                      "start": 2488,
                      "end": 2496
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2487,
                    "end": 2497
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
                      "start": 2498,
                      "end": 2499
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2501,
                        "end": 2507
                      },
                      "start": 2499,
                      "end": 2507
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2498,
                    "end": 2507
                  }
                ],
                "start": 2485,
                "end": 2509
              },
              "start": 2483,
              "end": 2509
            },
            "start": 2469,
            "end": 2509
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2521,
                  "end": 2522
                },
                "start": 2518,
                "end": 2522
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "swap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2527,
                  "end": 2531
                },
                "start": 2524,
                "end": 2531
              }
            ],
            "start": 2516,
            "end": 2533
          },
          "definite": false,
          "start": 2469,
          "end": 2533
        }
      ],
      "declare": false,
      "start": 2465,
      "end": 2534
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "container",
        "optional": false,
        "typeAnnotation": null,
        "start": 2557,
        "end": 2566
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "definiteBoolean",
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2591,
                    "end": 2593
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2595,
                      "end": 2602
                    },
                    "start": 2593,
                    "end": 2602
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2591,
                  "end": 2602
                }
              ],
              "start": 2589,
              "end": 2604
            },
            "start": 2587,
            "end": 2604
          },
          "start": 2572,
          "end": 2604
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "definiteString",
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2628,
                    "end": 2630
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2632,
                      "end": 2638
                    },
                    "start": 2630,
                    "end": 2638
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2628,
                  "end": 2638
                }
              ],
              "start": 2626,
              "end": 2640
            },
            "start": 2624,
            "end": 2640
          },
          "start": 2610,
          "end": 2640
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optionalString",
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2664,
                    "end": 2666
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2669,
                      "end": 2675
                    },
                    "start": 2667,
                    "end": 2675
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2664,
                  "end": 2675
                }
              ],
              "start": 2662,
              "end": 2677
            },
            "start": 2660,
            "end": 2677
          },
          "start": 2646,
          "end": 2677
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "optionalNumber",
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
                    "name": "sn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2701,
                    "end": 2703
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2706,
                      "end": 2712
                    },
                    "start": 2704,
                    "end": 2712
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2701,
                  "end": 2712
                }
              ],
              "start": 2699,
              "end": 2714
            },
            "start": 2697,
            "end": 2714
          },
          "start": 2683,
          "end": 2714
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
                  "name": "optionalUnionStops",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2748,
                            "end": 2750
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2752,
                                  "end": 2758
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2761,
                                  "end": 2767
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 2770,
                                  "end": 2777
                                }
                              ],
                              "start": 2752,
                              "end": 2777
                            },
                            "start": 2750,
                            "end": 2777
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2748,
                          "end": 2777
                        }
                      ],
                      "start": 2746,
                      "end": 2779
                    },
                    "start": 2744,
                    "end": 2779
                  },
                  "start": 2726,
                  "end": 2779
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2787,
                        "end": 2802
                      },
                      "start": 2784,
                      "end": 2802
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2807,
                        "end": 2821
                      },
                      "start": 2804,
                      "end": 2821
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2826,
                        "end": 2840
                      },
                      "start": 2823,
                      "end": 2840
                    }
                  ],
                  "start": 2782,
                  "end": 2842
                },
                "definite": false,
                "start": 2726,
                "end": 2842
              }
            ],
            "declare": false,
            "start": 2722,
            "end": 2843
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
                  "name": "optionalUnionDuplicates",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2879,
                            "end": 2881
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 2883,
                                  "end": 2889
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 2892,
                                  "end": 2898
                                }
                              ],
                              "start": 2883,
                              "end": 2898
                            },
                            "start": 2881,
                            "end": 2898
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2879,
                          "end": 2898
                        }
                      ],
                      "start": 2877,
                      "end": 2900
                    },
                    "start": 2875,
                    "end": 2900
                  },
                  "start": 2852,
                  "end": 2900
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2908,
                        "end": 2923
                      },
                      "start": 2905,
                      "end": 2923
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "definiteString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2928,
                        "end": 2942
                      },
                      "start": 2925,
                      "end": 2942
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2947,
                        "end": 2961
                      },
                      "start": 2944,
                      "end": 2961
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2966,
                        "end": 2980
                      },
                      "start": 2963,
                      "end": 2980
                    }
                  ],
                  "start": 2903,
                  "end": 2982
                },
                "definite": false,
                "start": 2852,
                "end": 2982
              }
            ],
            "declare": false,
            "start": 2848,
            "end": 2983
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
                  "name": "allOptional",
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
                            "name": "sn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3007,
                            "end": 3009
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 3012,
                                  "end": 3018
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 3021,
                                  "end": 3027
                                }
                              ],
                              "start": 3012,
                              "end": 3027
                            },
                            "start": 3010,
                            "end": 3027
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3007,
                          "end": 3027
                        }
                      ],
                      "start": 3005,
                      "end": 3029
                    },
                    "start": 3003,
                    "end": 3029
                  },
                  "start": 2992,
                  "end": 3029
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3037,
                        "end": 3051
                      },
                      "start": 3034,
                      "end": 3051
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "optionalNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3056,
                        "end": 3070
                      },
                      "start": 3053,
                      "end": 3070
                    }
                  ],
                  "start": 3032,
                  "end": 3072
                },
                "definite": false,
                "start": 2992,
                "end": 3072
              }
            ],
            "declare": false,
            "start": 2988,
            "end": 3073
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
                  "name": "computedFirst",
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
                            "start": 3125,
                            "end": 3126
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3128,
                              "end": 3134
                            },
                            "start": 3126,
                            "end": 3134
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3125,
                          "end": 3135
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
                            "start": 3136,
                            "end": 3137
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3139,
                              "end": 3145
                            },
                            "start": 3137,
                            "end": 3145
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3136,
                          "end": 3146
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": "before everything",
                            "raw": "\"before everything\"",
                            "start": 3147,
                            "end": 3166
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3168,
                              "end": 3174
                            },
                            "start": 3166,
                            "end": 3174
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3147,
                          "end": 3174
                        }
                      ],
                      "start": 3123,
                      "end": 3176
                    },
                    "start": 3121,
                    "end": 3176
                  },
                  "start": 3108,
                  "end": 3176
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "before everything",
                        "raw": "'before everything'",
                        "start": 3190,
                        "end": 3209
                      },
                      "value": {
                        "type": "Literal",
                        "value": 12,
                        "raw": "12",
                        "start": 3212,
                        "end": 3214
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 3189,
                      "end": 3214
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3219,
                        "end": 3220
                      },
                      "start": 3216,
                      "end": 3220
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
                        "start": 3222,
                        "end": 3223
                      },
                      "value": {
                        "type": "Literal",
                        "value": "yes",
                        "raw": "'yes'",
                        "start": 3225,
                        "end": 3230
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3222,
                      "end": 3230
                    }
                  ],
                  "start": 3187,
                  "end": 3232
                },
                "definite": false,
                "start": 3108,
                "end": 3232
              }
            ],
            "declare": false,
            "start": 3104,
            "end": 3232
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
                  "name": "computedAfter",
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
                            "start": 3258,
                            "end": 3259
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3261,
                              "end": 3267
                            },
                            "start": 3259,
                            "end": 3267
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3258,
                          "end": 3268
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
                            "start": 3269,
                            "end": 3270
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3272,
                              "end": 3278
                            },
                            "start": 3270,
                            "end": 3278
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3269,
                          "end": 3279
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": "at the end",
                            "raw": "\"at the end\"",
                            "start": 3280,
                            "end": 3292
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3294,
                              "end": 3300
                            },
                            "start": 3292,
                            "end": 3300
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3280,
                          "end": 3300
                        }
                      ],
                      "start": 3256,
                      "end": 3302
                    },
                    "start": 3254,
                    "end": 3302
                  },
                  "start": 3241,
                  "end": 3302
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3318,
                        "end": 3319
                      },
                      "start": 3315,
                      "end": 3319
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
                        "start": 3321,
                        "end": 3322
                      },
                      "value": {
                        "type": "Literal",
                        "value": "yeah",
                        "raw": "'yeah'",
                        "start": 3324,
                        "end": 3330
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3321,
                      "end": 3330
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "at the end",
                        "raw": "'at the end'",
                        "start": 3333,
                        "end": 3345
                      },
                      "value": {
                        "type": "Literal",
                        "value": 14,
                        "raw": "14",
                        "start": 3348,
                        "end": 3350
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 3332,
                      "end": 3350
                    }
                  ],
                  "start": 3313,
                  "end": 3352
                },
                "definite": false,
                "start": 3241,
                "end": 3352
              }
            ],
            "declare": false,
            "start": 3237,
            "end": 3352
          }
        ],
        "start": 2716,
        "end": 3354
      },
      "expression": false,
      "start": 2548,
      "end": 3354
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3378,
            "end": 3379
          },
          "init": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 3382,
            "end": 3384
          },
          "definite": false,
          "start": 3378,
          "end": 3384
        }
      ],
      "declare": false,
      "start": 3374,
      "end": 3385
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
            "name": "shortCutted",
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
                      "start": 3405,
                      "end": 3406
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3408,
                        "end": 3414
                      },
                      "start": 3406,
                      "end": 3414
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3405,
                    "end": 3415
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
                      "start": 3416,
                      "end": 3417
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3419,
                        "end": 3425
                      },
                      "start": 3417,
                      "end": 3425
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3416,
                    "end": 3425
                  }
                ],
                "start": 3403,
                "end": 3427
              },
              "start": 3401,
              "end": 3427
            },
            "start": 3390,
            "end": 3427
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3435,
                  "end": 3436
                },
                "start": 3432,
                "end": 3436
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3438,
                  "end": 3439
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3438,
                  "end": 3439
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 3438,
                "end": 3439
              }
            ],
            "start": 3430,
            "end": 3441
          },
          "definite": false,
          "start": 3390,
          "end": 3441
        }
      ],
      "declare": false,
      "start": 3386,
      "end": 3441
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
            "name": "spreadNonPrimitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 3463,
            "end": 3481
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 3490,
                    "end": 3496
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3497,
                    "end": 3499
                  },
                  "start": 3489,
                  "end": 3499
                },
                "start": 3486,
                "end": 3499
              }
            ],
            "start": 3484,
            "end": 3500
          },
          "definite": false,
          "start": 3463,
          "end": 3500
        }
      ],
      "declare": false,
      "start": 3459,
      "end": 3501
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 3532,
        "end": 3533
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 3534,
              "end": 3535
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3534,
            "end": 3535
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3537,
              "end": 3538
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3537,
            "end": 3538
          }
        ],
        "start": 3533,
        "end": 3539
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 3543,
                "end": 3544
              },
              "typeArguments": null,
              "start": 3543,
              "end": 3544
            },
            "start": 3541,
            "end": 3544
          },
          "start": 3540,
          "end": 3544
        },
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3549,
                "end": 3550
              },
              "typeArguments": null,
              "start": 3549,
              "end": 3550
            },
            "start": 3547,
            "end": 3550
          },
          "start": 3546,
          "end": 3550
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3570,
                    "end": 3571
                  },
                  "start": 3567,
                  "end": 3571
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3576,
                    "end": 3577
                  },
                  "start": 3573,
                  "end": 3577
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3579,
                    "end": 3581
                  },
                  "value": {
                    "type": "Literal",
                    "value": "id",
                    "raw": "'id'",
                    "start": 3583,
                    "end": 3587
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3579,
                  "end": 3587
                }
              ],
              "start": 3565,
              "end": 3589
            },
            "start": 3558,
            "end": 3590
          }
        ],
        "start": 3552,
        "end": 3592
      },
      "expression": false,
      "start": 3523,
      "end": 3592
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
            "name": "exclusive",
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3611,
                      "end": 3613
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3615,
                        "end": 3621
                      },
                      "start": 3613,
                      "end": 3621
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3611,
                    "end": 3622
                  },
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
                      "start": 3623,
                      "end": 3624
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3626,
                        "end": 3632
                      },
                      "start": 3624,
                      "end": 3632
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3623,
                    "end": 3633
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
                      "start": 3634,
                      "end": 3635
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3637,
                        "end": 3643
                      },
                      "start": 3635,
                      "end": 3643
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3634,
                    "end": 3644
                  },
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
                      "start": 3645,
                      "end": 3646
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3648,
                        "end": 3654
                      },
                      "start": 3646,
                      "end": 3654
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3645,
                    "end": 3655
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3656,
                      "end": 3657
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3659,
                        "end": 3666
                      },
                      "start": 3657,
                      "end": 3666
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3656,
                    "end": 3666
                  }
                ],
                "start": 3609,
                "end": 3668
              },
              "start": 3607,
              "end": 3668
            },
            "start": 3598,
            "end": 3668
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 3675,
              "end": 3676
            },
            "typeArguments": null,
            "arguments": [
              {
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
                      "start": 3679,
                      "end": 3680
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3682,
                      "end": 3683
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3679,
                    "end": 3683
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
                      "start": 3685,
                      "end": 3686
                    },
                    "value": {
                      "type": "Literal",
                      "value": "yes",
                      "raw": "'yes'",
                      "start": 3688,
                      "end": 3693
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3685,
                    "end": 3693
                  }
                ],
                "start": 3677,
                "end": 3695
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3699,
                      "end": 3700
                    },
                    "value": {
                      "type": "Literal",
                      "value": "no",
                      "raw": "'no'",
                      "start": 3702,
                      "end": 3706
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3699,
                    "end": 3706
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
                      "start": 3708,
                      "end": 3709
                    },
                    "value": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 3711,
                      "end": 3716
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3708,
                    "end": 3716
                  }
                ],
                "start": 3697,
                "end": 3718
              }
            ],
            "optional": false,
            "start": 3675,
            "end": 3719
          },
          "definite": false,
          "start": 3598,
          "end": 3719
        }
      ],
      "declare": false,
      "start": 3594,
      "end": 3719
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
            "name": "overlap",
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3735,
                      "end": 3737
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3739,
                        "end": 3745
                      },
                      "start": 3737,
                      "end": 3745
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3735,
                    "end": 3746
                  },
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
                      "start": 3747,
                      "end": 3748
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3750,
                        "end": 3756
                      },
                      "start": 3748,
                      "end": 3756
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3747,
                    "end": 3757
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
                      "start": 3758,
                      "end": 3759
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3761,
                        "end": 3767
                      },
                      "start": 3759,
                      "end": 3767
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3758,
                    "end": 3767
                  }
                ],
                "start": 3733,
                "end": 3769
              },
              "start": 3731,
              "end": 3769
            },
            "start": 3724,
            "end": 3769
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 3776,
              "end": 3777
            },
            "typeArguments": null,
            "arguments": [
              {
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
                      "start": 3780,
                      "end": 3781
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3783,
                      "end": 3784
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3780,
                    "end": 3784
                  }
                ],
                "start": 3778,
                "end": 3786
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3790,
                      "end": 3791
                    },
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 3793,
                      "end": 3794
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3790,
                    "end": 3794
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
                      "start": 3796,
                      "end": 3797
                    },
                    "value": {
                      "type": "Literal",
                      "value": "extra",
                      "raw": "'extra'",
                      "start": 3799,
                      "end": 3806
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3796,
                    "end": 3806
                  }
                ],
                "start": 3788,
                "end": 3808
              }
            ],
            "optional": false,
            "start": 3776,
            "end": 3809
          },
          "definite": false,
          "start": 3724,
          "end": 3809
        }
      ],
      "declare": false,
      "start": 3720,
      "end": 3809
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
            "name": "overlapConflict",
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3833,
                      "end": 3835
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3836,
                        "end": 3842
                      },
                      "start": 3835,
                      "end": 3842
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3833,
                    "end": 3843
                  },
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
                      "start": 3844,
                      "end": 3845
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3847,
                        "end": 3853
                      },
                      "start": 3845,
                      "end": 3853
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3844,
                    "end": 3853
                  }
                ],
                "start": 3831,
                "end": 3855
              },
              "start": 3829,
              "end": 3855
            },
            "start": 3814,
            "end": 3855
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 3862,
              "end": 3863
            },
            "typeArguments": null,
            "arguments": [
              {
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
                      "start": 3866,
                      "end": 3867
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3869,
                      "end": 3870
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3866,
                    "end": 3870
                  }
                ],
                "start": 3864,
                "end": 3872
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3876,
                      "end": 3877
                    },
                    "value": {
                      "type": "Literal",
                      "value": "mismatch",
                      "raw": "'mismatch'",
                      "start": 3879,
                      "end": 3889
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3876,
                    "end": 3889
                  }
                ],
                "start": 3874,
                "end": 3891
              }
            ],
            "optional": false,
            "start": 3862,
            "end": 3892
          },
          "definite": false,
          "start": 3814,
          "end": 3892
        }
      ],
      "declare": false,
      "start": 3810,
      "end": 3892
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
            "name": "overwriteId",
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3912,
                      "end": 3914
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3916,
                        "end": 3922
                      },
                      "start": 3914,
                      "end": 3922
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3912,
                    "end": 3923
                  },
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
                      "start": 3924,
                      "end": 3925
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3927,
                        "end": 3933
                      },
                      "start": 3925,
                      "end": 3933
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3924,
                    "end": 3934
                  },
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
                      "start": 3935,
                      "end": 3936
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3938,
                        "end": 3944
                      },
                      "start": 3936,
                      "end": 3944
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3935,
                    "end": 3945
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3946,
                      "end": 3947
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3949,
                        "end": 3955
                      },
                      "start": 3947,
                      "end": 3955
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3946,
                    "end": 3955
                  }
                ],
                "start": 3910,
                "end": 3957
              },
              "start": 3908,
              "end": 3957
            },
            "start": 3897,
            "end": 3957
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 3964,
              "end": 3965
            },
            "typeArguments": null,
            "arguments": [
              {
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
                      "start": 3968,
                      "end": 3969
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3971,
                      "end": 3972
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3968,
                    "end": 3972
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3974,
                      "end": 3976
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 3978,
                      "end": 3982
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3974,
                    "end": 3982
                  }
                ],
                "start": 3966,
                "end": 3984
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3988,
                      "end": 3989
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3991,
                      "end": 3992
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3988,
                    "end": 3992
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
                      "start": 3994,
                      "end": 3995
                    },
                    "value": {
                      "type": "Literal",
                      "value": "no",
                      "raw": "'no'",
                      "start": 3997,
                      "end": 4001
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3994,
                    "end": 4001
                  }
                ],
                "start": 3986,
                "end": 4003
              }
            ],
            "optional": false,
            "start": 3964,
            "end": 4004
          },
          "definite": false,
          "start": 3897,
          "end": 4004
        }
      ],
      "declare": false,
      "start": 3893,
      "end": 4004
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericSpread",
        "optional": false,
        "typeAnnotation": null,
        "start": 4015,
        "end": 4028
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 4029,
              "end": 4030
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4029,
            "end": 4030
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 4032,
              "end": 4033
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4032,
            "end": 4033
          }
        ],
        "start": 4028,
        "end": 4034
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 4038,
                "end": 4039
              },
              "typeArguments": null,
              "start": 4038,
              "end": 4039
            },
            "start": 4036,
            "end": 4039
          },
          "start": 4035,
          "end": 4039
        },
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 4044,
                "end": 4045
              },
              "typeArguments": null,
              "start": 4044,
              "end": 4045
            },
            "start": 4042,
            "end": 4045
          },
          "start": 4041,
          "end": 4045
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4050,
                    "end": 4051
                  },
                  "typeArguments": null,
                  "start": 4050,
                  "end": 4051
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4054,
                    "end": 4055
                  },
                  "typeArguments": null,
                  "start": 4054,
                  "end": 4055
                }
              ],
              "start": 4050,
              "end": 4055
            },
            "start": 4048,
            "end": 4055
          },
          "start": 4047,
          "end": 4055
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "w",
          "optional": false,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4060,
                    "end": 4061
                  },
                  "typeArguments": null,
                  "start": 4060,
                  "end": 4061
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4066,
                        "end": 4067
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4069,
                          "end": 4075
                        },
                        "start": 4067,
                        "end": 4075
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4066,
                      "end": 4075
                    }
                  ],
                  "start": 4064,
                  "end": 4077
                }
              ],
              "start": 4060,
              "end": 4077
            },
            "start": 4058,
            "end": 4077
          },
          "start": 4057,
          "end": 4077
        },
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4086,
                    "end": 4087
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4089,
                      "end": 4095
                    },
                    "start": 4087,
                    "end": 4095
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4086,
                  "end": 4095
                }
              ],
              "start": 4084,
              "end": 4097
            },
            "start": 4082,
            "end": 4097
          },
          "start": 4079,
          "end": 4097
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
                  "name": "x01",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4109,
                  "end": 4112
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4120,
                        "end": 4121
                      },
                      "start": 4117,
                      "end": 4121
                    }
                  ],
                  "start": 4115,
                  "end": 4123
                },
                "definite": false,
                "start": 4109,
                "end": 4123
              }
            ],
            "declare": false,
            "start": 4105,
            "end": 4124
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
                  "name": "x02",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4133,
                  "end": 4136
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4144,
                        "end": 4145
                      },
                      "start": 4141,
                      "end": 4145
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4150,
                        "end": 4151
                      },
                      "start": 4147,
                      "end": 4151
                    }
                  ],
                  "start": 4139,
                  "end": 4153
                },
                "definite": false,
                "start": 4133,
                "end": 4153
              }
            ],
            "declare": false,
            "start": 4129,
            "end": 4154
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
                  "name": "x03",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4163,
                  "end": 4166
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4174,
                        "end": 4175
                      },
                      "start": 4171,
                      "end": 4175
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4180,
                        "end": 4181
                      },
                      "start": 4177,
                      "end": 4181
                    }
                  ],
                  "start": 4169,
                  "end": 4183
                },
                "definite": false,
                "start": 4163,
                "end": 4183
              }
            ],
            "declare": false,
            "start": 4159,
            "end": 4184
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
                  "name": "x04",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4193,
                  "end": 4196
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4204,
                        "end": 4205
                      },
                      "start": 4201,
                      "end": 4205
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4210,
                        "end": 4211
                      },
                      "start": 4207,
                      "end": 4211
                    }
                  ],
                  "start": 4199,
                  "end": 4213
                },
                "definite": false,
                "start": 4193,
                "end": 4213
              }
            ],
            "declare": false,
            "start": 4189,
            "end": 4214
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
                  "name": "x05",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4223,
                  "end": 4226
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
                        "start": 4231,
                        "end": 4232
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4234,
                        "end": 4235
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4231,
                      "end": 4235
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
                        "start": 4237,
                        "end": 4238
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 4240,
                        "end": 4244
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4237,
                      "end": 4244
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4249,
                        "end": 4250
                      },
                      "start": 4246,
                      "end": 4250
                    }
                  ],
                  "start": 4229,
                  "end": 4252
                },
                "definite": false,
                "start": 4223,
                "end": 4252
              }
            ],
            "declare": false,
            "start": 4219,
            "end": 4253
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
                  "name": "x06",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4262,
                  "end": 4265
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4273,
                        "end": 4274
                      },
                      "start": 4270,
                      "end": 4274
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4276,
                        "end": 4277
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4279,
                        "end": 4280
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4276,
                      "end": 4280
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
                        "start": 4282,
                        "end": 4283
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 4285,
                        "end": 4289
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4282,
                      "end": 4289
                    }
                  ],
                  "start": 4268,
                  "end": 4291
                },
                "definite": false,
                "start": 4262,
                "end": 4291
              }
            ],
            "declare": false,
            "start": 4258,
            "end": 4292
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
                  "name": "x07",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4301,
                  "end": 4304
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
                        "start": 4309,
                        "end": 4310
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4312,
                        "end": 4313
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4309,
                      "end": 4313
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
                        "start": 4315,
                        "end": 4316
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 4318,
                        "end": 4322
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4315,
                      "end": 4322
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4327,
                        "end": 4328
                      },
                      "start": 4324,
                      "end": 4328
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
                        "start": 4330,
                        "end": 4331
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 4333,
                        "end": 4337
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4330,
                      "end": 4337
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4342,
                        "end": 4345
                      },
                      "start": 4339,
                      "end": 4345
                    }
                  ],
                  "start": 4307,
                  "end": 4347
                },
                "definite": false,
                "start": 4301,
                "end": 4347
              }
            ],
            "declare": false,
            "start": 4297,
            "end": 4348
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
                  "name": "x09",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4357,
                  "end": 4360
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
                        "start": 4365,
                        "end": 4366
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4368,
                        "end": 4369
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4365,
                      "end": 4369
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4374,
                        "end": 4375
                      },
                      "start": 4371,
                      "end": 4375
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
                        "start": 4377,
                        "end": 4378
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 4380,
                        "end": 4384
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4377,
                      "end": 4384
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
                        "start": 4386,
                        "end": 4387
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 4389,
                        "end": 4393
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4386,
                      "end": 4393
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4398,
                        "end": 4401
                      },
                      "start": 4395,
                      "end": 4401
                    }
                  ],
                  "start": 4363,
                  "end": 4403
                },
                "definite": false,
                "start": 4357,
                "end": 4403
              }
            ],
            "declare": false,
            "start": 4353,
            "end": 4404
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
                  "name": "x10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4413,
                  "end": 4416
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
                        "start": 4421,
                        "end": 4422
                      },
                      "value": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 4424,
                        "end": 4425
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4421,
                      "end": 4425
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4430,
                        "end": 4431
                      },
                      "start": 4427,
                      "end": 4431
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
                        "start": 4433,
                        "end": 4434
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hi",
                        "raw": "'hi'",
                        "start": 4436,
                        "end": 4440
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4433,
                      "end": 4440
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4445,
                        "end": 4446
                      },
                      "start": 4442,
                      "end": 4446
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4451,
                        "end": 4454
                      },
                      "start": 4448,
                      "end": 4454
                    }
                  ],
                  "start": 4419,
                  "end": 4456
                },
                "definite": false,
                "start": 4413,
                "end": 4456
              }
            ],
            "declare": false,
            "start": 4409,
            "end": 4457
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
                  "name": "x11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4466,
                  "end": 4469
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4477,
                        "end": 4478
                      },
                      "start": 4474,
                      "end": 4478
                    }
                  ],
                  "start": 4472,
                  "end": 4480
                },
                "definite": false,
                "start": 4466,
                "end": 4480
              }
            ],
            "declare": false,
            "start": 4462,
            "end": 4481
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
                  "name": "x12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4490,
                  "end": 4493
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4501,
                        "end": 4502
                      },
                      "start": 4498,
                      "end": 4502
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4507,
                        "end": 4510
                      },
                      "start": 4504,
                      "end": 4510
                    }
                  ],
                  "start": 4496,
                  "end": 4512
                },
                "definite": false,
                "start": 4490,
                "end": 4512
              }
            ],
            "declare": false,
            "start": 4486,
            "end": 4513
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
                  "name": "x13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4522,
                  "end": 4525
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4533,
                        "end": 4534
                      },
                      "start": 4530,
                      "end": 4534
                    }
                  ],
                  "start": 4528,
                  "end": 4536
                },
                "definite": false,
                "start": 4522,
                "end": 4536
              }
            ],
            "declare": false,
            "start": 4518,
            "end": 4537
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
                  "name": "x14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4546,
                  "end": 4549
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4557,
                        "end": 4558
                      },
                      "start": 4554,
                      "end": 4558
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4563,
                        "end": 4566
                      },
                      "start": 4560,
                      "end": 4566
                    }
                  ],
                  "start": 4552,
                  "end": 4568
                },
                "definite": false,
                "start": 4546,
                "end": 4568
              }
            ],
            "declare": false,
            "start": 4542,
            "end": 4569
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
                  "name": "x15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4578,
                  "end": 4581
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4589,
                        "end": 4590
                      },
                      "start": 4586,
                      "end": 4590
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4595,
                        "end": 4596
                      },
                      "start": 4592,
                      "end": 4596
                    }
                  ],
                  "start": 4584,
                  "end": 4598
                },
                "definite": false,
                "start": 4578,
                "end": 4598
              }
            ],
            "declare": false,
            "start": 4574,
            "end": 4599
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
                  "name": "x16",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4608,
                  "end": 4611
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4619,
                        "end": 4620
                      },
                      "start": 4616,
                      "end": 4620
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4625,
                        "end": 4626
                      },
                      "start": 4622,
                      "end": 4626
                    }
                  ],
                  "start": 4614,
                  "end": 4628
                },
                "definite": false,
                "start": 4608,
                "end": 4628
              }
            ],
            "declare": false,
            "start": 4604,
            "end": 4629
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
                  "name": "x17",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4638,
                  "end": 4641
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4649,
                        "end": 4650
                      },
                      "start": 4646,
                      "end": 4650
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4655,
                        "end": 4656
                      },
                      "start": 4652,
                      "end": 4656
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4661,
                        "end": 4664
                      },
                      "start": 4658,
                      "end": 4664
                    }
                  ],
                  "start": 4644,
                  "end": 4666
                },
                "definite": false,
                "start": 4638,
                "end": 4666
              }
            ],
            "declare": false,
            "start": 4634,
            "end": 4667
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
                  "name": "x18",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4676,
                  "end": 4679
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4687,
                        "end": 4688
                      },
                      "start": 4684,
                      "end": 4688
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4693,
                        "end": 4694
                      },
                      "start": 4690,
                      "end": 4694
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4699,
                        "end": 4700
                      },
                      "start": 4696,
                      "end": 4700
                    }
                  ],
                  "start": 4682,
                  "end": 4702
                },
                "definite": false,
                "start": 4676,
                "end": 4702
              }
            ],
            "declare": false,
            "start": 4672,
            "end": 4703
          }
        ],
        "start": 4099,
        "end": 4705
      },
      "expression": false,
      "start": 4006,
      "end": 4705
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4705
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
    "value": "o",
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
    "type": "Identifier",
    "value": "a",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 30,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 40,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "swap",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 73,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 83,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "addAfter",
    "start": 94,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 131,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Boolean",
    "value": "false",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "addBefore",
    "start": 170,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "a",
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
    "type": "Identifier",
    "value": "number",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 208,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "override",
    "start": 247,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 262,
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
    "value": "b",
    "start": 270,
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
    "value": "string",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 290,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "String",
    "value": "'override'",
    "start": 299,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "number",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 340,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 369,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 388,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "String",
    "value": "'overriden'",
    "start": 398,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "String",
    "value": "'whatever'",
    "start": 418,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 431,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "combined",
    "start": 435,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 458,
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
    "value": ",",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 472,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 499,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 504,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "combinedAfter",
    "start": 508,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 528,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 539,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 550,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 568,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 574,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 577,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 584,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 591,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "combinedNestedChangeType",
    "start": 595,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "boolean",
    "start": 637,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 649,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 666,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Numeric",
    "value": "1",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 677,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 683,
    "end": 684
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 685,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "String",
    "value": "'overriden'",
    "start": 695,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ",",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 715,
    "end": 716
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 718,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 720,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "propertyNested",
    "start": 724,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 750,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 761,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "=",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 785,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 902,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 906,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 913,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 922,
    "end": 923
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 924,
    "end": 930
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 938,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 942,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "number",
    "start": 955,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 966,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 983,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 986,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "getter",
    "start": 997,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1008,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "spreadFunc",
    "start": 1044,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "...",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1063,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1084,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "Header",
    "start": 1089,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 1100,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1106,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 1114,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1120,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "authToken",
    "start": 1128,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1139,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1148,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "from16326",
    "start": 1157,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1167,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "header",
    "start": 1175,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "Header",
    "start": 1183,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "header",
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
    "type": "Identifier",
    "value": "Header",
    "start": 1201,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "authToken",
    "start": 1209,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1220,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "Header",
    "start": 1229,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1242,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1259,
    "end": 1262
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1262,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "header",
    "start": 1267,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1283,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "header",
    "start": 1286,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1302,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "authToken",
    "start": 1305,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1315,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "authToken",
    "start": 1320,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1378,
    "end": 1386
  },
  {
    "type": "Identifier",
    "value": "conditionalSpreadBoolean",
    "start": 1387,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1415,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1431,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1442,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1457,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1470,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 1477,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1500,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1514,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1519,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 1527,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1542,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 1546,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1553,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "&&",
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
    "type": "Identifier",
    "value": "x",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Numeric",
    "value": "21",
    "start": 1566,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1576,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1583,
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
    "value": "function",
    "start": 1588,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "conditionalSpreadNumber",
    "start": 1597,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "nt",
    "start": 1621,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1625,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1639,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1650,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1665,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 1678,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 1685,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1708,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1722,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "nt",
    "start": 1725,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1728,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "nt",
    "start": 1736,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1751,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 1755,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1762,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "nt",
    "start": 1765,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1768,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "nt",
    "start": 1776,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1786,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1798,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "conditionalSpreadString",
    "start": 1807,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "st",
    "start": 1831,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1835,
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
    "value": ":",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1849,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1860,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1875,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 1888,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 1897,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1920,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1934,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "st",
    "start": 1937,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1940,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "st",
    "start": 1948,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1963,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 1967,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1974,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "st",
    "start": 1977,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1980,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "st",
    "start": 1988,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1998,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2033,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 2037,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2047,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2052,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "spreadAny",
    "start": 2056,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2070,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 2073,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2116,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2143,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2154,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2162,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "spreadC",
    "start": 2166,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2180,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2193,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2231,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "cplus",
    "start": 2235,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2247,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "plus",
    "start": 2255,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2263,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2274,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "plus",
    "start": 2280,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2289,
    "end": 2295
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2296,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "cplus",
    "start": 2313,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "plus",
    "start": 2319,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2386,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "changeTypeAfter",
    "start": 2390,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2412,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2423,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2440,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "String",
    "value": "'wrong type?'",
    "start": 2449,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2465,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "changeTypeBoth",
    "start": 2469,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2490,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2501,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2518,
    "end": 2521
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2524,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "swap",
    "start": 2527,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2548,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "container",
    "start": 2557,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "definiteBoolean",
    "start": 2572,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 2591,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2595,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "definiteString",
    "start": 2610,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 2628,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2632,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 2646,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 2664,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2669,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 2683,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 2701,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2706,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2722,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "optionalUnionStops",
    "start": 2726,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 2748,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2752,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2761,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2770,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2784,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "definiteBoolean",
    "start": 2787,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2804,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "definiteString",
    "start": 2807,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2823,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 2826,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2848,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "optionalUnionDuplicates",
    "start": 2852,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 2879,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2883,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2892,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2905,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "definiteBoolean",
    "start": 2908,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2925,
    "end": 2928
  },
  {
    "type": "Identifier",
    "value": "definiteString",
    "start": 2928,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2944,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 2947,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2963,
    "end": 2966
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 2966,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2988,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "allOptional",
    "start": 2992,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Identifier",
    "value": "sn",
    "start": 3007,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3012,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3021,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3032,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3034,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "optionalString",
    "start": 3037,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3053,
    "end": 3056
  },
  {
    "type": "Identifier",
    "value": "optionalNumber",
    "start": 3056,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3104,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "computedFirst",
    "start": 3108,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3128,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3139,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "String",
    "value": "\"before everything\"",
    "start": 3147,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3168,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "String",
    "value": "'before everything'",
    "start": 3190,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 3212,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3216,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 3225,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3237,
    "end": 3240
  },
  {
    "type": "Identifier",
    "value": "computedAfter",
    "start": 3241,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3261,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3272,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "String",
    "value": "\"at the end\"",
    "start": 3280,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3294,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3315,
    "end": 3318
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "String",
    "value": "'yeah'",
    "start": 3324,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "String",
    "value": "'at the end'",
    "start": 3333,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 3348,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3374,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 3382,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3386,
    "end": 3389
  },
  {
    "type": "Identifier",
    "value": "shortCutted",
    "start": 3390,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3408,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3419,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3432,
    "end": 3435
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3459,
    "end": 3462
  },
  {
    "type": "Identifier",
    "value": "spreadNonPrimitive",
    "start": 3463,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3486,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3490,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3523,
    "end": 3531
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3543,
    "end": 3544
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3558,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3567,
    "end": 3570
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3573,
    "end": 3576
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3579,
    "end": 3581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "String",
    "value": "'id'",
    "start": 3583,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3594,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "exclusive",
    "start": 3598,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3611,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3615,
    "end": 3621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3626,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3635,
    "end": 3636
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3637,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3648,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3659,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3679,
    "end": 3680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3680,
    "end": 3681
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 3688,
    "end": 3693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3694,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 3702,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3711,
    "end": 3716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3720,
    "end": 3723
  },
  {
    "type": "Identifier",
    "value": "overlap",
    "start": 3724,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3735,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3739,
    "end": 3745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3745,
    "end": 3746
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3747,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3750,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3758,
    "end": 3759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3761,
    "end": 3767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3776,
    "end": 3777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3777,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3778,
    "end": 3779
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3786,
    "end": 3787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3788,
    "end": 3789
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "String",
    "value": "'extra'",
    "start": 3799,
    "end": 3806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3808,
    "end": 3809
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3810,
    "end": 3813
  },
  {
    "type": "Identifier",
    "value": "overlapConflict",
    "start": 3814,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3831,
    "end": 3832
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3833,
    "end": 3835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3835,
    "end": 3836
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3836,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3842,
    "end": 3843
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3847,
    "end": 3853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3854,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3863,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3866,
    "end": 3867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3867,
    "end": 3868
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3869,
    "end": 3870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3871,
    "end": 3872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "String",
    "value": "'mismatch'",
    "start": 3879,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3891,
    "end": 3892
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3893,
    "end": 3896
  },
  {
    "type": "Identifier",
    "value": "overwriteId",
    "start": 3897,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3912,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3916,
    "end": 3922
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3927,
    "end": 3933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3936,
    "end": 3937
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3938,
    "end": 3944
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3946,
    "end": 3947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3947,
    "end": 3948
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3949,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3964,
    "end": 3965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3966,
    "end": 3967
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3969,
    "end": 3970
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 3974,
    "end": 3976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3978,
    "end": 3982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3988,
    "end": 3989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 3997,
    "end": 4001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4006,
    "end": 4014
  },
  {
    "type": "Identifier",
    "value": "genericSpread",
    "start": 4015,
    "end": 4028
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4036,
    "end": 4037
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4054,
    "end": 4055
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4055,
    "end": 4056
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4058,
    "end": 4059
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4064,
    "end": 4065
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4066,
    "end": 4067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4069,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4076,
    "end": 4077
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4077,
    "end": 4078
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4079,
    "end": 4082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4084,
    "end": 4085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4086,
    "end": 4087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4087,
    "end": 4088
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4089,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4096,
    "end": 4097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4097,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4105,
    "end": 4108
  },
  {
    "type": "Identifier",
    "value": "x01",
    "start": 4109,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4117,
    "end": 4120
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4123,
    "end": 4124
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4129,
    "end": 4132
  },
  {
    "type": "Identifier",
    "value": "x02",
    "start": 4133,
    "end": 4136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4141,
    "end": 4144
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4147,
    "end": 4150
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4159,
    "end": 4162
  },
  {
    "type": "Identifier",
    "value": "x03",
    "start": 4163,
    "end": 4166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4167,
    "end": 4168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4171,
    "end": 4174
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4174,
    "end": 4175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4177,
    "end": 4180
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4180,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4182,
    "end": 4183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4189,
    "end": 4192
  },
  {
    "type": "Identifier",
    "value": "x04",
    "start": 4193,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4197,
    "end": 4198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4199,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4201,
    "end": 4204
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4204,
    "end": 4205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4205,
    "end": 4206
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4207,
    "end": 4210
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4213,
    "end": 4214
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4219,
    "end": 4222
  },
  {
    "type": "Identifier",
    "value": "x05",
    "start": 4223,
    "end": 4226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4227,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4229,
    "end": 4230
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4232,
    "end": 4233
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4235,
    "end": 4236
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4237,
    "end": 4238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 4240,
    "end": 4244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4246,
    "end": 4249
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4249,
    "end": 4250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4251,
    "end": 4252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4252,
    "end": 4253
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4258,
    "end": 4261
  },
  {
    "type": "Identifier",
    "value": "x06",
    "start": 4262,
    "end": 4265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4266,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4268,
    "end": 4269
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4270,
    "end": 4273
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4273,
    "end": 4274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4274,
    "end": 4275
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4279,
    "end": 4280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4280,
    "end": 4281
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 4285,
    "end": 4289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4290,
    "end": 4291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4291,
    "end": 4292
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4297,
    "end": 4300
  },
  {
    "type": "Identifier",
    "value": "x07",
    "start": 4301,
    "end": 4304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4305,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4309,
    "end": 4310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4310,
    "end": 4311
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4312,
    "end": 4313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4313,
    "end": 4314
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4315,
    "end": 4316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4316,
    "end": 4317
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 4318,
    "end": 4322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4322,
    "end": 4323
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4324,
    "end": 4327
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4327,
    "end": 4328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4328,
    "end": 4329
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4330,
    "end": 4331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4331,
    "end": 4332
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4333,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4339,
    "end": 4342
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4342,
    "end": 4345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4346,
    "end": 4347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4347,
    "end": 4348
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4353,
    "end": 4356
  },
  {
    "type": "Identifier",
    "value": "x09",
    "start": 4357,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4361,
    "end": 4362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4371,
    "end": 4374
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4374,
    "end": 4375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4375,
    "end": 4376
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4377,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 4380,
    "end": 4384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4384,
    "end": 4385
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4389,
    "end": 4393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4395,
    "end": 4398
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4398,
    "end": 4401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4409,
    "end": 4412
  },
  {
    "type": "Identifier",
    "value": "x10",
    "start": 4413,
    "end": 4416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4417,
    "end": 4418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4422,
    "end": 4423
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 4424,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4425,
    "end": 4426
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4427,
    "end": 4430
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4431,
    "end": 4432
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 4436,
    "end": 4440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4440,
    "end": 4441
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4442,
    "end": 4445
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 4445,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4446,
    "end": 4447
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4448,
    "end": 4451
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4451,
    "end": 4454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4455,
    "end": 4456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4456,
    "end": 4457
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4462,
    "end": 4465
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 4466,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4470,
    "end": 4471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4472,
    "end": 4473
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4474,
    "end": 4477
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4480,
    "end": 4481
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4486,
    "end": 4489
  },
  {
    "type": "Identifier",
    "value": "x12",
    "start": 4490,
    "end": 4493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4494,
    "end": 4495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4496,
    "end": 4497
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4498,
    "end": 4501
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4501,
    "end": 4502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4502,
    "end": 4503
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4504,
    "end": 4507
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4507,
    "end": 4510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4511,
    "end": 4512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4512,
    "end": 4513
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4518,
    "end": 4521
  },
  {
    "type": "Identifier",
    "value": "x13",
    "start": 4522,
    "end": 4525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4530,
    "end": 4533
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4533,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4535,
    "end": 4536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4536,
    "end": 4537
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4542,
    "end": 4545
  },
  {
    "type": "Identifier",
    "value": "x14",
    "start": 4546,
    "end": 4549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4554,
    "end": 4557
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4558,
    "end": 4559
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4560,
    "end": 4563
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4563,
    "end": 4566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4567,
    "end": 4568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4568,
    "end": 4569
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4574,
    "end": 4577
  },
  {
    "type": "Identifier",
    "value": "x15",
    "start": 4578,
    "end": 4581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4582,
    "end": 4583
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4584,
    "end": 4585
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4586,
    "end": 4589
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4589,
    "end": 4590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4590,
    "end": 4591
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4592,
    "end": 4595
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4595,
    "end": 4596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4597,
    "end": 4598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4598,
    "end": 4599
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4604,
    "end": 4607
  },
  {
    "type": "Identifier",
    "value": "x16",
    "start": 4608,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4616,
    "end": 4619
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4619,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4622,
    "end": 4625
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4625,
    "end": 4626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4627,
    "end": 4628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4628,
    "end": 4629
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4634,
    "end": 4637
  },
  {
    "type": "Identifier",
    "value": "x17",
    "start": 4638,
    "end": 4641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4642,
    "end": 4643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4644,
    "end": 4645
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4646,
    "end": 4649
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4649,
    "end": 4650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4650,
    "end": 4651
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4652,
    "end": 4655
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4656,
    "end": 4657
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4658,
    "end": 4661
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4661,
    "end": 4664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4665,
    "end": 4666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4666,
    "end": 4667
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 4672,
    "end": 4675
  },
  {
    "type": "Identifier",
    "value": "x18",
    "start": 4676,
    "end": 4679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4680,
    "end": 4681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4682,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4684,
    "end": 4687
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4687,
    "end": 4688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4688,
    "end": 4689
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4690,
    "end": 4693
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4693,
    "end": 4694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4694,
    "end": 4695
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4696,
    "end": 4699
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4699,
    "end": 4700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4701,
    "end": 4702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4702,
    "end": 4703
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4704,
    "end": 4705
  }
]
```
