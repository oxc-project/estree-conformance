__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Strs",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 25
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
              "start": 32,
              "end": 33
            },
            "initializer": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 36,
              "end": 39
            },
            "computed": false,
            "start": 32,
            "end": 39
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "initializer": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 49,
              "end": 52
            },
            "computed": false,
            "start": 45,
            "end": 52
          }
        ],
        "start": 26,
        "end": 54
      },
      "const": false,
      "declare": false,
      "start": 16,
      "end": 54
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestStrs",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 68
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 77
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Strs",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 85
          },
          "typeArguments": null,
          "start": 81,
          "end": 85
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 88,
          "end": 94
        },
        "optional": false,
        "readonly": null,
        "start": 71,
        "end": 96
      },
      "declare": false,
      "start": 55,
      "end": 96
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 114
                },
                "typeArguments": null,
                "start": 106,
                "end": 114
              },
              "start": 104,
              "end": 114
            },
            "start": 103,
            "end": 114
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 128
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 130
                  },
                  "optional": false,
                  "computed": false,
                  "start": 124,
                  "end": 130
                },
                "value": {
                  "type": "Literal",
                  "value": "xo",
                  "raw": "'xo'",
                  "start": 133,
                  "end": 137
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 123,
                "end": 137
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 148
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 150
                  },
                  "optional": false,
                  "computed": false,
                  "start": 144,
                  "end": 150
                },
                "value": {
                  "type": "Literal",
                  "value": "xe",
                  "raw": "'xe'",
                  "start": 153,
                  "end": 157
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 143,
                "end": 157
              }
            ],
            "start": 117,
            "end": 159
          },
          "definite": false,
          "start": 103,
          "end": 159
        }
      ],
      "declare": false,
      "start": 97,
      "end": 159
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
            "name": "ux",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 168
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 182
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 184
                  },
                  "optional": false,
                  "computed": false,
                  "start": 178,
                  "end": 184
                },
                "value": {
                  "type": "Literal",
                  "value": "xo",
                  "raw": "'xo'",
                  "start": 187,
                  "end": 191
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 177,
                "end": 191
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 202
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 204
                  },
                  "optional": false,
                  "computed": false,
                  "start": 198,
                  "end": 204
                },
                "value": {
                  "type": "Literal",
                  "value": "xe",
                  "raw": "'xe'",
                  "start": 207,
                  "end": 211
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 197,
                "end": 211
              }
            ],
            "start": 171,
            "end": 213
          },
          "definite": false,
          "start": 166,
          "end": 213
        }
      ],
      "declare": false,
      "start": 160,
      "end": 213
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 231
                },
                "typeArguments": null,
                "start": 223,
                "end": 231
              },
              "start": 221,
              "end": 231
            },
            "start": 220,
            "end": 231
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 241,
                  "end": 244
                },
                "value": {
                  "type": "Literal",
                  "value": "yo",
                  "raw": "'yo'",
                  "start": 247,
                  "end": 251
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 240,
                "end": 251
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 258,
                  "end": 261
                },
                "value": {
                  "type": "Literal",
                  "value": "ye",
                  "raw": "'ye'",
                  "start": 264,
                  "end": 268
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 257,
                "end": 268
              }
            ],
            "start": 234,
            "end": 270
          },
          "definite": false,
          "start": 220,
          "end": 270
        }
      ],
      "declare": false,
      "start": 214,
      "end": 270
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 278
          },
          "init": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 281,
            "end": 284
          },
          "definite": false,
          "start": 277,
          "end": 284
        }
      ],
      "declare": false,
      "start": 271,
      "end": 285
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 293
          },
          "init": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 296,
            "end": 299
          },
          "definite": false,
          "start": 292,
          "end": 299
        }
      ],
      "declare": false,
      "start": 286,
      "end": 300
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 318
                },
                "typeArguments": null,
                "start": 310,
                "end": 318
              },
              "start": 308,
              "end": 318
            },
            "start": 307,
            "end": 318
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
                  "start": 328,
                  "end": 329
                },
                "value": {
                  "type": "Literal",
                  "value": "zo",
                  "raw": "'zo'",
                  "start": 332,
                  "end": 336
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 327,
                "end": 336
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
                  "start": 343,
                  "end": 344
                },
                "value": {
                  "type": "Literal",
                  "value": "ze",
                  "raw": "'ze'",
                  "start": 347,
                  "end": 351
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 342,
                "end": 351
              }
            ],
            "start": 321,
            "end": 353
          },
          "definite": false,
          "start": 307,
          "end": 353
        }
      ],
      "declare": false,
      "start": 301,
      "end": 353
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
            "name": "uz",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 362
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
                  "start": 372,
                  "end": 373
                },
                "value": {
                  "type": "Literal",
                  "value": "zo",
                  "raw": "'zo'",
                  "start": 376,
                  "end": 380
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 371,
                "end": 380
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
                  "start": 387,
                  "end": 388
                },
                "value": {
                  "type": "Literal",
                  "value": "ze",
                  "raw": "'ze'",
                  "start": 391,
                  "end": 395
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 386,
                "end": 395
              }
            ],
            "start": 365,
            "end": 397
          },
          "definite": false,
          "start": 360,
          "end": 397
        }
      ],
      "declare": false,
      "start": 354,
      "end": 397
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nums",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 408
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
              "start": 415,
              "end": 416
            },
            "initializer": null,
            "computed": false,
            "start": 415,
            "end": 416
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 423
            },
            "initializer": null,
            "computed": false,
            "start": 422,
            "end": 423
          }
        ],
        "start": 409,
        "end": 425
      },
      "const": false,
      "declare": false,
      "start": 399,
      "end": 425
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestNums",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 439
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
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 444,
              "end": 445
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 447,
                "end": 453
              },
              "start": 445,
              "end": 453
            },
            "accessibility": null,
            "static": false,
            "start": 444,
            "end": 454
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
              "start": 455,
              "end": 456
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 458,
                "end": 464
              },
              "start": 456,
              "end": 464
            },
            "accessibility": null,
            "static": false,
            "start": 455,
            "end": 464
          }
        ],
        "start": 442,
        "end": 466
      },
      "declare": false,
      "start": 426,
      "end": 466
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestNums",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 484
                },
                "typeArguments": null,
                "start": 476,
                "end": 484
              },
              "start": 474,
              "end": 484
            },
            "start": 473,
            "end": 484
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 498
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 499,
                    "end": 500
                  },
                  "optional": false,
                  "computed": false,
                  "start": 494,
                  "end": 500
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 503,
                  "end": 504
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 493,
                "end": 504
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 511,
                    "end": 515
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 517
                  },
                  "optional": false,
                  "computed": false,
                  "start": 511,
                  "end": 517
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 520,
                  "end": 521
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 510,
                "end": 521
              }
            ],
            "start": 487,
            "end": 523
          },
          "definite": false,
          "start": 473,
          "end": 523
        }
      ],
      "declare": false,
      "start": 467,
      "end": 523
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
            "name": "un",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 532
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 542,
                    "end": 546
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 548
                  },
                  "optional": false,
                  "computed": false,
                  "start": 542,
                  "end": 548
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 551,
                  "end": 552
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 541,
                "end": 552
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Nums",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 559,
                    "end": 563
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 564,
                    "end": 565
                  },
                  "optional": false,
                  "computed": false,
                  "start": 559,
                  "end": 565
                },
                "value": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 568,
                  "end": 569
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 558,
                "end": 569
              }
            ],
            "start": 535,
            "end": 571
          },
          "definite": false,
          "start": 530,
          "end": 571
        }
      ],
      "declare": false,
      "start": 524,
      "end": 571
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
            "name": "an",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 580
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 583,
            "end": 584
          },
          "definite": false,
          "start": 578,
          "end": 584
        }
      ],
      "declare": false,
      "start": 572,
      "end": 585
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
            "name": "bn",
            "optional": false,
            "typeAnnotation": null,
            "start": 592,
            "end": 594
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 597,
            "end": 598
          },
          "definite": false,
          "start": 592,
          "end": 598
        }
      ],
      "declare": false,
      "start": 586,
      "end": 599
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
                  "name": "TestNums",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 609,
                  "end": 617
                },
                "typeArguments": null,
                "start": 609,
                "end": 617
              },
              "start": 607,
              "end": 617
            },
            "start": 606,
            "end": 617
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
                  "name": "an",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 627,
                  "end": 629
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 632,
                  "end": 633
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 626,
                "end": 633
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 640,
                  "end": 642
                },
                "value": {
                  "type": "Literal",
                  "value": 6,
                  "raw": "6",
                  "start": 645,
                  "end": 646
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 639,
                "end": 646
              }
            ],
            "start": 620,
            "end": 648
          },
          "definite": false,
          "start": 606,
          "end": 648
        }
      ],
      "declare": false,
      "start": 600,
      "end": 648
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
            "name": "um",
            "optional": false,
            "typeAnnotation": null,
            "start": 655,
            "end": 657
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
                  "name": "an",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 669
                },
                "value": {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 672,
                  "end": 673
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 666,
                "end": 673
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 682
                },
                "value": {
                  "type": "Literal",
                  "value": 8,
                  "raw": "8",
                  "start": 685,
                  "end": 686
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 679,
                "end": 686
              }
            ],
            "start": 660,
            "end": 688
          },
          "definite": false,
          "start": 655,
          "end": 688
        }
      ],
      "declare": false,
      "start": 649,
      "end": 688
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 688
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 16,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 55,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "TestStrs",
    "start": 60,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 74,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 78,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "TestStrs",
    "start": 106,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "String",
    "value": "'xo'",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 144,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "String",
    "value": "'xe'",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 160,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "ux",
    "start": 166,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "String",
    "value": "'xo'",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "Strs",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "String",
    "value": "'xe'",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 214,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "TestStrs",
    "start": 223,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 240,
    "end": 241
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 241,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "String",
    "value": "'yo'",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 257,
    "end": 258
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "'ye'",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 271,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 286,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 301,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "TestStrs",
    "start": 310,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "String",
    "value": "'zo'",
    "start": 332,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "String",
    "value": "'ze'",
    "start": 347,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 354,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "uz",
    "start": 360,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "String",
    "value": "'zo'",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 387,
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
    "type": "String",
    "value": "'ze'",
    "start": 391,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 399,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 426,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "TestNums",
    "start": 431,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 453,
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
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 467,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "TestNums",
    "start": 476,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 511,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 516,
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
    "value": ":",
    "start": 518,
    "end": 519
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 524,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "un",
    "start": 530,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "Nums",
    "start": 559,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 572,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "an",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 581,
    "end": 582
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 586,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "bn",
    "start": 592,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 600,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "TestNums",
    "start": 609,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "an",
    "start": 627,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "bn",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 649,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "um",
    "start": 655,
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
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "an",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "bn",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Numeric",
    "value": "8",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688
  }
]
```
