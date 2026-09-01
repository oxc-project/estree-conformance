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
        "name": "Lower",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 70
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 82
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "İSPANYOL",
                    "raw": "\"İSPANYOL\"",
                    "start": 83,
                    "end": 93
                  },
                  "start": 83,
                  "end": 93
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ΟΣ",
                    "raw": "\"ΟΣ\"",
                    "start": 96,
                    "end": 100
                  },
                  "start": 96,
                  "end": 100
                }
              ],
              "start": 83,
              "end": 100
            }
          ],
          "start": 82,
          "end": 101
        },
        "start": 73,
        "end": 101
      },
      "declare": false,
      "start": 60,
      "end": 102
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
            "name": "lowerMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 126
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Lower",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 132
                      },
                      "typeArguments": null,
                      "start": 127,
                      "end": 132
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 134,
                      "end": 140
                    }
                  ],
                  "start": 126,
                  "end": 141
                },
                "start": 120,
                "end": 141
              },
              "start": 118,
              "end": 141
            },
            "start": 110,
            "end": 141
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "i̇spanyol",
                  "raw": "\"i̇spanyol\"",
                  "start": 148,
                  "end": 159
                },
                "value": {
                  "type": "Literal",
                  "value": "spanish",
                  "raw": "\"spanish\"",
                  "start": 162,
                  "end": 171
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 147,
                "end": 171
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "ος",
                  "raw": "\"ος\"",
                  "start": 175,
                  "end": 179
                },
                "value": {
                  "type": "Literal",
                  "value": "greek-final-sigma",
                  "raw": "\"greek-final-sigma\"",
                  "start": 182,
                  "end": 201
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 174,
                "end": 201
              }
            ],
            "start": 144,
            "end": 204
          },
          "definite": false,
          "start": 110,
          "end": 204
        }
      ],
      "declare": false,
      "start": 104,
      "end": 205
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Upper",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 217
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 229
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ßfoo",
                    "raw": "\"ßfoo\"",
                    "start": 230,
                    "end": 236
                  },
                  "start": 230,
                  "end": 236
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ﬁoo",
                    "raw": "\"ﬁoo\"",
                    "start": 239,
                    "end": 244
                  },
                  "start": 239,
                  "end": 244
                }
              ],
              "start": 230,
              "end": 244
            }
          ],
          "start": 229,
          "end": 245
        },
        "start": 220,
        "end": 245
      },
      "declare": false,
      "start": 207,
      "end": 246
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
            "name": "upperMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 264,
                  "end": 270
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Upper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 271,
                        "end": 276
                      },
                      "typeArguments": null,
                      "start": 271,
                      "end": 276
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 278,
                      "end": 284
                    }
                  ],
                  "start": 270,
                  "end": 285
                },
                "start": 264,
                "end": 285
              },
              "start": 262,
              "end": 285
            },
            "start": 254,
            "end": 285
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "SSFOO",
                  "raw": "\"SSFOO\"",
                  "start": 292,
                  "end": 299
                },
                "value": {
                  "type": "Literal",
                  "value": "eszett",
                  "raw": "\"eszett\"",
                  "start": 302,
                  "end": 310
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 291,
                "end": 310
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "FIOO",
                  "raw": "\"FIOO\"",
                  "start": 314,
                  "end": 320
                },
                "value": {
                  "type": "Literal",
                  "value": "ligature",
                  "raw": "\"ligature\"",
                  "start": 323,
                  "end": 333
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 313,
                "end": 333
              }
            ],
            "start": 288,
            "end": 336
          },
          "definite": false,
          "start": 254,
          "end": 336
        }
      ],
      "declare": false,
      "start": 248,
      "end": 337
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Capitalized",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 355
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 358,
          "end": 368
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ßfoo",
                    "raw": "\"ßfoo\"",
                    "start": 369,
                    "end": 375
                  },
                  "start": 369,
                  "end": 375
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ﬁoo",
                    "raw": "\"ﬁoo\"",
                    "start": 378,
                    "end": 383
                  },
                  "start": 378,
                  "end": 383
                }
              ],
              "start": 369,
              "end": 383
            }
          ],
          "start": 368,
          "end": 384
        },
        "start": 358,
        "end": 384
      },
      "declare": false,
      "start": 339,
      "end": 385
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
            "name": "capitalizedMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 409,
                  "end": 415
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Capitalized",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 416,
                        "end": 427
                      },
                      "typeArguments": null,
                      "start": 416,
                      "end": 427
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 429,
                      "end": 435
                    }
                  ],
                  "start": 415,
                  "end": 436
                },
                "start": 409,
                "end": 436
              },
              "start": 407,
              "end": 436
            },
            "start": 393,
            "end": 436
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "SSfoo",
                  "raw": "\"SSfoo\"",
                  "start": 443,
                  "end": 450
                },
                "value": {
                  "type": "Literal",
                  "value": "eszett",
                  "raw": "\"eszett\"",
                  "start": 453,
                  "end": 461
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 442,
                "end": 461
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "FIoo",
                  "raw": "\"FIoo\"",
                  "start": 465,
                  "end": 471
                },
                "value": {
                  "type": "Literal",
                  "value": "ligature",
                  "raw": "\"ligature\"",
                  "start": 474,
                  "end": 484
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 464,
                "end": 484
              }
            ],
            "start": 439,
            "end": 487
          },
          "definite": false,
          "start": 393,
          "end": 487
        }
      ],
      "declare": false,
      "start": 387,
      "end": 488
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Uncapitalized",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 508
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 511,
          "end": 523
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "İfoo",
                    "raw": "\"İfoo\"",
                    "start": 524,
                    "end": 530
                  },
                  "start": 524,
                  "end": 530
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ΟΣ",
                    "raw": "\"ΟΣ\"",
                    "start": 533,
                    "end": 537
                  },
                  "start": 533,
                  "end": 537
                }
              ],
              "start": 524,
              "end": 537
            }
          ],
          "start": 523,
          "end": 538
        },
        "start": 511,
        "end": 538
      },
      "declare": false,
      "start": 490,
      "end": 539
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
            "name": "uncapitalizedMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 565,
                  "end": 571
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Uncapitalized",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 585
                      },
                      "typeArguments": null,
                      "start": 572,
                      "end": 585
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 587,
                      "end": 593
                    }
                  ],
                  "start": 571,
                  "end": 594
                },
                "start": 565,
                "end": 594
              },
              "start": 563,
              "end": 594
            },
            "start": 547,
            "end": 594
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "i̇foo",
                  "raw": "\"i̇foo\"",
                  "start": 601,
                  "end": 608
                },
                "value": {
                  "type": "Literal",
                  "value": "dotted-i",
                  "raw": "\"dotted-i\"",
                  "start": 611,
                  "end": 621
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 600,
                "end": 621
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "οΣ",
                  "raw": "\"οΣ\"",
                  "start": 625,
                  "end": 629
                },
                "value": {
                  "type": "Literal",
                  "value": "sigma-prefix",
                  "raw": "\"sigma-prefix\"",
                  "start": 632,
                  "end": 646
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 624,
                "end": 646
              }
            ],
            "start": 597,
            "end": 649
          },
          "definite": false,
          "start": 547,
          "end": 649
        }
      ],
      "declare": false,
      "start": 541,
      "end": 650
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 650
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 60,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Lower",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 73,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "String",
    "value": "\"İSPANYOL\"",
    "start": 83,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"ΟΣ\"",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 104,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "lowerMap",
    "start": 110,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Lower",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 147,
    "end": 148
  },
  {
    "type": "String",
    "value": "\"i̇spanyol\"",
    "start": 148,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "String",
    "value": "\"spanish\"",
    "start": 162,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175
  },
  {
    "type": "String",
    "value": "\"ος\"",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "String",
    "value": "\"greek-final-sigma\"",
    "start": 182,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 207,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "Upper",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 220,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "\"ßfoo\"",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 237,
    "end": 238
  },
  {
    "type": "String",
    "value": "\"ﬁoo\"",
    "start": 239,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 248,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "upperMap",
    "start": 254,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "Upper",
    "start": 271,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292
  },
  {
    "type": "String",
    "value": "\"SSFOO\"",
    "start": 292,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "String",
    "value": "\"eszett\"",
    "start": 302,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 313,
    "end": 314
  },
  {
    "type": "String",
    "value": "\"FIOO\"",
    "start": 314,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "String",
    "value": "\"ligature\"",
    "start": 323,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
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
    "value": "type",
    "start": 339,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Capitalized",
    "start": 344,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 358,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 368,
    "end": 369
  },
  {
    "type": "String",
    "value": "\"ßfoo\"",
    "start": 369,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 376,
    "end": 377
  },
  {
    "type": "String",
    "value": "\"ﬁoo\"",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 387,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "capitalizedMap",
    "start": 393,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 409,
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
    "value": "Capitalized",
    "start": 416,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 429,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 442,
    "end": 443
  },
  {
    "type": "String",
    "value": "\"SSfoo\"",
    "start": 443,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "String",
    "value": "\"eszett\"",
    "start": 453,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 464,
    "end": 465
  },
  {
    "type": "String",
    "value": "\"FIoo\"",
    "start": 465,
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
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "String",
    "value": "\"ligature\"",
    "start": 474,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 490,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "Uncapitalized",
    "start": 495,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "Uncapitalize",
    "start": 511,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 523,
    "end": 524
  },
  {
    "type": "String",
    "value": "\"İfoo\"",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 531,
    "end": 532
  },
  {
    "type": "String",
    "value": "\"ΟΣ\"",
    "start": 533,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 541,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "uncapitalizedMap",
    "start": 547,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 565,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "Uncapitalized",
    "start": 572,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 587,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 600,
    "end": 601
  },
  {
    "type": "String",
    "value": "\"i̇foo\"",
    "start": 601,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "String",
    "value": "\"dotted-i\"",
    "start": 611,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 624,
    "end": 625
  },
  {
    "type": "String",
    "value": "\"οΣ\"",
    "start": 625,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "String",
    "value": "\"sigma-prefix\"",
    "start": 632,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  }
]
```
