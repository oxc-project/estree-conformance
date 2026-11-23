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
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 277
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 279
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 278,
            "end": 279
          }
        ],
        "start": 277,
        "end": 280
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 284
          },
          "typeArguments": null,
          "start": 283,
          "end": 284
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 294,
                "end": 301
              },
              "start": 294,
              "end": 302
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 314
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 313,
                  "end": 314
                },
                "start": 307,
                "end": 314
              },
              "start": 304,
              "end": 314
            }
          ],
          "start": 293,
          "end": 315
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 319,
                "end": 320
              },
              "start": 319,
              "end": 320
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 326
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 327,
                        "end": 328
                      },
                      "typeArguments": null,
                      "start": 327,
                      "end": 328
                    }
                  ],
                  "start": 326,
                  "end": 329
                },
                "start": 325,
                "end": 329
              },
              "start": 322,
              "end": 329
            }
          ],
          "start": 318,
          "end": 330
        },
        "falseType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "start": 333,
          "end": 335
        },
        "start": 283,
        "end": 335
      },
      "declare": false,
      "start": 271,
      "end": 336
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 343
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 347
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 348,
              "end": 350
            }
          ],
          "start": 347,
          "end": 351
        },
        "start": 346,
        "end": 351
      },
      "declare": false,
      "start": 337,
      "end": 352
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 573,
        "end": 574
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 578
          },
          "typeArguments": null,
          "start": 577,
          "end": 578
        },
        "start": 577,
        "end": 580
      },
      "declare": false,
      "start": 568,
      "end": 581
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 588,
            "end": 589
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 593,
                  "end": 595
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 599,
                    "end": 600
                  },
                  "typeArguments": null,
                  "start": 599,
                  "end": 600
                },
                "start": 593,
                "end": 600
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "flat",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 606
              },
              "optional": false,
              "computed": false,
              "start": 592,
              "end": 606
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Infinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 607,
                "end": 615
              }
            ],
            "optional": false,
            "start": 592,
            "end": 616
          },
          "definite": false,
          "start": 588,
          "end": 616
        }
      ],
      "declare": false,
      "start": 582,
      "end": 617
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 617
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 271,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 285,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 294,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 304,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 307,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 322,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 337,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 568,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 582,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 596,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "flat",
    "start": 602,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "Infinity",
    "start": 607,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617
  }
]
```
