__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 29
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
              "start": 34,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 37,
                    "end": 43
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 46,
                    "end": 55
                  }
                ],
                "start": 37,
                "end": 55
              },
              "start": 35,
              "end": 55
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 55
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
              "start": 60,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 63,
                    "end": 69
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 72,
                    "end": 76
                  }
                ],
                "start": 63,
                "end": 76
              },
              "start": 61,
              "end": 76
            },
            "accessibility": null,
            "static": false,
            "start": 60,
            "end": 76
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 85,
                "end": 91
              },
              "start": 83,
              "end": 91
            },
            "accessibility": null,
            "static": false,
            "start": 81,
            "end": 91
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
              "start": 96,
              "end": 97
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 99,
                    "end": 105
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 108,
                    "end": 117
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 120,
                    "end": 124
                  }
                ],
                "start": 99,
                "end": 124
              },
              "start": 97,
              "end": 124
            },
            "accessibility": null,
            "static": false,
            "start": 96,
            "end": 124
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 133,
                    "end": 139
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 142,
                    "end": 151
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 154,
                    "end": 158
                  }
                ],
                "start": 133,
                "end": 158
              },
              "start": 131,
              "end": 158
            },
            "accessibility": null,
            "static": false,
            "start": 129,
            "end": 158
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 166,
                "end": 173
              },
              "start": 164,
              "end": 173
            },
            "accessibility": null,
            "static": false,
            "start": 163,
            "end": 173
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 181,
                "end": 184
              },
              "start": 179,
              "end": 184
            },
            "accessibility": null,
            "static": false,
            "start": 178,
            "end": 184
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 190
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 192,
                "end": 197
              },
              "start": 190,
              "end": 197
            },
            "accessibility": null,
            "static": false,
            "start": 189,
            "end": 197
          }
        ],
        "start": 14,
        "end": 199
      },
      "declare": false,
      "start": 0,
      "end": 199
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 213
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
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 224,
                    "end": 230
                  },
                  "start": 222,
                  "end": 230
                },
                "start": 221,
                "end": 230
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 233,
                "end": 239
              },
              "start": 231,
              "end": 239
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 220,
            "end": 239
          }
        ],
        "start": 214,
        "end": 241
      },
      "declare": false,
      "start": 201,
      "end": 241
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 250
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 260,
          "end": 261
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 271,
            "end": 274
          },
          "start": 265,
          "end": 274
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 277,
          "end": 283
        },
        "optional": false,
        "readonly": null,
        "start": 253,
        "end": 285
      },
      "declare": false,
      "start": 243,
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 307
                },
                "typeArguments": null,
                "start": 304,
                "end": 307
              },
              "start": 302,
              "end": 307
            },
            "start": 301,
            "end": 307
          },
          "init": null,
          "definite": false,
          "start": 301,
          "end": 307
        }
      ],
      "declare": true,
      "start": 287,
      "end": 307
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 332
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 336
                      },
                      "typeArguments": null,
                      "start": 333,
                      "end": 336
                    }
                  ],
                  "start": 332,
                  "end": 337
                },
                "start": 325,
                "end": 337
              },
              "start": 323,
              "end": 337
            },
            "start": 322,
            "end": 337
          },
          "init": null,
          "definite": false,
          "start": 322,
          "end": 337
        }
      ],
      "declare": true,
      "start": 308,
      "end": 337
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 357
                },
                "typeArguments": null,
                "start": 355,
                "end": 357
              },
              "start": 353,
              "end": 357
            },
            "start": 352,
            "end": 357
          },
          "init": null,
          "definite": false,
          "start": 352,
          "end": 357
        }
      ],
      "declare": true,
      "start": 338,
      "end": 357
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 375,
                  "end": 377
                },
                "typeArguments": null,
                "start": 375,
                "end": 377
              },
              "start": 373,
              "end": 377
            },
            "start": 372,
            "end": 377
          },
          "init": null,
          "definite": false,
          "start": 372,
          "end": 377
        }
      ],
      "declare": true,
      "start": 358,
      "end": 377
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 387
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 388,
            "end": 389
          },
          "optional": false,
          "computed": false,
          "start": 386,
          "end": 389
        },
        "prefix": true,
        "start": 379,
        "end": 389
      },
      "directive": null,
      "start": 379,
      "end": 389
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 398
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 399,
            "end": 400
          },
          "optional": false,
          "computed": false,
          "start": 397,
          "end": 400
        },
        "prefix": true,
        "start": 390,
        "end": 400
      },
      "directive": null,
      "start": 390,
      "end": 400
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 409
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 410,
            "end": 411
          },
          "optional": false,
          "computed": false,
          "start": 408,
          "end": 411
        },
        "prefix": true,
        "start": 401,
        "end": 411
      },
      "directive": null,
      "start": 401,
      "end": 411
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 420
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 422
          },
          "optional": false,
          "computed": false,
          "start": 419,
          "end": 422
        },
        "prefix": true,
        "start": 412,
        "end": 422
      },
      "directive": null,
      "start": 412,
      "end": 422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 431
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 433
          },
          "optional": false,
          "computed": false,
          "start": 430,
          "end": 433
        },
        "prefix": true,
        "start": 423,
        "end": 433
      },
      "directive": null,
      "start": 423,
      "end": 433
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 442
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 444
          },
          "optional": false,
          "computed": false,
          "start": 441,
          "end": 444
        },
        "prefix": true,
        "start": 434,
        "end": 444
      },
      "directive": null,
      "start": 434,
      "end": 444
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 453
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 455
          },
          "optional": false,
          "computed": false,
          "start": 452,
          "end": 455
        },
        "prefix": true,
        "start": 445,
        "end": 455
      },
      "directive": null,
      "start": 445,
      "end": 455
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 464
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 466
          },
          "optional": false,
          "computed": false,
          "start": 463,
          "end": 466
        },
        "prefix": true,
        "start": 456,
        "end": 466
      },
      "directive": null,
      "start": 456,
      "end": 466
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 475
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 476,
            "end": 477
          },
          "optional": false,
          "computed": false,
          "start": 474,
          "end": 477
        },
        "prefix": true,
        "start": 467,
        "end": 477
      },
      "directive": null,
      "start": 467,
      "end": 477
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 486
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 488
          },
          "optional": false,
          "computed": false,
          "start": 485,
          "end": 488
        },
        "prefix": true,
        "start": 478,
        "end": 488
      },
      "directive": null,
      "start": 478,
      "end": 488
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 498
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 500
          },
          "optional": false,
          "computed": false,
          "start": 497,
          "end": 500
        },
        "prefix": true,
        "start": 490,
        "end": 500
      },
      "directive": null,
      "start": 490,
      "end": 500
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 508,
            "end": 509
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 511
          },
          "optional": false,
          "computed": false,
          "start": 508,
          "end": 511
        },
        "prefix": true,
        "start": 501,
        "end": 511
      },
      "directive": null,
      "start": 501,
      "end": 511
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 519,
            "end": 520
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 522
          },
          "optional": false,
          "computed": false,
          "start": 519,
          "end": 522
        },
        "prefix": true,
        "start": 512,
        "end": 522
      },
      "directive": null,
      "start": 512,
      "end": 522
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 531
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 533
          },
          "optional": false,
          "computed": false,
          "start": 530,
          "end": 533
        },
        "prefix": true,
        "start": 523,
        "end": 533
      },
      "directive": null,
      "start": 523,
      "end": 533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 542
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 544
          },
          "optional": false,
          "computed": false,
          "start": 541,
          "end": 544
        },
        "prefix": true,
        "start": 534,
        "end": 544
      },
      "directive": null,
      "start": 534,
      "end": 544
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 552,
            "end": 553
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 554,
            "end": 555
          },
          "optional": false,
          "computed": false,
          "start": 552,
          "end": 555
        },
        "prefix": true,
        "start": 545,
        "end": 555
      },
      "directive": null,
      "start": 545,
      "end": 555
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 563,
            "end": 564
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 566
          },
          "optional": false,
          "computed": false,
          "start": 563,
          "end": 566
        },
        "prefix": true,
        "start": 556,
        "end": 566
      },
      "directive": null,
      "start": 556,
      "end": 566
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 574,
            "end": 575
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 577
          },
          "optional": false,
          "computed": false,
          "start": 574,
          "end": 577
        },
        "prefix": true,
        "start": 567,
        "end": 577
      },
      "directive": null,
      "start": 567,
      "end": 577
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 586
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 588
          },
          "optional": false,
          "computed": false,
          "start": 585,
          "end": 588
        },
        "prefix": true,
        "start": 578,
        "end": 588
      },
      "directive": null,
      "start": 578,
      "end": 588
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 597
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 599
          },
          "optional": false,
          "computed": false,
          "start": 596,
          "end": 599
        },
        "prefix": true,
        "start": 589,
        "end": 599
      },
      "directive": null,
      "start": 589,
      "end": 599
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 609
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 610,
            "end": 611
          },
          "optional": false,
          "computed": false,
          "start": 608,
          "end": 611
        },
        "prefix": true,
        "start": 601,
        "end": 611
      },
      "directive": null,
      "start": 601,
      "end": 611
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 619,
            "end": 620
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 622
          },
          "optional": false,
          "computed": false,
          "start": 619,
          "end": 622
        },
        "prefix": true,
        "start": 612,
        "end": 622
      },
      "directive": null,
      "start": 612,
      "end": 622
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 631,
            "end": 632
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 633,
            "end": 634
          },
          "optional": false,
          "computed": false,
          "start": 631,
          "end": 634
        },
        "prefix": true,
        "start": 624,
        "end": 634
      },
      "directive": null,
      "start": 624,
      "end": 634
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 642,
            "end": 643
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 645
          },
          "optional": false,
          "computed": false,
          "start": 642,
          "end": 645
        },
        "prefix": true,
        "start": 635,
        "end": 645
      },
      "directive": null,
      "start": 635,
      "end": 645
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 645
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "number",
    "start": 23,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 46,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 70,
    "end": 71
  },
  {
    "type": "Null",
    "value": "null",
    "start": 72,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "number",
    "start": 85,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 108,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 118,
    "end": 119
  },
  {
    "type": "Null",
    "value": "null",
    "start": 120,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Identifier",
    "value": "number",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 142,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 152,
    "end": 153
  },
  {
    "type": "Null",
    "value": "null",
    "start": 154,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 166,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 178,
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
    "value": "any",
    "start": 181,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "i",
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
    "value": "never",
    "start": 192,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 201,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 230,
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
    "value": "number",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 243,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 262,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 265,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 287,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 295,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 301,
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
    "value": "Foo",
    "start": 304,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 308,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 316,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 325,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 338,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 346,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 355,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 358,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 366,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 375,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 379,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 390,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 401,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 412,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 423,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 434,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 445,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 456,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 463,
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
    "value": "h",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 467,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 478,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 490,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 497,
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
    "value": "a",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 501,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 508,
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
    "value": "b",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 512,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 523,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 534,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 545,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 556,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 567,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 578,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 589,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 601,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 612,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 624,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 635,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 644,
    "end": 645
  }
]
```
