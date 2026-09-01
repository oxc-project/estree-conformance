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
        "name": "LengthDown",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 38
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Str",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 45
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 42,
            "end": 60
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 70
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                },
                {
                  "type": "TSBigIntKeyword",
                  "start": 88,
                  "end": 94
                }
              ],
              "start": 79,
              "end": 94
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 64,
            "end": 94
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "It",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 100
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 98,
            "end": 100
          }
        ],
        "start": 38,
        "end": 102
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "It",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 107
          },
          "typeArguments": null,
          "start": 105,
          "end": 107
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "StrIter",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 123
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterator",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 132
            },
            "start": 116,
            "end": 132
          },
          "typeArguments": null,
          "start": 116,
          "end": 132
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "StrIter",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 144
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "CutAt",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 150
              },
              "start": 137,
              "end": 150
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 154
                  },
                  "typeArguments": null,
                  "start": 151,
                  "end": 154
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "It",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 158
                  },
                  "typeArguments": null,
                  "start": 156,
                  "end": 158
                }
              ],
              "start": 150,
              "end": 159
            },
            "start": 137,
            "end": 159
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 168,
                "end": 171
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 182,
                "end": 184
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$Rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 182
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 177,
                  "end": 182
                },
                "start": 171,
                "end": 182
              }
            ],
            "start": 168,
            "end": 184
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "LengthDown",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 201
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$Rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 207
                  },
                  "typeArguments": null,
                  "start": 202,
                  "end": 207
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 212
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 219
                        },
                        "typeArguments": null,
                        "start": 213,
                        "end": 219
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StrIter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 221,
                            "end": 228
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 229,
                            "end": 234
                          },
                          "start": 221,
                          "end": 234
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "It",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 235,
                                "end": 237
                              },
                              "typeArguments": null,
                              "start": 235,
                              "end": 237
                            }
                          ],
                          "start": 234,
                          "end": 238
                        },
                        "start": 221,
                        "end": 238
                      }
                    ],
                    "start": 212,
                    "end": 239
                  },
                  "start": 209,
                  "end": 239
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "It",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 243
                  },
                  "typeArguments": null,
                  "start": 241,
                  "end": 243
                }
              ],
              "start": 201,
              "end": 244
            },
            "start": 191,
            "end": 244
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "LengthDown",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 261
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 265
                  },
                  "typeArguments": null,
                  "start": 262,
                  "end": 265
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 273
                  },
                  "typeArguments": null,
                  "start": 267,
                  "end": 273
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StrIter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 275,
                      "end": 282
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Prev",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 283,
                      "end": 287
                    },
                    "start": 275,
                    "end": 287
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "It",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 288,
                          "end": 290
                        },
                        "typeArguments": null,
                        "start": 288,
                        "end": 290
                      }
                    ],
                    "start": 287,
                    "end": 291
                  },
                  "start": 275,
                  "end": 291
                }
              ],
              "start": 261,
              "end": 292
            },
            "start": 251,
            "end": 292
          },
          "start": 137,
          "end": 292
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Length",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 303
          },
          "typeArguments": null,
          "start": 297,
          "end": 303
        },
        "start": 105,
        "end": 303
      },
      "declare": false,
      "start": 23,
      "end": 304
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 314
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
              "start": 315,
              "end": 316
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 315,
            "end": 316
          }
        ],
        "start": 314,
        "end": 317
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
            "start": 320,
            "end": 321
          },
          "typeArguments": null,
          "start": 320,
          "end": 321
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 330,
          "end": 337
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSUnknownKeyword",
            "start": 342,
            "end": 349
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 358,
                "end": 361
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 372,
                "end": 374
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$Rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 372
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 367,
                  "end": 372
                },
                "start": 361,
                "end": 372
              }
            ],
            "start": 358,
            "end": 374
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 384
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 386
                  },
                  "typeArguments": null,
                  "start": 385,
                  "end": 386
                }
              ],
              "start": 384,
              "end": 387
            },
            "start": 381,
            "end": 387
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 397
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnknownKeyword",
                  "start": 398,
                  "end": 405
                }
              ],
              "start": 397,
              "end": 406
            },
            "start": 394,
            "end": 406
          },
          "start": 342,
          "end": 406
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 411,
          "end": 418
        },
        "start": 320,
        "end": 418
      },
      "declare": false,
      "start": 306,
      "end": 419
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 419
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 23,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "LengthDown",
    "start": 28,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "Str",
    "start": 42,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 46,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 64,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 71,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "It",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "It",
    "start": 105,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 108,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "StrIter",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 124,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "StrIter",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "CutAt",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Str",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "It",
    "start": 156,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 160,
    "end": 167
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "$Rest",
    "start": 177,
    "end": 182
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "LengthDown",
    "start": 191,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "$Rest",
    "start": 202,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "Add",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "StrIter",
    "start": 221,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "It",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "It",
    "start": 241,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "LengthDown",
    "start": 251,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Str",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "StrIter",
    "start": 275,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "Prev",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "It",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 306,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 311,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 322,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 330,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 342,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 350,
    "end": 357
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 358,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 361,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "$Rest",
    "start": 367,
    "end": 372
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 394,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 398,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 411,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  }
]
```
