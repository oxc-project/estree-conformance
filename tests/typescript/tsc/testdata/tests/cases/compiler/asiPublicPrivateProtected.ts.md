__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "public",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 6
      },
      "directive": null,
      "start": 0,
      "end": 6
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonPublicClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 13,
        "end": 27
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
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
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
                "body": [],
                "start": 45,
                "end": 52
              },
              "expression": false,
              "start": 42,
              "end": 52
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 34,
            "end": 52
          }
        ],
        "start": 28,
        "end": 54
      },
      "abstract": false,
      "declare": false,
      "start": 7,
      "end": 54
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonPublicClass2",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 77
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
              "name": "public",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 90
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 84,
            "end": 90
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonPublicFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 120
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
                "body": [],
                "start": 123,
                "end": 130
              },
              "expression": false,
              "start": 120,
              "end": 130
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 95,
            "end": 130
          }
        ],
        "start": 78,
        "end": 132
      },
      "abstract": false,
      "declare": false,
      "start": 56,
      "end": 132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "private",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 140
      },
      "directive": null,
      "start": 133,
      "end": 140
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonPrivateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 162
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
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
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
                "body": [],
                "start": 181,
                "end": 188
              },
              "expression": false,
              "start": 178,
              "end": 188
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 169,
            "end": 188
          }
        ],
        "start": 163,
        "end": 190
      },
      "abstract": false,
      "declare": false,
      "start": 141,
      "end": 190
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonPrivateClass2",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 214
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
              "name": "private",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 228
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 221,
            "end": 228
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonPrivateFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 258
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
                "body": [],
                "start": 261,
                "end": 268
              },
              "expression": false,
              "start": 258,
              "end": 268
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 233,
            "end": 268
          }
        ],
        "start": 215,
        "end": 270
      },
      "abstract": false,
      "declare": false,
      "start": 192,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "protected",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 280
      },
      "directive": null,
      "start": 271,
      "end": 280
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonProtectedClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 304
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
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 320
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
                "body": [],
                "start": 323,
                "end": 328
              },
              "expression": false,
              "start": 320,
              "end": 328
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 309,
            "end": 328
          }
        ],
        "start": 305,
        "end": 330
      },
      "abstract": false,
      "declare": false,
      "start": 281,
      "end": 330
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonProtectedClass2",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 356
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
              "name": "protected",
              "optional": false,
              "typeAnnotation": null,
              "start": 363,
              "end": 372
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 363,
            "end": 372
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonProtectedFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 404
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
                "body": [],
                "start": 407,
                "end": 414
              },
              "expression": false,
              "start": 404,
              "end": 414
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 377,
            "end": 414
          }
        ],
        "start": 357,
        "end": 416
      },
      "abstract": false,
      "declare": false,
      "start": 332,
      "end": 416
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassWithThreeMembers",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 445
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
              "name": "public",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 458
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 452,
            "end": 458
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "private",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 470
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 463,
            "end": 470
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "protected",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 484
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 475,
            "end": 484
          }
        ],
        "start": 446,
        "end": 486
      },
      "abstract": false,
      "declare": false,
      "start": 418,
      "end": 486
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 486
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "public",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "NonPublicClass",
    "start": 13,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 34,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "NonPublicClass2",
    "start": 62,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 84,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 95,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "nonPublicFunction",
    "start": 103,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 133,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 141,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "NonPrivateClass",
    "start": 147,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 169,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 192,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "NonPrivateClass2",
    "start": 198,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 221,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 233,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "nonPrivateFunction",
    "start": 240,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "protected",
    "start": 271,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 281,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "NonProtectedClass",
    "start": 287,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 309,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 332,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "NonProtectedClass2",
    "start": 338,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "protected",
    "start": 363,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 377,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "nonProtectedFunction",
    "start": 384,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 418,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "ClassWithThreeMembers",
    "start": 424,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 452,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 463,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "protected",
    "start": 475,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  }
]
```
