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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 24
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 27,
              "end": 28
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 16,
            "end": 28
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 54
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 57,
              "end": 58
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 33,
            "end": 58
          }
        ],
        "start": 10,
        "end": 60
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 60
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 74
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 86
      },
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
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 101
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 104,
              "end": 106
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 93,
            "end": 107
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 126
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 129,
              "end": 131
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 112,
            "end": 132
          }
        ],
        "start": 87,
        "end": 134
      },
      "abstract": false,
      "declare": false,
      "start": 62,
      "end": 134
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticSubFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 154
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 166
      },
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
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 188
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 191,
              "end": 193
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 173,
            "end": 194
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 220
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 223,
              "end": 225
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 199,
            "end": 226
          }
        ],
        "start": 167,
        "end": 228
      },
      "abstract": false,
      "declare": false,
      "start": 136,
      "end": 228
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Intermediate",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 248
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 257,
        "end": 260
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 261,
        "end": 263
      },
      "abstract": false,
      "declare": false,
      "start": 230,
      "end": 263
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 278
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Intermediate",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 299
      },
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
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 314
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 317,
              "end": 319
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 306,
            "end": 320
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 339
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 342,
              "end": 344
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 325,
            "end": 345
          }
        ],
        "start": 300,
        "end": 347
      },
      "abstract": false,
      "declare": false,
      "start": 265,
      "end": 347
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 368
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Intermediate",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 389
      },
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
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 411
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 414,
              "end": 416
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 396,
            "end": 417
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 443
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 446,
              "end": 448
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 422,
            "end": 449
          }
        ],
        "start": 390,
        "end": 451
      },
      "abstract": false,
      "declare": false,
      "start": 349,
      "end": 451
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 451
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
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 16,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 25,
    "end": 26
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 33,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "staticProperty",
    "start": 40,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "SubFoo",
    "start": 68,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 75,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 93,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "staticProperty",
    "start": 112,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 136,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "StaticSubFoo",
    "start": 142,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 155,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 173,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 180,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 199,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "staticProperty",
    "start": 206,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 230,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Intermediate",
    "start": 236,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 249,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 257,
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
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 265,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 271,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 279,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Intermediate",
    "start": 287,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 306,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "staticProperty",
    "start": 325,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 349,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "StaticDerived",
    "start": 355,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 369,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "Intermediate",
    "start": 377,
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
    "value": "static",
    "start": 396,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "property",
    "start": 403,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 422,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "staticProperty",
    "start": 429,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  }
]
```
