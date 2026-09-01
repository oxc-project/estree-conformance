__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 23
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 26,
                  "end": 27
                },
                "definite": false,
                "start": 22,
                "end": 27
              }
            ],
            "declare": false,
            "start": 18,
            "end": 28
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 78,
                      "end": 81
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
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 96,
                            "end": 100
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 102,
                              "end": 108
                            },
                            "start": 100,
                            "end": 108
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
                          "start": 96,
                          "end": 109
                        }
                      ],
                      "start": 82,
                      "end": 119
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 72,
                    "end": 119
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 65,
                  "end": 119
                }
              ],
              "start": 46,
              "end": 125
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 34,
            "end": 125
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 142
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 158
                      },
                      "init": null,
                      "definite": false,
                      "start": 157,
                      "end": 158
                    }
                  ],
                  "declare": false,
                  "start": 153,
                  "end": 159
                }
              ],
              "start": 143,
              "end": 165
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 131,
            "end": 165
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 175
                },
                "init": null,
                "definite": false,
                "start": 174,
                "end": 175
              }
            ],
            "declare": false,
            "start": 170,
            "end": 176
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 202
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
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
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 218
                      },
                      "init": null,
                      "definite": false,
                      "start": 217,
                      "end": 218
                    }
                  ],
                  "declare": false,
                  "start": 213,
                  "end": 219
                }
              ],
              "start": 203,
              "end": 225
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 191,
            "end": 225
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 238
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 239,
              "end": 242
            },
            "abstract": false,
            "declare": false,
            "start": 231,
            "end": 242
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
                  "name": "w",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 262
                },
                "init": null,
                "definite": false,
                "start": 261,
                "end": 262
              }
            ],
            "declare": false,
            "start": 257,
            "end": 263
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 279
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 280,
              "end": 283
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 268,
            "end": 283
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
                },
                "init": null,
                "definite": false,
                "start": 298,
                "end": 299
              }
            ],
            "declare": false,
            "start": 294,
            "end": 300
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 315
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 318,
              "end": 321
            },
            "expression": false,
            "start": 305,
            "end": 321
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 346
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 349,
              "end": 352
            },
            "expression": false,
            "start": 335,
            "end": 352
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
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 363
                },
                "init": null,
                "definite": false,
                "start": 361,
                "end": 363
              }
            ],
            "declare": false,
            "start": 357,
            "end": 364
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 384
                },
                "init": null,
                "definite": false,
                "start": 383,
                "end": 384
              }
            ],
            "declare": false,
            "start": 379,
            "end": 385
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 401
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 402,
              "end": 405
            },
            "declare": false,
            "start": 390,
            "end": 405
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 422,
              "end": 423
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 424,
              "end": 427
            },
            "abstract": false,
            "declare": false,
            "start": 416,
            "end": 427
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 442
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 445,
              "end": 448
            },
            "expression": false,
            "start": 432,
            "end": 448
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 474
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 477,
              "end": 480
            },
            "expression": false,
            "start": 463,
            "end": 480
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
              "start": 491,
              "end": 493
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 494,
              "end": 497
            },
            "abstract": false,
            "declare": false,
            "start": 485,
            "end": 497
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fi",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 523
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 526,
              "end": 529
            },
            "expression": false,
            "start": 512,
            "end": 529
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fi",
              "optional": false,
              "typeAnnotation": null,
              "start": 544,
              "end": 546
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 547,
              "end": 550
            },
            "declare": false,
            "start": 534,
            "end": 550
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cli",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 571
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 572,
              "end": 575
            },
            "abstract": false,
            "declare": false,
            "start": 562,
            "end": 575
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cli",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 593
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 594,
              "end": 597
            },
            "declare": false,
            "start": 580,
            "end": 597
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cli2",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 617
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 618,
              "end": 621
            },
            "declare": false,
            "start": 603,
            "end": 621
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "cli2",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 636
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 637,
              "end": 640
            },
            "abstract": false,
            "declare": false,
            "start": 626,
            "end": 640
          }
        ],
        "start": 12,
        "end": 642
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 642
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 642
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 18,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 34,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 65,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 72,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 131,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 153,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 191,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 231,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 257,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 268,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 294,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 305,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 335,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 390,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 416,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 432,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 463,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 472,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 485,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 491,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 512,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "fi",
    "start": 521,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 534,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "fi",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 562,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "cli",
    "start": 568,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 580,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "cli",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 603,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "cli2",
    "start": 613,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 626,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "cli2",
    "start": 632,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  }
]
```
