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
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "initializer": null,
            "computed": false,
            "start": 14,
            "end": 15
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "initializer": null,
            "computed": false,
            "start": 21,
            "end": 22
          }
        ],
        "start": 8,
        "end": 24
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 33
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "initializer": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 44,
              "end": 47
            },
            "computed": false,
            "start": 40,
            "end": 47
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "initializer": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 57,
              "end": 60
            },
            "computed": false,
            "start": 53,
            "end": 60
          }
        ],
        "start": 34,
        "end": 62
      },
      "const": false,
      "declare": false,
      "start": 26,
      "end": 62
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E3",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 71
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 82,
              "end": 83
            },
            "computed": false,
            "start": 78,
            "end": 83
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 94
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 98,
                "end": 99
              },
              "start": 93,
              "end": 99
            },
            "computed": false,
            "start": 89,
            "end": 99
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 106
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 114,
                "end": 115
              },
              "start": 109,
              "end": 115
            },
            "computed": false,
            "start": 105,
            "end": 115
          }
        ],
        "start": 72,
        "end": 118
      },
      "const": false,
      "declare": false,
      "start": 64,
      "end": 118
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E4",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 133
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "initializer": null,
            "computed": false,
            "start": 140,
            "end": 141
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 148
            },
            "initializer": null,
            "computed": false,
            "start": 147,
            "end": 148
          }
        ],
        "start": 134,
        "end": 150
      },
      "const": true,
      "declare": false,
      "start": 120,
      "end": 150
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
            "name": "E5",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 160
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
                  "start": 169,
                  "end": 170
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 172,
                  "end": 175
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 169,
                "end": 175
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
                  "start": 181,
                  "end": 182
                },
                "value": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 184,
                  "end": 187
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 181,
                "end": 187
              }
            ],
            "start": 163,
            "end": 189
          },
          "definite": false,
          "start": 158,
          "end": 189
        }
      ],
      "declare": false,
      "start": 152,
      "end": 189
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
            "typeAnnotation": null,
            "start": 197,
            "end": 201
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
                  "start": 206,
                  "end": 207
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 211
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 213
                  },
                  "optional": false,
                  "computed": false,
                  "start": 209,
                  "end": 213
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 206,
                "end": 213
              }
            ],
            "start": 204,
            "end": 215
          },
          "definite": false,
          "start": 197,
          "end": 215
        }
      ],
      "declare": false,
      "start": 191,
      "end": 215
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
            "typeAnnotation": null,
            "start": 223,
            "end": 227
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
                  "start": 232,
                  "end": 233
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 237
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 239
                  },
                  "optional": false,
                  "computed": false,
                  "start": 235,
                  "end": 239
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 232,
                "end": 239
              }
            ],
            "start": 230,
            "end": 241
          },
          "definite": false,
          "start": 223,
          "end": 241
        }
      ],
      "declare": false,
      "start": 217,
      "end": 241
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
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 253
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
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
                    "start": 258,
                    "end": 259
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 261,
                      "end": 263
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 264,
                      "end": 265
                    },
                    "optional": false,
                    "computed": false,
                    "start": 261,
                    "end": 265
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 258,
                  "end": 265
                }
              ],
              "start": 256,
              "end": 267
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 276
              },
              "typeArguments": null,
              "start": 271,
              "end": 276
            },
            "start": 256,
            "end": 276
          },
          "definite": false,
          "start": 249,
          "end": 276
        }
      ],
      "declare": false,
      "start": 243,
      "end": 276
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
            "name": "foo4",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 288
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
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
                    "start": 293,
                    "end": 294
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 298
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 300
                    },
                    "optional": false,
                    "computed": false,
                    "start": 296,
                    "end": 300
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 293,
                  "end": 300
                }
              ],
              "start": 291,
              "end": 302
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 311
              },
              "typeArguments": null,
              "start": 306,
              "end": 311
            },
            "start": 291,
            "end": 311
          },
          "definite": false,
          "start": 284,
          "end": 311
        }
      ],
      "declare": false,
      "start": 278,
      "end": 311
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
            "name": "foo5",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 323
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 331,
                      "end": 333
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 335
                    },
                    "optional": false,
                    "computed": false,
                    "start": 331,
                    "end": 335
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 328,
                  "end": 335
                }
              ],
              "start": 326,
              "end": 337
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 346
              },
              "typeArguments": null,
              "start": 341,
              "end": 346
            },
            "start": 326,
            "end": 346
          },
          "definite": false,
          "start": 319,
          "end": 346
        }
      ],
      "declare": false,
      "start": 313,
      "end": 346
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
            "name": "foo6",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 358
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
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
                    "start": 363,
                    "end": 364
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 368
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 369,
                      "end": 370
                    },
                    "optional": false,
                    "computed": false,
                    "start": 366,
                    "end": 370
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 363,
                  "end": 370
                }
              ],
              "start": 361,
              "end": 372
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 381
              },
              "typeArguments": null,
              "start": 376,
              "end": 381
            },
            "start": 361,
            "end": 381
          },
          "definite": false,
          "start": 354,
          "end": 381
        }
      ],
      "declare": false,
      "start": 348,
      "end": 381
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
            "name": "foo7",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 393
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
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
                    "start": 398,
                    "end": 399
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 401,
                      "end": 403
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 405
                    },
                    "optional": false,
                    "computed": false,
                    "start": 401,
                    "end": 405
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 398,
                  "end": 405
                }
              ],
              "start": 396,
              "end": 407
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 416
              },
              "typeArguments": null,
              "start": 411,
              "end": 416
            },
            "start": 396,
            "end": 416
          },
          "definite": false,
          "start": 389,
          "end": 416
        }
      ],
      "declare": false,
      "start": 383,
      "end": 416
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
            "name": "foo8",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 428
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
                  "start": 433,
                  "end": 434
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 438
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 439,
                      "end": 440
                    },
                    "optional": false,
                    "computed": false,
                    "start": 436,
                    "end": 440
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 444,
                      "end": 449
                    },
                    "typeArguments": null,
                    "start": 444,
                    "end": 449
                  },
                  "start": 436,
                  "end": 449
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 433,
                "end": 449
              }
            ],
            "start": 431,
            "end": 451
          },
          "definite": false,
          "start": 424,
          "end": 451
        }
      ],
      "declare": false,
      "start": 418,
      "end": 451
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
            "name": "foo9",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 463
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
                  "start": 468,
                  "end": 469
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 473
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 474,
                      "end": 475
                    },
                    "optional": false,
                    "computed": false,
                    "start": 471,
                    "end": 475
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 479,
                      "end": 484
                    },
                    "typeArguments": null,
                    "start": 479,
                    "end": 484
                  },
                  "start": 471,
                  "end": 484
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 468,
                "end": 484
              }
            ],
            "start": 466,
            "end": 486
          },
          "definite": false,
          "start": 459,
          "end": 486
        }
      ],
      "declare": false,
      "start": 453,
      "end": 486
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
            "name": "foo10",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 499
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
                  "start": 504,
                  "end": 505
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 507,
                      "end": 509
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 510,
                      "end": 511
                    },
                    "optional": false,
                    "computed": false,
                    "start": 507,
                    "end": 511
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 520
                    },
                    "typeArguments": null,
                    "start": 515,
                    "end": 520
                  },
                  "start": 507,
                  "end": 520
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 504,
                "end": 520
              }
            ],
            "start": 502,
            "end": 522
          },
          "definite": false,
          "start": 494,
          "end": 522
        }
      ],
      "declare": false,
      "start": 488,
      "end": 522
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
            "name": "foo11",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 535
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
                  "start": 540,
                  "end": 541
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 543,
                      "end": 545
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 546,
                      "end": 547
                    },
                    "optional": false,
                    "computed": false,
                    "start": 543,
                    "end": 547
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 551,
                      "end": 556
                    },
                    "typeArguments": null,
                    "start": 551,
                    "end": 556
                  },
                  "start": 543,
                  "end": 556
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 540,
                "end": 556
              }
            ],
            "start": 538,
            "end": 558
          },
          "definite": false,
          "start": 530,
          "end": 558
        }
      ],
      "declare": false,
      "start": 524,
      "end": 558
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
            "name": "foo12",
            "optional": false,
            "typeAnnotation": null,
            "start": 566,
            "end": 571
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
                  "start": 576,
                  "end": 577
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 579,
                      "end": 581
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 582,
                      "end": 583
                    },
                    "optional": false,
                    "computed": false,
                    "start": 579,
                    "end": 583
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 587,
                      "end": 592
                    },
                    "typeArguments": null,
                    "start": 587,
                    "end": 592
                  },
                  "start": 579,
                  "end": 592
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 576,
                "end": 592
              }
            ],
            "start": 574,
            "end": 594
          },
          "definite": false,
          "start": 566,
          "end": 594
        }
      ],
      "declare": false,
      "start": 560,
      "end": 594
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 594
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 5,
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
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 26,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 31,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 53,
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
    "value": "'b'",
    "start": 57,
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
    "value": "enum",
    "start": 64,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 69,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 95,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<<",
    "start": 111,
    "end": 113
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 120,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 126,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "E4",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 152,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "E5",
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
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "String",
    "value": "'b'",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 191,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 217,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 243,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 268,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 271,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 278,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 284,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 303,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 306,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 313,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 331,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 338,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 341,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 348,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 354,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "E4",
    "start": 366,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 373,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 376,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 383,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "E5",
    "start": 401,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 408,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 411,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 418,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 424,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 441,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 444,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 453,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 476,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 479,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 488,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 494,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 512,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 515,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 524,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "E4",
    "start": 543,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 548,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 551,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 560,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 566,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "E5",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 584,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 587,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594
  }
]
```
