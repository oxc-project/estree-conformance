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
        "name": "ADT",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 20
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 22,
                      "end": 25
                    },
                    "start": 22,
                    "end": 25
                  },
                  "start": 20,
                  "end": 25
                },
                "accessibility": null,
                "static": false,
                "start": 17,
                "end": 26
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 33
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 35,
                    "end": 41
                  },
                  "start": 33,
                  "end": 41
                },
                "accessibility": null,
                "static": false,
                "start": 31,
                "end": 41
              }
            ],
            "start": 11,
            "end": 43
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 55
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "D",
                      "raw": "\"D\"",
                      "start": 57,
                      "end": 60
                    },
                    "start": 57,
                    "end": 60
                  },
                  "start": 55,
                  "end": 60
                },
                "accessibility": null,
                "static": false,
                "start": 52,
                "end": 61
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d20",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 69
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
                          "value": 1,
                          "raw": "1",
                          "start": 71,
                          "end": 72
                        },
                        "start": 71,
                        "end": 72
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 75,
                          "end": 76
                        },
                        "start": 75,
                        "end": 76
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 79,
                          "end": 80
                        },
                        "start": 79,
                        "end": 80
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 83,
                          "end": 84
                        },
                        "start": 83,
                        "end": 84
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 87,
                          "end": 88
                        },
                        "start": 87,
                        "end": 88
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 6,
                          "raw": "6",
                          "start": 91,
                          "end": 92
                        },
                        "start": 91,
                        "end": 92
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7",
                          "start": 95,
                          "end": 96
                        },
                        "start": 95,
                        "end": 96
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 99,
                          "end": 100
                        },
                        "start": 99,
                        "end": 100
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 103,
                          "end": 104
                        },
                        "start": 103,
                        "end": 104
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 107,
                          "end": 109
                        },
                        "start": 107,
                        "end": 109
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 11,
                          "raw": "11",
                          "start": 112,
                          "end": 114
                        },
                        "start": 112,
                        "end": 114
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 12,
                          "raw": "12",
                          "start": 117,
                          "end": 119
                        },
                        "start": 117,
                        "end": 119
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 13,
                          "raw": "13",
                          "start": 122,
                          "end": 124
                        },
                        "start": 122,
                        "end": 124
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 14,
                          "raw": "14",
                          "start": 127,
                          "end": 129
                        },
                        "start": 127,
                        "end": 129
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 15,
                          "raw": "15",
                          "start": 132,
                          "end": 134
                        },
                        "start": 132,
                        "end": 134
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 16,
                          "raw": "16",
                          "start": 137,
                          "end": 139
                        },
                        "start": 137,
                        "end": 139
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 17,
                          "raw": "17",
                          "start": 142,
                          "end": 144
                        },
                        "start": 142,
                        "end": 144
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 18,
                          "raw": "18",
                          "start": 147,
                          "end": 149
                        },
                        "start": 147,
                        "end": 149
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 19,
                          "raw": "19",
                          "start": 152,
                          "end": 154
                        },
                        "start": 152,
                        "end": 154
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20",
                          "start": 157,
                          "end": 159
                        },
                        "start": 157,
                        "end": 159
                      }
                    ],
                    "start": 71,
                    "end": 159
                  },
                  "start": 69,
                  "end": 159
                },
                "accessibility": null,
                "static": false,
                "start": 66,
                "end": 159
              }
            ],
            "start": 46,
            "end": 161
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 173
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "T",
                      "raw": "\"T\"",
                      "start": 175,
                      "end": 178
                    },
                    "start": 175,
                    "end": 178
                  },
                  "start": 173,
                  "end": 178
                },
                "accessibility": null,
                "static": false,
                "start": 170,
                "end": 179
              }
            ],
            "start": 164,
            "end": 181
          }
        ],
        "start": 11,
        "end": 181
      },
      "declare": false,
      "start": 0,
      "end": 181
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
            "name": "wrong",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ADT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 196
                },
                "typeArguments": null,
                "start": 193,
                "end": 196
              },
              "start": 191,
              "end": 196
            },
            "start": 186,
            "end": 196
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 204
                },
                "value": {
                  "type": "Literal",
                  "value": "T",
                  "raw": "\"T\"",
                  "start": 206,
                  "end": 209
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 201,
                "end": 209
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 213
                },
                "value": {
                  "type": "Literal",
                  "value": "extra",
                  "raw": "\"extra\"",
                  "start": 215,
                  "end": 222
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 211,
                "end": 222
              }
            ],
            "start": 199,
            "end": 224
          },
          "definite": false,
          "start": 186,
          "end": 224
        }
      ],
      "declare": false,
      "start": 182,
      "end": 224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrong",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 230
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
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 238
              },
              "value": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 240,
                "end": 243
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 235,
              "end": 243
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "d20",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 248
              },
              "value": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 250,
                "end": 252
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 245,
              "end": 252
            }
          ],
          "start": 233,
          "end": 254
        },
        "start": 225,
        "end": 254
      },
      "directive": null,
      "start": 225,
      "end": 254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrong",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 260
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
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 268
              },
              "value": {
                "type": "Literal",
                "value": "D",
                "raw": "\"D\"",
                "start": 270,
                "end": 273
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 265,
              "end": 273
            }
          ],
          "start": 263,
          "end": 275
        },
        "start": 255,
        "end": 275
      },
      "directive": null,
      "start": 255,
      "end": 275
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ambiguous",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 291
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 303
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 305,
                      "end": 308
                    },
                    "start": 305,
                    "end": 308
                  },
                  "start": 303,
                  "end": 308
                },
                "accessibility": null,
                "static": false,
                "start": 300,
                "end": 309
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
                  "start": 314,
                  "end": 315
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 317,
                    "end": 323
                  },
                  "start": 315,
                  "end": 323
                },
                "accessibility": null,
                "static": false,
                "start": 314,
                "end": 323
              }
            ],
            "start": 294,
            "end": 325
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 337
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 339,
                      "end": 342
                    },
                    "start": 339,
                    "end": 342
                  },
                  "start": 337,
                  "end": 342
                },
                "accessibility": null,
                "static": false,
                "start": 334,
                "end": 343
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
                  "start": 348,
                  "end": 349
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 351,
                    "end": 357
                  },
                  "start": 349,
                  "end": 357
                },
                "accessibility": null,
                "static": false,
                "start": 348,
                "end": 357
              }
            ],
            "start": 328,
            "end": 359
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 371
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 373,
                      "end": 376
                    },
                    "start": 373,
                    "end": 376
                  },
                  "start": 371,
                  "end": 376
                },
                "accessibility": null,
                "static": false,
                "start": 368,
                "end": 377
              },
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
                  "start": 382,
                  "end": 383
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 385,
                    "end": 392
                  },
                  "start": 383,
                  "end": 392
                },
                "accessibility": null,
                "static": false,
                "start": 382,
                "end": 392
              }
            ],
            "start": 362,
            "end": 394
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 403,
                  "end": 406
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "C",
                      "raw": "\"C\"",
                      "start": 408,
                      "end": 411
                    },
                    "start": 408,
                    "end": 411
                  },
                  "start": 406,
                  "end": 411
                },
                "accessibility": null,
                "static": false,
                "start": 403,
                "end": 411
              }
            ],
            "start": 397,
            "end": 413
          }
        ],
        "start": 294,
        "end": 413
      },
      "declare": false,
      "start": 277,
      "end": 413
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
            "name": "amb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Ambiguous",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 432
                },
                "typeArguments": null,
                "start": 423,
                "end": 432
              },
              "start": 421,
              "end": 432
            },
            "start": 418,
            "end": 432
          },
          "init": null,
          "definite": false,
          "start": 418,
          "end": 432
        }
      ],
      "declare": false,
      "start": 414,
      "end": 432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "amb",
          "optional": false,
          "typeAnnotation": null,
          "start": 517,
          "end": 520
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
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 528
              },
              "value": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 530,
                "end": 533
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 525,
              "end": 533
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 536
              },
              "value": {
                "type": "Literal",
                "value": "hi",
                "raw": "\"hi\"",
                "start": 538,
                "end": 542
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 535,
              "end": 542
            }
          ],
          "start": 523,
          "end": 544
        },
        "start": 517,
        "end": 544
      },
      "directive": null,
      "start": 517,
      "end": 544
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "amb",
          "optional": false,
          "typeAnnotation": null,
          "start": 545,
          "end": 548
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
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 553,
                "end": 556
              },
              "value": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 558,
                "end": 561
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 553,
              "end": 561
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
                "start": 563,
                "end": 564
              },
              "value": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 566,
                "end": 568
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 563,
              "end": 568
            }
          ],
          "start": 551,
          "end": 570
        },
        "start": 545,
        "end": 570
      },
      "directive": null,
      "start": 545,
      "end": 570
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "amb",
          "optional": false,
          "typeAnnotation": null,
          "start": 571,
          "end": 574
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
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 582
              },
              "value": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 584,
                "end": 587
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 579,
              "end": 587
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 590
              },
              "value": {
                "type": "Literal",
                "value": "hi",
                "raw": "\"hi\"",
                "start": 592,
                "end": 596
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 589,
              "end": 596
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
                "start": 598,
                "end": 599
              },
              "value": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 601,
                "end": 603
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 598,
              "end": 603
            }
          ],
          "start": 577,
          "end": 605
        },
        "start": 571,
        "end": 605
      },
      "directive": null,
      "start": 571,
      "end": 605
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "amb",
          "optional": false,
          "typeAnnotation": null,
          "start": 674,
          "end": 677
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
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 685
              },
              "value": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 687,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 693
              },
              "value": {
                "type": "Literal",
                "value": "hi",
                "raw": "\"hi\"",
                "start": 695,
                "end": 699
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 692,
              "end": 699
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "extra",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 706
              },
              "value": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 708,
                "end": 710
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 701,
              "end": 710
            }
          ],
          "start": 680,
          "end": 712
        },
        "start": 674,
        "end": 712
      },
      "directive": null,
      "start": 674,
      "end": 712
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "amb",
          "optional": false,
          "typeAnnotation": null,
          "start": 713,
          "end": 716
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
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 721,
                "end": 724
              },
              "value": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 726,
                "end": 729
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 721,
              "end": 729
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
                "start": 731,
                "end": 732
              },
              "value": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 734,
                "end": 736
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 731,
              "end": 736
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "extra",
                "optional": false,
                "typeAnnotation": null,
                "start": 738,
                "end": 743
              },
              "value": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 745,
                "end": 747
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 738,
              "end": 747
            }
          ],
          "start": 719,
          "end": 749
        },
        "start": 713,
        "end": 749
      },
      "directive": null,
      "start": 713,
      "end": 749
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "amb",
          "optional": false,
          "typeAnnotation": null,
          "start": 786,
          "end": 789
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
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 797
              },
              "value": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 799,
                "end": 802
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 794,
              "end": 802
            }
          ],
          "start": 792,
          "end": 804
        },
        "start": 786,
        "end": 804
      },
      "directive": null,
      "start": 786,
      "end": 804
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "amb",
          "optional": false,
          "typeAnnotation": null,
          "start": 805,
          "end": 808
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
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 813,
                "end": 816
              },
              "value": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 818,
                "end": 821
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 813,
              "end": 821
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 824
              },
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 826,
                "end": 830
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 823,
              "end": 830
            }
          ],
          "start": 811,
          "end": 832
        },
        "start": 805,
        "end": 832
      },
      "directive": null,
      "start": 805,
      "end": 832
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Overlapping",
        "optional": false,
        "typeAnnotation": null,
        "start": 839,
        "end": 850
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 861,
                  "end": 862
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 864,
                      "end": 865
                    },
                    "start": 864,
                    "end": 865
                  },
                  "start": 862,
                  "end": 865
                },
                "accessibility": null,
                "static": false,
                "start": 861,
                "end": 866
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
                  "start": 867,
                  "end": 868
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 870,
                      "end": 871
                    },
                    "start": 870,
                    "end": 871
                  },
                  "start": 868,
                  "end": 871
                },
                "accessibility": null,
                "static": false,
                "start": 867,
                "end": 872
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "first",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 873,
                  "end": 878
                },
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
                "accessibility": null,
                "static": false,
                "start": 873,
                "end": 886
              }
            ],
            "start": 859,
            "end": 888
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 897,
                  "end": 898
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 900,
                      "end": 901
                    },
                    "start": 900,
                    "end": 901
                  },
                  "start": 898,
                  "end": 901
                },
                "accessibility": null,
                "static": false,
                "start": 897,
                "end": 902
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "second",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 903,
                  "end": 909
                },
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
                "accessibility": null,
                "static": false,
                "start": 903,
                "end": 917
              }
            ],
            "start": 895,
            "end": 919
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 928,
                  "end": 929
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 931,
                      "end": 932
                    },
                    "start": 931,
                    "end": 932
                  },
                  "start": 929,
                  "end": 932
                },
                "accessibility": null,
                "static": false,
                "start": 928,
                "end": 933
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "third",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 934,
                  "end": 939
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 941,
                    "end": 947
                  },
                  "start": 939,
                  "end": 947
                },
                "accessibility": null,
                "static": false,
                "start": 934,
                "end": 947
              }
            ],
            "start": 926,
            "end": 949
          }
        ],
        "start": 857,
        "end": 949
      },
      "declare": false,
      "start": 834,
      "end": 949
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
            "name": "over",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Overlapping",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 960,
                  "end": 971
                },
                "typeArguments": null,
                "start": 960,
                "end": 971
              },
              "start": 958,
              "end": 971
            },
            "start": 954,
            "end": 971
          },
          "init": null,
          "definite": false,
          "start": 954,
          "end": 971
        }
      ],
      "declare": false,
      "start": 950,
      "end": 971
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "over",
          "optional": false,
          "typeAnnotation": null,
          "start": 1042,
          "end": 1046
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1052
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1054,
                "end": 1055
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1051,
              "end": 1055
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
                "start": 1057,
                "end": 1058
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1060,
                "end": 1061
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1057,
              "end": 1061
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 1063,
                "end": 1068
              },
              "value": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 1070,
                "end": 1074
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1063,
              "end": 1074
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1082
              },
              "value": {
                "type": "Literal",
                "value": "error",
                "raw": "\"error\"",
                "start": 1084,
                "end": 1091
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1076,
              "end": 1091
            }
          ],
          "start": 1049,
          "end": 1093
        },
        "start": 1042,
        "end": 1093
      },
      "directive": null,
      "start": 1042,
      "end": 1093
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "over",
          "optional": false,
          "typeAnnotation": null,
          "start": 1094,
          "end": 1098
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1104
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1106,
                "end": 1107
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1103,
              "end": 1107
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
                "start": 1109,
                "end": 1110
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1112,
                "end": 1113
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1109,
              "end": 1113
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 1115,
                "end": 1120
              },
              "value": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 1122,
                "end": 1126
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1115,
              "end": 1126
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "third",
                "optional": false,
                "typeAnnotation": null,
                "start": 1128,
                "end": 1133
              },
              "value": {
                "type": "Literal",
                "value": "error",
                "raw": "\"error\"",
                "start": 1135,
                "end": 1142
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1128,
              "end": 1142
            }
          ],
          "start": 1101,
          "end": 1144
        },
        "start": 1094,
        "end": 1144
      },
      "directive": null,
      "start": 1094,
      "end": 1144
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
            "name": "t0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1212,
                          "end": 1213
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1215,
                            "end": 1218
                          },
                          "start": 1213,
                          "end": 1218
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1212,
                        "end": 1219
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
                          "start": 1220,
                          "end": 1221
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1223,
                            "end": 1226
                          },
                          "start": 1221,
                          "end": 1226
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1220,
                        "end": 1226
                      }
                    ],
                    "start": 1210,
                    "end": 1228
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1233,
                          "end": 1234
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1236,
                            "end": 1239
                          },
                          "start": 1234,
                          "end": 1239
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1233,
                        "end": 1240
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1241,
                          "end": 1242
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1244,
                            "end": 1247
                          },
                          "start": 1242,
                          "end": 1247
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1241,
                        "end": 1247
                      }
                    ],
                    "start": 1231,
                    "end": 1249
                  }
                ],
                "start": 1210,
                "end": 1249
              },
              "start": 1208,
              "end": 1249
            },
            "start": 1206,
            "end": 1249
          },
          "init": null,
          "definite": false,
          "start": 1206,
          "end": 1249
        }
      ],
      "declare": true,
      "start": 1194,
      "end": 1249
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1268,
                          "end": 1269
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1271,
                            "end": 1274
                          },
                          "start": 1269,
                          "end": 1274
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1268,
                        "end": 1275
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
                          "start": 1276,
                          "end": 1277
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1279,
                            "end": 1282
                          },
                          "start": 1277,
                          "end": 1282
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1276,
                        "end": 1283
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
                          "start": 1284,
                          "end": 1285
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1287,
                            "end": 1290
                          },
                          "start": 1285,
                          "end": 1290
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1284,
                        "end": 1290
                      }
                    ],
                    "start": 1266,
                    "end": 1292
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1297,
                          "end": 1298
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1300,
                            "end": 1303
                          },
                          "start": 1298,
                          "end": 1303
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1297,
                        "end": 1304
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
                          "start": 1305,
                          "end": 1306
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1308,
                            "end": 1311
                          },
                          "start": 1306,
                          "end": 1311
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1305,
                        "end": 1312
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1313,
                          "end": 1314
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1316,
                            "end": 1319
                          },
                          "start": 1314,
                          "end": 1319
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1313,
                        "end": 1319
                      }
                    ],
                    "start": 1295,
                    "end": 1321
                  }
                ],
                "start": 1266,
                "end": 1321
              },
              "start": 1264,
              "end": 1321
            },
            "start": 1262,
            "end": 1321
          },
          "init": null,
          "definite": false,
          "start": 1262,
          "end": 1321
        }
      ],
      "declare": true,
      "start": 1250,
      "end": 1321
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1326,
            "end": 1328
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1336,
                  "end": 1338
                },
                "start": 1333,
                "end": 1338
              }
            ],
            "start": 1331,
            "end": 1340
          },
          "definite": false,
          "start": 1326,
          "end": 1340
        }
      ],
      "declare": false,
      "start": 1322,
      "end": 1340
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1341,
          "end": 1343
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1346,
          "end": 1348
        },
        "start": 1341,
        "end": 1348
      },
      "directive": null,
      "start": 1341,
      "end": 1348
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AN",
        "optional": false,
        "typeAnnotation": null,
        "start": 1419,
        "end": 1421
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1426,
                  "end": 1427
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1429,
                    "end": 1435
                  },
                  "start": 1427,
                  "end": 1435
                },
                "accessibility": null,
                "static": false,
                "start": 1426,
                "end": 1435
              }
            ],
            "start": 1424,
            "end": 1437
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1442,
                  "end": 1443
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1445,
                    "end": 1451
                  },
                  "start": 1443,
                  "end": 1451
                },
                "accessibility": null,
                "static": false,
                "start": 1442,
                "end": 1451
              }
            ],
            "start": 1440,
            "end": 1453
          }
        ],
        "start": 1424,
        "end": 1453
      },
      "declare": false,
      "start": 1414,
      "end": 1453
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BN",
        "optional": false,
        "typeAnnotation": null,
        "start": 1459,
        "end": 1461
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1466,
              "end": 1467
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1469,
                "end": 1475
              },
              "start": 1467,
              "end": 1475
            },
            "accessibility": null,
            "static": false,
            "start": 1466,
            "end": 1475
          }
        ],
        "start": 1464,
        "end": 1477
      },
      "declare": false,
      "start": 1454,
      "end": 1477
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1483,
        "end": 1485
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1490,
                  "end": 1494
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 1496,
                      "end": 1499
                    },
                    "start": 1496,
                    "end": 1499
                  },
                  "start": 1494,
                  "end": 1499
                },
                "accessibility": null,
                "static": false,
                "start": 1490,
                "end": 1500
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1501,
                  "end": 1502
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AN",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1504,
                      "end": 1506
                    },
                    "typeArguments": null,
                    "start": 1504,
                    "end": 1506
                  },
                  "start": 1502,
                  "end": 1506
                },
                "accessibility": null,
                "static": false,
                "start": 1501,
                "end": 1506
              }
            ],
            "start": 1488,
            "end": 1508
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1513,
                  "end": 1517
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 1519,
                      "end": 1522
                    },
                    "start": 1519,
                    "end": 1522
                  },
                  "start": 1517,
                  "end": 1522
                },
                "accessibility": null,
                "static": false,
                "start": 1513,
                "end": 1523
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1524,
                  "end": 1525
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BN",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1527,
                      "end": 1529
                    },
                    "typeArguments": null,
                    "start": 1527,
                    "end": 1529
                  },
                  "start": 1525,
                  "end": 1529
                },
                "accessibility": null,
                "static": false,
                "start": 1524,
                "end": 1529
              }
            ],
            "start": 1511,
            "end": 1531
          }
        ],
        "start": 1488,
        "end": 1531
      },
      "declare": false,
      "start": 1478,
      "end": 1531
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
            "name": "abab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1544,
                  "end": 1546
                },
                "typeArguments": null,
                "start": 1544,
                "end": 1546
              },
              "start": 1542,
              "end": 1546
            },
            "start": 1538,
            "end": 1546
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1555,
                  "end": 1559
                },
                "value": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 1561,
                  "end": 1564
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1555,
                "end": 1564
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1570,
                  "end": 1571
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
                        "start": 1583,
                        "end": 1584
                      },
                      "value": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 1586,
                        "end": 1589
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1583,
                      "end": 1589
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
                        "start": 1599,
                        "end": 1600
                      },
                      "value": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 1602,
                        "end": 1605
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1599,
                      "end": 1605
                    }
                  ],
                  "start": 1573,
                  "end": 1635
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1570,
                "end": 1635
              }
            ],
            "start": 1549,
            "end": 1637
          },
          "definite": false,
          "start": 1538,
          "end": 1637
        }
      ],
      "declare": false,
      "start": 1532,
      "end": 1637
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
            "name": "abac",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1650,
                  "end": 1652
                },
                "typeArguments": null,
                "start": 1650,
                "end": 1652
              },
              "start": 1648,
              "end": 1652
            },
            "start": 1644,
            "end": 1652
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1661,
                  "end": 1665
                },
                "value": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 1667,
                  "end": 1670
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1661,
                "end": 1670
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1676,
                  "end": 1677
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
                        "start": 1689,
                        "end": 1690
                      },
                      "value": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 1692,
                        "end": 1695
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1689,
                      "end": 1695
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
                        "start": 1705,
                        "end": 1706
                      },
                      "value": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 1708,
                        "end": 1711
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1705,
                      "end": 1711
                    }
                  ],
                  "start": 1679,
                  "end": 1772
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1676,
                "end": 1772
              }
            ],
            "start": 1655,
            "end": 1774
          },
          "definite": false,
          "start": 1644,
          "end": 1774
        }
      ],
      "declare": false,
      "start": 1638,
      "end": 1774
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 1847,
        "end": 1853
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
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 1858,
              "end": 1861
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "button",
                  "raw": "'button'",
                  "start": 1863,
                  "end": 1871
                },
                "start": 1863,
                "end": 1871
              },
              "start": 1861,
              "end": 1871
            },
            "accessibility": null,
            "static": false,
            "start": 1858,
            "end": 1872
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1873,
              "end": 1877
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "submit",
                  "raw": "'submit'",
                  "start": 1880,
                  "end": 1888
                },
                "start": 1880,
                "end": 1888
              },
              "start": 1878,
              "end": 1888
            },
            "accessibility": null,
            "static": false,
            "start": 1873,
            "end": 1889
          }
        ],
        "start": 1856,
        "end": 1891
      },
      "declare": false,
      "start": 1842,
      "end": 1892
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Anchor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1898,
        "end": 1904
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
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 1909,
              "end": 1912
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 1914,
                  "end": 1917
                },
                "start": 1914,
                "end": 1917
              },
              "start": 1912,
              "end": 1917
            },
            "accessibility": null,
            "static": false,
            "start": 1909,
            "end": 1918
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1919,
              "end": 1923
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1926,
                "end": 1932
              },
              "start": 1924,
              "end": 1932
            },
            "accessibility": null,
            "static": false,
            "start": 1919,
            "end": 1933
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "href",
              "optional": false,
              "typeAnnotation": null,
              "start": 1934,
              "end": 1938
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1940,
                "end": 1946
              },
              "start": 1938,
              "end": 1946
            },
            "accessibility": null,
            "static": false,
            "start": 1934,
            "end": 1946
          }
        ],
        "start": 1907,
        "end": 1948
      },
      "declare": false,
      "start": 1893,
      "end": 1949
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Union",
        "optional": false,
        "typeAnnotation": null,
        "start": 1956,
        "end": 1961
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Button",
              "optional": false,
              "typeAnnotation": null,
              "start": 1964,
              "end": 1970
            },
            "typeArguments": null,
            "start": 1964,
            "end": 1970
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Anchor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1973,
              "end": 1979
            },
            "typeArguments": null,
            "start": 1973,
            "end": 1979
          }
        ],
        "start": 1964,
        "end": 1979
      },
      "declare": false,
      "start": 1951,
      "end": 1980
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Union",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1992,
                  "end": 1997
                },
                "typeArguments": null,
                "start": 1992,
                "end": 1997
              },
              "start": 1990,
              "end": 1997
            },
            "start": 1987,
            "end": 1997
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2006,
                  "end": 2009
                },
                "value": {
                  "type": "Literal",
                  "value": "button",
                  "raw": "'button'",
                  "start": 2011,
                  "end": 2019
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2006,
                "end": 2019
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2025,
                  "end": 2029
                },
                "value": {
                  "type": "Literal",
                  "value": "submit",
                  "raw": "'submit'",
                  "start": 2031,
                  "end": 2039
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2025,
                "end": 2039
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "href",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2076,
                  "end": 2080
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 2082,
                  "end": 2087
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2076,
                "end": 2087
              }
            ],
            "start": 2000,
            "end": 2090
          },
          "definite": false,
          "start": 1987,
          "end": 2090
        }
      ],
      "declare": false,
      "start": 1981,
      "end": 2091
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 2125,
        "end": 2131
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2136,
              "end": 2141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2143,
                "end": 2149
              },
              "start": 2141,
              "end": 2149
            },
            "accessibility": null,
            "static": false,
            "start": 2136,
            "end": 2149
          }
        ],
        "start": 2132,
        "end": 2151
      },
      "declare": false,
      "start": 2115,
      "end": 2151
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 2163,
        "end": 2173
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propertyName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2195,
                    "end": 2201
                  },
                  "start": 2193,
                  "end": 2201
                },
                "start": 2181,
                "end": 2201
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2204,
                  "end": 2210
                },
                "typeArguments": null,
                "start": 2204,
                "end": 2210
              },
              "start": 2202,
              "end": 2210
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2180,
            "end": 2211
          }
        ],
        "start": 2174,
        "end": 2213
      },
      "declare": false,
      "start": 2153,
      "end": 2213
    },
    {
      "type": "EmptyStatement",
      "start": 2213,
      "end": 2214
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 2226,
        "end": 2236
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "propertyName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2258,
                    "end": 2264
                  },
                  "start": 2256,
                  "end": 2264
                },
                "start": 2244,
                "end": 2264
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2267,
                  "end": 2273
                },
                "typeArguments": null,
                "start": 2267,
                "end": 2273
              },
              "start": 2265,
              "end": 2273
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 2243,
            "end": 2274
          }
        ],
        "start": 2237,
        "end": 2276
      },
      "declare": false,
      "start": 2216,
      "end": 2276
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectDataSpecification",
        "optional": false,
        "typeAnnotation": null,
        "start": 2283,
        "end": 2306
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringKeys",
              "optional": false,
              "typeAnnotation": null,
              "start": 2309,
              "end": 2319
            },
            "typeArguments": null,
            "start": 2309,
            "end": 2319
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumberKeys",
              "optional": false,
              "typeAnnotation": null,
              "start": 2322,
              "end": 2332
            },
            "typeArguments": null,
            "start": 2322,
            "end": 2332
          }
        ],
        "start": 2309,
        "end": 2332
      },
      "declare": false,
      "start": 2278,
      "end": 2333
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
            "name": "dataSpecification",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjectDataSpecification",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2361,
                  "end": 2384
                },
                "typeArguments": null,
                "start": 2361,
                "end": 2384
              },
              "start": 2359,
              "end": 2384
            },
            "start": 2342,
            "end": 2384
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2403,
                  "end": 2406
                },
                "value": {
                  "type": "Literal",
                  "value": "asdfsadffsd",
                  "raw": "\"asdfsadffsd\"",
                  "start": 2408,
                  "end": 2421
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2403,
                "end": 2421
              }
            ],
            "start": 2387,
            "end": 2423
          },
          "definite": false,
          "start": 2342,
          "end": 2423
        }
      ],
      "declare": false,
      "start": 2336,
      "end": 2424
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                                "start": 2466,
                                "end": 2472
                              },
                              "start": 2464,
                              "end": 2472
                            },
                            "start": 2463,
                            "end": 2472
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2475,
                            "end": 2481
                          },
                          "start": 2473,
                          "end": 2481
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 2462,
                        "end": 2481
                      }
                    ],
                    "start": 2460,
                    "end": 2483
                  },
                  {
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
                                "start": 2492,
                                "end": 2498
                              },
                              "start": 2490,
                              "end": 2498
                            },
                            "start": 2489,
                            "end": 2498
                          }
                        ],
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
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 2488,
                        "end": 2507
                      }
                    ],
                    "start": 2486,
                    "end": 2509
                  }
                ],
                "start": 2460,
                "end": 2509
              },
              "start": 2458,
              "end": 2509
            },
            "start": 2454,
            "end": 2509
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
                  "start": 2514,
                  "end": 2515
                },
                "value": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 2517,
                  "end": 2522
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2514,
                "end": 2522
              }
            ],
            "start": 2512,
            "end": 2524
          },
          "definite": false,
          "start": 2454,
          "end": 2524
        }
      ],
      "declare": false,
      "start": 2448,
      "end": 2525
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                                "start": 2554,
                                "end": 2560
                              },
                              "start": 2552,
                              "end": 2560
                            },
                            "start": 2551,
                            "end": 2560
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2563,
                            "end": 2569
                          },
                          "start": 2561,
                          "end": 2569
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 2550,
                        "end": 2569
                      }
                    ],
                    "start": 2548,
                    "end": 2571
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2576,
                          "end": 2577
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2579,
                            "end": 2585
                          },
                          "start": 2577,
                          "end": 2585
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2576,
                        "end": 2585
                      }
                    ],
                    "start": 2574,
                    "end": 2587
                  }
                ],
                "start": 2548,
                "end": 2587
              },
              "start": 2546,
              "end": 2587
            },
            "start": 2542,
            "end": 2587
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
                  "start": 2592,
                  "end": 2593
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 2595,
                  "end": 2596
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2592,
                "end": 2596
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
                  "start": 2598,
                  "end": 2599
                },
                "value": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "'abc'",
                  "start": 2601,
                  "end": 2606
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2598,
                "end": 2606
              }
            ],
            "start": 2590,
            "end": 2608
          },
          "definite": false,
          "start": 2542,
          "end": 2608
        }
      ],
      "declare": false,
      "start": 2536,
      "end": 2609
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2653,
        "end": 2655
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2662,
              "end": 2667
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
            "start": 2662,
            "end": 2676
          }
        ],
        "start": 2656,
        "end": 2678
      },
      "declare": false,
      "start": 2643,
      "end": 2678
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2690,
        "end": 2692
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
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2699,
              "end": 2704
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2706,
                "end": 2712
              },
              "start": 2704,
              "end": 2712
            },
            "accessibility": null,
            "static": false,
            "start": 2699,
            "end": 2713
          }
        ],
        "start": 2693,
        "end": 2715
      },
      "declare": false,
      "start": 2680,
      "end": 2715
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2727,
        "end": 2729
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 2738,
            "end": 2744
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2745,
                "end": 2751
              },
              {
                "type": "TSStringKeyword",
                "start": 2753,
                "end": 2759
              }
            ],
            "start": 2744,
            "end": 2760
          },
          "start": 2738,
          "end": 2760
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2761,
        "end": 2765
      },
      "declare": false,
      "start": 2717,
      "end": 2765
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Properties",
        "optional": false,
        "typeAnnotation": null,
        "start": 2772,
        "end": 2782
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2799,
                        "end": 2805
                      },
                      "start": 2797,
                      "end": 2805
                    },
                    "start": 2794,
                    "end": 2805
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 2808,
                    "end": 2813
                  },
                  "start": 2806,
                  "end": 2813
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 2793,
                "end": 2813
              }
            ],
            "start": 2791,
            "end": 2815
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2822,
              "end": 2824
            },
            "typeArguments": null,
            "start": 2822,
            "end": 2824
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2831,
              "end": 2833
            },
            "typeArguments": null,
            "start": 2831,
            "end": 2833
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2840,
              "end": 2842
            },
            "typeArguments": null,
            "start": 2840,
            "end": 2842
          }
        ],
        "start": 2789,
        "end": 2842
      },
      "declare": false,
      "start": 2767,
      "end": 2848
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
            "name": "prop1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2872,
                "end": 2878
              },
              "start": 2870,
              "end": 2878
            },
            "start": 2865,
            "end": 2878
          },
          "init": null,
          "definite": false,
          "start": 2865,
          "end": 2878
        }
      ],
      "declare": true,
      "start": 2851,
      "end": 2879
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
            "name": "prop2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2901,
                    "end": 2907
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2910,
                    "end": 2919
                  }
                ],
                "start": 2901,
                "end": 2919
              },
              "start": 2899,
              "end": 2919
            },
            "start": 2894,
            "end": 2919
          },
          "init": null,
          "definite": false,
          "start": 2894,
          "end": 2919
        }
      ],
      "declare": true,
      "start": 2880,
      "end": 2920
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2931,
        "end": 2933
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_arg",
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2942,
                    "end": 2947
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Properties",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2949,
                        "end": 2959
                      },
                      "typeArguments": null,
                      "start": 2949,
                      "end": 2959
                    },
                    "start": 2947,
                    "end": 2959
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2942,
                  "end": 2959
                }
              ],
              "start": 2940,
              "end": 2961
            },
            "start": 2938,
            "end": 2961
          },
          "start": 2934,
          "end": 2961
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2963,
        "end": 2966
      },
      "expression": false,
      "start": 2922,
      "end": 2966
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "F1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2967,
          "end": 2969
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
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2976,
                  "end": 2981
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
                        "name": "prop1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2993,
                        "end": 2998
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2993,
                        "end": 2998
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 2993,
                      "end": 2998
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3008,
                        "end": 3013
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3008,
                        "end": 3013
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 3008,
                      "end": 3013
                    }
                  ],
                  "start": 2983,
                  "end": 3020
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2976,
                "end": 3020
              }
            ],
            "start": 2970,
            "end": 3023
          }
        ],
        "optional": false,
        "start": 2967,
        "end": 3024
      },
      "directive": null,
      "start": 2967,
      "end": 3025
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3036,
        "end": 3038
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Properties",
                "optional": false,
                "typeAnnotation": null,
                "start": 3047,
                "end": 3057
              },
              "typeArguments": null,
              "start": 3047,
              "end": 3057
            },
            "start": 3045,
            "end": 3057
          },
          "start": 3039,
          "end": 3057
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3059,
        "end": 3062
      },
      "expression": false,
      "start": 3027,
      "end": 3062
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "F2",
          "optional": false,
          "typeAnnotation": null,
          "start": 3063,
          "end": 3065
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
                  "name": "prop1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3072,
                  "end": 3077
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3072,
                  "end": 3077
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 3072,
                "end": 3077
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3083,
                  "end": 3088
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3083,
                  "end": 3088
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 3083,
                "end": 3088
              }
            ],
            "start": 3066,
            "end": 3091
          }
        ],
        "optional": false,
        "start": 3063,
        "end": 3092
      },
      "directive": null,
      "start": 3063,
      "end": 3093
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3093
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
    "value": "ADT",
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
    "value": "tag",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 31,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "String",
    "value": "\"D\"",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "d20",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 73,
    "end": 74
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 77,
    "end": 78
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 85,
    "end": 86
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 89,
    "end": 90
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 93,
    "end": 94
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 97,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 105,
    "end": 106
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 107,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 110,
    "end": 111
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 115,
    "end": 116
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 117,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 120,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 125,
    "end": 126
  },
  {
    "type": "Numeric",
    "value": "14",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 130,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 135,
    "end": 136
  },
  {
    "type": "Numeric",
    "value": "16",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 140,
    "end": 141
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 145,
    "end": 146
  },
  {
    "type": "Numeric",
    "value": "18",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 150,
    "end": 151
  },
  {
    "type": "Numeric",
    "value": "19",
    "start": 152,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 155,
    "end": 156
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "String",
    "value": "\"T\"",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 182,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "wrong",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "ADT",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "tag",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "String",
    "value": "\"T\"",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "String",
    "value": "\"extra\"",
    "start": 215,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "wrong",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "tag",
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
    "type": "String",
    "value": "\"A\"",
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
    "value": "d20",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "wrong",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "tag",
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
    "type": "String",
    "value": "\"D\"",
    "start": 270,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 277,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "Ambiguous",
    "start": 282,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 317,
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
    "value": "|",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 351,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 368,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 385,
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
    "value": "|",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 403,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 414,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "amb",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "Ambiguous",
    "start": 423,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "amb",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "tag",
    "start": 525,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 530,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 538,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "amb",
    "start": 545,
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
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 553,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 564,
    "end": 565
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 566,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "amb",
    "start": 571,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 579,
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
    "value": "\"A\"",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 592,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 601,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "amb",
    "start": 674,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 682,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 687,
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
    "value": "x",
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
    "value": "\"hi\"",
    "start": 695,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 701,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "amb",
    "start": 713,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 724,
    "end": 725
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 726,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 738,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 745,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "amb",
    "start": 786,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 794,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 799,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "amb",
    "start": 805,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 813,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 816,
    "end": 817
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 826,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 834,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "Overlapping",
    "start": 839,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 868,
    "end": 869
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 873,
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
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 903,
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
    "value": "}",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 929,
    "end": 930
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "third",
    "start": 934,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 941,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 950,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "over",
    "start": 954,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "Overlapping",
    "start": 960,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "over",
    "start": 1042,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1063,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 1070,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 1076,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "String",
    "value": "\"error\"",
    "start": 1084,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "over",
    "start": 1094,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1112,
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
    "value": "first",
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
    "type": "String",
    "value": "\"ok\"",
    "start": 1122,
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
    "value": "third",
    "start": 1128,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "String",
    "value": "\"error\"",
    "start": 1135,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1194,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1202,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1206,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1215,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1223,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1244,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1250,
    "end": 1257
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1258,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1262,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1271,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1279,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "any",
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
    "type": "Punctuator",
    "value": "|",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1300,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1313,
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
    "value": "any",
    "start": 1316,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1322,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1333,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1336,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "t0",
    "start": 1341,
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
    "value": "t2",
    "start": 1346,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1414,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "AN",
    "start": 1419,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1429,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1445,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1454,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "BN",
    "start": 1459,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1469,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1478,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 1483,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1490,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1496,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1501,
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
    "value": "AN",
    "start": 1504,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1513,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 1519,
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
    "value": "n",
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
    "type": "Identifier",
    "value": "BN",
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
    "type": "Keyword",
    "value": "const",
    "start": 1532,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "abab",
    "start": 1538,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 1544,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1555,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1561,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1586,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1602,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1638,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "abac",
    "start": 1644,
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
    "value": "AB",
    "start": 1650,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1661,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 1667,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1692,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1708,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1842,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 1847,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1858,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "String",
    "value": "'button'",
    "start": 1863,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1873,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "String",
    "value": "'submit'",
    "start": 1880,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1893,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "Anchor",
    "start": 1898,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1909,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1914,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1919,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1926,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "href",
    "start": 1934,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1940,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1951,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 1956,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 1964,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "Anchor",
    "start": 1973,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1981,
    "end": 1986
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1987,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 1992,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 2006,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "String",
    "value": "'button'",
    "start": 2011,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2025,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "String",
    "value": "'submit'",
    "start": 2031,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "href",
    "start": 2076,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2082,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2115,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "IValue",
    "start": 2125,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2136,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2143,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2153,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "StringKeys",
    "start": 2163,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "propertyName",
    "start": 2181,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2195,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "IValue",
    "start": 2204,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2216,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "NumberKeys",
    "start": 2226,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "propertyName",
    "start": 2244,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2258,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "IValue",
    "start": 2267,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2278,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "ObjectDataSpecification",
    "start": 2283,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "StringKeys",
    "start": 2309,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "NumberKeys",
    "start": 2322,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2336,
    "end": 2341
  },
  {
    "type": "Identifier",
    "value": "dataSpecification",
    "start": 2342,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "ObjectDataSpecification",
    "start": 2361,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2403,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "String",
    "value": "\"asdfsadffsd\"",
    "start": 2408,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2448,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2454,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2466,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2475,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2492,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 2517,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2536,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2542,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2554,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2563,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2579,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 2601,
    "end": 2606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2643,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 2653,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 2662,
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
    "value": ";",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2680,
    "end": 2689
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2690,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 2699,
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
    "value": "string",
    "start": 2706,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2717,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 2727,
    "end": 2729
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2730,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 2738,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2745,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2753,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2767,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 2772,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2794,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2799,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2808,
    "end": 2813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 2822,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2831,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 2840,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2851,
    "end": 2858
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2859,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 2865,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2872,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2880,
    "end": 2887
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2888,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 2894,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2901,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2910,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2922,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 2931,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Identifier",
    "value": "_arg",
    "start": 2934,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2942,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 2949,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 2967,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2976,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 2993,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 3008,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3027,
    "end": 3035
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 3036,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Identifier",
    "value": "_props",
    "start": 3039,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 3047,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 3063,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 3072,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 3083,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3092,
    "end": 3093
  }
]
```
