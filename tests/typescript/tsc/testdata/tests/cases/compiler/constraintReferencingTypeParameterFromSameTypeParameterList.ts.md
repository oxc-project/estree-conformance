__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IComparable",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 67
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
              "start": 68,
              "end": 69
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 68,
            "end": 69
          }
        ],
        "start": 67,
        "end": 70
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 71,
        "end": 74
      },
      "declare": false,
      "start": 46,
      "end": 74
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 85
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 86,
              "end": 87
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 86,
            "end": 87
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IComparable",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 110
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
                      "start": 111,
                      "end": 112
                    },
                    "typeArguments": null,
                    "start": 111,
                    "end": 112
                  }
                ],
                "start": 110,
                "end": 113
              },
              "start": 99,
              "end": 113
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 89,
            "end": 113
          }
        ],
        "start": 85,
        "end": 114
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 117,
        "end": 120
      },
      "expression": false,
      "start": 75,
      "end": 120
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 134
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
              "start": 135,
              "end": 136
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 135,
            "end": 136
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 152
                    },
                    "typeArguments": null,
                    "start": 151,
                    "end": 152
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 154,
                    "end": 157
                  }
                ],
                "start": 150,
                "end": 158
              },
              "start": 148,
              "end": 158
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 138,
            "end": 158
          }
        ],
        "start": 134,
        "end": 159
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 160,
        "end": 220
      },
      "declare": false,
      "start": 122,
      "end": 220
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 233
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
              "start": 234,
              "end": 235
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 234,
            "end": 235
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 238
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 248
              },
              "typeArguments": null,
              "start": 247,
              "end": 248
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 237,
            "end": 248
          }
        ],
        "start": 233,
        "end": 249
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 250,
        "end": 253
      },
      "declare": false,
      "start": 221,
      "end": 253
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 267
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
              "start": 268,
              "end": 269
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 268,
            "end": 269
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 272
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 287,
                    "end": 288
                  },
                  "typeArguments": null,
                  "start": 287,
                  "end": 288
                },
                "start": 284,
                "end": 288
              },
              "start": 281,
              "end": 288
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 271,
            "end": 288
          }
        ],
        "start": 267,
        "end": 289
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 290,
        "end": 293
      },
      "declare": false,
      "start": 255,
      "end": 293
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 319
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
              "start": 320,
              "end": 321
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 320,
            "end": 321
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 324
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 333,
              "end": 339
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 323,
            "end": 339
          }
        ],
        "start": 319,
        "end": 340
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 354
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 356
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 355,
                  "end": 356
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 359
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 368,
                      "end": 369
                    },
                    "typeArguments": null,
                    "start": 368,
                    "end": 369
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 358,
                  "end": 369
                }
              ],
              "start": 354,
              "end": 370
            },
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 347,
            "end": 373
          }
        ],
        "start": 341,
        "end": 375
      },
      "declare": false,
      "start": 307,
      "end": 375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 389
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 390,
              "end": 391
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 390,
            "end": 391
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 394
            },
            "constraint": {
              "type": "TSFunctionType",
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
                      "start": 404,
                      "end": 405
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 414,
                        "end": 415
                      },
                      "typeArguments": null,
                      "start": 414,
                      "end": 415
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 404,
                    "end": 415
                  }
                ],
                "start": 403,
                "end": 416
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
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
                        "start": 420,
                        "end": 421
                      },
                      "typeArguments": null,
                      "start": 420,
                      "end": 421
                    },
                    "start": 418,
                    "end": 421
                  },
                  "start": 417,
                  "end": 421
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 426,
                  "end": 430
                },
                "start": 423,
                "end": 430
              },
              "start": 403,
              "end": 430
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 393,
            "end": 430
          }
        ],
        "start": 389,
        "end": 431
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 434,
        "end": 437
      },
      "expression": false,
      "start": 377,
      "end": 437
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 46,
  "end": 438
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 46,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "IComparable",
    "start": 56,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 75,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 91,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "IComparable",
    "start": 99,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 122,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 140,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 148,
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
    "value": "T",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 221,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 231,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 239,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 255,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 265,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 273,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 284,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 307,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 325,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 347,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 360,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 377,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 386,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 395,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 406,
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
    "value": ">",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 423,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  }
]
```
