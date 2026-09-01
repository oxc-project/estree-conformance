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
        "name": "C",
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
                    "start": 18,
                    "end": 24
                  },
                  "start": 16,
                  "end": 24
                },
                "start": 15,
                "end": 24
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 14,
            "end": 34
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 39,
              "end": 40
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 43,
              "end": 45
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 39,
            "end": 46
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "2",
              "raw": "\"2\"",
              "start": 51,
              "end": 54
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 57,
              "end": 59
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 51,
            "end": 59
          }
        ],
        "start": 8,
        "end": 61
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 61
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
                  "start": 70,
                  "end": 71
                },
                "typeArguments": null,
                "start": 70,
                "end": 71
              },
              "start": 68,
              "end": 71
            },
            "start": 67,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 71
        }
      ],
      "declare": false,
      "start": 63,
      "end": 72
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 79
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 83
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 84,
              "end": 87
            },
            "optional": false,
            "computed": true,
            "start": 82,
            "end": 88
          },
          "definite": false,
          "start": 77,
          "end": 88
        }
      ],
      "declare": false,
      "start": 73,
      "end": 89
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 96
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "property": {
              "type": "Literal",
              "value": "2",
              "raw": "'2'",
              "start": 101,
              "end": 104
            },
            "optional": false,
            "computed": true,
            "start": 99,
            "end": 105
          },
          "definite": false,
          "start": 94,
          "end": 105
        }
      ],
      "declare": false,
      "start": 90,
      "end": 106
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 113
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "property": {
              "type": "Literal",
              "value": "3",
              "raw": "'3'",
              "start": 118,
              "end": 121
            },
            "optional": false,
            "computed": true,
            "start": 116,
            "end": 122
          },
          "definite": false,
          "start": 111,
          "end": 122
        }
      ],
      "declare": false,
      "start": 107,
      "end": 123
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 130
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 135,
              "end": 136
            },
            "optional": false,
            "computed": true,
            "start": 133,
            "end": 137
          },
          "definite": false,
          "start": 128,
          "end": 137
        }
      ],
      "declare": false,
      "start": 124,
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 145
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 149
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 150,
              "end": 151
            },
            "optional": false,
            "computed": true,
            "start": 148,
            "end": 152
          },
          "definite": false,
          "start": 143,
          "end": 152
        }
      ],
      "declare": false,
      "start": 139,
      "end": 153
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 160
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 165,
              "end": 166
            },
            "optional": false,
            "computed": true,
            "start": 163,
            "end": 167
          },
          "definite": false,
          "start": 158,
          "end": 167
        }
      ],
      "declare": false,
      "start": 154,
      "end": 168
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 181
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 192,
                    "end": 198
                  },
                  "start": 190,
                  "end": 198
                },
                "start": 189,
                "end": 198
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 201,
                "end": 207
              },
              "start": 199,
              "end": 207
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 188,
            "end": 208
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
            "end": 223
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "2",
              "raw": "\"2\"",
              "start": 228,
              "end": 231
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 233,
                "end": 239
              },
              "start": 231,
              "end": 239
            },
            "accessibility": null,
            "static": false,
            "start": 228,
            "end": 240
          }
        ],
        "start": 182,
        "end": 242
      },
      "declare": false,
      "start": 170,
      "end": 242
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
            "name": "i",
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
                  "start": 251,
                  "end": 252
                },
                "typeArguments": null,
                "start": 251,
                "end": 252
              },
              "start": 249,
              "end": 252
            },
            "start": 248,
            "end": 252
          },
          "init": null,
          "definite": false,
          "start": 248,
          "end": 252
        }
      ],
      "declare": false,
      "start": 244,
      "end": 252
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 259
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 264,
              "end": 267
            },
            "optional": false,
            "computed": true,
            "start": 262,
            "end": 268
          },
          "definite": false,
          "start": 257,
          "end": 268
        }
      ],
      "declare": false,
      "start": 253,
      "end": 269
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 276
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 280
            },
            "property": {
              "type": "Literal",
              "value": "2",
              "raw": "'2'",
              "start": 281,
              "end": 284
            },
            "optional": false,
            "computed": true,
            "start": 279,
            "end": 285
          },
          "definite": false,
          "start": 274,
          "end": 285
        }
      ],
      "declare": false,
      "start": 270,
      "end": 286
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 293
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 297
            },
            "property": {
              "type": "Literal",
              "value": "3",
              "raw": "'3'",
              "start": 298,
              "end": 301
            },
            "optional": false,
            "computed": true,
            "start": 296,
            "end": 302
          },
          "definite": false,
          "start": 291,
          "end": 302
        }
      ],
      "declare": false,
      "start": 287,
      "end": 303
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 310
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 314
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 315,
              "end": 316
            },
            "optional": false,
            "computed": true,
            "start": 313,
            "end": 317
          },
          "definite": false,
          "start": 308,
          "end": 317
        }
      ],
      "declare": false,
      "start": 304,
      "end": 318
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 325
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 330,
              "end": 331
            },
            "optional": false,
            "computed": true,
            "start": 328,
            "end": 332
          },
          "definite": false,
          "start": 323,
          "end": 332
        }
      ],
      "declare": false,
      "start": 319,
      "end": 333
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 340
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 345,
              "end": 346
            },
            "optional": false,
            "computed": true,
            "start": 343,
            "end": 347
          },
          "definite": false,
          "start": 338,
          "end": 347
        }
      ],
      "declare": false,
      "start": 334,
      "end": 348
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
            "name": "a",
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
                            "start": 367,
                            "end": 373
                          },
                          "start": 365,
                          "end": 373
                        },
                        "start": 364,
                        "end": 373
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 376,
                        "end": 382
                      },
                      "start": 374,
                      "end": 382
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 363,
                    "end": 383
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
                      "start": 388,
                      "end": 389
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 391,
                        "end": 397
                      },
                      "start": 389,
                      "end": 397
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 388,
                    "end": 398
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "\"2\"",
                      "start": 403,
                      "end": 406
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 408,
                        "end": 414
                      },
                      "start": 406,
                      "end": 414
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 403,
                    "end": 415
                  }
                ],
                "start": 357,
                "end": 417
              },
              "start": 355,
              "end": 417
            },
            "start": 354,
            "end": 417
          },
          "init": null,
          "definite": false,
          "start": 354,
          "end": 417
        }
      ],
      "declare": false,
      "start": 350,
      "end": 417
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 423,
            "end": 425
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 429
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 430,
              "end": 433
            },
            "optional": false,
            "computed": true,
            "start": 428,
            "end": 434
          },
          "definite": false,
          "start": 423,
          "end": 434
        }
      ],
      "declare": false,
      "start": 419,
      "end": 435
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 442
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            },
            "property": {
              "type": "Literal",
              "value": "2",
              "raw": "'2'",
              "start": 447,
              "end": 450
            },
            "optional": false,
            "computed": true,
            "start": 445,
            "end": 451
          },
          "definite": false,
          "start": 440,
          "end": 451
        }
      ],
      "declare": false,
      "start": 436,
      "end": 452
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 459
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 462,
              "end": 463
            },
            "property": {
              "type": "Literal",
              "value": "3",
              "raw": "'3'",
              "start": 464,
              "end": 467
            },
            "optional": false,
            "computed": true,
            "start": 462,
            "end": 468
          },
          "definite": false,
          "start": 457,
          "end": 468
        }
      ],
      "declare": false,
      "start": 453,
      "end": 469
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 476
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 480
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 481,
              "end": 482
            },
            "optional": false,
            "computed": true,
            "start": 479,
            "end": 483
          },
          "definite": false,
          "start": 474,
          "end": 483
        }
      ],
      "declare": false,
      "start": 470,
      "end": 484
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 489,
            "end": 491
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 495
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 496,
              "end": 497
            },
            "optional": false,
            "computed": true,
            "start": 494,
            "end": 498
          },
          "definite": false,
          "start": 489,
          "end": 498
        }
      ],
      "declare": false,
      "start": 485,
      "end": 499
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 506
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 510
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 511,
              "end": 512
            },
            "optional": false,
            "computed": true,
            "start": 509,
            "end": 513
          },
          "definite": false,
          "start": 504,
          "end": 513
        }
      ],
      "declare": false,
      "start": 500,
      "end": 514
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
                            "start": 529,
                            "end": 535
                          },
                          "start": 527,
                          "end": 535
                        },
                        "start": 526,
                        "end": 535
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 538,
                        "end": 544
                      },
                      "start": 536,
                      "end": 544
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 525,
                    "end": 544
                  }
                ],
                "start": 523,
                "end": 546
              },
              "start": 521,
              "end": 546
            },
            "start": 520,
            "end": 546
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 551,
                  "end": 552
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 554,
                  "end": 556
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 551,
                "end": 556
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 558,
                  "end": 561
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 563,
                  "end": 565
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 558,
                "end": 565
              }
            ],
            "start": 549,
            "end": 567
          },
          "definite": false,
          "start": 520,
          "end": 567
        }
      ],
      "declare": false,
      "start": 516,
      "end": 567
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
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 575
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 579
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 580,
              "end": 583
            },
            "optional": false,
            "computed": true,
            "start": 578,
            "end": 584
          },
          "definite": false,
          "start": 572,
          "end": 584
        }
      ],
      "declare": false,
      "start": 568,
      "end": 585
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
            "name": "r2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 590,
            "end": 593
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 596,
              "end": 597
            },
            "property": {
              "type": "Literal",
              "value": "2",
              "raw": "'2'",
              "start": 598,
              "end": 601
            },
            "optional": false,
            "computed": true,
            "start": 596,
            "end": 602
          },
          "definite": false,
          "start": 590,
          "end": 602
        }
      ],
      "declare": false,
      "start": 586,
      "end": 603
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 610
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 614
            },
            "property": {
              "type": "Literal",
              "value": "3",
              "raw": "'3'",
              "start": 615,
              "end": 618
            },
            "optional": false,
            "computed": true,
            "start": 613,
            "end": 619
          },
          "definite": false,
          "start": 608,
          "end": 619
        }
      ],
      "declare": false,
      "start": 604,
      "end": 620
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 627
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 631
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 632,
              "end": 633
            },
            "optional": false,
            "computed": true,
            "start": 630,
            "end": 634
          },
          "definite": false,
          "start": 625,
          "end": 634
        }
      ],
      "declare": false,
      "start": 621,
      "end": 635
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 640,
            "end": 642
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 646
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 647,
              "end": 648
            },
            "optional": false,
            "computed": true,
            "start": 645,
            "end": 649
          },
          "definite": false,
          "start": 640,
          "end": 649
        }
      ],
      "declare": false,
      "start": 636,
      "end": 650
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 655,
            "end": 657
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 661
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 662,
              "end": 663
            },
            "optional": false,
            "computed": true,
            "start": 660,
            "end": 664
          },
          "definite": false,
          "start": 655,
          "end": 664
        }
      ],
      "declare": false,
      "start": 651,
      "end": 665
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
            "name": "b2",
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
                            "start": 681,
                            "end": 687
                          },
                          "start": 679,
                          "end": 687
                        },
                        "start": 678,
                        "end": 687
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 690,
                        "end": 696
                      },
                      "start": 688,
                      "end": 696
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 677,
                    "end": 697
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
                      "start": 698,
                      "end": 699
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 701,
                        "end": 707
                      },
                      "start": 699,
                      "end": 707
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 698,
                    "end": 708
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "\"2\"",
                      "start": 709,
                      "end": 712
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 714,
                        "end": 720
                      },
                      "start": 712,
                      "end": 720
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 709,
                    "end": 721
                  }
                ],
                "start": 675,
                "end": 723
              },
              "start": 673,
              "end": 723
            },
            "start": 671,
            "end": 723
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 728,
                  "end": 729
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 731,
                  "end": 733
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 728,
                "end": 733
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 735,
                  "end": 738
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 740,
                  "end": 742
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 735,
                "end": 742
              }
            ],
            "start": 726,
            "end": 744
          },
          "definite": false,
          "start": 671,
          "end": 744
        }
      ],
      "declare": false,
      "start": 667,
      "end": 744
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
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 749,
            "end": 752
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 755,
              "end": 757
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 758,
              "end": 761
            },
            "optional": false,
            "computed": true,
            "start": 755,
            "end": 762
          },
          "definite": false,
          "start": 749,
          "end": 762
        }
      ],
      "declare": false,
      "start": 745,
      "end": 763
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 768,
            "end": 771
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 774,
              "end": 776
            },
            "property": {
              "type": "Literal",
              "value": "2",
              "raw": "'2'",
              "start": 777,
              "end": 780
            },
            "optional": false,
            "computed": true,
            "start": 774,
            "end": 781
          },
          "definite": false,
          "start": 768,
          "end": 781
        }
      ],
      "declare": false,
      "start": 764,
      "end": 782
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 787,
            "end": 789
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 792,
              "end": 794
            },
            "property": {
              "type": "Literal",
              "value": "3",
              "raw": "'3'",
              "start": 795,
              "end": 798
            },
            "optional": false,
            "computed": true,
            "start": 792,
            "end": 799
          },
          "definite": false,
          "start": 787,
          "end": 799
        }
      ],
      "declare": false,
      "start": 783,
      "end": 800
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 807
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 810,
              "end": 812
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 813,
              "end": 814
            },
            "optional": false,
            "computed": true,
            "start": 810,
            "end": 815
          },
          "definite": false,
          "start": 805,
          "end": 815
        }
      ],
      "declare": false,
      "start": 801,
      "end": 816
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 823
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 828
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 829,
              "end": 830
            },
            "optional": false,
            "computed": true,
            "start": 826,
            "end": 831
          },
          "definite": false,
          "start": 821,
          "end": 831
        }
      ],
      "declare": false,
      "start": 817,
      "end": 832
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 839
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 842,
              "end": 844
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 845,
              "end": 846
            },
            "optional": false,
            "computed": true,
            "start": 842,
            "end": 847
          },
          "definite": false,
          "start": 837,
          "end": 847
        }
      ],
      "declare": false,
      "start": 833,
      "end": 848
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 848
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
    "value": "C",
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
    "value": "[",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "String",
    "value": "''",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "String",
    "value": "''",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 73,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 77,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 83,
    "end": 84
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "r2",
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
    "type": "Identifier",
    "value": "c",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 107,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 117,
    "end": 118
  },
  {
    "type": "String",
    "value": "'3'",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 124,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 135,
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
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 149,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 164,
    "end": 165
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 170,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "var",
    "start": 244,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 263,
    "end": 264
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 280,
    "end": 281
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 281,
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
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 291,
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
    "value": "i",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298
  },
  {
    "type": "String",
    "value": "'3'",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 304,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 314,
    "end": 315
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 323,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 329,
    "end": 330
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 334,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 344,
    "end": 345
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 350,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 367,
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
    "type": "Identifier",
    "value": "string",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "string",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "String",
    "value": "\"2\"",
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
    "type": "Identifier",
    "value": "string",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 419,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 429,
    "end": 430
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 430,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 436,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 440,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 446,
    "end": 447
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 447,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 453,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 457,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "[",
    "start": 463,
    "end": 464
  },
  {
    "type": "String",
    "value": "'3'",
    "start": 464,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 470,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 474,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 480,
    "end": 481
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "var",
    "start": 485,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 489,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 495,
    "end": 496
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 496,
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
    "type": "Keyword",
    "value": "var",
    "start": 500,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 504,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 510,
    "end": 511
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 516,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 520,
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
    "type": "Punctuator",
    "value": "[",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 529,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "string",
    "start": 538,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 549,
    "end": 550
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "String",
    "value": "''",
    "start": 554,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 556,
    "end": 557
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "String",
    "value": "''",
    "start": 563,
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
    "value": "var",
    "start": 568,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 572,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 579,
    "end": 580
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "var",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 597,
    "end": 598
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 598,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 604,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 608,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 614,
    "end": 615
  },
  {
    "type": "String",
    "value": "'3'",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 621,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 625,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 631,
    "end": 632
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 636,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "[",
    "start": 646,
    "end": 647
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 651,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "r6",
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
    "type": "Identifier",
    "value": "b",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 661,
    "end": 662
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 667,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 671,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 681,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 690,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 701,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 709,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 714,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "String",
    "value": "''",
    "start": 731,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 733,
    "end": 734
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 735,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "String",
    "value": "''",
    "start": 740,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 745,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 749,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 755,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 757,
    "end": 758
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 758,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 764,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 768,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 774,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 776,
    "end": 777
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 783,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 787,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 792,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 794,
    "end": 795
  },
  {
    "type": "String",
    "value": "'3'",
    "start": 795,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "var",
    "start": 801,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 805,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 810,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 812,
    "end": 813
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 817,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 821,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 826,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 828,
    "end": 829
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 833,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 837,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 842,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 844,
    "end": 845
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  }
]
```
