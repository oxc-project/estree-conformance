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
        "start": 25,
        "end": 26
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 33,
              "end": 34
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
              },
              "start": 34,
              "end": 42
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
            "start": 33,
            "end": 43
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 1.1,
              "raw": "1.1",
              "start": 48,
              "end": 51
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 53,
                "end": 59
              },
              "start": 51,
              "end": 59
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
            "start": 48,
            "end": 60
          }
        ],
        "start": 27,
        "end": 62
      },
      "abstract": false,
      "declare": false,
      "start": 19,
      "end": 62
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
                  "start": 71,
                  "end": 72
                },
                "typeArguments": null,
                "start": 71,
                "end": 72
              },
              "start": 69,
              "end": 72
            },
            "start": 68,
            "end": 72
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 72
        }
      ],
      "declare": false,
      "start": 64,
      "end": 73
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
            "start": 78,
            "end": 80
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 85,
              "end": 86
            },
            "optional": false,
            "computed": true,
            "start": 83,
            "end": 87
          },
          "definite": false,
          "start": 78,
          "end": 87
        }
      ],
      "declare": false,
      "start": 74,
      "end": 88
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
            "start": 93,
            "end": 95
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "property": {
              "type": "Literal",
              "value": 1.1,
              "raw": "1.1",
              "start": 100,
              "end": 103
            },
            "optional": false,
            "computed": true,
            "start": 98,
            "end": 104
          },
          "definite": false,
          "start": 93,
          "end": 104
        }
      ],
      "declare": false,
      "start": 89,
      "end": 105
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
            "start": 110,
            "end": 112
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 117,
              "end": 120
            },
            "optional": false,
            "computed": true,
            "start": 115,
            "end": 121
          },
          "definite": false,
          "start": 110,
          "end": 121
        }
      ],
      "declare": false,
      "start": 106,
      "end": 122
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
            "start": 127,
            "end": 129
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "property": {
              "type": "Literal",
              "value": "1.1",
              "raw": "'1.1'",
              "start": 134,
              "end": 139
            },
            "optional": false,
            "computed": true,
            "start": 132,
            "end": 140
          },
          "definite": false,
          "start": 127,
          "end": 140
        }
      ],
      "declare": false,
      "start": 123,
      "end": 141
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 154
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 161,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
            },
            "accessibility": null,
            "static": false,
            "start": 161,
            "end": 171
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1.1,
              "raw": "1.1",
              "start": 176,
              "end": 179
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 181,
                "end": 187
              },
              "start": 179,
              "end": 187
            },
            "accessibility": null,
            "static": false,
            "start": 176,
            "end": 188
          }
        ],
        "start": 155,
        "end": 190
      },
      "declare": false,
      "start": 143,
      "end": 190
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
                  "start": 199,
                  "end": 200
                },
                "typeArguments": null,
                "start": 199,
                "end": 200
              },
              "start": 197,
              "end": 200
            },
            "start": 196,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 196,
          "end": 200
        }
      ],
      "declare": false,
      "start": 192,
      "end": 201
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
            "start": 206,
            "end": 208
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 212
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 213,
              "end": 214
            },
            "optional": false,
            "computed": true,
            "start": 211,
            "end": 215
          },
          "definite": false,
          "start": 206,
          "end": 215
        }
      ],
      "declare": false,
      "start": 202,
      "end": 216
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
            "start": 221,
            "end": 223
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 227
            },
            "property": {
              "type": "Literal",
              "value": 1.1,
              "raw": "1.1",
              "start": 228,
              "end": 231
            },
            "optional": false,
            "computed": true,
            "start": 226,
            "end": 232
          },
          "definite": false,
          "start": 221,
          "end": 232
        }
      ],
      "declare": false,
      "start": 217,
      "end": 233
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
            "start": 238,
            "end": 240
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 244
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 245,
              "end": 248
            },
            "optional": false,
            "computed": true,
            "start": 243,
            "end": 249
          },
          "definite": false,
          "start": 238,
          "end": 249
        }
      ],
      "declare": false,
      "start": 234,
      "end": 250
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
            "start": 255,
            "end": 257
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 261
            },
            "property": {
              "type": "Literal",
              "value": "1.1",
              "raw": "'1.1'",
              "start": 262,
              "end": 267
            },
            "optional": false,
            "computed": true,
            "start": 260,
            "end": 268
          },
          "definite": false,
          "start": 255,
          "end": 268
        }
      ],
      "declare": false,
      "start": 251,
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
            "name": "a",
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
                      "value": 1,
                      "raw": "1",
                      "start": 284,
                      "end": 285
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 287,
                        "end": 293
                      },
                      "start": 285,
                      "end": 293
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 284,
                    "end": 294
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1.1,
                      "raw": "1.1",
                      "start": 299,
                      "end": 302
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 304,
                        "end": 310
                      },
                      "start": 302,
                      "end": 310
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 299,
                    "end": 311
                  }
                ],
                "start": 278,
                "end": 313
              },
              "start": 276,
              "end": 313
            },
            "start": 275,
            "end": 313
          },
          "init": null,
          "definite": false,
          "start": 275,
          "end": 313
        }
      ],
      "declare": false,
      "start": 271,
      "end": 313
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
            "start": 319,
            "end": 321
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 326,
              "end": 327
            },
            "optional": false,
            "computed": true,
            "start": 324,
            "end": 328
          },
          "definite": false,
          "start": 319,
          "end": 328
        }
      ],
      "declare": false,
      "start": 315,
      "end": 329
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
            "start": 334,
            "end": 336
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 340
            },
            "property": {
              "type": "Literal",
              "value": 1.1,
              "raw": "1.1",
              "start": 341,
              "end": 344
            },
            "optional": false,
            "computed": true,
            "start": 339,
            "end": 345
          },
          "definite": false,
          "start": 334,
          "end": 345
        }
      ],
      "declare": false,
      "start": 330,
      "end": 346
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
            "start": 351,
            "end": 353
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 358,
              "end": 361
            },
            "optional": false,
            "computed": true,
            "start": 356,
            "end": 362
          },
          "definite": false,
          "start": 351,
          "end": 362
        }
      ],
      "declare": false,
      "start": 347,
      "end": 363
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
            "start": 368,
            "end": 370
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 374
            },
            "property": {
              "type": "Literal",
              "value": "1.1",
              "raw": "'1.1'",
              "start": 375,
              "end": 380
            },
            "optional": false,
            "computed": true,
            "start": 373,
            "end": 381
          },
          "definite": false,
          "start": 368,
          "end": 381
        }
      ],
      "declare": false,
      "start": 364,
      "end": 382
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
            "typeAnnotation": null,
            "start": 388,
            "end": 389
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
                  "start": 398,
                  "end": 399
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 401,
                  "end": 402
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 398,
                "end": 402
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1.1,
                  "raw": "1.1",
                  "start": 408,
                  "end": 411
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 413,
                  "end": 415
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 408,
                "end": 415
              }
            ],
            "start": 392,
            "end": 417
          },
          "definite": false,
          "start": 388,
          "end": 417
        }
      ],
      "declare": false,
      "start": 384,
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 428,
              "end": 429
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 430,
              "end": 431
            },
            "optional": false,
            "computed": true,
            "start": 428,
            "end": 432
          },
          "definite": false,
          "start": 423,
          "end": 432
        }
      ],
      "declare": false,
      "start": 419,
      "end": 433
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
            "start": 438,
            "end": 440
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "property": {
              "type": "Literal",
              "value": 1.1,
              "raw": "1.1",
              "start": 445,
              "end": 448
            },
            "optional": false,
            "computed": true,
            "start": 443,
            "end": 449
          },
          "definite": false,
          "start": 438,
          "end": 449
        }
      ],
      "declare": false,
      "start": 434,
      "end": 450
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
            "start": 455,
            "end": 457
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 461
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 462,
              "end": 465
            },
            "optional": false,
            "computed": true,
            "start": 460,
            "end": 466
          },
          "definite": false,
          "start": 455,
          "end": 466
        }
      ],
      "declare": false,
      "start": 451,
      "end": 467
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
            "start": 472,
            "end": 474
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 478
            },
            "property": {
              "type": "Literal",
              "value": "1.1",
              "raw": "'1.1'",
              "start": 479,
              "end": 484
            },
            "optional": false,
            "computed": true,
            "start": 477,
            "end": 485
          },
          "definite": false,
          "start": 472,
          "end": 485
        }
      ],
      "declare": false,
      "start": 468,
      "end": 486
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 486
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Numeric",
    "value": "1.1",
    "start": 48,
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
    "value": "string",
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
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 64,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 78,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 84,
    "end": 85
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "var",
    "start": 89,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100
  },
  {
    "type": "Numeric",
    "value": "1.1",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 106,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 110,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 123,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134
  },
  {
    "type": "String",
    "value": "'1.1'",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 143,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 161,
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
    "value": "number",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Numeric",
    "value": "1.1",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 192,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "i",
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
    "type": "Identifier",
    "value": "I",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 202,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 206,
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
    "value": "i",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 212,
    "end": 213
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 227,
    "end": 228
  },
  {
    "type": "Numeric",
    "value": "1.1",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 234,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 244,
    "end": 245
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 251,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 255,
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
    "value": "i",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 261,
    "end": 262
  },
  {
    "type": "String",
    "value": "'1.1'",
    "start": 262,
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
    "start": 271,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 287,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Numeric",
    "value": "1.1",
    "start": 299,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 325,
    "end": 326
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 330,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 340,
    "end": 341
  },
  {
    "type": "Numeric",
    "value": "1.1",
    "start": 341,
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
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 357,
    "end": 358
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 364,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 368,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 374,
    "end": 375
  },
  {
    "type": "String",
    "value": "'1.1'",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 384,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Numeric",
    "value": "1.1",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 413,
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
    "value": "b",
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
    "type": "Numeric",
    "value": "1",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 438,
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
    "value": "b",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 444,
    "end": 445
  },
  {
    "type": "Numeric",
    "value": "1.1",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 451,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 455,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 461,
    "end": 462
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 462,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 468,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 472,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 478,
    "end": 479
  },
  {
    "type": "String",
    "value": "'1.1'",
    "start": 479,
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
    "value": ";",
    "start": 485,
    "end": 486
  }
]
```
