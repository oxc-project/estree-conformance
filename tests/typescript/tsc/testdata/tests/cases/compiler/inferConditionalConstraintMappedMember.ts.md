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
        "name": "KeysWithoutStringIndex",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 79
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
              "start": 80,
              "end": 81
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 81
          }
        ],
        "start": 79,
        "end": 82
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 104
              },
              "typeArguments": null,
              "start": 103,
              "end": 104
            },
            "start": 97,
            "end": 104
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSStringKeyword",
              "start": 107,
              "end": 113
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 123
              },
              "typeArguments": null,
              "start": 122,
              "end": 123
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 126,
              "end": 131
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 135
              },
              "typeArguments": null,
              "start": 134,
              "end": 135
            },
            "start": 107,
            "end": 135
          },
          "optional": false,
          "readonly": null,
          "start": 89,
          "end": 137
        },
        "extendsType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 150
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 161
              },
              "typeArguments": null,
              "start": 160,
              "end": 161
            },
            "start": 154,
            "end": 161
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 171
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 170,
              "end": 171
            },
            "start": 164,
            "end": 171
          },
          "optional": false,
          "readonly": null,
          "start": 146,
          "end": 173
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 181
          },
          "typeArguments": null,
          "start": 180,
          "end": 181
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 188,
          "end": 193
        },
        "start": 89,
        "end": 193
      },
      "declare": false,
      "start": 52,
      "end": 193
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 272
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "KeysWithoutStringIndex",
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 297
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 308,
                          "end": 314
                        },
                        "start": 306,
                        "end": 314
                      },
                      "start": 301,
                      "end": 314
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 317,
                      "end": 323
                    },
                    "start": 315,
                    "end": 323
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 300,
                  "end": 324
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 328
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 330,
                      "end": 336
                    },
                    "start": 328,
                    "end": 336
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 325,
                  "end": 337
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 338,
                    "end": 341
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "baz",
                        "raw": "'baz'",
                        "start": 343,
                        "end": 348
                      },
                      "start": 343,
                      "end": 348
                    },
                    "start": 341,
                    "end": 348
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 338,
                  "end": 348
                }
              ],
              "start": 298,
              "end": 350
            }
          ],
          "start": 297,
          "end": 351
        },
        "start": 275,
        "end": 351
      },
      "declare": false,
      "start": 263,
      "end": 351
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RemoveIdxSgn",
          "optional": false,
          "typeAnnotation": null,
          "start": 461,
          "end": 473
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
                "start": 474,
                "end": 475
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 474,
              "end": 475
            }
          ],
          "start": 473,
          "end": 476
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 483
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
                  "start": 484,
                  "end": 485
                },
                "typeArguments": null,
                "start": 484,
                "end": 485
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KeysWithoutStringIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 509
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
                        "start": 510,
                        "end": 511
                      },
                      "typeArguments": null,
                      "start": 510,
                      "end": 511
                    }
                  ],
                  "start": 509,
                  "end": 512
                },
                "start": 487,
                "end": 512
              }
            ],
            "start": 483,
            "end": 513
          },
          "start": 479,
          "end": 513
        },
        "declare": false,
        "start": 456,
        "end": 513
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 449,
      "end": 513
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 52,
  "end": 670
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 52,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "KeysWithoutStringIndex",
    "start": 57,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 94,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 114,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 138,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 151,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 164,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 188,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 263,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "test",
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
    "value": "KeysWithoutStringIndex",
    "start": 275,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 301,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 308,
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
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 317,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 325,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "String",
    "value": "'baz'",
    "start": 343,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "export",
    "start": 449,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 456,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "RemoveIdxSgn",
    "start": 461,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "KeysWithoutStringIndex",
    "start": 487,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 512,
    "end": 513
  }
]
```
