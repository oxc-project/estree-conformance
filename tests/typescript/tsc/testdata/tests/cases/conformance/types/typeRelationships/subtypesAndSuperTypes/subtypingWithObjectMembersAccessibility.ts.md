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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 74
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 81,
            "end": 93
          }
        ],
        "start": 75,
        "end": 95
      },
      "abstract": false,
      "declare": false,
      "start": 64,
      "end": 95
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
        "start": 103,
        "end": 110
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 123
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 133
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 135,
                "end": 141
              },
              "start": 133,
              "end": 141
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 130,
            "end": 142
          }
        ],
        "start": 124,
        "end": 144
      },
      "abstract": false,
      "declare": false,
      "start": 97,
      "end": 144
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 153
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 170
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
                  "start": 172,
                  "end": 176
                },
                "typeArguments": null,
                "start": 172,
                "end": 176
              },
              "start": 170,
              "end": 176
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 160,
            "end": 177
          }
        ],
        "start": 154,
        "end": 179
      },
      "abstract": false,
      "declare": false,
      "start": 146,
      "end": 179
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 188
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 198
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 216
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
                  "start": 218,
                  "end": 225
                },
                "typeArguments": null,
                "start": 218,
                "end": 225
              },
              "start": 216,
              "end": 225
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 205,
            "end": 226
          }
        ],
        "start": 199,
        "end": 237
      },
      "abstract": false,
      "declare": false,
      "start": 181,
      "end": 237
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 247
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 261,
              "end": 262
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 254,
            "end": 269
          }
        ],
        "start": 248,
        "end": 272
      },
      "abstract": false,
      "declare": false,
      "start": 239,
      "end": 272
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 282
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 293
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
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 308,
              "end": 309
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
                  "start": 311,
                  "end": 318
                },
                "typeArguments": null,
                "start": 311,
                "end": 318
              },
              "start": 309,
              "end": 318
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 300,
            "end": 319
          }
        ],
        "start": 294,
        "end": 330
      },
      "abstract": false,
      "declare": false,
      "start": 274,
      "end": 330
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 340
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
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 354,
              "end": 357
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
                  "start": 359,
                  "end": 363
                },
                "typeArguments": null,
                "start": 359,
                "end": 363
              },
              "start": 357,
              "end": 363
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 347,
            "end": 364
          }
        ],
        "start": 341,
        "end": 366
      },
      "abstract": false,
      "declare": false,
      "start": 332,
      "end": 366
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 374,
        "end": 376
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 387
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
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 402,
              "end": 405
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
                  "start": 407,
                  "end": 414
                },
                "typeArguments": null,
                "start": 407,
                "end": 414
              },
              "start": 405,
              "end": 414
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 394,
            "end": 415
          }
        ],
        "start": 388,
        "end": 426
      },
      "abstract": false,
      "declare": false,
      "start": 368,
      "end": 426
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 426
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 103,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 111,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 130,
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
    "value": "string",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 146,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 160,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 172,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 181,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 189,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 197,
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
    "value": "private",
    "start": 205,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 218,
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
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 239,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 254,
    "end": 260
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 274,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 280,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 283,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 300,
    "end": 307
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 311,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
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
    "value": "A3",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 347,
    "end": 353
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 359,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 368,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 374,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 377,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 394,
    "end": 401
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 402,
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
    "value": "Derived",
    "start": 407,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  }
]
```
