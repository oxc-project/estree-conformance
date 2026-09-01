__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 57
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 68,
          "end": 75
        },
        "start": 60,
        "end": 76
      },
      "importKind": "value",
      "start": 45,
      "end": 77
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TranslationEntry",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 100
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 113
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 115,
                    "end": 117
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSUnknownKeyword",
                        "start": 121,
                        "end": 128
                      }
                    ],
                    "start": 120,
                    "end": 129
                  }
                ],
                "start": 115,
                "end": 129
              },
              "start": 113,
              "end": 129
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 130
          }
        ],
        "start": 103,
        "end": 132
      },
      "declare": false,
      "start": 79,
      "end": 132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Translations",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 150
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 168
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 171,
                            "end": 177
                          }
                        ],
                        "start": 170,
                        "end": 178
                      },
                      "start": 168,
                      "end": 178
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 164,
                    "end": 178
                  }
                ],
                "start": 162,
                "end": 180
              },
              "start": 160,
              "end": 180
            },
            "accessibility": null,
            "static": false,
            "start": 159,
            "end": 181
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
              "start": 186,
              "end": 187
            },
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 191,
                      "end": 195
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [],
                        "start": 197,
                        "end": 199
                      },
                      "start": 195,
                      "end": 199
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 191,
                    "end": 199
                  }
                ],
                "start": 189,
                "end": 201
              },
              "start": 187,
              "end": 201
            },
            "accessibility": null,
            "static": false,
            "start": 186,
            "end": 201
          }
        ],
        "start": 153,
        "end": 203
      },
      "declare": false,
      "start": 133,
      "end": 203
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 209,
        "end": 215
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Entry",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 221
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TranslationEntry",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 246
              },
              "typeArguments": null,
              "start": 230,
              "end": 246
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 216,
            "end": 246
          }
        ],
        "start": 215,
        "end": 247
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
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
                  "name": "getTranslationEntry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 275
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "allTranslations",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Translations",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 295,
                              "end": 307
                            },
                            "typeArguments": null,
                            "start": 295,
                            "end": 307
                          },
                          "start": 293,
                          "end": 307
                        },
                        "start": 278,
                        "end": 307
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Entry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 312,
                          "end": 317
                        },
                        "typeArguments": null,
                        "start": 312,
                        "end": 317
                      },
                      "start": 309,
                      "end": 317
                    },
                    "start": 277,
                    "end": 317
                  },
                  "start": 275,
                  "end": 317
                },
                "accessibility": null,
                "static": false,
                "start": 256,
                "end": 318
              }
            ],
            "start": 250,
            "end": 320
          },
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Entry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 329
                },
                "typeArguments": null,
                "start": 324,
                "end": 329
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "args",
                  "raw": "\"args\"",
                  "start": 330,
                  "end": 336
                },
                "start": 330,
                "end": 336
              },
              "start": 324,
              "end": 337
            },
            "extendsType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSUnknownKeyword",
                  "start": 347,
                  "end": 354
                }
              ],
              "start": 346,
              "end": 355
            },
            "trueType": {
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
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 368
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Entry",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 370,
                            "end": 375
                          },
                          "typeArguments": null,
                          "start": 370,
                          "end": 375
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "args",
                            "raw": "\"args\"",
                            "start": 376,
                            "end": 382
                          },
                          "start": 376,
                          "end": 382
                        },
                        "start": 370,
                        "end": 383
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 384,
                          "end": 385
                        },
                        "start": 384,
                        "end": 385
                      },
                      "start": 370,
                      "end": 386
                    },
                    "start": 368,
                    "end": 386
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 364,
                  "end": 386
                }
              ],
              "start": 358,
              "end": 388
            },
            "falseType": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 391,
              "end": 393
            },
            "start": 324,
            "end": 393
          }
        ],
        "start": 250,
        "end": 394
      },
      "declare": false,
      "start": 204,
      "end": 395
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 414,
        "end": 415
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Entry",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 421
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TranslationEntry",
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 446
              },
              "typeArguments": null,
              "start": 430,
              "end": 446
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 416,
            "end": 446
          }
        ],
        "start": 415,
        "end": 447
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 466
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Entry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 472
                    },
                    "typeArguments": null,
                    "start": 467,
                    "end": 472
                  }
                ],
                "start": 466,
                "end": 473
              },
              "start": 460,
              "end": 473
            },
            "start": 458,
            "end": 473
          },
          "start": 453,
          "end": 473
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 480
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 488
            },
            "start": 477,
            "end": 488
          },
          "typeArguments": null,
          "start": 477,
          "end": 488
        },
        "start": 475,
        "end": 488
      },
      "body": null,
      "expression": false,
      "start": 397,
      "end": 489
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "T",
            "start": 492,
            "end": 493
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "getTranslationEntry",
                "start": 494,
                "end": 513
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "allTranslations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 516,
                      "end": 531
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "allTranslations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 536,
                      "end": 551
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 553
                    },
                    "optional": false,
                    "computed": false,
                    "start": 536,
                    "end": 553
                  },
                  "id": null,
                  "generator": false,
                  "start": 515,
                  "end": 553
                },
                "start": 514,
                "end": 554
              },
              "start": 494,
              "end": 554
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "args",
                "start": 555,
                "end": 559
              },
              "value": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 560,
                "end": 563
              },
              "start": 555,
              "end": 563
            }
          ],
          "selfClosing": true,
          "start": 491,
          "end": 566
        },
        "children": [],
        "closingElement": null,
        "start": 491,
        "end": 566
      },
      "directive": null,
      "start": 491,
      "end": 566
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 566
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 60,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 68,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 79,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "TranslationEntry",
    "start": 84,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 121,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 133,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Translations",
    "start": 138,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 204,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "TProps",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "Entry",
    "start": 216,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 222,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "TranslationEntry",
    "start": 230,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "getTranslationEntry",
    "start": 256,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "allTranslations",
    "start": 278,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "Translations",
    "start": 295,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 309,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "Entry",
    "start": 312,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "Entry",
    "start": 324,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 329,
    "end": 330
  },
  {
    "type": "String",
    "value": "\"args\"",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 338,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 347,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "Entry",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376
  },
  {
    "type": "String",
    "value": "\"args\"",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 383,
    "end": 384
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 397,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 405,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "Entry",
    "start": 416,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 422,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "TranslationEntry",
    "start": 430,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 453,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "TProps",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "Entry",
    "start": 467,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 477,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 481,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492
  },
  {
    "type": "JSXIdentifier",
    "value": "T",
    "start": 492,
    "end": 493
  },
  {
    "type": "JSXIdentifier",
    "value": "getTranslationEntry",
    "start": 494,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "allTranslations",
    "start": 516,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 533,
    "end": 535
  },
  {
    "type": "JSXIdentifier",
    "value": "allTranslations",
    "start": 536,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 551,
    "end": 552
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554
  },
  {
    "type": "JSXIdentifier",
    "value": "args",
    "start": 555,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 559,
    "end": 560
  },
  {
    "type": "JSXText",
    "value": "\"a\"",
    "start": 560,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 565,
    "end": 566
  }
]
```
