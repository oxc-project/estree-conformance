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
        "name": "Properties",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
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
              "name": "property1",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 45
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__property2",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              },
              "start": 61,
              "end": 69
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 70
          }
        ],
        "start": 21,
        "end": 72
      },
      "declare": false,
      "start": 0,
      "end": 72
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
            "name": "ok",
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
                  "start": 147,
                  "end": 157
                },
                "typeArguments": null,
                "start": 147,
                "end": 157
              },
              "start": 145,
              "end": 157
            },
            "start": 143,
            "end": 157
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
                  "name": "property1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 175
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 177,
                  "end": 179
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 166,
                "end": 179
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__property2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 196
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 198,
                  "end": 200
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 185,
                "end": 200
              }
            ],
            "start": 160,
            "end": 202
          },
          "definite": false,
          "start": 143,
          "end": 202
        }
      ],
      "declare": false,
      "start": 137,
      "end": 203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 272
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Properties",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 291
          },
          "typeArguments": null,
          "start": 281,
          "end": 291
        },
        "start": 275,
        "end": 291
      },
      "declare": false,
      "start": 263,
      "end": 292
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
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Keys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 306
                },
                "typeArguments": null,
                "start": 302,
                "end": 306
              },
              "start": 300,
              "end": 306
            },
            "start": 299,
            "end": 306
          },
          "init": {
            "type": "Literal",
            "value": "__property2",
            "raw": "\"__property2\"",
            "start": 309,
            "end": 322
          },
          "definite": false,
          "start": 299,
          "end": 322
        }
      ],
      "declare": false,
      "start": 293,
      "end": 323
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Property2Type",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 373
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Properties",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 386
          },
          "typeArguments": null,
          "start": 376,
          "end": 386
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "__property2",
            "raw": "\"__property2\"",
            "start": 387,
            "end": 400
          },
          "start": 387,
          "end": 400
        },
        "start": 376,
        "end": 401
      },
      "declare": false,
      "start": 355,
      "end": 402
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
            "name": "partial",
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
                  "start": 451,
                  "end": 458
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Properties",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 469
                      },
                      "typeArguments": null,
                      "start": 459,
                      "end": 469
                    }
                  ],
                  "start": 458,
                  "end": 470
                },
                "start": 451,
                "end": 470
              },
              "start": 449,
              "end": 470
            },
            "start": 442,
            "end": 470
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
                  "name": "property1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 488
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 490,
                  "end": 492
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 479,
                "end": 492
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__property2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 509
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 511,
                  "end": 513
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 498,
                "end": 513
              }
            ],
            "start": 473,
            "end": 515
          },
          "definite": false,
          "start": 442,
          "end": 515
        }
      ],
      "declare": false,
      "start": 436,
      "end": 516
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 516
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
    "value": "Properties",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 27,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "__property2",
    "start": 50,
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
    "value": "string",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 147,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 166,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 177,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "__property2",
    "start": 185,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 263,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 268,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 275,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 281,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 293,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 302,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "String",
    "value": "\"__property2\"",
    "start": 309,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 355,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "Property2Type",
    "start": 360,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 376,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 386,
    "end": 387
  },
  {
    "type": "String",
    "value": "\"__property2\"",
    "start": 387,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 436,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "partial",
    "start": 442,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 451,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "Properties",
    "start": 459,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "property1",
    "start": 479,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 488,
    "end": 489
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "__property2",
    "start": 498,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  }
]
```
