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
        "name": "O",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 45
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
              "start": 46,
              "end": 47
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 49,
                "end": 55
              },
              "start": 47,
              "end": 55
            },
            "accessibility": null,
            "static": false,
            "start": 46,
            "end": 56
          },
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
              "start": 57,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              },
              "start": 58,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 67
          }
        ],
        "start": 32,
        "end": 69
      },
      "declare": false,
      "start": 23,
      "end": 70
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 78
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 87,
                "end": 93
              },
              "start": 85,
              "end": 93
            },
            "start": 82,
            "end": 93
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 98,
            "end": 101
          },
          "start": 95,
          "end": 101
        },
        "start": 81,
        "end": 101
      },
      "declare": false,
      "start": 71,
      "end": 102
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 116
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 131
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 122,
                "end": 131
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 136
                },
                "typeArguments": null,
                "start": 135,
                "end": 136
              },
              "start": 133,
              "end": 136
            },
            "start": 120,
            "end": 136
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 141,
            "end": 144
          },
          "start": 138,
          "end": 144
        },
        "start": 119,
        "end": 144
      },
      "declare": false,
      "start": 109,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F3",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 162
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 169
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 177
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 168,
                "end": 177
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 180
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 180
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 179,
                "end": 180
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 183
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 183
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 182,
                "end": 183
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 188
                },
                "typeArguments": null,
                "start": 187,
                "end": 188
              },
              "start": 185,
              "end": 188
            },
            "start": 166,
            "end": 188
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 193,
            "end": 196
          },
          "start": 190,
          "end": 196
        },
        "start": 165,
        "end": 196
      },
      "declare": false,
      "start": 155,
      "end": 197
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F4",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 214
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 221
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 229
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 220,
                "end": 229
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 234
                },
                "typeArguments": null,
                "start": 233,
                "end": 234
              },
              "start": 231,
              "end": 234
            },
            "start": 218,
            "end": 234
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 239,
            "end": 242
          },
          "start": 236,
          "end": 242
        },
        "start": 217,
        "end": 242
      },
      "declare": false,
      "start": 207,
      "end": 243
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F5",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 260
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 267
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 269,
                  "end": 275
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 266,
                "end": 275
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 278
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 278
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 277,
                "end": 278
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 281
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 281
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 280,
                "end": 281
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 286
                },
                "typeArguments": null,
                "start": 285,
                "end": 286
              },
              "start": 283,
              "end": 286
            },
            "start": 264,
            "end": 286
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 291,
            "end": 294
          },
          "start": 288,
          "end": 294
        },
        "start": 263,
        "end": 294
      },
      "declare": false,
      "start": 253,
      "end": 295
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F6",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 312
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 319
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 327
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 318,
                "end": 327
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 329
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 347
            },
            "typeArguments": null,
            "start": 334,
            "end": 347
          },
          "start": 331,
          "end": 347
        },
        "start": 315,
        "end": 347
      },
      "declare": false,
      "start": 305,
      "end": 348
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F7",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 362
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 369
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 377
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 368,
                "end": 377
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 380
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 388
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 379,
                "end": 388
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 366,
            "end": 390
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 408
            },
            "typeArguments": null,
            "start": 395,
            "end": 408
          },
          "start": 392,
          "end": 408
        },
        "start": 365,
        "end": 408
      },
      "declare": false,
      "start": 355,
      "end": 409
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F8",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 426
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 433
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 433
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 432,
                "end": 433
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 435,
                  "end": 436
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 444
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 435,
                "end": 444
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 446
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 464
            },
            "typeArguments": null,
            "start": 451,
            "end": 464
          },
          "start": 448,
          "end": 464
        },
        "start": 429,
        "end": 464
      },
      "declare": false,
      "start": 419,
      "end": 465
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F9",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 479
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 485
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 488
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 490,
                "end": 491
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 492
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 497,
            "end": 501
          },
          "start": 494,
          "end": 501
        },
        "start": 482,
        "end": 501
      },
      "declare": false,
      "start": 472,
      "end": 502
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G1",
        "optional": false,
        "typeAnnotation": null,
        "start": 515,
        "end": 517
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 530,
                "end": 536
              },
              "start": 528,
              "end": 536
            },
            "start": 525,
            "end": 536
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 541,
            "end": 544
          },
          "start": 538,
          "end": 544
        },
        "start": 520,
        "end": 544
      },
      "declare": false,
      "start": 510,
      "end": 545
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G2",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 559
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 570
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 578
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 569,
                "end": 578
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 582,
                  "end": 583
                },
                "typeArguments": null,
                "start": 582,
                "end": 583
              },
              "start": 580,
              "end": 583
            },
            "start": 567,
            "end": 583
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 588,
            "end": 591
          },
          "start": 585,
          "end": 591
        },
        "start": 562,
        "end": 591
      },
      "declare": false,
      "start": 552,
      "end": 592
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G3",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 609
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 620
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 622,
                  "end": 628
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 619,
                "end": 628
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 631
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 631
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 630,
                "end": 631
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 633,
                  "end": 634
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 633,
                  "end": 634
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 633,
                "end": 634
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 638,
                  "end": 639
                },
                "typeArguments": null,
                "start": 638,
                "end": 639
              },
              "start": 636,
              "end": 639
            },
            "start": 617,
            "end": 639
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 644,
            "end": 647
          },
          "start": 641,
          "end": 647
        },
        "start": 612,
        "end": 647
      },
      "declare": false,
      "start": 602,
      "end": 648
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G4",
        "optional": false,
        "typeAnnotation": null,
        "start": 663,
        "end": 665
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 675,
                  "end": 676
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 678,
                  "end": 684
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 675,
                "end": 684
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 688,
                  "end": 689
                },
                "typeArguments": null,
                "start": 688,
                "end": 689
              },
              "start": 686,
              "end": 689
            },
            "start": 673,
            "end": 689
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 694,
            "end": 697
          },
          "start": 691,
          "end": 697
        },
        "start": 668,
        "end": 697
      },
      "declare": false,
      "start": 658,
      "end": 698
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G5",
        "optional": false,
        "typeAnnotation": null,
        "start": 713,
        "end": 715
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 725,
                  "end": 726
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 728,
                  "end": 734
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 725,
                "end": 734
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 737
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 737
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 736,
                "end": 737
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 740
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 739,
                  "end": 740
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 739,
                "end": 740
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 744,
                  "end": 745
                },
                "typeArguments": null,
                "start": 744,
                "end": 745
              },
              "start": 742,
              "end": 745
            },
            "start": 723,
            "end": 745
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 750,
            "end": 753
          },
          "start": 747,
          "end": 753
        },
        "start": 718,
        "end": 753
      },
      "declare": false,
      "start": 708,
      "end": 754
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G6",
        "optional": false,
        "typeAnnotation": null,
        "start": 769,
        "end": 771
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 781,
                  "end": 782
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 784,
                  "end": 790
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 781,
                "end": 790
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 792
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 810
            },
            "typeArguments": null,
            "start": 797,
            "end": 810
          },
          "start": 794,
          "end": 810
        },
        "start": 774,
        "end": 810
      },
      "declare": false,
      "start": 764,
      "end": 811
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G7",
        "optional": false,
        "typeAnnotation": null,
        "start": 823,
        "end": 825
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 835,
                  "end": 836
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 838,
                  "end": 844
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 835,
                "end": 844
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 846,
                  "end": 847
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 855
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 846,
                "end": 855
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 833,
            "end": 857
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 869,
              "end": 875
            },
            "typeArguments": null,
            "start": 862,
            "end": 875
          },
          "start": 859,
          "end": 875
        },
        "start": 828,
        "end": 875
      },
      "declare": false,
      "start": 818,
      "end": 876
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G8",
        "optional": false,
        "typeAnnotation": null,
        "start": 891,
        "end": 893
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 903,
                  "end": 904
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 903,
                  "end": 904
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 903,
                "end": 904
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 906,
                  "end": 907
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 909,
                  "end": 915
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 906,
                "end": 915
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 901,
            "end": 917
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 935
            },
            "typeArguments": null,
            "start": 922,
            "end": 935
          },
          "start": 919,
          "end": 935
        },
        "start": 896,
        "end": 935
      },
      "declare": false,
      "start": 886,
      "end": 936
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G9",
        "optional": false,
        "typeAnnotation": null,
        "start": 948,
        "end": 950
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 959,
                "end": 960
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 962,
                "end": 963
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 965,
                "end": 966
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 958,
            "end": 967
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 972,
            "end": 976
          },
          "start": 969,
          "end": 976
        },
        "start": 953,
        "end": 976
      },
      "declare": false,
      "start": 943,
      "end": 977
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1104,
        "end": 1107
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 1113,
                  "end": 1116
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1118,
                  "end": 1124
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1113,
                "end": 1124
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1111,
            "end": 1126
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1131,
            "end": 1135
          },
          "start": 1128,
          "end": 1135
        },
        "start": 1110,
        "end": 1135
      },
      "declare": false,
      "start": 1099,
      "end": 1136
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1151,
        "end": 1154
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1160,
                  "end": 1161
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1163,
                  "end": 1169
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1160,
                "end": 1169
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1158,
            "end": 1171
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1176,
            "end": 1180
          },
          "start": 1173,
          "end": 1180
        },
        "start": 1157,
        "end": 1180
      },
      "declare": false,
      "start": 1146,
      "end": 1181
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1196,
        "end": 1199
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 1206,
                  "end": 1209
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1218
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1205,
                "end": 1218
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1223
                },
                "typeArguments": null,
                "start": 1222,
                "end": 1223
              },
              "start": 1220,
              "end": 1223
            },
            "start": 1203,
            "end": 1223
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1228,
            "end": 1232
          },
          "start": 1225,
          "end": 1232
        },
        "start": 1202,
        "end": 1232
      },
      "declare": false,
      "start": 1191,
      "end": 1233
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1248,
        "end": 1251
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1258,
                  "end": 1259
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1262,
                  "end": 1268
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1257,
                "end": 1268
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1255,
            "end": 1270
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1275,
            "end": 1279
          },
          "start": 1272,
          "end": 1279
        },
        "start": 1254,
        "end": 1279
      },
      "declare": false,
      "start": 1243,
      "end": 1280
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1295,
        "end": 1298
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 1308,
                  "end": 1311
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1313,
                  "end": 1319
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1308,
                "end": 1319
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1306,
            "end": 1321
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1326,
            "end": 1330
          },
          "start": 1323,
          "end": 1330
        },
        "start": 1301,
        "end": 1330
      },
      "declare": false,
      "start": 1290,
      "end": 1331
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1346,
        "end": 1349
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1359,
                  "end": 1360
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1368
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1359,
                "end": 1368
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1370
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1375,
            "end": 1379
          },
          "start": 1372,
          "end": 1379
        },
        "start": 1352,
        "end": 1379
      },
      "declare": false,
      "start": 1341,
      "end": 1380
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1395,
        "end": 1398
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 1409,
                  "end": 1412
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1415,
                  "end": 1421
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1408,
                "end": 1421
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1425,
                  "end": 1426
                },
                "typeArguments": null,
                "start": 1425,
                "end": 1426
              },
              "start": 1423,
              "end": 1426
            },
            "start": 1406,
            "end": 1426
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1431,
            "end": 1435
          },
          "start": 1428,
          "end": 1435
        },
        "start": 1401,
        "end": 1435
      },
      "declare": false,
      "start": 1390,
      "end": 1436
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1451,
        "end": 1454
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1465,
                  "end": 1466
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1469,
                  "end": 1475
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1464,
                "end": 1475
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1462,
            "end": 1477
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1482,
            "end": 1486
          },
          "start": 1479,
          "end": 1486
        },
        "start": 1457,
        "end": 1486
      },
      "declare": false,
      "start": 1446,
      "end": 1487
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 1508,
        "end": 1509
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1514,
              "end": 1521
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1527,
                    "end": 1533
                  },
                  "start": 1525,
                  "end": 1533
                },
                "start": 1522,
                "end": 1533
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1536,
                "end": 1539
              },
              "start": 1534,
              "end": 1539
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1514,
            "end": 1540
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1549,
              "end": 1556
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1559,
                      "end": 1560
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1562,
                      "end": 1568
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1559,
                    "end": 1568
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1557,
                "end": 1570
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1573,
                "end": 1576
              },
              "start": 1571,
              "end": 1576
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1549,
            "end": 1577
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1596,
                    "end": 1602
                  },
                  "start": 1594,
                  "end": 1602
                },
                "start": 1591,
                "end": 1602
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1605,
                "end": 1608
              },
              "start": 1603,
              "end": 1608
            },
            "start": 1590,
            "end": 1609
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1621,
                      "end": 1622
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1624,
                      "end": 1630
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1621,
                    "end": 1630
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1619,
                "end": 1632
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1635,
                "end": 1638
              },
              "start": 1633,
              "end": 1638
            },
            "start": 1618,
            "end": 1639
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1662,
                    "end": 1668
                  },
                  "start": 1660,
                  "end": 1668
                },
                "start": 1657,
                "end": 1668
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1671,
                "end": 1674
              },
              "start": 1669,
              "end": 1674
            },
            "start": 1652,
            "end": 1675
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1691,
                      "end": 1692
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1694,
                      "end": 1700
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1691,
                    "end": 1700
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1689,
                "end": 1702
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1705,
                "end": 1708
              },
              "start": 1703,
              "end": 1708
            },
            "start": 1684,
            "end": 1709
          }
        ],
        "start": 1510,
        "end": 1720
      },
      "declare": false,
      "start": 1498,
      "end": 1720
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1800,
        "end": 1802
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1805,
                "end": 1806
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "string",
                "optional": false,
                "typeAnnotation": null,
                "start": 1808,
                "end": 1814
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 1805,
              "end": 1814
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 1818,
                "end": 1819
              },
              "typeArguments": null,
              "start": 1818,
              "end": 1819
            },
            "start": 1816,
            "end": 1819
          },
          "start": 1803,
          "end": 1819
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1821,
        "end": 1824
      },
      "expression": false,
      "start": 1791,
      "end": 1824
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1831,
            "end": 1833
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1847,
                      "end": 1848
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1850,
                      "end": 1856
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1847,
                    "end": 1856
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1860,
                      "end": 1861
                    },
                    "typeArguments": null,
                    "start": 1860,
                    "end": 1861
                  },
                  "start": 1858,
                  "end": 1861
                },
                "start": 1845,
                "end": 1861
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1863,
              "end": 1866
            },
            "expression": false,
            "start": 1836,
            "end": 1866
          },
          "definite": false,
          "start": 1831,
          "end": 1866
        }
      ],
      "declare": false,
      "start": 1825,
      "end": 1867
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1874,
            "end": 1876
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1882,
                      "end": 1883
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1885,
                      "end": 1891
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1882,
                    "end": 1891
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1893,
                      "end": 1894
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1893,
                      "end": 1894
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1893,
                    "end": 1894
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1896,
                      "end": 1897
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1896,
                      "end": 1897
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 1896,
                    "end": 1897
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1901,
                      "end": 1902
                    },
                    "typeArguments": null,
                    "start": 1901,
                    "end": 1902
                  },
                  "start": 1899,
                  "end": 1902
                },
                "start": 1880,
                "end": 1902
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 1907,
              "end": 1910
            },
            "id": null,
            "generator": false,
            "start": 1879,
            "end": 1910
          },
          "definite": false,
          "start": 1874,
          "end": 1910
        }
      ],
      "declare": false,
      "start": 1868,
      "end": 1911
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1918,
            "end": 1920
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1934,
                      "end": 1935
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1937,
                      "end": 1943
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1934,
                    "end": 1943
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1947,
                      "end": 1948
                    },
                    "typeArguments": null,
                    "start": 1947,
                    "end": 1948
                  },
                  "start": 1945,
                  "end": 1948
                },
                "start": 1932,
                "end": 1948
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1958,
                  "end": 1964
                },
                "typeArguments": null,
                "start": 1951,
                "end": 1964
              },
              "start": 1949,
              "end": 1964
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1974,
                    "end": 1980
                  },
                  "start": 1967,
                  "end": 1981
                }
              ],
              "start": 1965,
              "end": 1983
            },
            "expression": false,
            "start": 1923,
            "end": 1983
          },
          "definite": false,
          "start": 1918,
          "end": 1983
        }
      ],
      "declare": false,
      "start": 1912,
      "end": 1984
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
            "name": "f5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1991,
            "end": 1993
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1999,
                      "end": 2000
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2002,
                      "end": 2008
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1999,
                    "end": 2008
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2010,
                      "end": 2011
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2010,
                      "end": 2011
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2010,
                    "end": 2011
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2013,
                      "end": 2014
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2013,
                      "end": 2014
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2013,
                    "end": 2014
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2018,
                      "end": 2019
                    },
                    "typeArguments": null,
                    "start": 2018,
                    "end": 2019
                  },
                  "start": 2016,
                  "end": 2019
                },
                "start": 1997,
                "end": 2019
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2029,
                  "end": 2035
                },
                "typeArguments": null,
                "start": 2022,
                "end": 2035
              },
              "start": 2020,
              "end": 2035
            },
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2039,
              "end": 2041
            },
            "id": null,
            "generator": false,
            "start": 1996,
            "end": 2041
          },
          "definite": false,
          "start": 1991,
          "end": 2041
        }
      ],
      "declare": false,
      "start": 1985,
      "end": 2042
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2049,
            "end": 2053
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
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2060,
                  "end": 2066
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2069,
                            "end": 2070
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2072,
                            "end": 2078
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2069,
                          "end": 2078
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2082,
                            "end": 2083
                          },
                          "typeArguments": null,
                          "start": 2082,
                          "end": 2083
                        },
                        "start": 2080,
                        "end": 2083
                      },
                      "start": 2067,
                      "end": 2083
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 2085,
                    "end": 2088
                  },
                  "expression": false,
                  "start": 2066,
                  "end": 2088
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2060,
                "end": 2088
              }
            ],
            "start": 2056,
            "end": 2090
          },
          "definite": false,
          "start": 2049,
          "end": 2090
        }
      ],
      "declare": false,
      "start": 2043,
      "end": 2091
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2098,
            "end": 2102
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
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2109,
                  "end": 2115
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2118,
                            "end": 2119
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2121,
                            "end": 2127
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2118,
                          "end": 2127
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2131,
                            "end": 2132
                          },
                          "typeArguments": null,
                          "start": 2131,
                          "end": 2132
                        },
                        "start": 2129,
                        "end": 2132
                      },
                      "start": 2116,
                      "end": 2132
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "string",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2142,
                        "end": 2148
                      },
                      "typeArguments": null,
                      "start": 2135,
                      "end": 2148
                    },
                    "start": 2133,
                    "end": 2148
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "string",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2158,
                          "end": 2164
                        },
                        "start": 2151,
                        "end": 2165
                      }
                    ],
                    "start": 2149,
                    "end": 2167
                  },
                  "expression": false,
                  "start": 2115,
                  "end": 2167
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2109,
                "end": 2167
              }
            ],
            "start": 2105,
            "end": 2169
          },
          "definite": false,
          "start": 2098,
          "end": 2169
        }
      ],
      "declare": false,
      "start": 2092,
      "end": 2170
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2180,
        "end": 2182
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2185,
                "end": 2186
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2188,
                  "end": 2194
                },
                "right": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 2197,
                  "end": 2199
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 2188,
                "end": 2199
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 2185,
              "end": 2199
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 2203,
                "end": 2204
              },
              "typeArguments": null,
              "start": 2203,
              "end": 2204
            },
            "start": 2201,
            "end": 2204
          },
          "start": 2183,
          "end": 2204
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2206,
        "end": 2209
      },
      "expression": false,
      "start": 2171,
      "end": 2209
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
            "name": "f7",
            "optional": false,
            "typeAnnotation": null,
            "start": 2216,
            "end": 2218
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2224,
                      "end": 2225
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "string",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2227,
                        "end": 2233
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 2236,
                        "end": 2238
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2227,
                      "end": 2238
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2224,
                    "end": 2238
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2240,
                      "end": 2241
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2240,
                      "end": 2241
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2240,
                    "end": 2241
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2243,
                      "end": 2244
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2243,
                      "end": 2244
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2243,
                    "end": 2244
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2248,
                      "end": 2249
                    },
                    "typeArguments": null,
                    "start": 2248,
                    "end": 2249
                  },
                  "start": 2246,
                  "end": 2249
                },
                "start": 2222,
                "end": 2249
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 2254,
              "end": 2257
            },
            "id": null,
            "generator": false,
            "start": 2221,
            "end": 2257
          },
          "definite": false,
          "start": 2216,
          "end": 2257
        }
      ],
      "declare": false,
      "start": 2210,
      "end": 2258
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
            "name": "f8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2265,
            "end": 2267
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 2273,
                      "end": 2276
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2278,
                      "end": 2284
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2273,
                    "end": 2284
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2288,
                      "end": 2289
                    },
                    "typeArguments": null,
                    "start": 2288,
                    "end": 2289
                  },
                  "start": 2286,
                  "end": 2289
                },
                "start": 2271,
                "end": 2289
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 2294,
              "end": 2297
            },
            "id": null,
            "generator": false,
            "start": 2270,
            "end": 2297
          },
          "definite": false,
          "start": 2265,
          "end": 2297
        }
      ],
      "declare": false,
      "start": 2259,
      "end": 2298
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2308,
        "end": 2310
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2314,
                "end": 2315
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "string",
                "optional": false,
                "typeAnnotation": null,
                "start": 2317,
                "end": 2323
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 2314,
              "end": 2323
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 2312,
          "end": 2325
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2327,
        "end": 2330
      },
      "expression": false,
      "start": 2299,
      "end": 2330
    },
    {
      "type": "EmptyStatement",
      "start": 2330,
      "end": 2331
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2341,
        "end": 2344
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 2349,
                "end": 2352
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "string",
                "optional": false,
                "typeAnnotation": null,
                "start": 2355,
                "end": 2361
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 2348,
              "end": 2361
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 2365,
                "end": 2366
              },
              "typeArguments": null,
              "start": 2365,
              "end": 2366
            },
            "start": 2363,
            "end": 2366
          },
          "start": 2346,
          "end": 2366
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2368,
        "end": 2371
      },
      "expression": false,
      "start": 2332,
      "end": 2371
    },
    {
      "type": "EmptyStatement",
      "start": 2371,
      "end": 2372
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": null,
            "start": 2379,
            "end": 2382
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 2390,
                      "end": 2391
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2394,
                      "end": 2400
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 2389,
                    "end": 2400
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2387,
                "end": 2402
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 2407,
              "end": 2410
            },
            "id": null,
            "generator": false,
            "start": 2386,
            "end": 2410
          },
          "definite": false,
          "start": 2379,
          "end": 2410
        }
      ],
      "declare": false,
      "start": 2373,
      "end": 2411
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2482,
        "end": 2485
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2488,
                "end": 2489
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2491,
                  "end": 2497
                },
                "right": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 2500,
                  "end": 2502
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 2491,
                "end": 2502
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 2488,
              "end": 2502
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 2506,
                "end": 2507
              },
              "typeArguments": null,
              "start": 2506,
              "end": 2507
            },
            "start": 2504,
            "end": 2507
          },
          "start": 2486,
          "end": 2507
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "string",
            "optional": false,
            "typeAnnotation": null,
            "start": 2517,
            "end": 2523
          },
          "typeArguments": null,
          "start": 2510,
          "end": 2523
        },
        "start": 2508,
        "end": 2523
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 2533,
              "end": 2536
            },
            "start": 2526,
            "end": 2537
          }
        ],
        "start": 2524,
        "end": 2539
      },
      "expression": false,
      "start": 2473,
      "end": 2539
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 2539
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 23,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 71,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "F1",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 82,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 98,
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
    "value": "type",
    "start": 109,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 114,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
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
    "value": "O",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 138,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 155,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 190,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 207,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "F4",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 236,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 253,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "F5",
    "start": 258,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 266,
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
    "value": "string",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 288,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 305,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "F6",
    "start": 310,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 331,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 334,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 341,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 355,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "F7",
    "start": 360,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 371,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 392,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 395,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 402,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 419,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "F8",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 438,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 448,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 451,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 472,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "F9",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=>",
    "start": 494,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 497,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 510,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 515,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 520,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 525,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 530,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 538,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 541,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 552,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 562,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 572,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 585,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 602,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "G3",
    "start": 607,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 612,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 622,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 641,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 658,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "G4",
    "start": 663,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 678,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 691,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 694,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 708,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "G5",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 718,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": ",",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "c",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 747,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 750,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 764,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "G6",
    "start": 769,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 774,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 784,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 794,
    "end": 796
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 797,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 804,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 818,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "G7",
    "start": 823,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 828,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 838,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 849,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 859,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 862,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 869,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 886,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "G8",
    "start": 891,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 896,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 909,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 919,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 922,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 929,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 943,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "G9",
    "start": 948,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 953,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 969,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 972,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1099,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "F10",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1113,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1118,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1128,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1131,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1146,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "F11",
    "start": 1151,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1163,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1173,
    "end": 1175
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1176,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1191,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "F12",
    "start": 1196,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1206,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1212,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1225,
    "end": 1227
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1228,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1243,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "F13",
    "start": 1248,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1262,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1272,
    "end": 1274
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1275,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1290,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "G10",
    "start": 1295,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1313,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1323,
    "end": 1325
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1326,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1341,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "G11",
    "start": 1346,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1352,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1362,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1372,
    "end": 1374
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1375,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1390,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "G12",
    "start": 1395,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1401,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1409,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1415,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1428,
    "end": 1430
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1431,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1446,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "G13",
    "start": 1451,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1457,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1469,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1479,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1482,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1498,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 1514,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1522,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1527,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1536,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1549,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1562,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1573,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1591,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1596,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1605,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1624,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1635,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1652,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1657,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1662,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1671,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1684,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1694,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1705,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1791,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1800,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1808,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1825,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1831,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1836,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1850,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1868,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1874,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1885,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1904,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1912,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1918,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1923,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1937,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1951,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1958,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1967,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1974,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1985,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1991,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2002,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2022,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2029,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2036,
    "end": 2038
  },
  {
    "type": "String",
    "value": "''",
    "start": 2039,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2043,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2049,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 2060,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2072,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2092,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 2098,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 2109,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2121,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2135,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2142,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2151,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2158,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2171,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 2180,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2188,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2197,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2210,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 2216,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2227,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2236,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2251,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2259,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 2265,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2273,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2278,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2291,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2299,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 2308,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2317,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2332,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 2341,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2349,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2355,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2373,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 2379,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2394,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2404,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2473,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 2482,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2491,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2500,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2510,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2517,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2526,
    "end": 2532
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2533,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2538,
    "end": 2539
  }
]
```
