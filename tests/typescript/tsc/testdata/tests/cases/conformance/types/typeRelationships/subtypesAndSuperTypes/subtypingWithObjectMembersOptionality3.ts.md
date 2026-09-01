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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 90
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 93,
              "end": 96
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              },
              "start": 96,
              "end": 104
            },
            "accessibility": null,
            "static": false,
            "start": 93,
            "end": 105
          }
        ],
        "start": 91,
        "end": 107
      },
      "declare": false,
      "start": 76,
      "end": 107
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 125
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 138
          },
          "typeArguments": null,
          "start": 134,
          "end": 138
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 141,
              "end": 144
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 146,
                "end": 152
              },
              "start": 144,
              "end": 152
            },
            "accessibility": null,
            "static": false,
            "start": 141,
            "end": 153
          }
        ],
        "start": 139,
        "end": 155
      },
      "declare": false,
      "start": 108,
      "end": 155
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 168
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 178
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 185
                },
                "typeArguments": null,
                "start": 181,
                "end": 185
              },
              "start": 179,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 175,
            "end": 186
          }
        ],
        "start": 169,
        "end": 188
      },
      "declare": false,
      "start": 157,
      "end": 188
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 201
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 211
          },
          "typeArguments": null,
          "start": 210,
          "end": 211
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 222
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 231
                },
                "typeArguments": null,
                "start": 224,
                "end": 231
              },
              "start": 222,
              "end": 231
            },
            "accessibility": null,
            "static": false,
            "start": 218,
            "end": 231
          }
        ],
        "start": 212,
        "end": 239
      },
      "declare": false,
      "start": 190,
      "end": 239
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 253
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 260,
              "end": 261
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 264,
                  "end": 268
                },
                "typeArguments": null,
                "start": 264,
                "end": 268
              },
              "start": 262,
              "end": 268
            },
            "accessibility": null,
            "static": false,
            "start": 260,
            "end": 269
          }
        ],
        "start": 254,
        "end": 271
      },
      "declare": false,
      "start": 241,
      "end": 271
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null,
        "start": 283,
        "end": 285
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 296
          },
          "typeArguments": null,
          "start": 294,
          "end": 296
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 303,
              "end": 304
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 313
                },
                "typeArguments": null,
                "start": 306,
                "end": 313
              },
              "start": 304,
              "end": 313
            },
            "accessibility": null,
            "static": false,
            "start": 303,
            "end": 314
          }
        ],
        "start": 297,
        "end": 322
      },
      "declare": false,
      "start": 273,
      "end": 322
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 336
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 343,
              "end": 346
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 353
                },
                "typeArguments": null,
                "start": 349,
                "end": 353
              },
              "start": 347,
              "end": 353
            },
            "accessibility": null,
            "static": false,
            "start": 343,
            "end": 354
          }
        ],
        "start": 337,
        "end": 356
      },
      "declare": false,
      "start": 324,
      "end": 356
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S3",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 370
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 381
          },
          "typeArguments": null,
          "start": 379,
          "end": 381
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "1.0",
              "raw": "'1.0'",
              "start": 388,
              "end": 393
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 395,
                  "end": 402
                },
                "typeArguments": null,
                "start": 395,
                "end": 402
              },
              "start": 393,
              "end": 402
            },
            "accessibility": null,
            "static": false,
            "start": 388,
            "end": 403
          }
        ],
        "start": 382,
        "end": 411
      },
      "declare": false,
      "start": 358,
      "end": 411
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 448
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 451,
                          "end": 455
                        },
                        "typeArguments": null,
                        "start": 451,
                        "end": 455
                      },
                      "start": 449,
                      "end": 455
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 445,
                    "end": 456
                  }
                ],
                "start": 443,
                "end": 458
              },
              "start": 441,
              "end": 458
            },
            "start": 440,
            "end": 458
          },
          "init": null,
          "definite": false,
          "start": 440,
          "end": 458
        }
      ],
      "declare": false,
      "start": 436,
      "end": 458
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
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
                      "name": "Foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 468,
                      "end": 472
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 474,
                          "end": 481
                        },
                        "typeArguments": null,
                        "start": 474,
                        "end": 481
                      },
                      "start": 472,
                      "end": 481
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 468,
                    "end": 482
                  }
                ],
                "start": 466,
                "end": 484
              },
              "start": 464,
              "end": 484
            },
            "start": 463,
            "end": 484
          },
          "init": null,
          "definite": false,
          "start": 463,
          "end": 484
        }
      ],
      "declare": false,
      "start": 459,
      "end": 484
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 489,
            "end": 490
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 493,
              "end": 497
            },
            "consequent": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 500,
              "end": 501
            },
            "alternate": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 505
            },
            "start": 493,
            "end": 505
          },
          "definite": false,
          "start": 489,
          "end": 505
        }
      ],
      "declare": false,
      "start": 485,
      "end": 506
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 76,
  "end": 512
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 76,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 108,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 118,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 126,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 157,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 190,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 202,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 224,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 241,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 261,
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
    "value": "Base",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 273,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 283,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 286,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 294,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 306,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 324,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 358,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "S3",
    "start": 368,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 371,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "String",
    "value": "'1.0'",
    "start": 388,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 395,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 436,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 459,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "Foo2",
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
    "value": "Derived",
    "start": 474,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 485,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 493,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  }
]
```
