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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 192
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 198,
                "end": 204
              },
              "start": 196,
              "end": 204
            },
            "accessibility": null,
            "static": false,
            "start": 195,
            "end": 204
          }
        ],
        "start": 193,
        "end": 206
      },
      "declare": false,
      "start": 181,
      "end": 206
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 218
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
              },
              "start": 222,
              "end": 230
            },
            "accessibility": null,
            "static": false,
            "start": 221,
            "end": 230
          }
        ],
        "start": 219,
        "end": 232
      },
      "declare": false,
      "start": 207,
      "end": 232
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 244
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
              },
              "start": 248,
              "end": 256
            },
            "accessibility": null,
            "static": false,
            "start": 247,
            "end": 256
          }
        ],
        "start": 245,
        "end": 258
      },
      "declare": false,
      "start": 233,
      "end": 258
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
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 269,
                      "end": 270
                    },
                    "typeArguments": null,
                    "start": 269,
                    "end": 270
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 274
                    },
                    "typeArguments": null,
                    "start": 273,
                    "end": 274
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 278
                    },
                    "typeArguments": null,
                    "start": 277,
                    "end": 278
                  }
                ],
                "start": 269,
                "end": 278
              },
              "start": 267,
              "end": 278
            },
            "start": 264,
            "end": 278
          },
          "init": null,
          "definite": false,
          "start": 264,
          "end": 278
        }
      ],
      "declare": false,
      "start": 260,
      "end": 279
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
            "name": "abc",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 283
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 285
          },
          "optional": false,
          "computed": false,
          "start": 280,
          "end": 285
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 288,
          "end": 295
        },
        "start": 280,
        "end": 295
      },
      "directive": null,
      "start": 280,
      "end": 296
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
            "name": "abc",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 300
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 302
          },
          "optional": false,
          "computed": false,
          "start": 297,
          "end": 302
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 305,
          "end": 312
        },
        "start": 297,
        "end": 312
      },
      "directive": null,
      "start": 297,
      "end": 313
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
            "name": "abc",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 317
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 319
          },
          "optional": false,
          "computed": false,
          "start": 314,
          "end": 319
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 322,
          "end": 329
        },
        "start": 314,
        "end": 329
      },
      "directive": null,
      "start": 314,
      "end": 330
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 343
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 347
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 350
                },
                "typeArguments": null,
                "start": 349,
                "end": 350
              },
              "start": 347,
              "end": 350
            },
            "accessibility": null,
            "static": false,
            "start": 346,
            "end": 350
          }
        ],
        "start": 344,
        "end": 352
      },
      "declare": false,
      "start": 332,
      "end": 352
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 364
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 368
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 371
                },
                "typeArguments": null,
                "start": 370,
                "end": 371
              },
              "start": 368,
              "end": 371
            },
            "accessibility": null,
            "static": false,
            "start": 367,
            "end": 371
          }
        ],
        "start": 365,
        "end": 373
      },
      "declare": false,
      "start": 353,
      "end": 373
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 385
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 389
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 392
                },
                "typeArguments": null,
                "start": 391,
                "end": 392
              },
              "start": 389,
              "end": 392
            },
            "accessibility": null,
            "static": false,
            "start": 388,
            "end": 392
          }
        ],
        "start": 386,
        "end": 394
      },
      "declare": false,
      "start": 374,
      "end": 394
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
            "name": "xyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 405,
                      "end": 406
                    },
                    "typeArguments": null,
                    "start": 405,
                    "end": 406
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 409,
                      "end": 410
                    },
                    "typeArguments": null,
                    "start": 409,
                    "end": 410
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 413,
                      "end": 414
                    },
                    "typeArguments": null,
                    "start": 413,
                    "end": 414
                  }
                ],
                "start": 405,
                "end": 414
              },
              "start": 403,
              "end": 414
            },
            "start": 400,
            "end": 414
          },
          "init": null,
          "definite": false,
          "start": 400,
          "end": 414
        }
      ],
      "declare": false,
      "start": 396,
      "end": 415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 419
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 421
            },
            "optional": false,
            "computed": false,
            "start": 416,
            "end": 421
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 423
          },
          "optional": false,
          "computed": false,
          "start": 416,
          "end": 423
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 426,
          "end": 433
        },
        "start": 416,
        "end": 433
      },
      "directive": null,
      "start": 416,
      "end": 434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 438
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 440
            },
            "optional": false,
            "computed": false,
            "start": 435,
            "end": 440
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 442
          },
          "optional": false,
          "computed": false,
          "start": 435,
          "end": 442
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 445,
          "end": 452
        },
        "start": 435,
        "end": 452
      },
      "directive": null,
      "start": 435,
      "end": 453
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 457
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 459
            },
            "optional": false,
            "computed": false,
            "start": 454,
            "end": 459
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 461
          },
          "optional": false,
          "computed": false,
          "start": 454,
          "end": 461
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 464,
          "end": 471
        },
        "start": 454,
        "end": 471
      },
      "directive": null,
      "start": 454,
      "end": 472
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 481
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 488,
                "end": 494
              },
              "start": 486,
              "end": 494
            },
            "start": 485,
            "end": 494
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 499,
            "end": 505
          },
          "start": 496,
          "end": 505
        },
        "start": 484,
        "end": 505
      },
      "declare": false,
      "start": 474,
      "end": 506
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 512,
        "end": 514
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 521,
                "end": 527
              },
              "start": 519,
              "end": 527
            },
            "start": 518,
            "end": 527
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 532,
            "end": 538
          },
          "start": 529,
          "end": 538
        },
        "start": 517,
        "end": 538
      },
      "declare": false,
      "start": 507,
      "end": 539
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 548,
                      "end": 550
                    },
                    "typeArguments": null,
                    "start": 548,
                    "end": 550
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 553,
                      "end": 555
                    },
                    "typeArguments": null,
                    "start": 553,
                    "end": 555
                  }
                ],
                "start": 548,
                "end": 555
              },
              "start": 546,
              "end": 555
            },
            "start": 545,
            "end": 555
          },
          "init": null,
          "definite": false,
          "start": 545,
          "end": 555
        }
      ],
      "declare": false,
      "start": 541,
      "end": 556
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 562
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 566
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 567,
                "end": 574
              }
            ],
            "optional": false,
            "start": 565,
            "end": 575
          },
          "definite": false,
          "start": 561,
          "end": 575
        }
      ],
      "declare": false,
      "start": 557,
      "end": 576
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 582
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 586
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 587,
                "end": 589
              }
            ],
            "optional": false,
            "start": 585,
            "end": 590
          },
          "definite": false,
          "start": 581,
          "end": 590
        }
      ],
      "declare": false,
      "start": 577,
      "end": 591
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 604
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
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 611,
              "end": 617
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doublyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 633
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 637,
                              "end": 638
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 640,
                                "end": 646
                              },
                              "start": 638,
                              "end": 646
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 637,
                            "end": 647
                          }
                        ],
                        "start": 635,
                        "end": 649
                      },
                      "start": 633,
                      "end": 649
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 621,
                    "end": 650
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "different",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 651,
                      "end": 660
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 664,
                              "end": 665
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 667,
                                "end": 673
                              },
                              "start": 665,
                              "end": 673
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 664,
                            "end": 673
                          }
                        ],
                        "start": 662,
                        "end": 675
                      },
                      "start": 660,
                      "end": 675
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 651,
                    "end": 675
                  }
                ],
                "start": 619,
                "end": 677
              },
              "start": 617,
              "end": 677
            },
            "accessibility": null,
            "static": false,
            "start": 611,
            "end": 678
          }
        ],
        "start": 605,
        "end": 680
      },
      "declare": false,
      "start": 593,
      "end": 680
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 691,
        "end": 692
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
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 705
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doublyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 709,
                      "end": 721
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
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
                              "start": 725,
                              "end": 726
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 728,
                                "end": 734
                              },
                              "start": 726,
                              "end": 734
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 725,
                            "end": 735
                          }
                        ],
                        "start": 723,
                        "end": 737
                      },
                      "start": 721,
                      "end": 737
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 709,
                    "end": 738
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 739,
                      "end": 744
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 747,
                              "end": 748
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 750,
                                "end": 756
                              },
                              "start": 748,
                              "end": 756
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 747,
                            "end": 756
                          }
                        ],
                        "start": 746,
                        "end": 758
                      },
                      "start": 744,
                      "end": 758
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 739,
                    "end": 758
                  }
                ],
                "start": 707,
                "end": 760
              },
              "start": 705,
              "end": 760
            },
            "accessibility": null,
            "static": false,
            "start": 699,
            "end": 761
          }
        ],
        "start": 693,
        "end": 763
      },
      "declare": false,
      "start": 681,
      "end": 763
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
            "name": "de",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 774,
                      "end": 775
                    },
                    "typeArguments": null,
                    "start": 774,
                    "end": 775
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 778,
                      "end": 779
                    },
                    "typeArguments": null,
                    "start": 778,
                    "end": 779
                  }
                ],
                "start": 774,
                "end": 779
              },
              "start": 772,
              "end": 779
            },
            "start": 770,
            "end": 779
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 794
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "doublyNested",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 806,
                        "end": 818
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 834,
                              "end": 835
                            },
                            "value": {
                              "type": "Literal",
                              "value": "yes",
                              "raw": "'yes'",
                              "start": 837,
                              "end": 842
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 834,
                            "end": 842
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 856,
                              "end": 857
                            },
                            "value": {
                              "type": "Literal",
                              "value": "no",
                              "raw": "'no'",
                              "start": 859,
                              "end": 863
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 856,
                            "end": 863
                          }
                        ],
                        "start": 820,
                        "end": 873
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 806,
                      "end": 873
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "different",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 883,
                        "end": 892
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 896,
                              "end": 897
                            },
                            "value": {
                              "type": "Literal",
                              "value": 12,
                              "raw": "12",
                              "start": 899,
                              "end": 901
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 896,
                            "end": 901
                          }
                        ],
                        "start": 894,
                        "end": 903
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 883,
                      "end": 903
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 913,
                        "end": 918
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 922,
                              "end": 923
                            },
                            "value": {
                              "type": "Literal",
                              "value": 101,
                              "raw": "101",
                              "start": 925,
                              "end": 928
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 922,
                            "end": 928
                          }
                        ],
                        "start": 920,
                        "end": 930
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 913,
                      "end": 930
                    }
                  ],
                  "start": 796,
                  "end": 936
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 788,
                "end": 936
              }
            ],
            "start": 782,
            "end": 938
          },
          "definite": false,
          "start": 770,
          "end": 938
        }
      ],
      "declare": false,
      "start": 764,
      "end": 938
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 1048,
        "end": 1049
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
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 1056,
              "end": 1062
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doublyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1066,
                      "end": 1078
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1082,
                              "end": 1083
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1085,
                                "end": 1091
                              },
                              "start": 1083,
                              "end": 1091
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1082,
                            "end": 1092
                          }
                        ],
                        "start": 1080,
                        "end": 1094
                      },
                      "start": 1078,
                      "end": 1094
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1066,
                    "end": 1094
                  }
                ],
                "start": 1064,
                "end": 1096
              },
              "start": 1062,
              "end": 1096
            },
            "accessibility": null,
            "static": false,
            "start": 1056,
            "end": 1096
          }
        ],
        "start": 1050,
        "end": 1098
      },
      "declare": false,
      "start": 1038,
      "end": 1098
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 1110,
        "end": 1111
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
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 1118,
              "end": 1124
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doublyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1128,
                      "end": 1140
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "h",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1144,
                              "end": 1145
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1147,
                                "end": 1153
                              },
                              "start": 1145,
                              "end": 1153
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1144,
                            "end": 1154
                          }
                        ],
                        "start": 1142,
                        "end": 1156
                      },
                      "start": 1140,
                      "end": 1156
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1128,
                    "end": 1156
                  }
                ],
                "start": 1126,
                "end": 1158
              },
              "start": 1124,
              "end": 1158
            },
            "accessibility": null,
            "static": false,
            "start": 1118,
            "end": 1158
          }
        ],
        "start": 1112,
        "end": 1160
      },
      "declare": false,
      "start": 1100,
      "end": 1160
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
            "name": "defg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1174,
                      "end": 1175
                    },
                    "typeArguments": null,
                    "start": 1174,
                    "end": 1175
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1178,
                      "end": 1179
                    },
                    "typeArguments": null,
                    "start": 1178,
                    "end": 1179
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1182,
                      "end": 1183
                    },
                    "typeArguments": null,
                    "start": 1182,
                    "end": 1183
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1186,
                      "end": 1187
                    },
                    "typeArguments": null,
                    "start": 1186,
                    "end": 1187
                  }
                ],
                "start": 1174,
                "end": 1187
              },
              "start": 1172,
              "end": 1187
            },
            "start": 1168,
            "end": 1187
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1196,
                  "end": 1202
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "doublyNested",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1214,
                        "end": 1226
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1242,
                              "end": 1243
                            },
                            "value": {
                              "type": "Literal",
                              "value": "yes",
                              "raw": "'yes'",
                              "start": 1245,
                              "end": 1250
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1242,
                            "end": 1250
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1264,
                              "end": 1265
                            },
                            "value": {
                              "type": "Literal",
                              "value": "no",
                              "raw": "'no'",
                              "start": 1267,
                              "end": 1271
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1264,
                            "end": 1271
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1285,
                              "end": 1286
                            },
                            "value": {
                              "type": "Literal",
                              "value": "ok",
                              "raw": "'ok'",
                              "start": 1288,
                              "end": 1292
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1285,
                            "end": 1292
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "h",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1306,
                              "end": 1307
                            },
                            "value": {
                              "type": "Literal",
                              "value": "affirmative",
                              "raw": "'affirmative'",
                              "start": 1309,
                              "end": 1322
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1306,
                            "end": 1322
                          }
                        ],
                        "start": 1228,
                        "end": 1332
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1214,
                      "end": 1332
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "different",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1342,
                        "end": 1351
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1355,
                              "end": 1356
                            },
                            "value": {
                              "type": "Literal",
                              "value": 12,
                              "raw": "12",
                              "start": 1358,
                              "end": 1360
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1355,
                            "end": 1360
                          }
                        ],
                        "start": 1353,
                        "end": 1362
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1342,
                      "end": 1362
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1372,
                        "end": 1377
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1381,
                              "end": 1382
                            },
                            "value": {
                              "type": "Literal",
                              "value": 101,
                              "raw": "101",
                              "start": 1384,
                              "end": 1387
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1381,
                            "end": 1387
                          }
                        ],
                        "start": 1379,
                        "end": 1389
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1372,
                      "end": 1389
                    }
                  ],
                  "start": 1204,
                  "end": 1395
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1196,
                "end": 1395
              }
            ],
            "start": 1190,
            "end": 1397
          },
          "definite": false,
          "start": 1168,
          "end": 1397
        }
      ],
      "declare": false,
      "start": 1162,
      "end": 1397
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 181,
  "end": 1397
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 181,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 207,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 233,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 260,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 288,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 305,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "abc",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 322,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 332,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "interface",
    "start": 353,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "start": 374,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 400,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 416,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 426,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 443,
    "end": 444
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 445,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "xyz",
    "start": 454,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 464,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 474,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 479,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 496,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 507,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 512,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 529,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 532,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 541,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 548,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 567,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 577,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 587,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 593,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 611,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "doublyNested",
    "start": 621,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 640,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "different",
    "start": 651,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 667,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 681,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 699,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "doublyNested",
    "start": 709,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 728,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 739,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 750,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 764,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "de",
    "start": 770,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 788,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "doublyNested",
    "start": 806,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 837,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 859,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "different",
    "start": 883,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 899,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 913,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 923,
    "end": 924
  },
  {
    "type": "Numeric",
    "value": "101",
    "start": 925,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1038,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 1056,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "doublyNested",
    "start": 1066,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1085,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1100,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 1118,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "doublyNested",
    "start": 1128,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1147,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1162,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "defg",
    "start": 1168,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 1196,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "doublyNested",
    "start": 1214,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "String",
    "value": "'yes'",
    "start": 1245,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 1267,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "String",
    "value": "'ok'",
    "start": 1288,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "String",
    "value": "'affirmative'",
    "start": 1309,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "different",
    "start": 1342,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1358,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1372,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Numeric",
    "value": "101",
    "start": 1384,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1396,
    "end": 1397
  }
]
```
