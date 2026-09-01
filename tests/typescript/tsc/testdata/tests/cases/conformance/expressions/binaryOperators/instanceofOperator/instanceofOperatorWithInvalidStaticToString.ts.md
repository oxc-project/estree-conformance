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
        "name": "StaticToString",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 28
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
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 50
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 54,
                  "end": 58
                },
                "start": 52,
                "end": 58
              },
              "body": null,
              "expression": false,
              "start": 50,
              "end": 59
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 35,
            "end": 59
          }
        ],
        "start": 29,
        "end": 61
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 61
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "staticToString",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticToString",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 106
              },
              "typeArguments": null,
              "start": 92,
              "end": 106
            },
            "start": 90,
            "end": 106
          },
          "start": 76,
          "end": 106
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticToString",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 135
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticToString",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 161
              },
              "start": 121,
              "end": 161
            },
            "start": 114,
            "end": 162
          }
        ],
        "start": 108,
        "end": 164
      },
      "expression": false,
      "start": 63,
      "end": 164
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticToNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 194
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
              "name": "toNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 216
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 220,
                  "end": 224
                },
                "start": 218,
                "end": 224
              },
              "body": null,
              "expression": false,
              "start": 216,
              "end": 225
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 201,
            "end": 225
          }
        ],
        "start": 195,
        "end": 227
      },
      "abstract": false,
      "declare": true,
      "start": 166,
      "end": 227
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 240
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "staticToNumber",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 271
              },
              "typeArguments": null,
              "start": 257,
              "end": 271
            },
            "start": 255,
            "end": 271
          },
          "start": 241,
          "end": 271
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 286,
                "end": 300
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticToNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 326
              },
              "start": 286,
              "end": 326
            },
            "start": 279,
            "end": 327
          }
        ],
        "start": 273,
        "end": 329
      },
      "expression": false,
      "start": 228,
      "end": 329
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NormalToString",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 359
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
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 374
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 378,
                  "end": 382
                },
                "start": 376,
                "end": 382
              },
              "body": null,
              "expression": false,
              "start": 374,
              "end": 383
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 366,
            "end": 383
          }
        ],
        "start": 360,
        "end": 385
      },
      "abstract": false,
      "declare": true,
      "start": 331,
      "end": 385
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 398
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "normal",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NormalToString",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 421
              },
              "typeArguments": null,
              "start": 407,
              "end": 421
            },
            "start": 405,
            "end": 421
          },
          "start": 399,
          "end": 421
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "normal",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 442
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NormalToString",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 468
              },
              "start": 436,
              "end": 468
            },
            "start": 429,
            "end": 469
          }
        ],
        "start": 423,
        "end": 471
      },
      "expression": false,
      "start": 386,
      "end": 471
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 471
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "StaticToString",
    "start": 14,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 42,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 63,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "staticToString",
    "start": 76,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "StaticToString",
    "start": 92,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 114,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "staticToString",
    "start": 121,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 136,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "StaticToString",
    "start": 147,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 166,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 174,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "StaticToNumber",
    "start": 180,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 201,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "toNumber",
    "start": 208,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 228,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 237,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "staticToNumber",
    "start": 241,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "StaticToNumber",
    "start": 257,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 279,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "staticToNumber",
    "start": 286,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 301,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "StaticToNumber",
    "start": 312,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 331,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 339,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "NormalToString",
    "start": 345,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 366,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 378,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 386,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "normal",
    "start": 399,
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
    "value": "NormalToString",
    "start": 407,
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
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 429,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "normal",
    "start": 436,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 443,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "NormalToString",
    "start": 454,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  }
]
```
