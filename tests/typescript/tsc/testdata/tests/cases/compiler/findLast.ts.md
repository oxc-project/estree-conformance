__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "itemNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 27,
                    "end": 36
                  }
                ],
                "start": 18,
                "end": 36
              },
              "start": 16,
              "end": 36
            },
            "start": 6,
            "end": 36
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 40,
                    "end": 41
                  }
                ],
                "start": 39,
                "end": 42
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findLast",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 51
              },
              "optional": false,
              "computed": false,
              "start": 39,
              "end": 51
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 57
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 66
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 71,
                    "end": 72
                  },
                  "start": 62,
                  "end": 72
                },
                "id": null,
                "generator": false,
                "start": 52,
                "end": 72
              }
            ],
            "optional": false,
            "start": 39,
            "end": 73
          },
          "definite": false,
          "start": 6,
          "end": 73
        }
      ],
      "declare": false,
      "start": 0,
      "end": 74
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
            "name": "itemString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 93,
                    "end": 99
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 102,
                    "end": 111
                  }
                ],
                "start": 93,
                "end": 111
              },
              "start": 91,
              "end": 111
            },
            "start": 81,
            "end": 111
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 115,
                    "end": 123
                  }
                ],
                "start": 114,
                "end": 124
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findLast",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 133
              },
              "optional": false,
              "computed": false,
              "start": 114,
              "end": 133
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 139
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 148
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 153,
                    "end": 161
                  },
                  "start": 144,
                  "end": 161
                },
                "id": null,
                "generator": false,
                "start": 134,
                "end": 161
              }
            ],
            "optional": false,
            "start": 114,
            "end": 162
          },
          "definite": false,
          "start": 81,
          "end": 162
        }
      ],
      "declare": false,
      "start": 75,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 177
            },
            "typeArguments": null,
            "arguments": [],
            "start": 164,
            "end": 179
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 188
          },
          "optional": false,
          "computed": false,
          "start": 164,
          "end": 188
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 194
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 203
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 208,
                "end": 209
              },
              "start": 199,
              "end": 209
            },
            "id": null,
            "generator": false,
            "start": 189,
            "end": 209
          }
        ],
        "optional": false,
        "start": 164,
        "end": 210
      },
      "directive": null,
      "start": 164,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 226
            },
            "typeArguments": null,
            "arguments": [],
            "start": 212,
            "end": 228
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 237
          },
          "optional": false,
          "computed": false,
          "start": 212,
          "end": 237
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 243
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 252
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 257,
                "end": 258
              },
              "start": 248,
              "end": 258
            },
            "id": null,
            "generator": false,
            "start": 238,
            "end": 258
          }
        ],
        "optional": false,
        "start": 212,
        "end": 259
      },
      "directive": null,
      "start": 212,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 282
            },
            "typeArguments": null,
            "arguments": [],
            "start": 261,
            "end": 284
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 293
          },
          "optional": false,
          "computed": false,
          "start": 261,
          "end": 293
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 299
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 308
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 313,
                "end": 314
              },
              "start": 304,
              "end": 314
            },
            "id": null,
            "generator": false,
            "start": 294,
            "end": 314
          }
        ],
        "optional": false,
        "start": 261,
        "end": 315
      },
      "directive": null,
      "start": 261,
      "end": 316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 331
            },
            "typeArguments": null,
            "arguments": [],
            "start": 317,
            "end": 333
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 342
          },
          "optional": false,
          "computed": false,
          "start": 317,
          "end": 342
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 348
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 357
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 362,
                "end": 363
              },
              "start": 353,
              "end": 363
            },
            "id": null,
            "generator": false,
            "start": 343,
            "end": 363
          }
        ],
        "optional": false,
        "start": 317,
        "end": 364
      },
      "directive": null,
      "start": 317,
      "end": 365
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 381
            },
            "typeArguments": null,
            "arguments": [],
            "start": 366,
            "end": 383
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 392
          },
          "optional": false,
          "computed": false,
          "start": 366,
          "end": 392
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 398
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 403,
                "end": 407
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 412,
                "end": 413
              },
              "start": 403,
              "end": 413
            },
            "id": null,
            "generator": false,
            "start": 393,
            "end": 413
          }
        ],
        "optional": false,
        "start": 366,
        "end": 414
      },
      "directive": null,
      "start": 366,
      "end": 415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 430
            },
            "typeArguments": null,
            "arguments": [],
            "start": 416,
            "end": 432
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 441
          },
          "optional": false,
          "computed": false,
          "start": 416,
          "end": 441
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 447
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 456
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 461,
                "end": 462
              },
              "start": 452,
              "end": 462
            },
            "id": null,
            "generator": false,
            "start": 442,
            "end": 462
          }
        ],
        "optional": false,
        "start": 416,
        "end": 463
      },
      "directive": null,
      "start": 416,
      "end": 464
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 480
            },
            "typeArguments": null,
            "arguments": [],
            "start": 465,
            "end": 482
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 491
          },
          "optional": false,
          "computed": false,
          "start": 465,
          "end": 491
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 497
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 502,
                "end": 506
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 511,
                "end": 512
              },
              "start": 502,
              "end": 512
            },
            "id": null,
            "generator": false,
            "start": 492,
            "end": 512
          }
        ],
        "optional": false,
        "start": 465,
        "end": 513
      },
      "directive": null,
      "start": 465,
      "end": 514
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 531
            },
            "typeArguments": null,
            "arguments": [],
            "start": 515,
            "end": 533
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 534,
            "end": 542
          },
          "optional": false,
          "computed": false,
          "start": 515,
          "end": 542
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 548
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 553,
                "end": 557
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 562,
                "end": 563
              },
              "start": 553,
              "end": 563
            },
            "id": null,
            "generator": false,
            "start": 543,
            "end": 563
          }
        ],
        "optional": false,
        "start": 515,
        "end": 564
      },
      "directive": null,
      "start": 515,
      "end": 565
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 582
            },
            "typeArguments": null,
            "arguments": [],
            "start": 566,
            "end": 584
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 585,
            "end": 593
          },
          "optional": false,
          "computed": false,
          "start": 566,
          "end": 593
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 599
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 604,
                "end": 608
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 613,
                "end": 614
              },
              "start": 604,
              "end": 614
            },
            "id": null,
            "generator": false,
            "start": 594,
            "end": 614
          }
        ],
        "optional": false,
        "start": 566,
        "end": 615
      },
      "directive": null,
      "start": 566,
      "end": 616
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 634
            },
            "typeArguments": null,
            "arguments": [],
            "start": 617,
            "end": 636
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 637,
            "end": 645
          },
          "optional": false,
          "computed": false,
          "start": 617,
          "end": 645
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 651
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 660
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 671
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 672,
                    "end": 673
                  }
                ],
                "optional": false,
                "start": 665,
                "end": 674
              },
              "start": 656,
              "end": 674
            },
            "id": null,
            "generator": false,
            "start": 646,
            "end": 674
          }
        ],
        "optional": false,
        "start": 617,
        "end": 675
      },
      "directive": null,
      "start": 617,
      "end": 676
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 681,
              "end": 695
            },
            "typeArguments": null,
            "arguments": [],
            "start": 677,
            "end": 697
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLast",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 706
          },
          "optional": false,
          "computed": false,
          "start": 677,
          "end": 706
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 708,
                "end": 712
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 717,
                "end": 721
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 726,
                  "end": 732
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 733,
                    "end": 734
                  }
                ],
                "optional": false,
                "start": 726,
                "end": 735
              },
              "start": 717,
              "end": 735
            },
            "id": null,
            "generator": false,
            "start": 707,
            "end": 735
          }
        ],
        "optional": false,
        "start": 677,
        "end": 736
      },
      "directive": null,
      "start": 677,
      "end": 737
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
            "name": "indexNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 758,
                "end": 764
              },
              "start": 756,
              "end": 764
            },
            "start": 745,
            "end": 764
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 768,
                    "end": 769
                  }
                ],
                "start": 767,
                "end": 770
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findLastIndex",
                "optional": false,
                "typeAnnotation": null,
                "start": 771,
                "end": 784
              },
              "optional": false,
              "computed": false,
              "start": 767,
              "end": 784
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 790
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 795,
                    "end": 799
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 804,
                    "end": 805
                  },
                  "start": 795,
                  "end": 805
                },
                "id": null,
                "generator": false,
                "start": 785,
                "end": 805
              }
            ],
            "optional": false,
            "start": 767,
            "end": 806
          },
          "definite": false,
          "start": 745,
          "end": 806
        }
      ],
      "declare": false,
      "start": 739,
      "end": 807
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
            "name": "indexString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 827,
                "end": 833
              },
              "start": 825,
              "end": 833
            },
            "start": 814,
            "end": 833
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 837,
                    "end": 845
                  }
                ],
                "start": 836,
                "end": 846
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "findLastIndex",
                "optional": false,
                "typeAnnotation": null,
                "start": 847,
                "end": 860
              },
              "optional": false,
              "computed": false,
              "start": 836,
              "end": 860
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 862,
                    "end": 866
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 871,
                    "end": 875
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 880,
                    "end": 888
                  },
                  "start": 871,
                  "end": 888
                },
                "id": null,
                "generator": false,
                "start": 861,
                "end": 888
              }
            ],
            "optional": false,
            "start": 836,
            "end": 889
          },
          "definite": false,
          "start": 814,
          "end": 889
        }
      ],
      "declare": false,
      "start": 808,
      "end": 890
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 904
            },
            "typeArguments": null,
            "arguments": [],
            "start": 891,
            "end": 906
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 907,
            "end": 920
          },
          "optional": false,
          "computed": false,
          "start": 891,
          "end": 920
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 922,
                "end": 926
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 931,
                "end": 935
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 940,
                "end": 941
              },
              "start": 931,
              "end": 941
            },
            "id": null,
            "generator": false,
            "start": 921,
            "end": 941
          }
        ],
        "optional": false,
        "start": 891,
        "end": 942
      },
      "directive": null,
      "start": 891,
      "end": 943
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 948,
              "end": 958
            },
            "typeArguments": null,
            "arguments": [],
            "start": 944,
            "end": 960
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 961,
            "end": 974
          },
          "optional": false,
          "computed": false,
          "start": 944,
          "end": 974
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 976,
                "end": 980
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 989
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 994,
                "end": 995
              },
              "start": 985,
              "end": 995
            },
            "id": null,
            "generator": false,
            "start": 975,
            "end": 995
          }
        ],
        "optional": false,
        "start": 944,
        "end": 996
      },
      "directive": null,
      "start": 944,
      "end": 997
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint8ClampedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1019
            },
            "typeArguments": null,
            "arguments": [],
            "start": 998,
            "end": 1021
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1022,
            "end": 1035
          },
          "optional": false,
          "computed": false,
          "start": 998,
          "end": 1035
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1037,
                "end": 1041
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1046,
                "end": 1050
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1055,
                "end": 1056
              },
              "start": 1046,
              "end": 1056
            },
            "id": null,
            "generator": false,
            "start": 1036,
            "end": 1056
          }
        ],
        "optional": false,
        "start": 998,
        "end": 1057
      },
      "directive": null,
      "start": 998,
      "end": 1058
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1063,
              "end": 1073
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1059,
            "end": 1075
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1076,
            "end": 1089
          },
          "optional": false,
          "computed": false,
          "start": 1059,
          "end": 1089
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1091,
                "end": 1095
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1104
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1109,
                "end": 1110
              },
              "start": 1100,
              "end": 1110
            },
            "id": null,
            "generator": false,
            "start": 1090,
            "end": 1110
          }
        ],
        "optional": false,
        "start": 1059,
        "end": 1111
      },
      "directive": null,
      "start": 1059,
      "end": 1112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint16Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1117,
              "end": 1128
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1113,
            "end": 1130
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1131,
            "end": 1144
          },
          "optional": false,
          "computed": false,
          "start": 1113,
          "end": 1144
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1146,
                "end": 1150
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1155,
                "end": 1159
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1164,
                "end": 1165
              },
              "start": 1155,
              "end": 1165
            },
            "id": null,
            "generator": false,
            "start": 1145,
            "end": 1165
          }
        ],
        "optional": false,
        "start": 1113,
        "end": 1166
      },
      "directive": null,
      "start": 1113,
      "end": 1167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1182
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1168,
            "end": 1184
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1198
          },
          "optional": false,
          "computed": false,
          "start": 1168,
          "end": 1198
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1200,
                "end": 1204
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1209,
                "end": 1213
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1218,
                "end": 1219
              },
              "start": 1209,
              "end": 1219
            },
            "id": null,
            "generator": false,
            "start": 1199,
            "end": 1219
          }
        ],
        "optional": false,
        "start": 1168,
        "end": 1220
      },
      "directive": null,
      "start": 1168,
      "end": 1221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uint32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1226,
              "end": 1237
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1222,
            "end": 1239
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1240,
            "end": 1253
          },
          "optional": false,
          "computed": false,
          "start": 1222,
          "end": 1253
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1255,
                "end": 1259
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1264,
                "end": 1268
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1273,
                "end": 1274
              },
              "start": 1264,
              "end": 1274
            },
            "id": null,
            "generator": false,
            "start": 1254,
            "end": 1274
          }
        ],
        "optional": false,
        "start": 1222,
        "end": 1275
      },
      "directive": null,
      "start": 1222,
      "end": 1276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1281,
              "end": 1293
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1277,
            "end": 1295
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1296,
            "end": 1309
          },
          "optional": false,
          "computed": false,
          "start": 1277,
          "end": 1309
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1311,
                "end": 1315
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1324
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1329,
                "end": 1330
              },
              "start": 1320,
              "end": 1330
            },
            "id": null,
            "generator": false,
            "start": 1310,
            "end": 1330
          }
        ],
        "optional": false,
        "start": 1277,
        "end": 1331
      },
      "directive": null,
      "start": 1277,
      "end": 1332
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1337,
              "end": 1349
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1333,
            "end": 1351
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1352,
            "end": 1365
          },
          "optional": false,
          "computed": false,
          "start": 1333,
          "end": 1365
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1367,
                "end": 1371
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1380
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1385,
                "end": 1386
              },
              "start": 1376,
              "end": 1386
            },
            "id": null,
            "generator": false,
            "start": 1366,
            "end": 1386
          }
        ],
        "optional": false,
        "start": 1333,
        "end": 1387
      },
      "directive": null,
      "start": 1333,
      "end": 1388
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1393,
              "end": 1406
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1389,
            "end": 1408
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1409,
            "end": 1422
          },
          "optional": false,
          "computed": false,
          "start": 1389,
          "end": 1422
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1424,
                "end": 1428
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1433,
                "end": 1437
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1442,
                  "end": 1448
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1449,
                    "end": 1450
                  }
                ],
                "optional": false,
                "start": 1442,
                "end": 1451
              },
              "start": 1433,
              "end": 1451
            },
            "id": null,
            "generator": false,
            "start": 1423,
            "end": 1451
          }
        ],
        "optional": false,
        "start": 1389,
        "end": 1452
      },
      "directive": null,
      "start": 1389,
      "end": 1453
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigUint64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 1458,
              "end": 1472
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1454,
            "end": 1474
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "findLastIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 1475,
            "end": 1488
          },
          "optional": false,
          "computed": false,
          "start": 1454,
          "end": 1488
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1490,
                "end": 1494
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 1499,
                "end": 1503
              },
              "operator": "===",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1508,
                  "end": 1514
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1515,
                    "end": 1516
                  }
                ],
                "optional": false,
                "start": 1508,
                "end": 1517
              },
              "start": 1499,
              "end": 1517
            },
            "id": null,
            "generator": false,
            "start": 1489,
            "end": 1517
          }
        ],
        "optional": false,
        "start": 1454,
        "end": 1518
      },
      "directive": null,
      "start": 1454,
      "end": 1519
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1519
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "itemNumber",
    "start": 6,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 27,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 39,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 43,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 53,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 59,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 67,
    "end": 70
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 75,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "itemString",
    "start": 81,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 102,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 114,
    "end": 115
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 115,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 125,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 141,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 144,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 149,
    "end": 152
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 153,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 164,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Int8Array",
    "start": 168,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 180,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 196,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 204,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 216,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 229,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 245,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 253,
    "end": 256
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 261,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Uint8ClampedArray",
    "start": 265,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 285,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 295,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 301,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 304,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 309,
    "end": 312
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "Int16Array",
    "start": 321,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 334,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 344,
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
    "value": "=>",
    "start": 350,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 358,
    "end": 361
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "Uint16Array",
    "start": 370,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 384,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 394,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 400,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 403,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 408,
    "end": 411
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "new",
    "start": 416,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "Int32Array",
    "start": 420,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 433,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "item",
    "start": 443,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 449,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 452,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 457,
    "end": 460
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 465,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "Uint32Array",
    "start": 469,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 483,
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
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 493,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 499,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 502,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 507,
    "end": 510
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 515,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "Float32Array",
    "start": 519,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 534,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 544,
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
    "value": "=>",
    "start": 550,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 553,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 558,
    "end": 561
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 566,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "Float64Array",
    "start": 570,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ".",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 585,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 595,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 601,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 604,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 609,
    "end": 612
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 617,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 621,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 637,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 647,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 653,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 656,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 661,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 665,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 677,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 681,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "findLast",
    "start": 698,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 708,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 714,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 717,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 722,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 726,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 739,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "indexNumber",
    "start": 745,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 758,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 767,
    "end": 768
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 771,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 786,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 792,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 800,
    "end": 803
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 808,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "indexString",
    "start": 814,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 827,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 836,
    "end": 837
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 837,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 847,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 862,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 868,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 871,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 876,
    "end": 879
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 880,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 891,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "Int8Array",
    "start": 895,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 907,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 922,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 928,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 931,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 936,
    "end": 939
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 944,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 948,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 961,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 976,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 982,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 985,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 990,
    "end": 993
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "Uint8ClampedArray",
    "start": 1002,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 1022,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1037,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1043,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1046,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1051,
    "end": 1054
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "Int16Array",
    "start": 1063,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 1076,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1091,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1097,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1100,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1113,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "Uint16Array",
    "start": 1117,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 1131,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1146,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1152,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1155,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1160,
    "end": 1163
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "Int32Array",
    "start": 1172,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 1185,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1200,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1206,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1209,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1214,
    "end": 1217
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "Uint32Array",
    "start": 1226,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 1240,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1255,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1261,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1264,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1269,
    "end": 1272
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1277,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "Float32Array",
    "start": 1281,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 1296,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1311,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1317,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1320,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1325,
    "end": 1328
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1333,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "Float64Array",
    "start": 1337,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 1352,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1367,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1373,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1376,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1381,
    "end": 1384
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1389,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 1393,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 1409,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1424,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1430,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1433,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 1442,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1454,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "BigUint64Array",
    "start": 1458,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "findLastIndex",
    "start": 1475,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1490,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1496,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1499,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 1508,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1518,
    "end": 1519
  }
]
```
