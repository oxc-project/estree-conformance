__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 19,
                    "end": 20
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 22,
                    "end": 23
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 19,
                  "end": 23
                }
              ],
              "start": 17,
              "end": 25
            },
            "definite": false,
            "start": 13,
            "end": 25
          }
        ],
        "declare": false,
        "start": 7,
        "end": 26
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 40
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "typeArguments": null,
            "start": 43,
            "end": 51
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 66
              },
              "typeArguments": null,
              "start": 58,
              "end": 66
            },
            "start": 52,
            "end": 66
          },
          "start": 43,
          "end": 67
        },
        "declare": false,
        "start": 34,
        "end": 68
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 27,
      "end": 68
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 129
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "typeArguments": null,
            "start": 133,
            "end": 141
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 157
              },
              "typeArguments": null,
              "start": 149,
              "end": 157
            },
            "start": 143,
            "end": 157
          },
          "start": 132,
          "end": 158
        },
        "declare": false,
        "start": 122,
        "end": 159
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 115,
      "end": 159
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 254
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 259
                }
              ],
              "start": 257,
              "end": 260
            },
            "definite": false,
            "start": 251,
            "end": 260
          }
        ],
        "declare": false,
        "start": 245,
        "end": 261
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 238,
      "end": 261
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArrAlias",
          "optional": false,
          "typeAnnotation": null,
          "start": 274,
          "end": 282
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 295
            },
            "typeArguments": null,
            "start": 285,
            "end": 295
          },
          "indexType": {
            "type": "TSNumberKeyword",
            "start": 296,
            "end": 302
          },
          "start": 285,
          "end": 303
        },
        "declare": false,
        "start": 269,
        "end": 304
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 262,
      "end": 304
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CArr",
          "optional": false,
          "typeAnnotation": null,
          "start": 380,
          "end": 384
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 395
            },
            "typeArguments": null,
            "start": 387,
            "end": 395
          },
          "start": 387,
          "end": 397
        },
        "declare": false,
        "start": 375,
        "end": 398
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 368,
      "end": 398
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CArr2",
          "optional": false,
          "typeAnnotation": null,
          "start": 462,
          "end": 467
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 479
            },
            "typeArguments": null,
            "start": 471,
            "end": 479
          },
          "start": 470,
          "end": 482
        },
        "declare": false,
        "start": 457,
        "end": 483
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 450,
      "end": 483
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 581,
          "end": 587
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 598,
                  "end": 599
                },
                "typeArguments": null,
                "start": 591,
                "end": 599
              },
              "start": 591,
              "end": 600
            }
          ],
          "start": 590,
          "end": 601
        },
        "declare": false,
        "start": 576,
        "end": 602
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 569,
      "end": 602
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CTuple2",
          "optional": false,
          "typeAnnotation": null,
          "start": 669,
          "end": 676
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 688,
                  "end": 689
                },
                "typeArguments": null,
                "start": 681,
                "end": 689
              },
              "start": 680,
              "end": 691
            }
          ],
          "start": 679,
          "end": 692
        },
        "declare": false,
        "start": 664,
        "end": 693
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 657,
      "end": 693
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 694
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
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 34,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 52,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 58,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 115,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 122,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "C2",
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
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 133,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 143,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 149,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 238,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 245,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 262,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 269,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "ArrAlias",
    "start": 274,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 285,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 292,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 368,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 375,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "CArr",
    "start": 380,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 387,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 450,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 457,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "CArr2",
    "start": 462,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 471,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "]",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 569,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 576,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "CTuple",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 591,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 657,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 664,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "CTuple2",
    "start": 669,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 681,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  }
]
```
