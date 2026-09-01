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
        "name": "TestNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 88
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
                "type": "TSVoidKeyword",
                "start": 97,
                "end": 101
              },
              "start": 95,
              "end": 101
            },
            "start": 93,
            "end": 102
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 120,
                "end": 124
              },
              "start": 118,
              "end": 124
            },
            "accessibility": null,
            "static": false,
            "start": 105,
            "end": 125
          }
        ],
        "start": 89,
        "end": 127
      },
      "declare": false,
      "start": 70,
      "end": 127
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "testNull",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 153
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 165
            },
            "typeArguments": null,
            "start": 157,
            "end": 165
          },
          "start": 155,
          "end": 165
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 184
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
                "start": 187,
                "end": 189
              },
              "expression": false,
              "start": 170,
              "end": 189
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 197
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 202
                  },
                  "optional": false,
                  "computed": false,
                  "start": 192,
                  "end": 202
                },
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 205,
                  "end": 209
                },
                "start": 192,
                "end": 209
              },
              "directive": null,
              "start": 192,
              "end": 210
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 225
              },
              "start": 213,
              "end": 226
            }
          ],
          "start": 166,
          "end": 228
        },
        "expression": false,
        "start": 136,
        "end": 228
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 129,
      "end": 228
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestNull2",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 249
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
                "type": "TSVoidKeyword",
                "start": 258,
                "end": 262
              },
              "start": 256,
              "end": 262
            },
            "start": 254,
            "end": 263
          },
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
              "start": 266,
              "end": 270
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 272,
                    "end": 278
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 281,
                    "end": 285
                  }
                ],
                "start": 272,
                "end": 285
              },
              "start": 270,
              "end": 285
            },
            "accessibility": null,
            "static": false,
            "start": 266,
            "end": 286
          }
        ],
        "start": 250,
        "end": 288
      },
      "declare": false,
      "start": 230,
      "end": 288
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "testNull2",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 315
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestNull2",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 328
            },
            "typeArguments": null,
            "start": 319,
            "end": 328
          },
          "start": 317,
          "end": 328
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 347
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
                "start": 350,
                "end": 352
              },
              "expression": false,
              "start": 333,
              "end": 352
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 360
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 365
                  },
                  "optional": false,
                  "computed": false,
                  "start": 355,
                  "end": 365
                },
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 368,
                  "end": 372
                },
                "start": 355,
                "end": 372
              },
              "directive": null,
              "start": 355,
              "end": 373
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 388
              },
              "start": 376,
              "end": 389
            }
          ],
          "start": 329,
          "end": 391
        },
        "expression": false,
        "start": 297,
        "end": 391
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 290,
      "end": 391
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 416
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
                "type": "TSVoidKeyword",
                "start": 425,
                "end": 429
              },
              "start": 423,
              "end": 429
            },
            "start": 421,
            "end": 430
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 446
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 448,
                "end": 457
              },
              "start": 446,
              "end": 457
            },
            "accessibility": null,
            "static": false,
            "start": 433,
            "end": 458
          }
        ],
        "start": 417,
        "end": 460
      },
      "declare": false,
      "start": 393,
      "end": 460
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "testUndefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 491
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TestUndefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 508
            },
            "typeArguments": null,
            "start": 495,
            "end": 508
          },
          "start": 493,
          "end": 508
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 527
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
                "start": 530,
                "end": 532
              },
              "expression": false,
              "start": 513,
              "end": 532
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 535,
                    "end": 540
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 541,
                    "end": 545
                  },
                  "optional": false,
                  "computed": false,
                  "start": 535,
                  "end": 545
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 548,
                  "end": 557
                },
                "start": 535,
                "end": 557
              },
              "directive": null,
              "start": 535,
              "end": 558
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 568,
                "end": 573
              },
              "start": 561,
              "end": 574
            }
          ],
          "start": 509,
          "end": 576
        },
        "expression": false,
        "start": 469,
        "end": 576
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 462,
      "end": 576
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 70,
  "end": 576
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 70,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "TestNull",
    "start": 80,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 105,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 114,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Null",
    "value": "null",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 129,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 136,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "testNull",
    "start": 145,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "TestNull",
    "start": 157,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 192,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "Null",
    "value": "null",
    "start": 205,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 213,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 220,
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
    "value": "interface",
    "start": 230,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "TestNull2",
    "start": 240,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 258,
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
    "value": "prop",
    "start": 266,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 279,
    "end": 280
  },
  {
    "type": "Null",
    "value": "null",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 290,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 297,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "testNull2",
    "start": 306,
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
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "TestNull2",
    "start": 319,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 333,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 342,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 355,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Null",
    "value": "null",
    "start": 368,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 376,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 393,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "TestUndefined",
    "start": 403,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 425,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 433,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 442,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 448,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "export",
    "start": 462,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 469,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "testUndefined",
    "start": 478,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "TestUndefined",
    "start": 495,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 513,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 522,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 535,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 548,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 561,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 568,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576
  }
]
```
