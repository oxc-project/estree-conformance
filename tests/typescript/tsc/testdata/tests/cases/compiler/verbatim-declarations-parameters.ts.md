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
        "name": "Map",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 11,
            "end": 13
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 33,
              "end": 36
            },
            "optional": false,
            "readonly": null,
            "start": 16,
            "end": 38
          }
        ],
        "start": 11,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MapOrUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 58
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
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 64
            },
            "typeArguments": null,
            "start": 61,
            "end": 64
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 67,
            "end": 76
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "dummy",
              "raw": "\"dummy\"",
              "start": 79,
              "end": 86
            },
            "start": 79,
            "end": 86
          }
        ],
        "start": 61,
        "end": 86
      },
      "declare": false,
      "start": 39,
      "end": 86
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 103
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 119
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reuseTypeNode",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Map",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 187,
                                "end": 190
                              },
                              "typeArguments": null,
                              "start": 187,
                              "end": 190
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 193,
                              "end": 202
                            }
                          ],
                          "start": 187,
                          "end": 202
                        },
                        "start": 185,
                        "end": 202
                      },
                      "start": 171,
                      "end": 202
                    },
                    "readonly": false,
                    "static": false,
                    "start": 164,
                    "end": 202
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reuseTypeNode2",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Exclude",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 232,
                            "end": 239
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "MapOrUndefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 240,
                                  "end": 254
                                },
                                "typeArguments": null,
                                "start": 240,
                                "end": 254
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "dummy",
                                  "raw": "\"dummy\"",
                                  "start": 256,
                                  "end": 263
                                },
                                "start": 256,
                                "end": 263
                              }
                            ],
                            "start": 239,
                            "end": 264
                          },
                          "start": 232,
                          "end": 264
                        },
                        "start": 230,
                        "end": 264
                      },
                      "start": 215,
                      "end": 264
                    },
                    "readonly": false,
                    "static": false,
                    "start": 208,
                    "end": 264
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolveType",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 345,
                            "end": 348
                          },
                          "typeArguments": null,
                          "start": 345,
                          "end": 348
                        },
                        "start": 343,
                        "end": 348
                      },
                      "start": 331,
                      "end": 348
                    },
                    "readonly": false,
                    "static": false,
                    "start": 324,
                    "end": 348
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 354,
                  "end": 357
                },
                "expression": false,
                "start": 119,
                "end": 357
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 108,
              "end": 357
            }
          ],
          "start": 104,
          "end": 359
        },
        "abstract": false,
        "declare": false,
        "start": 94,
        "end": 359
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 87,
      "end": 359
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 377,
          "end": 381
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "reuseTypeNode",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 441,
                        "end": 444
                      },
                      "typeArguments": null,
                      "start": 441,
                      "end": 444
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 447,
                      "end": 456
                    }
                  ],
                  "start": 441,
                  "end": 456
                },
                "start": 439,
                "end": 456
              },
              "start": 426,
              "end": 456
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 459,
              "end": 461
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 461
          },
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "reuseTypeNode2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 490
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MapOrUndefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 491,
                          "end": 505
                        },
                        "typeArguments": null,
                        "start": 491,
                        "end": 505
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "dummy",
                          "raw": "\"dummy\"",
                          "start": 507,
                          "end": 514
                        },
                        "start": 507,
                        "end": 514
                      }
                    ],
                    "start": 490,
                    "end": 515
                  },
                  "start": 483,
                  "end": 515
                },
                "start": 481,
                "end": 515
              },
              "start": 467,
              "end": 515
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 519,
              "end": 521
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 521
          },
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "resolveType",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 597
                  },
                  "typeArguments": null,
                  "start": 594,
                  "end": 597
                },
                "start": 592,
                "end": 597
              },
              "start": 581,
              "end": 597
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 600,
              "end": 602
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 602
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "requiredParam",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 624,
                "end": 630
              },
              "start": 622,
              "end": 630
            },
            "start": 609,
            "end": 630
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 632,
          "end": 636
        },
        "expression": false,
        "start": 368,
        "end": 636
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 361,
      "end": 636
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 636
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 21,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 39,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "MapOrUndefined",
    "start": 44,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 67,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 77,
    "end": 78
  },
  {
    "type": "String",
    "value": "\"dummy\"",
    "start": 79,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 87,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 108,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 164,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "reuseTypeNode",
    "start": 171,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 187,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 193,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 208,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "reuseTypeNode2",
    "start": 215,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 232,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "MapOrUndefined",
    "start": 240,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"dummy\"",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 324,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "resolveType",
    "start": 331,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "Map",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 361,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 368,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "reuseTypeNode",
    "start": 426,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 441,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 447,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
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
    "value": "reuseTypeNode2",
    "start": 467,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 483,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "MapOrUndefined",
    "start": 491,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 505,
    "end": 506
  },
  {
    "type": "String",
    "value": "\"dummy\"",
    "start": 507,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "resolveType",
    "start": 581,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "requiredParam",
    "start": 609,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 624,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 635,
    "end": 636
  }
]
```
