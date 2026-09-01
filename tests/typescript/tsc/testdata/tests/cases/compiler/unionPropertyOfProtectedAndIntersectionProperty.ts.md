__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 27
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 30,
              "end": 31
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 14,
            "end": 32
          }
        ],
        "start": 10,
        "end": 34
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 45
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 63
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 66,
              "end": 67
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 50,
            "end": 68
          }
        ],
        "start": 46,
        "end": 70
      },
      "abstract": false,
      "declare": false,
      "start": 36,
      "end": 70
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nothing",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 84
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 98
              },
              "typeArguments": null,
              "start": 95,
              "end": 98
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 85,
            "end": 98
          }
        ],
        "start": 84,
        "end": 99
      },
      "typeAnnotation": {
        "type": "TSVoidKeyword",
        "start": 102,
        "end": 106
      },
      "declare": false,
      "start": 72,
      "end": 107
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Broken",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 120
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 136
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 137,
                          "end": 140
                        },
                        "typeArguments": null,
                        "start": 137,
                        "end": 140
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 143,
                          "end": 146
                        },
                        "typeArguments": null,
                        "start": 143,
                        "end": 146
                      }
                    ],
                    "start": 137,
                    "end": 146
                  }
                ],
                "start": 136,
                "end": 147
              },
              "start": 131,
              "end": 147
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 121,
            "end": 147
          }
        ],
        "start": 120,
        "end": 148
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 166
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 177
            },
            "typeArguments": null,
            "start": 176,
            "end": 177
          },
          "start": 170,
          "end": 177
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 181
              },
              "typeArguments": null,
              "start": 180,
              "end": 181
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 183
              },
              "typeArguments": null,
              "start": 182,
              "end": 183
            },
            "start": 180,
            "end": 184
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 196
            },
            "typeArguments": null,
            "start": 193,
            "end": 196
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nothing",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 206
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 208
                    },
                    "typeArguments": null,
                    "start": 207,
                    "end": 208
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 210
                    },
                    "typeArguments": null,
                    "start": 209,
                    "end": 210
                  },
                  "start": 207,
                  "end": 211
                }
              ],
              "start": 206,
              "end": 212
            },
            "start": 199,
            "end": 212
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 215,
            "end": 220
          },
          "start": 180,
          "end": 220
        },
        "optional": false,
        "readonly": true,
        "start": 151,
        "end": 223
      },
      "declare": false,
      "start": 109,
      "end": 224
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_3",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 352
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 359
              },
              "typeArguments": null,
              "start": 356,
              "end": 359
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 365
              },
              "typeArguments": null,
              "start": 362,
              "end": 365
            }
          ],
          "start": 356,
          "end": 365
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 367,
            "end": 372
          },
          "start": 367,
          "end": 372
        },
        "start": 355,
        "end": 373
      },
      "declare": false,
      "start": 345,
      "end": 374
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_4",
        "optional": false,
        "typeAnnotation": null,
        "start": 394,
        "end": 396
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 403
              },
              "typeArguments": null,
              "start": 400,
              "end": 403
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 409
              },
              "typeArguments": null,
              "start": 406,
              "end": 409
            }
          ],
          "start": 400,
          "end": 409
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 411,
            "end": 416
          },
          "start": 411,
          "end": 416
        },
        "start": 399,
        "end": 417
      },
      "declare": false,
      "start": 389,
      "end": 418
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_5",
        "optional": false,
        "typeAnnotation": null,
        "start": 441,
        "end": 443
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 450
              },
              "typeArguments": null,
              "start": 447,
              "end": 450
            },
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 454,
                    "end": 457
                  },
                  "typeArguments": null,
                  "start": 454,
                  "end": 457
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 460,
                    "end": 463
                  },
                  "typeArguments": null,
                  "start": 460,
                  "end": 463
                }
              ],
              "start": 454,
              "end": 463
            }
          ],
          "start": 447,
          "end": 464
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "foo",
            "raw": "'foo'",
            "start": 466,
            "end": 471
          },
          "start": 466,
          "end": 471
        },
        "start": 446,
        "end": 472
      },
      "declare": false,
      "start": 436,
      "end": 473
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1548
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 14,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 36,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 50,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 72,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Nothing",
    "start": 77,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 87,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 109,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "Broken",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 123,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 155,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 167,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 170,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 176,
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
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 185,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "Nothing",
    "start": 199,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 345,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "_3",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 366,
    "end": 367
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 367,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 372,
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
    "start": 389,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "_4",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 406,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 410,
    "end": 411
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 436,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "_5",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 447,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 454,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 465,
    "end": 466
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 466,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  }
]
```
