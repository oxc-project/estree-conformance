__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 17,
              "end": 18
            },
            "definite": false,
            "start": 11,
            "end": 18
          }
        ],
        "declare": false,
        "start": 7,
        "end": 19
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 19
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
            },
            "init": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 37,
              "end": 39
            },
            "definite": false,
            "start": 31,
            "end": 39
          }
        ],
        "declare": false,
        "start": 27,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 20,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 78
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
                "name": "_brand1",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 89
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 91,
                  "end": 94
                },
                "start": 89,
                "end": 94
              },
              "accessibility": null,
              "static": false,
              "start": 82,
              "end": 95
            }
          ],
          "start": 79,
          "end": 97
        },
        "declare": false,
        "start": 65,
        "end": 97
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 58,
      "end": 97
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 119
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
                "name": "_brand2",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 149
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 151,
                  "end": 154
                },
                "start": 149,
                "end": 154
              },
              "accessibility": null,
              "static": false,
              "start": 142,
              "end": 155
            }
          ],
          "start": 120,
          "end": 157
        },
        "declare": false,
        "start": 106,
        "end": 157
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 99,
      "end": 157
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FooBar",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 182
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "member1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 204
                    },
                    "init": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 207,
                      "end": 208
                    },
                    "definite": false,
                    "start": 197,
                    "end": 208
                  }
                ],
                "declare": false,
                "start": 193,
                "end": 209
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 186,
              "end": 209
            }
          ],
          "start": 183,
          "end": 211
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 166,
        "end": 211
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 159,
      "end": 211
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FooBar",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 236
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "member2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 277
                    },
                    "init": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 280,
                      "end": 282
                    },
                    "definite": false,
                    "start": 270,
                    "end": 282
                  }
                ],
                "declare": false,
                "start": 266,
                "end": 283
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 259,
              "end": 283
            }
          ],
          "start": 237,
          "end": 285
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 220,
        "end": 285
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 213,
      "end": 285
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Kettle",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 306
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
                "name": "member1",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 317
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 320,
                "end": 321
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 310,
              "end": 322
            }
          ],
          "start": 307,
          "end": 324
        },
        "abstract": false,
        "declare": false,
        "start": 294,
        "end": 324
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 287,
      "end": 324
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Kettle",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 345
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
                "name": "member2",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 372
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 375,
                "end": 377
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 365,
              "end": 378
            }
          ],
          "start": 346,
          "end": 380
        },
        "abstract": false,
        "declare": false,
        "start": 333,
        "end": 380
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 326,
      "end": 380
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pot",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 396
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 399,
              "end": 400
            },
            "definite": false,
            "start": 393,
            "end": 400
          }
        ],
        "declare": false,
        "start": 389,
        "end": 401
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 382,
      "end": 401
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pot",
          "optional": false,
          "typeAnnotation": null,
          "start": 402,
          "end": 405
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 408,
          "end": 410
        },
        "start": 402,
        "end": 410
      },
      "directive": null,
      "start": 402,
      "end": 411
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Utensils",
          "optional": false,
          "typeAnnotation": null,
          "start": 444,
          "end": 452
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spoon",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 461
              },
              "initializer": null,
              "computed": false,
              "start": 456,
              "end": 461
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fork",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 468
              },
              "initializer": null,
              "computed": false,
              "start": 464,
              "end": 468
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Knife",
                "optional": false,
                "typeAnnotation": null,
                "start": 471,
                "end": 476
              },
              "initializer": null,
              "computed": false,
              "start": 471,
              "end": 476
            }
          ],
          "start": 453,
          "end": 478
        },
        "const": false,
        "declare": false,
        "start": 439,
        "end": 478
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 432,
      "end": 478
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Utensils",
          "optional": false,
          "typeAnnotation": null,
          "start": 492,
          "end": 500
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spork",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 528
              },
              "initializer": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 531,
                "end": 532
              },
              "computed": false,
              "start": 523,
              "end": 532
            }
          ],
          "start": 501,
          "end": 534
        },
        "const": false,
        "declare": false,
        "start": 487,
        "end": 534
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 480,
      "end": 534
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 534
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 11,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 58,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 65,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "_brand1",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "export",
    "start": 99,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 106,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "_brand2",
    "start": 142,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 159,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 166,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "FooBar",
    "start": 176,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 186,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 193,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "member1",
    "start": 197,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 213,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 220,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "FooBar",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 259,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 266,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "member2",
    "start": 270,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 287,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 294,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Kettle",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "member1",
    "start": 310,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 326,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 333,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Kettle",
    "start": 339,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "member2",
    "start": 365,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 375,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 382,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 389,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "Pot",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "Pot",
    "start": 402,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 408,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 432,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 439,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "Utensils",
    "start": 444,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "Spoon",
    "start": 456,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "Fork",
    "start": 464,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "Knife",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 480,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 487,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "Utensils",
    "start": 492,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "Spork",
    "start": 523,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 529,
    "end": 530
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  }
]
```
