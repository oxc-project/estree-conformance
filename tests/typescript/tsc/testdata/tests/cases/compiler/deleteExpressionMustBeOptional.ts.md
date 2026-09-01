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
                  "start": 325,
                  "end": 327
                },
                "typeArguments": null,
                "start": 325,
                "end": 327
              },
              "start": 323,
              "end": 327
            },
            "start": 322,
            "end": 327
          },
          "init": null,
          "definite": false,
          "start": 322,
          "end": 327
        }
      ],
      "declare": true,
      "start": 308,
      "end": 327
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
                  "start": 345,
                  "end": 347
                },
                "typeArguments": null,
                "start": 345,
                "end": 347
              },
              "start": 343,
              "end": 347
            },
            "start": 342,
            "end": 347
          },
          "init": null,
          "definite": false,
          "start": 342,
          "end": 347
        }
      ],
      "declare": true,
      "start": 328,
      "end": 347
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
            "start": 356,
            "end": 357
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 359
          },
          "optional": false,
          "computed": false,
          "start": 356,
          "end": 359
        },
        "prefix": true,
        "start": 349,
        "end": 359
      },
      "directive": null,
      "start": 349,
      "end": 359
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
            "start": 367,
            "end": 368
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 370
          },
          "optional": false,
          "computed": false,
          "start": 367,
          "end": 370
        },
        "prefix": true,
        "start": 360,
        "end": 370
      },
      "directive": null,
      "start": 360,
      "end": 370
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
            "start": 378,
            "end": 379
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 381
          },
          "optional": false,
          "computed": false,
          "start": 378,
          "end": 381
        },
        "prefix": true,
        "start": 371,
        "end": 381
      },
      "directive": null,
      "start": 371,
      "end": 381
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
            "start": 389,
            "end": 390
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "optional": false,
          "computed": false,
          "start": 389,
          "end": 392
        },
        "prefix": true,
        "start": 382,
        "end": 392
      },
      "directive": null,
      "start": 382,
      "end": 392
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
            "start": 400,
            "end": 401
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 403
          },
          "optional": false,
          "computed": false,
          "start": 400,
          "end": 403
        },
        "prefix": true,
        "start": 393,
        "end": 403
      },
      "directive": null,
      "start": 393,
      "end": 403
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
            "start": 411,
            "end": 412
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 414
          },
          "optional": false,
          "computed": false,
          "start": 411,
          "end": 414
        },
        "prefix": true,
        "start": 404,
        "end": 414
      },
      "directive": null,
      "start": 404,
      "end": 414
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
            "start": 422,
            "end": 423
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 425
          },
          "optional": false,
          "computed": false,
          "start": 422,
          "end": 425
        },
        "prefix": true,
        "start": 415,
        "end": 425
      },
      "directive": null,
      "start": 415,
      "end": 425
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
            "start": 433,
            "end": 434
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 436
          },
          "optional": false,
          "computed": false,
          "start": 433,
          "end": 436
        },
        "prefix": true,
        "start": 426,
        "end": 436
      },
      "directive": null,
      "start": 426,
      "end": 436
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
            "start": 444,
            "end": 445
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 447
          },
          "optional": false,
          "computed": false,
          "start": 444,
          "end": 447
        },
        "prefix": true,
        "start": 437,
        "end": 447
      },
      "directive": null,
      "start": 437,
      "end": 447
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
            "start": 455,
            "end": 456
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 458
          },
          "optional": false,
          "computed": false,
          "start": 455,
          "end": 458
        },
        "prefix": true,
        "start": 448,
        "end": 458
      },
      "directive": null,
      "start": 448,
      "end": 458
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
            "start": 467,
            "end": 468
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 470
          },
          "optional": false,
          "computed": false,
          "start": 467,
          "end": 470
        },
        "prefix": true,
        "start": 460,
        "end": 470
      },
      "directive": null,
      "start": 460,
      "end": 470
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
            "start": 478,
            "end": 479
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 480,
            "end": 481
          },
          "optional": false,
          "computed": false,
          "start": 478,
          "end": 481
        },
        "prefix": true,
        "start": 471,
        "end": 481
      },
      "directive": null,
      "start": 471,
      "end": 481
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
            "start": 490,
            "end": 491
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 493
          },
          "optional": false,
          "computed": false,
          "start": 490,
          "end": 493
        },
        "prefix": true,
        "start": 483,
        "end": 493
      },
      "directive": null,
      "start": 483,
      "end": 493
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
            "start": 501,
            "end": 502
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 504
          },
          "optional": false,
          "computed": false,
          "start": 501,
          "end": 504
        },
        "prefix": true,
        "start": 494,
        "end": 504
      },
      "directive": null,
      "start": 494,
      "end": 504
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 504
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
    "value": "a",
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
    "value": "AA",
    "start": 325,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 328,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 336,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 345,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 349,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 360,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 367,
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
    "value": "b",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 371,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 382,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 393,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 404,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 415,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 426,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 437,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 448,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 460,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 471,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 483,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 494,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 503,
    "end": 504
  }
]
```
