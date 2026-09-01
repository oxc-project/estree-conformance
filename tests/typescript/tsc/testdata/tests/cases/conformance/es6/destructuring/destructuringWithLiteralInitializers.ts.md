__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 48
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 52
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 52
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 51,
              "end": 52
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 55
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 55
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 54,
              "end": 55
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 57
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 59,
        "end": 62
      },
      "expression": false,
      "start": 37,
      "end": 62
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 65
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 69
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 71,
                  "end": 72
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 68,
                "end": 72
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 77,
                  "end": 78
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 74,
                "end": 78
              }
            ],
            "start": 66,
            "end": 80
          }
        ],
        "optional": false,
        "start": 63,
        "end": 81
      },
      "directive": null,
      "start": 63,
      "end": 82
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 136
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 139,
              "end": 140
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 143
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 143
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 146,
                  "end": 147
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 147
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 142,
              "end": 147
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 149
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 151,
        "end": 154
      },
      "expression": false,
      "start": 125,
      "end": 154
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 157
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 161
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 163,
                  "end": 164
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 160,
                "end": 164
              }
            ],
            "start": 158,
            "end": 166
          }
        ],
        "optional": false,
        "start": 155,
        "end": 167
      },
      "directive": null,
      "start": 155,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 171
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 175
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 177,
                  "end": 178
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 174,
                "end": 178
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 181
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 183,
                  "end": 184
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 180,
                "end": 184
              }
            ],
            "start": 172,
            "end": 186
          }
        ],
        "optional": false,
        "start": 169,
        "end": 187
      },
      "directive": null,
      "start": 169,
      "end": 188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 246
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 250
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 250
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 253,
                  "end": 254
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 254
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 249,
              "end": 254
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 257
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 257
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 260,
                  "end": 261
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 261
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 256,
              "end": 261
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 263
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 265,
        "end": 268
      },
      "expression": false,
      "start": 235,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 271
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 272,
            "end": 274
          }
        ],
        "optional": false,
        "start": 269,
        "end": 275
      },
      "directive": null,
      "start": 269,
      "end": 276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 279
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 283
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 285,
                  "end": 286
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 282,
                "end": 286
              }
            ],
            "start": 280,
            "end": 288
          }
        ],
        "optional": false,
        "start": 277,
        "end": 289
      },
      "directive": null,
      "start": 277,
      "end": 290
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 293
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 297
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 299,
                  "end": 300
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 296,
                "end": 300
              }
            ],
            "start": 294,
            "end": 302
          }
        ],
        "optional": false,
        "start": 291,
        "end": 303
      },
      "directive": null,
      "start": 291,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 307
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 311
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 313,
                  "end": 314
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 310,
                "end": 314
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 317
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 319,
                  "end": 320
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 316,
                "end": 320
              }
            ],
            "start": 308,
            "end": 322
          }
        ],
        "optional": false,
        "start": 305,
        "end": 323
      },
      "directive": null,
      "start": 305,
      "end": 324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 379,
        "end": 381
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 385
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 385
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 384,
                "end": 385
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 388
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 388
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 387,
                "end": 388
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 390
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 395,
                  "end": 396
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 398,
                  "end": 399
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 395,
                "end": 399
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 402
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 404,
                  "end": 405
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 401,
                "end": 405
              }
            ],
            "start": 393,
            "end": 407
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 382,
          "end": 407
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 409,
        "end": 412
      },
      "expression": false,
      "start": 370,
      "end": 412
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 413,
          "end": 415
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 413,
        "end": 417
      },
      "directive": null,
      "start": 413,
      "end": 418
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 419,
          "end": 421
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 425
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 427,
                  "end": 428
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 424,
                "end": 428
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 430,
                  "end": 431
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 433,
                  "end": 434
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 430,
                "end": 434
              }
            ],
            "start": 422,
            "end": 436
          }
        ],
        "optional": false,
        "start": 419,
        "end": 437
      },
      "directive": null,
      "start": 419,
      "end": 438
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 494,
        "end": 496
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 500
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 500
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 499,
                "end": 500
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 503
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 503
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 506,
                    "end": 507
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 507
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 502,
                "end": 507
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 509
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 515
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 517,
                  "end": 518
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 514,
                "end": 518
              }
            ],
            "start": 512,
            "end": 520
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 497,
          "end": 520
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 522,
        "end": 525
      },
      "expression": false,
      "start": 485,
      "end": 525
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null,
          "start": 526,
          "end": 528
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 526,
        "end": 530
      },
      "directive": null,
      "start": 526,
      "end": 531
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null,
          "start": 532,
          "end": 534
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 538
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 540,
                  "end": 541
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 537,
                "end": 541
              }
            ],
            "start": 535,
            "end": 543
          }
        ],
        "optional": false,
        "start": 532,
        "end": 544
      },
      "directive": null,
      "start": 532,
      "end": 545
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f5",
          "optional": false,
          "typeAnnotation": null,
          "start": 546,
          "end": 548
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 552
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 554,
                  "end": 555
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 551,
                "end": 555
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 558
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 560,
                  "end": 561
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 557,
                "end": 561
              }
            ],
            "start": 549,
            "end": 563
          }
        ],
        "optional": false,
        "start": 546,
        "end": 564
      },
      "directive": null,
      "start": 546,
      "end": 565
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 624
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 627,
                  "end": 628
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 627,
                    "end": 628
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 631,
                    "end": 632
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 627,
                  "end": 632
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 627,
                "end": 632
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 634,
                  "end": 635
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 634,
                    "end": 635
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 638,
                    "end": 639
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 634,
                  "end": 639
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 634,
                "end": 639
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 641
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 644,
            "end": 646
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 625,
          "end": 646
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 648,
        "end": 651
      },
      "expression": false,
      "start": 613,
      "end": 651
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 652,
          "end": 654
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 652,
        "end": 656
      },
      "directive": null,
      "start": 652,
      "end": 657
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 658,
          "end": 660
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 661,
            "end": 663
          }
        ],
        "optional": false,
        "start": 658,
        "end": 664
      },
      "directive": null,
      "start": 658,
      "end": 665
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 666,
          "end": 668
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 671,
                  "end": 672
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 674,
                  "end": 675
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 671,
                "end": 675
              }
            ],
            "start": 669,
            "end": 677
          }
        ],
        "optional": false,
        "start": 666,
        "end": 678
      },
      "directive": null,
      "start": 666,
      "end": 679
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 680,
          "end": 682
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 685,
                  "end": 686
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 688,
                  "end": 689
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 685,
                "end": 689
              }
            ],
            "start": 683,
            "end": 691
          }
        ],
        "optional": false,
        "start": 680,
        "end": 692
      },
      "directive": null,
      "start": 680,
      "end": 693
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "typeAnnotation": null,
          "start": 694,
          "end": 696
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 700
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 702,
                  "end": 703
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 699,
                "end": 703
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 706
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 708,
                  "end": 709
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 705,
                "end": 709
              }
            ],
            "start": 697,
            "end": 711
          }
        ],
        "optional": false,
        "start": 694,
        "end": 712
      },
      "directive": null,
      "start": 694,
      "end": 713
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 777,
        "end": 779
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
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
                  "start": 782,
                  "end": 783
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 787,
                        "end": 788
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 787,
                          "end": 788
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 791,
                          "end": 792
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 787,
                        "end": 792
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 787,
                      "end": 792
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 794,
                        "end": 795
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 794,
                          "end": 795
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 798,
                          "end": 799
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 794,
                        "end": 799
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 794,
                      "end": 799
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 801
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 782,
                "end": 801
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 780,
            "end": 803
          },
          "right": {
            "type": "ObjectExpression",
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
                  "start": 808,
                  "end": 809
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 811,
                  "end": 813
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 808,
                "end": 813
              }
            ],
            "start": 806,
            "end": 815
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 780,
          "end": 815
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 817,
        "end": 820
      },
      "expression": false,
      "start": 768,
      "end": 820
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 821,
          "end": 823
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 821,
        "end": 825
      },
      "directive": null,
      "start": 821,
      "end": 826
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 827,
          "end": 829
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
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
                  "start": 832,
                  "end": 833
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 835,
                  "end": 837
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 832,
                "end": 837
              }
            ],
            "start": 830,
            "end": 839
          }
        ],
        "optional": false,
        "start": 827,
        "end": 840
      },
      "directive": null,
      "start": 827,
      "end": 841
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 842,
          "end": 844
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
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
                  "start": 847,
                  "end": 848
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 852,
                        "end": 853
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 855,
                        "end": 856
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 852,
                      "end": 856
                    }
                  ],
                  "start": 850,
                  "end": 858
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 847,
                "end": 858
              }
            ],
            "start": 845,
            "end": 860
          }
        ],
        "optional": false,
        "start": 842,
        "end": 861
      },
      "directive": null,
      "start": 842,
      "end": 862
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 863,
          "end": 865
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
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
                  "start": 868,
                  "end": 869
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 873,
                        "end": 874
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 876,
                        "end": 877
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 873,
                      "end": 877
                    }
                  ],
                  "start": 871,
                  "end": 879
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 868,
                "end": 879
              }
            ],
            "start": 866,
            "end": 881
          }
        ],
        "optional": false,
        "start": 863,
        "end": 882
      },
      "directive": null,
      "start": 863,
      "end": 883
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "typeAnnotation": null,
          "start": 884,
          "end": 886
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
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
                  "start": 889,
                  "end": 890
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 894,
                        "end": 895
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 897,
                        "end": 898
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 894,
                      "end": 898
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 900,
                        "end": 901
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 903,
                        "end": 904
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 900,
                      "end": 904
                    }
                  ],
                  "start": 892,
                  "end": 906
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 889,
                "end": 906
              }
            ],
            "start": 887,
            "end": 908
          }
        ],
        "optional": false,
        "start": 884,
        "end": 909
      },
      "directive": null,
      "start": 884,
      "end": 910
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 950,
        "end": 952
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 954,
              "end": 955
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 958
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 953,
          "end": 959
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 961,
        "end": 964
      },
      "expression": false,
      "start": 941,
      "end": 964
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": null,
          "start": 965,
          "end": 967
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 969,
                "end": 970
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 972,
                "end": 973
              }
            ],
            "start": 968,
            "end": 974
          }
        ],
        "optional": false,
        "start": 965,
        "end": 975
      },
      "directive": null,
      "start": 965,
      "end": 976
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1022,
        "end": 1024
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1026,
                "end": 1027
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1030,
                "end": 1031
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1026,
              "end": 1031
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1033,
                "end": 1034
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1037,
                "end": 1038
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1038
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 1025,
          "end": 1039
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1041,
        "end": 1044
      },
      "expression": false,
      "start": 1013,
      "end": 1044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1047
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1049,
                "end": 1050
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1052,
                "end": 1053
              }
            ],
            "start": 1048,
            "end": 1054
          }
        ],
        "optional": false,
        "start": 1045,
        "end": 1055
      },
      "directive": null,
      "start": 1045,
      "end": 1056
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1103,
        "end": 1105
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1107,
                "end": 1108
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1110,
                "end": 1111
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1106,
            "end": 1112
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1116,
                "end": 1117
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1119,
                "end": 1120
              }
            ],
            "start": 1115,
            "end": 1121
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1106,
          "end": 1121
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1123,
        "end": 1126
      },
      "expression": false,
      "start": 1094,
      "end": 1126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1127,
          "end": 1129
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1127,
        "end": 1131
      },
      "directive": null,
      "start": 1127,
      "end": 1132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1135
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1137,
                "end": 1138
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1140,
                "end": 1141
              }
            ],
            "start": 1136,
            "end": 1142
          }
        ],
        "optional": false,
        "start": 1133,
        "end": 1143
      },
      "directive": null,
      "start": 1133,
      "end": 1144
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1191,
        "end": 1193
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1195,
                "end": 1196
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1198,
                  "end": 1199
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1202,
                  "end": 1203
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1198,
                "end": 1203
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1194,
            "end": 1204
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1208,
                "end": 1209
              }
            ],
            "start": 1207,
            "end": 1210
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1194,
          "end": 1210
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1212,
        "end": 1215
      },
      "expression": false,
      "start": 1182,
      "end": 1215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1216,
          "end": 1218
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1216,
        "end": 1220
      },
      "directive": null,
      "start": 1216,
      "end": 1221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1222,
          "end": 1224
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1226,
                "end": 1227
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1229,
                "end": 1230
              }
            ],
            "start": 1225,
            "end": 1231
          }
        ],
        "optional": false,
        "start": 1222,
        "end": 1232
      },
      "directive": null,
      "start": 1222,
      "end": 1233
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1280,
        "end": 1282
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1284,
                  "end": 1285
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1288,
                  "end": 1289
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1284,
                "end": 1289
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1291,
                  "end": 1292
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1295,
                  "end": 1296
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1291,
                "end": 1296
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1283,
            "end": 1297
          },
          "right": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1300,
            "end": 1302
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 1283,
          "end": 1302
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1304,
        "end": 1307
      },
      "expression": false,
      "start": 1271,
      "end": 1307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1308,
          "end": 1310
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1308,
        "end": 1312
      },
      "directive": null,
      "start": 1308,
      "end": 1313
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1314,
          "end": 1316
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1318,
                "end": 1319
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1321,
                "end": 1322
              }
            ],
            "start": 1317,
            "end": 1323
          }
        ],
        "optional": false,
        "start": 1314,
        "end": 1324
      },
      "directive": null,
      "start": 1314,
      "end": 1325
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 37,
  "end": 1325
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 37,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
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
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 125,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 235,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 277,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 291,
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
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 305,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Numeric",
    "value": "1",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 370,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 379,
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
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 387,
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
    "value": "=",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Numeric",
    "value": "0",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 413,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "f4",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 485,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 532,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
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
    "value": "f5",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "function",
    "start": 613,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 629,
    "end": 630
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 658,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 666,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Numeric",
    "value": "1",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 694,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 768,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 777,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 789,
    "end": 790
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 796,
    "end": 797
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 821,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 827,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 842,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 853,
    "end": 854
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 863,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 884,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 901,
    "end": 902
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 941,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 950,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 965,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 968,
    "end": 969
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 970,
    "end": 971
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1013,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 1022,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 1045,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1094,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 1103,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 1127,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 1133,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1182,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 1191,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1208,
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
    "value": ")",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 1216,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "g4",
    "start": 1222,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1271,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "g5",
    "start": 1280,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "g5",
    "start": 1308,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "g5",
    "start": 1314,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1324,
    "end": 1325
  }
]
```
