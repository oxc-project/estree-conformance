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
        "name": "TerrestrialAnimalTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 38
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CAT",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 46
            },
            "initializer": {
              "type": "Literal",
              "value": "cat",
              "raw": "\"cat\"",
              "start": 49,
              "end": 54
            },
            "computed": false,
            "start": 43,
            "end": 54
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "DOG",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 61
            },
            "initializer": {
              "type": "Literal",
              "value": "dog",
              "raw": "\"dog\"",
              "start": 64,
              "end": 69
            },
            "computed": false,
            "start": 58,
            "end": 69
          }
        ],
        "start": 39,
        "end": 71
      },
      "const": false,
      "declare": false,
      "start": 11,
      "end": 71
    },
    {
      "type": "EmptyStatement",
      "start": 71,
      "end": 72
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AlienAnimalTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 95
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CAT",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 103
            },
            "initializer": {
              "type": "Literal",
              "value": "cat",
              "raw": "\"cat\"",
              "start": 106,
              "end": 111
            },
            "computed": false,
            "start": 100,
            "end": 111
          }
        ],
        "start": 96,
        "end": 114
      },
      "const": false,
      "declare": false,
      "start": 74,
      "end": 114
    },
    {
      "type": "EmptyStatement",
      "start": 114,
      "end": 115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnimalTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 133
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TerrestrialAnimalTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 158
            },
            "typeArguments": null,
            "start": 136,
            "end": 158
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AlienAnimalTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 177
            },
            "typeArguments": null,
            "start": 161,
            "end": 177
          }
        ],
        "start": 136,
        "end": 177
      },
      "declare": false,
      "start": 117,
      "end": 178
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TerrestrialCat",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 204
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 213
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TerrestrialAnimalTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 237
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CAT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 241
                  },
                  "start": 215,
                  "end": 241
                },
                "typeArguments": null,
                "start": 215,
                "end": 241
              },
              "start": 213,
              "end": 241
            },
            "accessibility": null,
            "static": false,
            "start": 209,
            "end": 242
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "address",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 252
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 254,
                "end": 260
              },
              "start": 252,
              "end": 260
            },
            "accessibility": null,
            "static": false,
            "start": 245,
            "end": 261
          }
        ],
        "start": 205,
        "end": 263
      },
      "declare": false,
      "start": 180,
      "end": 263
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AlienCat",
        "optional": false,
        "typeAnnotation": null,
        "start": 275,
        "end": 283
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 292
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AlienAnimalTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 310
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CAT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 314
                  },
                  "start": 294,
                  "end": 314
                },
                "typeArguments": null,
                "start": 294,
                "end": 314
              },
              "start": 292,
              "end": 314
            },
            "accessibility": null,
            "static": false,
            "start": 288,
            "end": 314
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "planet",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 323
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 325,
                "end": 331
              },
              "start": 323,
              "end": 331
            },
            "accessibility": null,
            "static": false,
            "start": 317,
            "end": 332
          }
        ],
        "start": 284,
        "end": 334
      },
      "declare": false,
      "start": 265,
      "end": 334
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cats",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 345
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TerrestrialCat",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 362
            },
            "typeArguments": null,
            "start": 348,
            "end": 362
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AlienCat",
              "optional": false,
              "typeAnnotation": null,
              "start": 365,
              "end": 373
            },
            "typeArguments": null,
            "start": 365,
            "end": 373
          }
        ],
        "start": 348,
        "end": 373
      },
      "declare": false,
      "start": 336,
      "end": 374
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CatMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 387
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "V",
          "optional": false,
          "typeAnnotation": null,
          "start": 395,
          "end": 396
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnimalTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 411
          },
          "typeArguments": null,
          "start": 400,
          "end": 411
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extract",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 421
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Cats",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 426
                  },
                  "typeArguments": null,
                  "start": 422,
                  "end": 426
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 434
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 436,
                            "end": 437
                          },
                          "typeArguments": null,
                          "start": 436,
                          "end": 437
                        },
                        "start": 434,
                        "end": 437
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 430,
                      "end": 437
                    }
                  ],
                  "start": 428,
                  "end": 439
                }
              ],
              "start": 421,
              "end": 440
            },
            "start": 414,
            "end": 440
          },
          "start": 414,
          "end": 442
        },
        "optional": false,
        "readonly": null,
        "start": 390,
        "end": 444
      },
      "declare": false,
      "start": 376,
      "end": 445
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
            "name": "catMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CatMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 461,
                  "end": 467
                },
                "typeArguments": null,
                "start": 461,
                "end": 467
              },
              "start": 459,
              "end": 467
            },
            "start": 453,
            "end": 467
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
                  "name": "cat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 477
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 487,
                            "end": 491
                          },
                          "value": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TerrestrialAnimalTypes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 493,
                              "end": 515
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CAT",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 516,
                              "end": 519
                            },
                            "optional": false,
                            "computed": false,
                            "start": 493,
                            "end": 519
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 487,
                          "end": 519
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "address",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 521,
                            "end": 528
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 530,
                            "end": 532
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 521,
                          "end": 532
                        }
                      ],
                      "start": 485,
                      "end": 534
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 542,
                            "end": 546
                          },
                          "value": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AlienAnimalTypes",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 548,
                              "end": 564
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CAT",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 565,
                              "end": 568
                            },
                            "optional": false,
                            "computed": false,
                            "start": 548,
                            "end": 568
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 542,
                          "end": 568
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "planet",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 570,
                            "end": 576
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 578,
                            "end": 580
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 570,
                          "end": 580
                        }
                      ],
                      "start": 540,
                      "end": 582
                    }
                  ],
                  "start": 479,
                  "end": 586
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 474,
                "end": 586
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dog",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 590,
                  "end": 593
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 595,
                    "end": 597
                  },
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNeverKeyword",
                      "start": 601,
                      "end": 606
                    },
                    "start": 601,
                    "end": 608
                  },
                  "start": 595,
                  "end": 608
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 590,
                "end": 608
              }
            ],
            "start": 470,
            "end": 610
          },
          "definite": false,
          "start": 453,
          "end": 610
        }
      ],
      "declare": false,
      "start": 447,
      "end": 611
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 611
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 11,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "TerrestrialAnimalTypes",
    "start": 16,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "CAT",
    "start": 43,
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
    "value": "\"cat\"",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "DOG",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"dog\"",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "enum",
    "start": 74,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "AlienAnimalTypes",
    "start": 79,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "CAT",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "String",
    "value": "\"cat\"",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 117,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "AnimalTypes",
    "start": 122,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "TerrestrialAnimalTypes",
    "start": 136,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "AlienAnimalTypes",
    "start": 161,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 180,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "TerrestrialCat",
    "start": 190,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "TerrestrialAnimalTypes",
    "start": 215,
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
    "value": "CAT",
    "start": 238,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "address",
    "start": 245,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 265,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "AlienCat",
    "start": 275,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "AlienAnimalTypes",
    "start": 294,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "CAT",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "planet",
    "start": 317,
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
    "value": "string",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 336,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Cats",
    "start": 341,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "TerrestrialCat",
    "start": 348,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "AlienCat",
    "start": 365,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 376,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "CatMap",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 397,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "AnimalTypes",
    "start": 400,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 414,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "Cats",
    "start": 422,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 430,
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
    "value": "V",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 447,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "catMap",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "CatMap",
    "start": 461,
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
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "cat",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "TerrestrialAnimalTypes",
    "start": 493,
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
    "value": "CAT",
    "start": 516,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "address",
    "start": 521,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 530,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "AlienAnimalTypes",
    "start": 548,
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
    "value": "CAT",
    "start": 565,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "planet",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "dog",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 598,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 601,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  }
]
```
