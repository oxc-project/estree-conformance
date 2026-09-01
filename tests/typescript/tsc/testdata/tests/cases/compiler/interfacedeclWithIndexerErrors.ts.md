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
        "name": "a0",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "start": 19,
            "end": 30
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 37
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 40
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 46,
                    "end": 52
                  },
                  "start": 44,
                  "end": 52
                },
                "start": 42,
                "end": 52
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 55,
                "end": 61
              },
              "start": 53,
              "end": 61
            },
            "start": 35,
            "end": 62
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
              },
              "start": 78,
              "end": 86
            },
            "start": 72,
            "end": 87
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 100,
                    "end": 106
                  },
                  "start": 98,
                  "end": 106
                },
                "start": 97,
                "end": 106
              }
            ],
            "returnType": null,
            "start": 92,
            "end": 108
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 118,
                    "end": 124
                  },
                  "start": 116,
                  "end": 124
                },
                "start": 115,
                "end": 124
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 131,
                    "end": 137
                  },
                  "start": 129,
                  "end": 137
                },
                "start": 127,
                "end": 137
              },
              "start": 125,
              "end": 137
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 114,
            "end": 138
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 147,
                    "end": 153
                  },
                  "start": 145,
                  "end": 153
                },
                "start": 144,
                "end": 153
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 160,
                    "end": 166
                  },
                  "start": 158,
                  "end": 166
                },
                "start": 156,
                "end": 166
              },
              "start": 154,
              "end": 166
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 143,
            "end": 167
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 175
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 173,
            "end": 176
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 183
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 185,
                "end": 191
              },
              "start": 183,
              "end": 191
            },
            "accessibility": null,
            "static": false,
            "start": 181,
            "end": 192
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 199
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 197,
            "end": 201
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p4",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 208
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 211,
                "end": 217
              },
              "start": 209,
              "end": 217
            },
            "accessibility": null,
            "static": false,
            "start": 206,
            "end": 218
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p5",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 225
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 231,
                        "end": 237
                      },
                      "start": 229,
                      "end": 237
                    },
                    "start": 228,
                    "end": 237
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 241,
                    "end": 247
                  },
                  "start": 239,
                  "end": 247
                },
                "start": 227,
                "end": 247
              },
              "start": 225,
              "end": 247
            },
            "accessibility": null,
            "static": false,
            "start": 223,
            "end": 248
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 256
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 254,
            "end": 259
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 266
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 264,
            "end": 271
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 278
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 282,
                    "end": 288
                  },
                  "start": 280,
                  "end": 288
                },
                "start": 279,
                "end": 288
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 291,
                "end": 297
              },
              "start": 289,
              "end": 297
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 276,
            "end": 298
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 305
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 311,
                    "end": 317
                  },
                  "start": 309,
                  "end": 317
                },
                "start": 308,
                "end": 317
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 320,
                "end": 326
              },
              "start": 318,
              "end": 326
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 303,
            "end": 327
          }
        ],
        "start": 13,
        "end": 329
      },
      "declare": false,
      "start": 0,
      "end": 329
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 344
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 355,
                    "end": 361
                  },
                  "start": 353,
                  "end": 361
                },
                "start": 352,
                "end": 361
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 364,
                "end": 370
              },
              "start": 362,
              "end": 370
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 351,
            "end": 371
          }
        ],
        "start": 345,
        "end": 373
      },
      "declare": false,
      "start": 332,
      "end": 373
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 387
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 398,
                    "end": 404
                  },
                  "start": 396,
                  "end": 404
                },
                "start": 395,
                "end": 404
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 407,
                "end": 413
              },
              "start": 405,
              "end": 413
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 394,
            "end": 414
          }
        ],
        "start": 388,
        "end": 416
      },
      "declare": false,
      "start": 375,
      "end": 416
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 428,
        "end": 429
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 430,
        "end": 433
      },
      "declare": false,
      "start": 418,
      "end": 433
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 445,
        "end": 446
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 456
          },
          "typeArguments": null,
          "start": 455,
          "end": 456
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 457,
        "end": 460
      },
      "declare": false,
      "start": 435,
      "end": 460
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 472,
        "end": 473
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 483
          },
          "typeArguments": null,
          "start": 482,
          "end": 483
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 486
          },
          "typeArguments": null,
          "start": 485,
          "end": 486
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 487,
        "end": 490
      },
      "declare": false,
      "start": 462,
      "end": 490
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 502,
        "end": 503
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 513
          },
          "typeArguments": null,
          "start": 512,
          "end": 513
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 514,
        "end": 517
      },
      "declare": false,
      "start": 492,
      "end": 517
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 530
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "number",
            "optional": false,
            "typeAnnotation": null,
            "start": 539,
            "end": 545
          },
          "typeArguments": null,
          "start": 539,
          "end": 545
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 546,
        "end": 549
      },
      "declare": false,
      "start": 519,
      "end": 549
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 561,
        "end": 562
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 569,
              "end": 573
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 582,
                  "end": 588
                },
                "typeArguments": null,
                "start": 575,
                "end": 588
              },
              "start": 573,
              "end": 588
            },
            "accessibility": null,
            "static": false,
            "start": 569,
            "end": 589
          }
        ],
        "start": 563,
        "end": 591
      },
      "declare": false,
      "start": 551,
      "end": 591
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 599,
        "end": 601
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 613,
            "end": 614
          },
          "typeArguments": null,
          "start": 613,
          "end": 614
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 615,
        "end": 618
      },
      "abstract": false,
      "declare": false,
      "start": 593,
      "end": 618
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
            "name": "instance2",
            "optional": false,
            "typeAnnotation": null,
            "start": 623,
            "end": 632
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 639,
              "end": 641
            },
            "typeArguments": null,
            "arguments": [],
            "start": 635,
            "end": 643
          },
          "definite": false,
          "start": 623,
          "end": 643
        }
      ],
      "declare": false,
      "start": 619,
      "end": 644
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 644
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "string",
    "start": 100,
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
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 129,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 158,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 173,
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
    "value": "p2",
    "start": 181,
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
    "start": 185,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "p5",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 239,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 241,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 303,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": "number",
    "start": 311,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 320,
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
    "type": "Keyword",
    "value": "interface",
    "start": 332,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 375,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "a2",
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
    "type": "Punctuator",
    "value": "[",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 404,
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
    "value": "number",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "interface",
    "start": 418,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 435,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 447,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 462,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 474,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 492,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 504,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 519,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 531,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 539,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 551,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 569,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 575,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 582,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 593,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 599,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 602,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 619,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "instance2",
    "start": 623,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 635,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 639,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  }
]
```
