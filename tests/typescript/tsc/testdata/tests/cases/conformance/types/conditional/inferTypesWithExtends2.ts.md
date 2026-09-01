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
        "name": "X1",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 85,
            "end": 86
          }
        ],
        "start": 84,
        "end": 87
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
            "start": 94,
            "end": 95
          },
          "typeArguments": null,
          "start": 94,
          "end": 95
        },
        "extendsType": {
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
                "start": 106,
                "end": 107
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                      "start": 115,
                      "end": 116
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 125,
                      "end": 131
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 115,
                    "end": 131
                  },
                  "start": 109,
                  "end": 131
                },
                "start": 107,
                "end": 131
              },
              "accessibility": null,
              "static": false,
              "start": 106,
              "end": 132
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
                "start": 133,
                "end": 134
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                      "start": 142,
                      "end": 143
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 152,
                      "end": 158
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 142,
                    "end": 158
                  },
                  "start": 136,
                  "end": 158
                },
                "start": 134,
                "end": 158
              },
              "accessibility": null,
              "static": false,
              "start": 133,
              "end": 158
            }
          ],
          "start": 104,
          "end": 160
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 164
          },
          "typeArguments": null,
          "start": 163,
          "end": 164
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 171,
          "end": 176
        },
        "start": 94,
        "end": 176
      },
      "declare": false,
      "start": 77,
      "end": 177
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 249
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
              "start": 250,
              "end": 251
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 250,
            "end": 251
          }
        ],
        "start": 249,
        "end": 252
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
            "start": 259,
            "end": 260
          },
          "typeArguments": null,
          "start": 259,
          "end": 260
        },
        "extendsType": {
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
                "start": 271,
                "end": 272
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                      "start": 280,
                      "end": 281
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 280,
                    "end": 281
                  },
                  "start": 274,
                  "end": 281
                },
                "start": 272,
                "end": 281
              },
              "accessibility": null,
              "static": false,
              "start": 271,
              "end": 282
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
                "start": 283,
                "end": 284
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 293
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 303
                      },
                      "typeArguments": null,
                      "start": 302,
                      "end": 303
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 292,
                    "end": 303
                  },
                  "start": 286,
                  "end": 303
                },
                "start": 284,
                "end": 303
              },
              "accessibility": null,
              "static": false,
              "start": 283,
              "end": 303
            }
          ],
          "start": 269,
          "end": 305
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 310
              },
              "typeArguments": null,
              "start": 309,
              "end": 310
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 313
              },
              "typeArguments": null,
              "start": 312,
              "end": 313
            }
          ],
          "start": 308,
          "end": 314
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 321,
          "end": 326
        },
        "start": 259,
        "end": 326
      },
      "declare": false,
      "start": 242,
      "end": 327
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 327
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 77,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 82,
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
    "value": "T",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 96,
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
    "value": "a",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 117,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 136,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 144,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 242,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 247,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 261,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 274,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 286,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 294,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  }
]
```
