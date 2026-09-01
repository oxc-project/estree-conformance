__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Head",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 234
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 236
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 245,
              "end": 251
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 235,
            "end": 251
          }
        ],
        "start": 234,
        "end": 252
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 256
          },
          "typeArguments": null,
          "start": 255,
          "end": 256
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 265,
              "end": 268
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 275,
              "end": 278
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 286,
              "end": 288
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "H",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 275
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 274,
                "end": 275
              },
              "start": 268,
              "end": 275
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 286
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 284,
                "end": 286
              },
              "start": 278,
              "end": 286
            }
          ],
          "start": 265,
          "end": 288
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 292
          },
          "typeArguments": null,
          "start": 291,
          "end": 292
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 295,
          "end": 300
        },
        "start": 255,
        "end": 300
      },
      "declare": false,
      "start": 225,
      "end": 301
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rest",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 311
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 313
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 322,
              "end": 328
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 312,
            "end": 328
          }
        ],
        "start": 311,
        "end": 329
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 333
          },
          "typeArguments": null,
          "start": 332,
          "end": 333
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 342,
              "end": 345
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 353,
              "end": 356
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 363,
              "end": 365
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_H",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 353
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 351,
                "end": 353
              },
              "start": 345,
              "end": 353
            },
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 363
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 362,
                "end": 363
              },
              "start": 356,
              "end": 363
            }
          ],
          "start": 342,
          "end": 365
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 368,
            "end": 369
          },
          "typeArguments": null,
          "start": 368,
          "end": 369
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 372,
          "end": 377
        },
        "start": 332,
        "end": 377
      },
      "declare": false,
      "start": 302,
      "end": 378
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 386
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Head",
          "optional": false,
          "typeAnnotation": null,
          "start": 389,
          "end": 393
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "\ud800abc",
                "raw": "\"\\uD800abc\"",
                "start": 394,
                "end": 405
              },
              "start": 394,
              "end": 405
            }
          ],
          "start": 393,
          "end": 406
        },
        "start": 389,
        "end": 406
      },
      "declare": false,
      "start": 380,
      "end": 407
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 413,
        "end": 414
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Rest",
          "optional": false,
          "typeAnnotation": null,
          "start": 417,
          "end": 421
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "\ud800abc",
                "raw": "\"\\uD800abc\"",
                "start": 422,
                "end": 433
              },
              "start": 422,
              "end": 433
            }
          ],
          "start": 421,
          "end": 434
        },
        "start": 417,
        "end": 434
      },
      "declare": false,
      "start": 408,
      "end": 435
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "\ud800",
                  "raw": "\"\\uD800\"",
                  "start": 446,
                  "end": 454
                },
                "start": 446,
                "end": 454
              },
              "start": 444,
              "end": 454
            },
            "start": 443,
            "end": 454
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 457,
                "end": 460
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 464,
                "end": 471
              },
              "start": 457,
              "end": 471
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "H",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 476
              },
              "typeArguments": null,
              "start": 475,
              "end": 476
            },
            "start": 457,
            "end": 476
          },
          "definite": false,
          "start": 443,
          "end": 476
        }
      ],
      "declare": false,
      "start": 437,
      "end": 477
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 487,
                  "end": 492
                },
                "start": 487,
                "end": 492
              },
              "start": 485,
              "end": 492
            },
            "start": 484,
            "end": 492
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 495,
                "end": 498
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 502,
                "end": 509
              },
              "start": 495,
              "end": 509
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 514
              },
              "typeArguments": null,
              "start": 513,
              "end": 514
            },
            "start": 495,
            "end": 514
          },
          "definite": false,
          "start": 484,
          "end": 514
        }
      ],
      "declare": false,
      "start": 478,
      "end": 515
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 225,
  "end": 515
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 225,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 230,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 237,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 257,
    "end": 264
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 268,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 274,
    "end": 275
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 275,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 278,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "_R",
    "start": 284,
    "end": 286
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 302,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 307,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 314,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 334,
    "end": 341
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 342,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 345,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "_H",
    "start": 351,
    "end": 353
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 353,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 356,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 362,
    "end": 363
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 363,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 380,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "Head",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 393,
    "end": 394
  },
  {
    "type": "String",
    "value": "\"\\uD800abc\"",
    "start": 394,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 408,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "Rest",
    "start": 417,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 421,
    "end": 422
  },
  {
    "type": "String",
    "value": "\"\\uD800abc\"",
    "start": 422,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 437,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "String",
    "value": "\"\\uD800\"",
    "start": 446,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 457,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 461,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 464,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 472,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 478,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 487,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 495,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 499,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 502,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 510,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  }
]
```
