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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 28
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 40,
                      "end": 45
                    },
                    "start": 33,
                    "end": 46
                  }
                ],
                "start": 31,
                "end": 47
              },
              "expression": false,
              "start": 28,
              "end": 47
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 14,
            "end": 47
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 72
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 77,
                      "end": 83
                    },
                    "start": 76,
                    "end": 83
                  },
                  "start": 73,
                  "end": 83
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 85,
                "end": 87
              },
              "expression": false,
              "start": 72,
              "end": 87
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 58,
            "end": 87
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 109
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 112,
              "end": 113
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 99,
            "end": 114
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Goo",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 181
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 184,
                      "end": 190
                    },
                    "start": 183,
                    "end": 190
                  },
                  "start": 182,
                  "end": 190
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 192,
                  "end": 198
                },
                "start": 191,
                "end": 198
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 207,
                      "end": 211
                    },
                    "start": 200,
                    "end": 212
                  }
                ],
                "start": 199,
                "end": 213
              },
              "expression": false,
              "start": 181,
              "end": 213
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 167,
            "end": 213
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Goo",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 277
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 280,
                      "end": 286
                    },
                    "start": 279,
                    "end": 286
                  },
                  "start": 278,
                  "end": 286
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 288,
                  "end": 294
                },
                "start": 287,
                "end": 294
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 295,
                "end": 297
              },
              "expression": false,
              "start": 277,
              "end": 297
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 263,
            "end": 297
          }
        ],
        "start": 8,
        "end": 349
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 349
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 358
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 380
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 383,
                  "end": 389
                },
                "start": 382,
                "end": 389
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 399,
                      "end": 400
                    },
                    "start": 392,
                    "end": 401
                  }
                ],
                "start": 390,
                "end": 403
              },
              "expression": false,
              "start": 380,
              "end": 403
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 365,
            "end": 403
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 422
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 425,
                      "end": 431
                    },
                    "start": 424,
                    "end": 431
                  },
                  "start": 423,
                  "end": 431
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 433,
                "end": 435
              },
              "expression": false,
              "start": 422,
              "end": 435
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 408,
            "end": 435
          }
        ],
        "start": 359,
        "end": 485
      },
      "abstract": false,
      "declare": false,
      "start": 351,
      "end": 485
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 487
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
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 14,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 21,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 25,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 33,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 40,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 58,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 65,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 99,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 167,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 174,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Goo",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 200,
    "end": 206
  },
  {
    "type": "Null",
    "value": "null",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 263,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Goo",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 288,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 351,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 365,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 392,
    "end": 398
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 408,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  }
]
```
