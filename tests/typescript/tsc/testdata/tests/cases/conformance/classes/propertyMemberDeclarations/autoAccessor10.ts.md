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
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a0",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 26
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 29,
              "end": 30
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 15,
            "end": 31
          }
        ],
        "start": 9,
        "end": 33
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 43
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
              "type": "PrivateIdentifier",
              "name": "a1_accessor_storage",
              "start": 50,
              "end": 70
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 73,
              "end": 74
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 50,
            "end": 75
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 91
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 94,
              "end": 95
            },
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 80,
            "end": 96
          }
        ],
        "start": 44,
        "end": 98
      },
      "abstract": false,
      "declare": false,
      "start": 35,
      "end": 98
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 108
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
              "type": "PrivateIdentifier",
              "name": "a2_accessor_storage",
              "start": 122,
              "end": 142
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 145,
              "end": 146
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 115,
            "end": 147
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3_Inner",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 183
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "AccessorProperty",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 209
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 212,
                        "end": 213
                      },
                      "computed": false,
                      "static": false,
                      "override": false,
                      "definite": false,
                      "accessibility": null,
                      "declare": false,
                      "optional": false,
                      "readonly": false,
                      "start": 198,
                      "end": 214
                    },
                    {
                      "type": "StaticBlock",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "PrivateIdentifier",
                              "name": "a2_accessor_storage",
                              "start": 252,
                              "end": 272
                            },
                            "operator": "in",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 276,
                              "end": 278
                            },
                            "start": 252,
                            "end": 278
                          },
                          "directive": null,
                          "start": 252,
                          "end": 279
                        }
                      ],
                      "start": 227,
                      "end": 293
                    }
                  ],
                  "start": 184,
                  "end": 303
                },
                "abstract": false,
                "declare": false,
                "start": 169,
                "end": 303
              }
            ],
            "start": 152,
            "end": 309
          }
        ],
        "start": 109,
        "end": 311
      },
      "abstract": false,
      "declare": false,
      "start": 100,
      "end": 311
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 323
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 348
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 351,
              "end": 352
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 330,
            "end": 353
          }
        ],
        "start": 324,
        "end": 355
      },
      "abstract": false,
      "declare": false,
      "start": 313,
      "end": 355
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4_2",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 367
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 392
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 395,
              "end": 396
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 374,
            "end": 397
          }
        ],
        "start": 368,
        "end": 399
      },
      "abstract": false,
      "declare": false,
      "start": 357,
      "end": 399
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 399
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
    "value": "C1",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 15,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 24,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 41,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "PrivateIdentifier",
    "value": "a1_accessor_storage",
    "start": 50,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 80,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 115,
    "end": 121
  },
  {
    "type": "PrivateIdentifier",
    "value": "a2_accessor_storage",
    "start": 122,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 169,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "C3_Inner",
    "start": 175,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 198,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "PrivateIdentifier",
    "value": "a2_accessor_storage",
    "start": 252,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 273,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 313,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "C4_1",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 330,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 337,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 357,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "C4_2",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 374,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 381,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 390,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  }
]
```
