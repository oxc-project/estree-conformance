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
        "name": "WithObject1",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 73
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 84
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 88
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 91,
                          "end": 97
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 100,
                          "end": 109
                        }
                      ],
                      "start": 91,
                      "end": 109
                    },
                    "start": 89,
                    "end": 109
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 87,
                  "end": 109
                }
              ],
              "start": 85,
              "end": 111
            }
          ],
          "start": 84,
          "end": 112
        },
        "start": 76,
        "end": 112
      },
      "declare": false,
      "start": 57,
      "end": 113
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WithObject1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 137
                },
                "typeArguments": null,
                "start": 126,
                "end": 137
              },
              "start": 124,
              "end": 137
            },
            "start": 120,
            "end": 137
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 143
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 154
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 142,
                "end": 154
              }
            ],
            "start": 140,
            "end": 156
          },
          "definite": false,
          "start": 120,
          "end": 156
        }
      ],
      "declare": false,
      "start": 114,
      "end": 157
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithArray1",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 173
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 184
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 187,
                        "end": 193
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 196,
                        "end": 205
                      }
                    ],
                    "start": 187,
                    "end": 205
                  },
                  "start": 186,
                  "end": 207
                }
              ],
              "start": 185,
              "end": 208
            }
          ],
          "start": 184,
          "end": 209
        },
        "start": 176,
        "end": 209
      },
      "declare": false,
      "start": 158,
      "end": 210
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
            "name": "tup1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WithArray1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 233
                },
                "typeArguments": null,
                "start": 223,
                "end": 233
              },
              "start": 221,
              "end": 233
            },
            "start": 217,
            "end": 233
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 246
              }
            ],
            "start": 236,
            "end": 247
          },
          "definite": false,
          "start": 217,
          "end": 247
        }
      ],
      "declare": false,
      "start": 211,
      "end": 248
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToStringOrUnd",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 268
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
              "start": 269,
              "end": 270
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 269,
            "end": 270
          }
        ],
        "start": 268,
        "end": 271
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 278
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
              "start": 288,
              "end": 289
            },
            "typeArguments": null,
            "start": 288,
            "end": 289
          },
          "start": 282,
          "end": 289
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 294,
              "end": 300
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 303,
              "end": 312
            }
          ],
          "start": 294,
          "end": 312
        },
        "optional": "-",
        "readonly": null,
        "start": 274,
        "end": 314
      },
      "declare": false,
      "start": 250,
      "end": 315
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithObject2",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 333
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToStringOrUnd",
          "optional": false,
          "typeAnnotation": null,
          "start": 336,
          "end": 349
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 352,
                    "end": 353
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 355,
                        "end": 356
                      },
                      "start": 355,
                      "end": 356
                    },
                    "start": 353,
                    "end": 356
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 352,
                  "end": 357
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 359
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 362,
                        "end": 363
                      },
                      "start": 362,
                      "end": 363
                    },
                    "start": 360,
                    "end": 363
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 358,
                  "end": 363
                }
              ],
              "start": 350,
              "end": 365
            }
          ],
          "start": 349,
          "end": 366
        },
        "start": 336,
        "end": 366
      },
      "declare": false,
      "start": 317,
      "end": 367
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WithObject2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 391
                },
                "typeArguments": null,
                "start": 380,
                "end": 391
              },
              "start": 378,
              "end": 391
            },
            "start": 374,
            "end": 391
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 397
                },
                "value": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 399,
                  "end": 402
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 396,
                "end": 402
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 405
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 416
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 404,
                "end": 416
              }
            ],
            "start": 394,
            "end": 418
          },
          "definite": false,
          "start": 374,
          "end": 418
        }
      ],
      "declare": false,
      "start": 368,
      "end": 419
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithArray2",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 435
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ToStringOrUnd",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 451
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 453,
                    "end": 454
                  },
                  "start": 453,
                  "end": 454
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 456,
                      "end": 457
                    },
                    "start": 456,
                    "end": 457
                  },
                  "start": 456,
                  "end": 458
                }
              ],
              "start": 452,
              "end": 459
            }
          ],
          "start": 451,
          "end": 460
        },
        "start": 438,
        "end": 460
      },
      "declare": false,
      "start": 420,
      "end": 461
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
            "name": "tup2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WithArray2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 484
                },
                "typeArguments": null,
                "start": 474,
                "end": 484
              },
              "start": 472,
              "end": 484
            },
            "start": 468,
            "end": 484
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 488,
                "end": 491
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 502
              }
            ],
            "start": 487,
            "end": 503
          },
          "definite": false,
          "start": 468,
          "end": 503
        }
      ],
      "declare": false,
      "start": 462,
      "end": 504
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 504
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "WithObject1",
    "start": 62,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 76,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 88,
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
    "value": "string",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 100,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "WithObject1",
    "start": 126,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 145,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 158,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "WithArray1",
    "start": 163,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 176,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 196,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 211,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "tup1",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "WithArray1",
    "start": 223,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 237,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 250,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "ToStringOrUnd",
    "start": 255,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 279,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 282,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 291,
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
    "value": "string",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 303,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 317,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "WithObject2",
    "start": 322,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "ToStringOrUnd",
    "start": 336,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 368,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 374,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "WithObject2",
    "start": 380,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 399,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 407,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 420,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "WithArray2",
    "start": 425,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "ToStringOrUnd",
    "start": 438,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 452,
    "end": 453
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 462,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "tup2",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "WithArray2",
    "start": 474,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 487,
    "end": 488
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 493,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  }
]
```
