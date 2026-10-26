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
        "name": "Prefixed",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 96
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
              "start": 97,
              "end": 98
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 107,
                "end": 114
              },
              "start": 107,
              "end": 116
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 97,
            "end": 116
          }
        ],
        "start": 96,
        "end": 117
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 121,
            "end": 127
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 133
              },
              "typeArguments": null,
              "start": 132,
              "end": 133
            },
            "start": 129,
            "end": 133
          }
        ],
        "start": 120,
        "end": 134
      },
      "declare": false,
      "start": 83,
      "end": 135
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FromTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 155
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
              "start": 156,
              "end": 157
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 166,
                "end": 173
              },
              "start": 166,
              "end": 175
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 156,
            "end": 175
          }
        ],
        "start": 155,
        "end": 176
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Prefixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 193
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
                  "start": 194,
                  "end": 195
                },
                "typeArguments": null,
                "start": 194,
                "end": 195
              }
            ],
            "start": 193,
            "end": 196
          },
          "start": 185,
          "end": 196
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 197,
        "end": 199
      },
      "declare": false,
      "start": 136,
      "end": 199
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
            "name": "generic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FromTuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 232
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 233,
                        "end": 240
                      },
                      "start": 233,
                      "end": 242
                    }
                  ],
                  "start": 232,
                  "end": 243
                },
                "start": 223,
                "end": 243
              },
              "start": 221,
              "end": 243
            },
            "start": 214,
            "end": 243
          },
          "init": null,
          "definite": false,
          "start": 214,
          "end": 243
        }
      ],
      "declare": true,
      "start": 200,
      "end": 244
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
            "name": "genericFirst",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 263
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "generic",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 273
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 274,
              "end": 275
            },
            "optional": false,
            "computed": true,
            "start": 266,
            "end": 276
          },
          "definite": false,
          "start": 251,
          "end": 276
        }
      ],
      "declare": false,
      "start": 245,
      "end": 277
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
            "name": "genericAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 294
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "generic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 309
                },
                "start": 299,
                "end": 309
              }
            ],
            "start": 297,
            "end": 311
          },
          "definite": false,
          "start": 284,
          "end": 311
        }
      ],
      "declare": false,
      "start": 278,
      "end": 312
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
            "name": "fixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FromTuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 343
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "start": 345,
                          "end": 351
                        }
                      ],
                      "start": 344,
                      "end": 352
                    }
                  ],
                  "start": 343,
                  "end": 353
                },
                "start": 334,
                "end": 353
              },
              "start": 332,
              "end": 353
            },
            "start": 327,
            "end": 353
          },
          "init": null,
          "definite": false,
          "start": 327,
          "end": 353
        }
      ],
      "declare": true,
      "start": 313,
      "end": 354
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
            "name": "fixedSecond",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 372
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "fixed",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 380
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 381,
              "end": 382
            },
            "optional": false,
            "computed": true,
            "start": 375,
            "end": 383
          },
          "definite": false,
          "start": 361,
          "end": 383
        }
      ],
      "declare": false,
      "start": 355,
      "end": 384
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
            "name": "fixedAll",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 399
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 412
                },
                "start": 404,
                "end": 412
              }
            ],
            "start": 402,
            "end": 414
          },
          "definite": false,
          "start": 391,
          "end": 414
        }
      ],
      "declare": false,
      "start": 385,
      "end": 415
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 416
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 83,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Prefixed",
    "start": 88,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 99,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 107,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "number",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 129,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 136,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "FromTuple",
    "start": 146,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 158,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 166,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 177,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "Prefixed",
    "start": 185,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 200,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 208,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 214,
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
    "value": "FromTuple",
    "start": 223,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 233,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
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
    "value": "genericFirst",
    "start": 251,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 266,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 273,
    "end": 274
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 278,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "genericAll",
    "start": 284,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 302,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 313,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 321,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "fixed",
    "start": 327,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "FromTuple",
    "start": 334,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 345,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 355,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "fixedSecond",
    "start": 361,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "fixed",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 380,
    "end": 381
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 381,
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
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 385,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "fixedAll",
    "start": 391,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "fixed",
    "start": 407,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  }
]
```
