__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 217,
      "end": 227
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 242
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 244
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 243,
            "end": 244
          }
        ],
        "start": 242,
        "end": 245
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 249
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 252
                },
                "typeArguments": null,
                "start": 251,
                "end": 252
              },
              "start": 249,
              "end": 252
            },
            "accessibility": null,
            "static": false,
            "start": 248,
            "end": 253
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 255
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 260
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 261,
                        "end": 264
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 265,
                              "end": 266
                            },
                            "typeArguments": null,
                            "start": 265,
                            "end": 266
                          }
                        ],
                        "start": 264,
                        "end": 267
                      },
                      "start": 261,
                      "end": 267
                    }
                  ],
                  "start": 260,
                  "end": 268
                },
                "start": 257,
                "end": 268
              },
              "start": 255,
              "end": 268
            },
            "accessibility": null,
            "static": false,
            "start": 254,
            "end": 268
          }
        ],
        "start": 246,
        "end": 270
      },
      "declare": false,
      "start": 229,
      "end": 270
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 284
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 286
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 285,
            "end": 286
          }
        ],
        "start": 284,
        "end": 287
      },
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 291
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
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 297,
                          "end": 298
                        },
                        "typeArguments": null,
                        "start": 297,
                        "end": 298
                      },
                      "start": 295,
                      "end": 298
                    },
                    "start": 294,
                    "end": 298
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 303,
                    "end": 307
                  },
                  "start": 300,
                  "end": 307
                },
                "start": 293,
                "end": 307
              },
              "start": 291,
              "end": 307
            },
            "accessibility": null,
            "static": false,
            "start": 290,
            "end": 308
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 312
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 317
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 318,
                        "end": 321
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 322,
                              "end": 323
                            },
                            "typeArguments": null,
                            "start": 322,
                            "end": 323
                          }
                        ],
                        "start": 321,
                        "end": 324
                      },
                      "start": 318,
                      "end": 324
                    }
                  ],
                  "start": 317,
                  "end": 325
                },
                "start": 314,
                "end": 325
              },
              "start": 312,
              "end": 325
            },
            "accessibility": null,
            "static": false,
            "start": 309,
            "end": 325
          }
        ],
        "start": 288,
        "end": 327
      },
      "declare": false,
      "start": 271,
      "end": 327
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 345,
                  "end": 348
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 349,
                      "end": 355
                    }
                  ],
                  "start": 348,
                  "end": 356
                },
                "start": 345,
                "end": 356
              },
              "start": 343,
              "end": 356
            },
            "start": 341,
            "end": 356
          },
          "init": null,
          "definite": false,
          "start": 341,
          "end": 356
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 365
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "lit",
                        "raw": "\"lit\"",
                        "start": 366,
                        "end": 371
                      },
                      "start": 366,
                      "end": 371
                    }
                  ],
                  "start": 365,
                  "end": 372
                },
                "start": 362,
                "end": 372
              },
              "start": 360,
              "end": 372
            },
            "start": 358,
            "end": 372
          },
          "init": null,
          "definite": false,
          "start": 358,
          "end": 372
        }
      ],
      "declare": true,
      "start": 329,
      "end": 373
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 393
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 394,
                      "end": 400
                    }
                  ],
                  "start": 393,
                  "end": 401
                },
                "start": 390,
                "end": 401
              },
              "start": 388,
              "end": 401
            },
            "start": 386,
            "end": 401
          },
          "init": null,
          "definite": false,
          "start": 386,
          "end": 401
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 410
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "lit",
                        "raw": "\"lit\"",
                        "start": 411,
                        "end": 416
                      },
                      "start": 411,
                      "end": 416
                    }
                  ],
                  "start": 410,
                  "end": 417
                },
                "start": 407,
                "end": 417
              },
              "start": 405,
              "end": 417
            },
            "start": 403,
            "end": 417
          },
          "init": null,
          "definite": false,
          "start": 403,
          "end": 417
        }
      ],
      "declare": true,
      "start": 374,
      "end": 418
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fl",
          "optional": false,
          "typeAnnotation": null,
          "start": 419,
          "end": 421
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 426
        },
        "start": 419,
        "end": 426
      },
      "directive": null,
      "start": 419,
      "end": 427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 437,
          "end": 439
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "fl",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 444
        },
        "start": 437,
        "end": 444
      },
      "directive": null,
      "start": 437,
      "end": 445
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bl",
          "optional": false,
          "typeAnnotation": null,
          "start": 455,
          "end": 457
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bs",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 462
        },
        "start": 455,
        "end": 462
      },
      "directive": null,
      "start": 455,
      "end": 463
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bs",
          "optional": false,
          "typeAnnotation": null,
          "start": 473,
          "end": 475
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bl",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 480
        },
        "start": 473,
        "end": 480
      },
      "directive": null,
      "start": 473,
      "end": 481
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 491
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 229,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 254,
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
    "value": "Bar",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "interface",
    "start": 271,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 300,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 303,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 309,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 318,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 329,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 341,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "fl",
    "start": 358,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 365,
    "end": 366
  },
  {
    "type": "String",
    "value": "\"lit\"",
    "start": 366,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 374,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 382,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "bs",
    "start": 386,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 390,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 394,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "bl",
    "start": 403,
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
    "value": "Bar",
    "start": 407,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411
  },
  {
    "type": "String",
    "value": "\"lit\"",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "fl",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "fl",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "bl",
    "start": 455,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "bs",
    "start": 460,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "bs",
    "start": 473,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "bl",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 25
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 26,
            "end": 27
          }
        ],
        "start": 25,
        "end": 28
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "typeArguments": null,
                "start": 34,
                "end": 35
              },
              "start": 32,
              "end": 35
            },
            "accessibility": null,
            "static": false,
            "start": 31,
            "end": 36
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 43
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 44,
                        "end": 47
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 48,
                              "end": 49
                            },
                            "typeArguments": null,
                            "start": 48,
                            "end": 49
                          }
                        ],
                        "start": 47,
                        "end": 50
                      },
                      "start": 44,
                      "end": 50
                    }
                  ],
                  "start": 43,
                  "end": 51
                },
                "start": 40,
                "end": 51
              },
              "start": 38,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 51
          }
        ],
        "start": 29,
        "end": 53
      },
      "declare": false,
      "start": 12,
      "end": 53
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 67
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 68,
            "end": 69
          }
        ],
        "start": 67,
        "end": 70
      },
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
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
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 80,
                          "end": 81
                        },
                        "typeArguments": null,
                        "start": 80,
                        "end": 81
                      },
                      "start": 78,
                      "end": 81
                    },
                    "start": 77,
                    "end": 81
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 86,
                    "end": 90
                  },
                  "start": 83,
                  "end": 90
                },
                "start": 76,
                "end": 90
              },
              "start": 74,
              "end": 90
            },
            "accessibility": null,
            "static": false,
            "start": 73,
            "end": 91
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 100
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 104
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 105,
                              "end": 106
                            },
                            "typeArguments": null,
                            "start": 105,
                            "end": 106
                          }
                        ],
                        "start": 104,
                        "end": 107
                      },
                      "start": 101,
                      "end": 107
                    }
                  ],
                  "start": 100,
                  "end": 108
                },
                "start": 97,
                "end": 108
              },
              "start": 95,
              "end": 108
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 108
          }
        ],
        "start": 71,
        "end": 110
      },
      "declare": false,
      "start": 54,
      "end": 110
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 131
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 132,
                      "end": 138
                    }
                  ],
                  "start": 131,
                  "end": 139
                },
                "start": 128,
                "end": 139
              },
              "start": 126,
              "end": 139
            },
            "start": 124,
            "end": 139
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 139
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 148
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "lit",
                        "raw": "\"lit\"",
                        "start": 149,
                        "end": 154
                      },
                      "start": 149,
                      "end": 154
                    }
                  ],
                  "start": 148,
                  "end": 155
                },
                "start": 145,
                "end": 155
              },
              "start": 143,
              "end": 155
            },
            "start": 141,
            "end": 155
          },
          "init": null,
          "definite": false,
          "start": 141,
          "end": 155
        }
      ],
      "declare": true,
      "start": 112,
      "end": 156
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 176
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 177,
                      "end": 183
                    }
                  ],
                  "start": 176,
                  "end": 184
                },
                "start": 173,
                "end": 184
              },
              "start": 171,
              "end": 184
            },
            "start": 169,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 169,
          "end": 184
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bl",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 193
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "lit",
                        "raw": "\"lit\"",
                        "start": 194,
                        "end": 199
                      },
                      "start": 194,
                      "end": 199
                    }
                  ],
                  "start": 193,
                  "end": 200
                },
                "start": 190,
                "end": 200
              },
              "start": 188,
              "end": 200
            },
            "start": 186,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 186,
          "end": 200
        }
      ],
      "declare": true,
      "start": 157,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bl",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 204
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bs",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 209
        },
        "start": 202,
        "end": 209
      },
      "directive": null,
      "start": 202,
      "end": 210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "bs",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 222
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bl",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 227
        },
        "start": 220,
        "end": 227
      },
      "directive": null,
      "start": 220,
      "end": 228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fl",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 240
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 245
        },
        "start": 238,
        "end": 245
      },
      "directive": null,
      "start": 238,
      "end": 246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 256,
          "end": 258
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "fl",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 263
        },
        "start": 256,
        "end": 263
      },
      "directive": null,
      "start": 256,
      "end": 264
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 273
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 54,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "u",
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
    "value": "U",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 83,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 112,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 124,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "fl",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 148,
    "end": 149
  },
  {
    "type": "String",
    "value": "\"lit\"",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 157,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "bs",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "bl",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 190,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 193,
    "end": 194
  },
  {
    "type": "String",
    "value": "\"lit\"",
    "start": 194,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "bl",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "bs",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "bs",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "bl",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "fl",
    "start": 238,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 243,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 256,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "fl",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  }
]
```
