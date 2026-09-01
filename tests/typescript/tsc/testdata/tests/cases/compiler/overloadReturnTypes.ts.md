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
        "name": "Accessor",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 14
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 15,
        "end": 17
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 32
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 39,
              "end": 45
            },
            "start": 37,
            "end": 45
          },
          "start": 33,
          "end": 45
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 48,
          "end": 54
        },
        "start": 46,
        "end": 54
      },
      "body": null,
      "expression": false,
      "start": 19,
      "end": 55
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 69
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 76,
              "end": 82
            },
            "start": 74,
            "end": 82
          },
          "start": 70,
          "end": 82
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 91,
              "end": 97
            },
            "start": 89,
            "end": 97
          },
          "start": 84,
          "end": 97
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 108
          },
          "typeArguments": null,
          "start": 100,
          "end": 108
        },
        "start": 98,
        "end": 108
      },
      "body": null,
      "expression": false,
      "start": 56,
      "end": 109
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 123
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "map",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 129,
              "end": 132
            },
            "start": 127,
            "end": 132
          },
          "start": 124,
          "end": 132
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Accessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 143
          },
          "typeArguments": null,
          "start": 135,
          "end": 143
        },
        "start": 133,
        "end": 143
      },
      "body": null,
      "expression": false,
      "start": 110,
      "end": 144
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "attr",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 158
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nameOrMap",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 170,
              "end": 173
            },
            "start": 168,
            "end": 173
          },
          "start": 159,
          "end": 173
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 183,
              "end": 189
            },
            "start": 181,
            "end": 189
          },
          "start": 175,
          "end": 189
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 192,
          "end": 195
        },
        "start": 190,
        "end": 195
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameOrMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 215
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameOrMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 235
                  },
                  "prefix": true,
                  "start": 219,
                  "end": 235
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "\"object\"",
                  "start": 240,
                  "end": 248
                },
                "start": 219,
                "end": 248
              },
              "start": 206,
              "end": 248
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Accessor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 306
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 294,
                    "end": 306
                  },
                  "start": 287,
                  "end": 307
                }
              ],
              "start": 250,
              "end": 313
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "s",
                    "raw": "\"s\"",
                    "start": 370,
                    "end": 373
                  },
                  "start": 363,
                  "end": 374
                }
              ],
              "start": 323,
              "end": 380
            },
            "start": 202,
            "end": 380
          }
        ],
        "start": 196,
        "end": 382
      },
      "expression": false,
      "start": 145,
      "end": 382
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFace",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 400
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "attr",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 408
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 414,
                    "end": 420
                  },
                  "start": 413,
                  "end": 420
                },
                "start": 409,
                "end": 420
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 422,
                "end": 428
              },
              "start": 421,
              "end": 428
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 404,
            "end": 429
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "attr",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 435
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 442,
                    "end": 448
                  },
                  "start": 440,
                  "end": 448
                },
                "start": 436,
                "end": 448
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 457,
                    "end": 463
                  },
                  "start": 455,
                  "end": 463
                },
                "start": 450,
                "end": 463
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Accessor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 466,
                  "end": 474
                },
                "typeArguments": null,
                "start": 466,
                "end": 474
              },
              "start": 464,
              "end": 474
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 431,
            "end": 475
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "attr",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 481
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 487,
                    "end": 490
                  },
                  "start": 485,
                  "end": 490
                },
                "start": 482,
                "end": 490
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Accessor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 501
                },
                "typeArguments": null,
                "start": 493,
                "end": 501
              },
              "start": 491,
              "end": 501
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 477,
            "end": 502
          }
        ],
        "start": 401,
        "end": 504
      },
      "declare": false,
      "start": 385,
      "end": 504
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 504
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
    "value": "Accessor",
    "start": 6,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 19,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 56,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 84,
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
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Accessor",
    "start": 100,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 110,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Accessor",
    "start": 135,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 145,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "nameOrMap",
    "start": 159,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "nameOrMap",
    "start": 206,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 216,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 219,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "nameOrMap",
    "start": 226,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 236,
    "end": 239
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 240,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 287,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 294,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "Accessor",
    "start": 298,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 318,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 363,
    "end": 369
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 370,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 385,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "IFace",
    "start": 395,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 409,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 414,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 431,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 436,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 450,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 457,
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
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "Accessor",
    "start": 466,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "Accessor",
    "start": 493,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504
  }
]
```
