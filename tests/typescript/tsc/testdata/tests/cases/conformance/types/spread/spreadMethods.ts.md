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
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 18,
              "end": 20
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 21
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 30,
                "end": 33
              },
              "expression": false,
              "start": 27,
              "end": 33
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 26,
            "end": 33
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 55,
                      "end": 56
                    },
                    "start": 48,
                    "end": 57
                  }
                ],
                "start": 46,
                "end": 59
              },
              "expression": false,
              "start": 43,
              "end": 59
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 38,
            "end": 59
          }
        ],
        "start": 8,
        "end": 61
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 83,
                "end": 89
              },
              "start": 81,
              "end": 89
            },
            "accessibility": null,
            "static": false,
            "start": 80,
            "end": 90
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 100,
                "end": 104
              },
              "start": 98,
              "end": 104
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 95,
            "end": 105
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 122,
                "end": 128
              },
              "start": 120,
              "end": 128
            },
            "accessibility": null,
            "static": false,
            "start": 110,
            "end": 129
          }
        ],
        "start": 74,
        "end": 131
      },
      "declare": false,
      "start": 62,
      "end": 131
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 138
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 146
            },
            "typeArguments": null,
            "arguments": [],
            "start": 141,
            "end": 148
          },
          "definite": false,
          "start": 137,
          "end": 148
        }
      ],
      "declare": false,
      "start": 133,
      "end": 148
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
            "name": "sk",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 155
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 164
                },
                "start": 160,
                "end": 164
              }
            ],
            "start": 158,
            "end": 166
          },
          "definite": false,
          "start": 153,
          "end": 166
        }
      ],
      "declare": false,
      "start": 149,
      "end": 167
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
            "name": "ssk",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 175
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 184
                },
                "start": 180,
                "end": 184
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "start": 186,
                "end": 190
              }
            ],
            "start": 178,
            "end": 192
          },
          "definite": false,
          "start": 172,
          "end": 192
        }
      ],
      "declare": false,
      "start": 168,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "sk",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 196
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 197,
          "end": 198
        },
        "optional": false,
        "computed": false,
        "start": 194,
        "end": 198
      },
      "directive": null,
      "start": 194,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "sk",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 202
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 204
          },
          "optional": false,
          "computed": false,
          "start": 200,
          "end": 204
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 200,
        "end": 206
      },
      "directive": null,
      "start": 200,
      "end": 207
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "sk",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 219
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 221
        },
        "optional": false,
        "computed": false,
        "start": 217,
        "end": 221
      },
      "directive": null,
      "start": 217,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ssk",
          "optional": false,
          "typeAnnotation": null,
          "start": 232,
          "end": 235
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 237
        },
        "optional": false,
        "computed": false,
        "start": 232,
        "end": 237
      },
      "directive": null,
      "start": 232,
      "end": 238
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ssk",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 242
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 244
          },
          "optional": false,
          "computed": false,
          "start": 239,
          "end": 244
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 239,
        "end": 246
      },
      "directive": null,
      "start": 239,
      "end": 247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ssk",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 260
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 262
        },
        "optional": false,
        "computed": false,
        "start": 257,
        "end": 262
      },
      "directive": null,
      "start": 257,
      "end": 263
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "typeArguments": null,
                "start": 281,
                "end": 282
              },
              "start": 279,
              "end": 282
            },
            "start": 278,
            "end": 282
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 288
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 290,
                  "end": 292
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 287,
                "end": 292
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 295
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 298,
                    "end": 301
                  },
                  "expression": false,
                  "start": 295,
                  "end": 301
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 294,
                "end": 301
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 308
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 320,
                          "end": 321
                        },
                        "start": 313,
                        "end": 322
                      }
                    ],
                    "start": 311,
                    "end": 324
                  },
                  "expression": false,
                  "start": 308,
                  "end": 324
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 303,
                "end": 324
              }
            ],
            "start": 285,
            "end": 326
          },
          "definite": false,
          "start": 278,
          "end": 326
        }
      ],
      "declare": false,
      "start": 274,
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
            "name": "si",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 334
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 343
                },
                "start": 339,
                "end": 343
              }
            ],
            "start": 337,
            "end": 345
          },
          "definite": false,
          "start": 332,
          "end": 345
        }
      ],
      "declare": false,
      "start": 328,
      "end": 346
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
            "name": "ssi",
            "optional": false,
            "typeAnnotation": null,
            "start": 351,
            "end": 354
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 363
                },
                "start": 359,
                "end": 363
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 369
                },
                "start": 365,
                "end": 369
              }
            ],
            "start": 357,
            "end": 371
          },
          "definite": false,
          "start": 351,
          "end": 371
        }
      ],
      "declare": false,
      "start": 347,
      "end": 372
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "si",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 375
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "optional": false,
        "computed": false,
        "start": 373,
        "end": 377
      },
      "directive": null,
      "start": 373,
      "end": 378
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "si",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 381
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 383
          },
          "optional": false,
          "computed": false,
          "start": 379,
          "end": 383
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 379,
        "end": 385
      },
      "directive": null,
      "start": 379,
      "end": 386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "si",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 395
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 397
        },
        "optional": false,
        "computed": false,
        "start": 393,
        "end": 397
      },
      "directive": null,
      "start": 393,
      "end": 398
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ssi",
          "optional": false,
          "typeAnnotation": null,
          "start": 405,
          "end": 408
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 409,
          "end": 410
        },
        "optional": false,
        "computed": false,
        "start": 405,
        "end": 410
      },
      "directive": null,
      "start": 405,
      "end": 411
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ssi",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 415
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 417
          },
          "optional": false,
          "computed": false,
          "start": 412,
          "end": 417
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 412,
        "end": 419
      },
      "directive": null,
      "start": 412,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ssi",
          "optional": false,
          "typeAnnotation": null,
          "start": 427,
          "end": 430
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 432
        },
        "optional": false,
        "computed": false,
        "start": 427,
        "end": 432
      },
      "directive": null,
      "start": 427,
      "end": 433
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 446
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
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 451,
                  "end": 452
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 454,
                  "end": 456
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 451,
                "end": 456
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 459
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 462,
                    "end": 465
                  },
                  "expression": false,
                  "start": 459,
                  "end": 465
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 458,
                "end": 465
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 472
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 484,
                          "end": 485
                        },
                        "start": 477,
                        "end": 486
                      }
                    ],
                    "start": 475,
                    "end": 488
                  },
                  "expression": false,
                  "start": 472,
                  "end": 488
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 467,
                "end": 488
              }
            ],
            "start": 449,
            "end": 490
          },
          "definite": false,
          "start": 445,
          "end": 490
        }
      ],
      "declare": false,
      "start": 441,
      "end": 491
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
            "name": "so",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 498
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 507
                },
                "start": 503,
                "end": 507
              }
            ],
            "start": 501,
            "end": 509
          },
          "definite": false,
          "start": 496,
          "end": 509
        }
      ],
      "declare": false,
      "start": 492,
      "end": 510
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
            "name": "sso",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 518
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 526,
                  "end": 527
                },
                "start": 523,
                "end": 527
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 533
                },
                "start": 529,
                "end": 533
              }
            ],
            "start": 521,
            "end": 535
          },
          "definite": false,
          "start": 515,
          "end": 535
        }
      ],
      "declare": false,
      "start": 511,
      "end": 536
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "so",
          "optional": false,
          "typeAnnotation": null,
          "start": 537,
          "end": 539
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 540,
          "end": 541
        },
        "optional": false,
        "computed": false,
        "start": 537,
        "end": 541
      },
      "directive": null,
      "start": 537,
      "end": 542
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "so",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 545
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 547
          },
          "optional": false,
          "computed": false,
          "start": 543,
          "end": 547
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 543,
        "end": 549
      },
      "directive": null,
      "start": 543,
      "end": 550
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "so",
          "optional": false,
          "typeAnnotation": null,
          "start": 557,
          "end": 559
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 560,
          "end": 561
        },
        "optional": false,
        "computed": false,
        "start": 557,
        "end": 561
      },
      "directive": null,
      "start": 557,
      "end": 562
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "sso",
          "optional": false,
          "typeAnnotation": null,
          "start": 569,
          "end": 572
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null,
          "start": 573,
          "end": 574
        },
        "optional": false,
        "computed": false,
        "start": 569,
        "end": 574
      },
      "directive": null,
      "start": 569,
      "end": 575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "sso",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 579
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 580,
            "end": 581
          },
          "optional": false,
          "computed": false,
          "start": 576,
          "end": 581
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 576,
        "end": 583
      },
      "directive": null,
      "start": 576,
      "end": 584
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "sso",
          "optional": false,
          "typeAnnotation": null,
          "start": 591,
          "end": 594
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 596
        },
        "optional": false,
        "computed": false,
        "start": 591,
        "end": 596
      },
      "directive": null,
      "start": 591,
      "end": 597
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 603
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
    "value": "K",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Identifier",
    "value": "get",
    "start": 38,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "return",
    "start": 48,
    "end": 54
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 62,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 110,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 141,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "sk",
    "start": 153,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "ssk",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "k",
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
    "type": "Punctuator",
    "value": "...",
    "start": 186,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "sk",
    "start": 194,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "sk",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "sk",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "ssk",
    "start": 232,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "ssk",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "ssk",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "g",
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
    "type": "Keyword",
    "value": "let",
    "start": 274,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 290,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 303,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 313,
    "end": 319
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 328,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "si",
    "start": 332,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 339,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 347,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "ssi",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 359,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 365,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "si",
    "start": 373,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 376,
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
    "value": "si",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "si",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "ssi",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "ssi",
    "start": 412,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "ssi",
    "start": 427,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 441,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 467,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 477,
    "end": 483
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 492,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "so",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 503,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 511,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "sso",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 523,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 529,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "so",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "so",
    "start": 543,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "so",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "sso",
    "start": 569,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "sso",
    "start": 576,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "sso",
    "start": 591,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  }
]
```
