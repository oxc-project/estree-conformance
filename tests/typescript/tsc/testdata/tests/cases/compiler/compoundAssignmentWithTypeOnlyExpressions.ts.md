__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 26
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 35,
                  "end": 41
                },
                "start": 33,
                "end": 41
              },
              "accessibility": null,
              "static": false,
              "start": 32,
              "end": 42
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
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
                  "start": 44,
                  "end": 55
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 58,
                  "end": 64
                },
                "start": 56,
                "end": 64
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 43,
              "end": 64
            }
          ],
          "start": 30,
          "end": 66
        },
        "start": 28,
        "end": 66
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 67
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
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 75
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 78,
            "end": 79
          },
          "definite": false,
          "start": 72,
          "end": 79
        }
      ],
      "declare": false,
      "start": 68,
      "end": 80
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "logicalOrAssignment",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 110
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 128
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 119,
                    "end": 130
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 136
                    },
                    "start": 131,
                    "end": 136
                  },
                  "optional": false,
                  "computed": true,
                  "start": 119,
                  "end": 137
                },
                "start": 119,
                "end": 138
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 143,
                "end": 144
              },
              "start": 119,
              "end": 144
            },
            "directive": null,
            "start": 119,
            "end": 145
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 160
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 151,
                    "end": 162
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 168
                    },
                    "start": 163,
                    "end": 168
                  },
                  "optional": false,
                  "computed": true,
                  "start": 151,
                  "end": 169
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 173,
                  "end": 179
                },
                "start": 151,
                "end": 179
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 185,
                "end": 186
              },
              "start": 150,
              "end": 186
            },
            "directive": null,
            "start": 150,
            "end": 187
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 193,
                      "end": 202
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 193,
                    "end": 204
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 210
                    },
                    "start": 205,
                    "end": 210
                  },
                  "optional": false,
                  "computed": true,
                  "start": 193,
                  "end": 211
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 222,
                  "end": 228
                },
                "start": 193,
                "end": 228
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 234,
                "end": 235
              },
              "start": 192,
              "end": 235
            },
            "directive": null,
            "start": 192,
            "end": 236
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 243,
                  "end": 249
                },
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 250,
                      "end": 259
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 250,
                    "end": 261
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 264,
                      "end": 267
                    },
                    "start": 262,
                    "end": 267
                  },
                  "optional": false,
                  "computed": true,
                  "start": 250,
                  "end": 268
                },
                "start": 242,
                "end": 268
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 274,
                "end": 275
              },
              "start": 241,
              "end": 275
            },
            "directive": null,
            "start": 241,
            "end": 276
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 292
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 283,
                      "end": 294
                    },
                    "property": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 300
                      },
                      "start": 295,
                      "end": 300
                    },
                    "optional": false,
                    "computed": true,
                    "start": 283,
                    "end": 301
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 306,
                    "end": 312
                  },
                  "start": 282,
                  "end": 312
                },
                "start": 281,
                "end": 314
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 319,
                "end": 320
              },
              "start": 281,
              "end": 320
            },
            "directive": null,
            "start": 281,
            "end": 321
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 336
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 327,
                  "end": 338
                },
                "property": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 344
                  },
                  "start": 339,
                  "end": 344
                },
                "optional": false,
                "computed": true,
                "start": 327,
                "end": 345
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 351,
                "end": 352
              },
              "start": 326,
              "end": 352
            },
            "directive": null,
            "start": 326,
            "end": 353
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 368
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 359,
                    "end": 370
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 371,
                    "end": 372
                  },
                  "optional": false,
                  "computed": false,
                  "start": 359,
                  "end": 372
                },
                "start": 359,
                "end": 373
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 378,
                "end": 379
              },
              "start": 359,
              "end": 379
            },
            "directive": null,
            "start": 359,
            "end": 380
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 395
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 386,
                    "end": 397
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 399
                  },
                  "optional": false,
                  "computed": false,
                  "start": 386,
                  "end": 399
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 403,
                  "end": 409
                },
                "start": 386,
                "end": 409
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 415,
                "end": 416
              },
              "start": 385,
              "end": 416
            },
            "directive": null,
            "start": 385,
            "end": 417
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 423,
                      "end": 432
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 423,
                    "end": 434
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 436
                  },
                  "optional": false,
                  "computed": false,
                  "start": 423,
                  "end": 436
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 447,
                  "end": 453
                },
                "start": 423,
                "end": 453
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 459,
                "end": 460
              },
              "start": 422,
              "end": 460
            },
            "directive": null,
            "start": 422,
            "end": 461
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 468,
                  "end": 474
                },
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 475,
                      "end": 484
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 475,
                    "end": 486
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 488
                  },
                  "optional": false,
                  "computed": false,
                  "start": 475,
                  "end": 488
                },
                "start": 467,
                "end": 488
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 494,
                "end": 495
              },
              "start": 466,
              "end": 495
            },
            "directive": null,
            "start": 466,
            "end": 496
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 503,
                        "end": 512
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 503,
                      "end": 514
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 516
                    },
                    "optional": false,
                    "computed": false,
                    "start": 503,
                    "end": 516
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 521,
                    "end": 527
                  },
                  "start": 502,
                  "end": 527
                },
                "start": 501,
                "end": 529
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 534,
                "end": 535
              },
              "start": 501,
              "end": 535
            },
            "directive": null,
            "start": 501,
            "end": 536
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "||=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 542,
                    "end": 551
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 542,
                  "end": 553
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 555
                },
                "optional": false,
                "computed": false,
                "start": 542,
                "end": 555
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 561,
                "end": 562
              },
              "start": 541,
              "end": 562
            },
            "directive": null,
            "start": 541,
            "end": 563
          }
        ],
        "start": 113,
        "end": 565
      },
      "expression": false,
      "start": 82,
      "end": 565
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "logicalAndAssignment",
        "optional": false,
        "typeAnnotation": null,
        "start": 576,
        "end": 596
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 614
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 605,
                    "end": 616
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 619,
                      "end": 622
                    },
                    "start": 617,
                    "end": 622
                  },
                  "optional": false,
                  "computed": true,
                  "start": 605,
                  "end": 623
                },
                "start": 605,
                "end": 624
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 629,
                "end": 630
              },
              "start": 605,
              "end": 630
            },
            "directive": null,
            "start": 605,
            "end": 631
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 637,
                      "end": 646
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 637,
                    "end": 648
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 651,
                      "end": 654
                    },
                    "start": 649,
                    "end": 654
                  },
                  "optional": false,
                  "computed": true,
                  "start": 637,
                  "end": 655
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 659,
                  "end": 665
                },
                "start": 637,
                "end": 665
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 671,
                "end": 672
              },
              "start": 636,
              "end": 672
            },
            "directive": null,
            "start": 636,
            "end": 673
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 688
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 679,
                    "end": 690
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 696
                    },
                    "start": 691,
                    "end": 696
                  },
                  "optional": false,
                  "computed": true,
                  "start": 679,
                  "end": 697
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 708,
                  "end": 714
                },
                "start": 679,
                "end": 714
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 720,
                "end": 721
              },
              "start": 678,
              "end": 721
            },
            "directive": null,
            "start": 678,
            "end": 722
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 729,
                  "end": 735
                },
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 736,
                      "end": 745
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 736,
                    "end": 747
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 750,
                      "end": 753
                    },
                    "start": 748,
                    "end": 753
                  },
                  "optional": false,
                  "computed": true,
                  "start": 736,
                  "end": 754
                },
                "start": 728,
                "end": 754
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 760,
                "end": 761
              },
              "start": 727,
              "end": 761
            },
            "directive": null,
            "start": 727,
            "end": 762
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 769,
                        "end": 778
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 769,
                      "end": 780
                    },
                    "property": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 783,
                        "end": 786
                      },
                      "start": 781,
                      "end": 786
                    },
                    "optional": false,
                    "computed": true,
                    "start": 769,
                    "end": 787
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 792,
                    "end": 798
                  },
                  "start": 768,
                  "end": 798
                },
                "start": 767,
                "end": 800
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 805,
                "end": 806
              },
              "start": 767,
              "end": 806
            },
            "directive": null,
            "start": 767,
            "end": 807
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 813,
                    "end": 822
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 813,
                  "end": 824
                },
                "property": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 827,
                    "end": 830
                  },
                  "start": 825,
                  "end": 830
                },
                "optional": false,
                "computed": true,
                "start": 813,
                "end": 831
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 837,
                "end": 838
              },
              "start": 812,
              "end": 838
            },
            "directive": null,
            "start": 812,
            "end": 839
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 845,
                      "end": 854
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 845,
                    "end": 856
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 857,
                    "end": 858
                  },
                  "optional": false,
                  "computed": false,
                  "start": 845,
                  "end": 858
                },
                "start": 845,
                "end": 859
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 864,
                "end": 865
              },
              "start": 845,
              "end": 865
            },
            "directive": null,
            "start": 845,
            "end": 866
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 872,
                      "end": 881
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 872,
                    "end": 883
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 884,
                    "end": 885
                  },
                  "optional": false,
                  "computed": false,
                  "start": 872,
                  "end": 885
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 889,
                  "end": 895
                },
                "start": 872,
                "end": 895
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 901,
                "end": 902
              },
              "start": 871,
              "end": 902
            },
            "directive": null,
            "start": 871,
            "end": 903
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 909,
                      "end": 918
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 909,
                    "end": 920
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 921,
                    "end": 922
                  },
                  "optional": false,
                  "computed": false,
                  "start": 909,
                  "end": 922
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 933,
                  "end": 939
                },
                "start": 909,
                "end": 939
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 945,
                "end": 946
              },
              "start": 908,
              "end": 946
            },
            "directive": null,
            "start": 908,
            "end": 947
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 954,
                  "end": 960
                },
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 961,
                      "end": 970
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 961,
                    "end": 972
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 974
                  },
                  "optional": false,
                  "computed": false,
                  "start": 961,
                  "end": 974
                },
                "start": 953,
                "end": 974
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 980,
                "end": 981
              },
              "start": 952,
              "end": 981
            },
            "directive": null,
            "start": 952,
            "end": 982
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 989,
                        "end": 998
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 989,
                      "end": 1000
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1001,
                      "end": 1002
                    },
                    "optional": false,
                    "computed": false,
                    "start": 989,
                    "end": 1002
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1007,
                    "end": 1013
                  },
                  "start": 988,
                  "end": 1013
                },
                "start": 987,
                "end": 1015
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1020,
                "end": 1021
              },
              "start": 987,
              "end": 1021
            },
            "directive": null,
            "start": 987,
            "end": 1022
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "&&=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1028,
                    "end": 1037
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1028,
                  "end": 1039
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1040,
                  "end": 1041
                },
                "optional": false,
                "computed": false,
                "start": 1028,
                "end": 1041
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1047,
                "end": 1048
              },
              "start": 1027,
              "end": 1048
            },
            "directive": null,
            "start": 1027,
            "end": 1049
          }
        ],
        "start": 599,
        "end": 1051
      },
      "expression": false,
      "start": 567,
      "end": 1051
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nullishAssignment",
        "optional": false,
        "typeAnnotation": null,
        "start": 1062,
        "end": 1079
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1088,
                      "end": 1097
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1088,
                    "end": 1099
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1102,
                      "end": 1105
                    },
                    "start": 1100,
                    "end": 1105
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1088,
                  "end": 1106
                },
                "start": 1088,
                "end": 1107
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1112,
                "end": 1113
              },
              "start": 1088,
              "end": 1113
            },
            "directive": null,
            "start": 1088,
            "end": 1114
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1120,
                      "end": 1129
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1120,
                    "end": 1131
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1134,
                      "end": 1137
                    },
                    "start": 1132,
                    "end": 1137
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1120,
                  "end": 1138
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1142,
                  "end": 1148
                },
                "start": 1120,
                "end": 1148
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1154,
                "end": 1155
              },
              "start": 1119,
              "end": 1155
            },
            "directive": null,
            "start": 1119,
            "end": 1156
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1162,
                      "end": 1171
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1162,
                    "end": 1173
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1176,
                      "end": 1179
                    },
                    "start": 1174,
                    "end": 1179
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1162,
                  "end": 1180
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1191,
                  "end": 1197
                },
                "start": 1162,
                "end": 1197
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1203,
                "end": 1204
              },
              "start": 1161,
              "end": 1204
            },
            "directive": null,
            "start": 1161,
            "end": 1205
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1212,
                  "end": 1218
                },
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1219,
                      "end": 1228
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1219,
                    "end": 1230
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1233,
                      "end": 1236
                    },
                    "start": 1231,
                    "end": 1236
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1219,
                  "end": 1237
                },
                "start": 1211,
                "end": 1237
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1243,
                "end": 1244
              },
              "start": 1210,
              "end": 1244
            },
            "directive": null,
            "start": 1210,
            "end": 1245
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1252,
                        "end": 1261
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1252,
                      "end": 1263
                    },
                    "property": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1266,
                        "end": 1269
                      },
                      "start": 1264,
                      "end": 1269
                    },
                    "optional": false,
                    "computed": true,
                    "start": 1252,
                    "end": 1270
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1275,
                    "end": 1281
                  },
                  "start": 1251,
                  "end": 1281
                },
                "start": 1250,
                "end": 1283
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1288,
                "end": 1289
              },
              "start": 1250,
              "end": 1289
            },
            "directive": null,
            "start": 1250,
            "end": 1290
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1296,
                    "end": 1305
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1296,
                  "end": 1307
                },
                "property": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1310,
                    "end": 1313
                  },
                  "start": 1308,
                  "end": 1313
                },
                "optional": false,
                "computed": true,
                "start": 1296,
                "end": 1314
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1320,
                "end": 1321
              },
              "start": 1295,
              "end": 1321
            },
            "directive": null,
            "start": 1295,
            "end": 1322
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1328,
                      "end": 1337
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1328,
                    "end": 1339
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1340,
                    "end": 1341
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1328,
                  "end": 1341
                },
                "start": 1328,
                "end": 1342
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1347,
                "end": 1348
              },
              "start": 1328,
              "end": 1348
            },
            "directive": null,
            "start": 1328,
            "end": 1349
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1355,
                      "end": 1364
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1355,
                    "end": 1366
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1367,
                    "end": 1368
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1355,
                  "end": 1368
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1372,
                  "end": 1378
                },
                "start": 1355,
                "end": 1378
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1384,
                "end": 1385
              },
              "start": 1354,
              "end": 1385
            },
            "directive": null,
            "start": 1354,
            "end": 1386
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1392,
                      "end": 1401
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1392,
                    "end": 1403
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1404,
                    "end": 1405
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1392,
                  "end": 1405
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1416,
                  "end": 1422
                },
                "start": 1392,
                "end": 1422
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1428,
                "end": 1429
              },
              "start": 1391,
              "end": 1429
            },
            "directive": null,
            "start": 1391,
            "end": 1430
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1437,
                  "end": 1443
                },
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1444,
                      "end": 1453
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1444,
                    "end": 1455
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1456,
                    "end": 1457
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1444,
                  "end": 1457
                },
                "start": 1436,
                "end": 1457
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1463,
                "end": 1464
              },
              "start": 1435,
              "end": 1464
            },
            "directive": null,
            "start": 1435,
            "end": 1465
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1472,
                        "end": 1481
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1472,
                      "end": 1483
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1484,
                      "end": 1485
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1472,
                    "end": 1485
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1490,
                    "end": 1496
                  },
                  "start": 1471,
                  "end": 1496
                },
                "start": 1470,
                "end": 1498
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1503,
                "end": 1504
              },
              "start": 1470,
              "end": 1504
            },
            "directive": null,
            "start": 1470,
            "end": 1505
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1511,
                    "end": 1520
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1511,
                  "end": 1522
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1523,
                  "end": 1524
                },
                "optional": false,
                "computed": false,
                "start": 1511,
                "end": 1524
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1530,
                "end": 1531
              },
              "start": 1510,
              "end": 1531
            },
            "directive": null,
            "start": 1510,
            "end": 1532
          }
        ],
        "start": 1082,
        "end": 1534
      },
      "expression": false,
      "start": 1053,
      "end": 1534
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exponentiationAssignment",
        "optional": false,
        "typeAnnotation": null,
        "start": 1545,
        "end": 1569
      },
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1578,
                      "end": 1587
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1578,
                    "end": 1589
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1592,
                      "end": 1595
                    },
                    "start": 1590,
                    "end": 1595
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1578,
                  "end": 1596
                },
                "start": 1578,
                "end": 1597
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1602,
                "end": 1603
              },
              "start": 1578,
              "end": 1603
            },
            "directive": null,
            "start": 1578,
            "end": 1604
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1610,
                      "end": 1619
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1610,
                    "end": 1621
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1624,
                      "end": 1627
                    },
                    "start": 1622,
                    "end": 1627
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1610,
                  "end": 1628
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1632,
                  "end": 1638
                },
                "start": 1610,
                "end": 1638
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1644,
                "end": 1645
              },
              "start": 1609,
              "end": 1645
            },
            "directive": null,
            "start": 1609,
            "end": 1646
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1652,
                      "end": 1661
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1652,
                    "end": 1663
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1666,
                      "end": 1669
                    },
                    "start": 1664,
                    "end": 1669
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1652,
                  "end": 1670
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1681,
                  "end": 1687
                },
                "start": 1652,
                "end": 1687
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1693,
                "end": 1694
              },
              "start": 1651,
              "end": 1694
            },
            "directive": null,
            "start": 1651,
            "end": 1695
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1702,
                  "end": 1708
                },
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1709,
                      "end": 1718
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1709,
                    "end": 1720
                  },
                  "property": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1723,
                      "end": 1726
                    },
                    "start": 1721,
                    "end": 1726
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1709,
                  "end": 1727
                },
                "start": 1701,
                "end": 1727
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1733,
                "end": 1734
              },
              "start": 1700,
              "end": 1734
            },
            "directive": null,
            "start": 1700,
            "end": 1735
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1742,
                        "end": 1751
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1742,
                      "end": 1753
                    },
                    "property": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1756,
                        "end": 1759
                      },
                      "start": 1754,
                      "end": 1759
                    },
                    "optional": false,
                    "computed": true,
                    "start": 1742,
                    "end": 1760
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1765,
                    "end": 1771
                  },
                  "start": 1741,
                  "end": 1771
                },
                "start": 1740,
                "end": 1773
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1778,
                "end": 1779
              },
              "start": 1740,
              "end": 1779
            },
            "directive": null,
            "start": 1740,
            "end": 1780
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1786,
                    "end": 1795
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1786,
                  "end": 1797
                },
                "property": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1800,
                    "end": 1803
                  },
                  "start": 1798,
                  "end": 1803
                },
                "optional": false,
                "computed": true,
                "start": 1786,
                "end": 1804
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1810,
                "end": 1811
              },
              "start": 1785,
              "end": 1811
            },
            "directive": null,
            "start": 1785,
            "end": 1812
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1818,
                      "end": 1827
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1818,
                    "end": 1829
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1830,
                    "end": 1831
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1818,
                  "end": 1831
                },
                "start": 1818,
                "end": 1832
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1837,
                "end": 1838
              },
              "start": 1818,
              "end": 1838
            },
            "directive": null,
            "start": 1818,
            "end": 1839
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1845,
                      "end": 1854
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1845,
                    "end": 1856
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1857,
                    "end": 1858
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1845,
                  "end": 1858
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1862,
                  "end": 1868
                },
                "start": 1845,
                "end": 1868
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1874,
                "end": 1875
              },
              "start": 1844,
              "end": 1875
            },
            "directive": null,
            "start": 1844,
            "end": 1876
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1882,
                      "end": 1891
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1882,
                    "end": 1893
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1894,
                    "end": 1895
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1882,
                  "end": 1895
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1906,
                  "end": 1912
                },
                "start": 1882,
                "end": 1912
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1918,
                "end": 1919
              },
              "start": 1881,
              "end": 1919
            },
            "directive": null,
            "start": 1881,
            "end": 1920
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1927,
                  "end": 1933
                },
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1934,
                      "end": 1943
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1934,
                    "end": 1945
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1946,
                    "end": 1947
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1934,
                  "end": 1947
                },
                "start": 1926,
                "end": 1947
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1953,
                "end": 1954
              },
              "start": 1925,
              "end": 1954
            },
            "directive": null,
            "start": 1925,
            "end": 1955
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1962,
                        "end": 1971
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1962,
                      "end": 1973
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1974,
                      "end": 1975
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1962,
                    "end": 1975
                  },
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1980,
                    "end": 1986
                  },
                  "start": 1961,
                  "end": 1986
                },
                "start": 1960,
                "end": 1988
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1993,
                "end": 1994
              },
              "start": 1960,
              "end": 1994
            },
            "directive": null,
            "start": 1960,
            "end": 1995
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "**=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2001,
                    "end": 2010
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2001,
                  "end": 2012
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2013,
                  "end": 2014
                },
                "optional": false,
                "computed": false,
                "start": 2001,
                "end": 2014
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2020,
                "end": 2021
              },
              "start": 2000,
              "end": 2021
            },
            "directive": null,
            "start": 2000,
            "end": 2022
          }
        ],
        "start": 1572,
        "end": 2024
      },
      "expression": false,
      "start": 1536,
      "end": 2024
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 2043,
        "end": 2049
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 2053,
            "end": 2056
          },
          "start": 2053,
          "end": 2056
        },
        "start": 2051,
        "end": 2056
      },
      "body": null,
      "expression": false,
      "start": 2026,
      "end": 2057
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2065,
        "end": 2069
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2080,
              "end": 2081
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
                      "value": 2,
                      "raw": "2",
                      "start": 2093,
                      "end": 2094
                    },
                    "start": 2086,
                    "end": 2095
                  }
                ],
                "start": 2084,
                "end": 2097
              },
              "expression": false,
              "start": 2081,
              "end": 2097
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2076,
            "end": 2097
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2106,
              "end": 2107
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2115,
                      "end": 2121
                    },
                    "start": 2113,
                    "end": 2121
                  },
                  "start": 2108,
                  "end": 2121
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2123,
                "end": 2125
              },
              "expression": false,
              "start": 2107,
              "end": 2125
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2102,
            "end": 2125
          }
        ],
        "start": 2070,
        "end": 2127
      },
      "abstract": false,
      "declare": false,
      "start": 2059,
      "end": 2127
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 2135,
        "end": 2142
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 2151,
        "end": 2155
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "logicalAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 2162,
              "end": 2179
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "||=",
                      "left": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2192,
                            "end": 2197
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2198,
                            "end": 2199
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2192,
                          "end": 2199
                        },
                        "start": 2192,
                        "end": 2200
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2205,
                        "end": 2206
                      },
                      "start": 2192,
                      "end": 2206
                    },
                    "directive": null,
                    "start": 2192,
                    "end": 2207
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "&&=",
                      "left": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2217,
                            "end": 2222
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2223,
                            "end": 2224
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2217,
                          "end": 2224
                        },
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2228,
                          "end": 2234
                        },
                        "start": 2217,
                        "end": 2234
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2240,
                        "end": 2241
                      },
                      "start": 2216,
                      "end": 2241
                    },
                    "directive": null,
                    "start": 2216,
                    "end": 2242
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "??=",
                      "left": {
                        "type": "TSSatisfiesExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2252,
                            "end": 2257
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2258,
                            "end": 2259
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2252,
                          "end": 2259
                        },
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2270,
                          "end": 2276
                        },
                        "start": 2252,
                        "end": 2276
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2282,
                        "end": 2283
                      },
                      "start": 2251,
                      "end": 2283
                    },
                    "directive": null,
                    "start": 2251,
                    "end": 2284
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "||=",
                      "left": {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2295,
                          "end": 2301
                        },
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2302,
                            "end": 2307
                          },
                          "property": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getKey",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2308,
                              "end": 2314
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2308,
                            "end": 2316
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2302,
                          "end": 2317
                        },
                        "start": 2294,
                        "end": 2317
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2323,
                        "end": 2324
                      },
                      "start": 2293,
                      "end": 2324
                    },
                    "directive": null,
                    "start": 2293,
                    "end": 2325
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "&&=",
                      "left": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2334,
                            "end": 2339
                          },
                          "property": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getKey",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2340,
                              "end": 2346
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2340,
                            "end": 2348
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2334,
                          "end": 2349
                        },
                        "start": 2334,
                        "end": 2350
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2355,
                        "end": 2356
                      },
                      "start": 2334,
                      "end": 2356
                    },
                    "directive": null,
                    "start": 2334,
                    "end": 2357
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "??=",
                      "left": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2367,
                            "end": 2372
                          },
                          "property": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getKey",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2373,
                              "end": 2379
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2373,
                            "end": 2381
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2367,
                          "end": 2382
                        },
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2386,
                          "end": 2392
                        },
                        "start": 2367,
                        "end": 2392
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2398,
                        "end": 2399
                      },
                      "start": 2366,
                      "end": 2399
                    },
                    "directive": null,
                    "start": 2366,
                    "end": 2400
                  }
                ],
                "start": 2182,
                "end": 2406
              },
              "expression": false,
              "start": 2179,
              "end": 2406
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2162,
            "end": 2406
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "exponentiationAssignment",
              "optional": false,
              "typeAnnotation": null,
              "start": 2412,
              "end": 2436
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2449,
                            "end": 2454
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2455,
                            "end": 2456
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2449,
                          "end": 2456
                        },
                        "start": 2449,
                        "end": 2457
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2462,
                        "end": 2463
                      },
                      "start": 2449,
                      "end": 2463
                    },
                    "directive": null,
                    "start": 2449,
                    "end": 2464
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2474,
                            "end": 2479
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2480,
                            "end": 2481
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2474,
                          "end": 2481
                        },
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2485,
                          "end": 2491
                        },
                        "start": 2474,
                        "end": 2491
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2497,
                        "end": 2498
                      },
                      "start": 2473,
                      "end": 2498
                    },
                    "directive": null,
                    "start": 2473,
                    "end": 2499
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "TSSatisfiesExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2509,
                            "end": 2514
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2515,
                            "end": 2516
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2509,
                          "end": 2516
                        },
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2527,
                          "end": 2533
                        },
                        "start": 2509,
                        "end": 2533
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2539,
                        "end": 2540
                      },
                      "start": 2508,
                      "end": 2540
                    },
                    "directive": null,
                    "start": 2508,
                    "end": 2541
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2552,
                          "end": 2558
                        },
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2559,
                            "end": 2564
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2565,
                            "end": 2566
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2559,
                          "end": 2566
                        },
                        "start": 2551,
                        "end": 2566
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2572,
                        "end": 2573
                      },
                      "start": 2550,
                      "end": 2573
                    },
                    "directive": null,
                    "start": 2550,
                    "end": 2574
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 2585,
                              "end": 2590
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2591,
                              "end": 2592
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2585,
                            "end": 2592
                          },
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2597,
                            "end": 2603
                          },
                          "start": 2584,
                          "end": 2603
                        },
                        "start": 2583,
                        "end": 2605
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2610,
                        "end": 2611
                      },
                      "start": 2583,
                      "end": 2611
                    },
                    "directive": null,
                    "start": 2583,
                    "end": 2612
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 2622,
                          "end": 2627
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2628,
                          "end": 2629
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2622,
                        "end": 2629
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2635,
                        "end": 2636
                      },
                      "start": 2621,
                      "end": 2636
                    },
                    "directive": null,
                    "start": 2621,
                    "end": 2637
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2647,
                            "end": 2652
                          },
                          "property": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getKey",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2653,
                              "end": 2659
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2653,
                            "end": 2661
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2647,
                          "end": 2662
                        },
                        "start": 2647,
                        "end": 2663
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2668,
                        "end": 2669
                      },
                      "start": 2647,
                      "end": 2669
                    },
                    "directive": null,
                    "start": 2647,
                    "end": 2670
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2680,
                            "end": 2685
                          },
                          "property": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getKey",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2686,
                              "end": 2692
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2686,
                            "end": 2694
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2680,
                          "end": 2695
                        },
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2699,
                          "end": 2705
                        },
                        "start": 2680,
                        "end": 2705
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2711,
                        "end": 2712
                      },
                      "start": 2679,
                      "end": 2712
                    },
                    "directive": null,
                    "start": 2679,
                    "end": 2713
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "TSSatisfiesExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2723,
                            "end": 2728
                          },
                          "property": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getKey",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2729,
                              "end": 2735
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2729,
                            "end": 2737
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2723,
                          "end": 2738
                        },
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2749,
                          "end": 2755
                        },
                        "start": 2723,
                        "end": 2755
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2761,
                        "end": 2762
                      },
                      "start": 2722,
                      "end": 2762
                    },
                    "directive": null,
                    "start": 2722,
                    "end": 2763
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2774,
                          "end": 2780
                        },
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2781,
                            "end": 2786
                          },
                          "property": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getKey",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2787,
                              "end": 2793
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2787,
                            "end": 2795
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2781,
                          "end": 2796
                        },
                        "start": 2773,
                        "end": 2796
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2802,
                        "end": 2803
                      },
                      "start": 2772,
                      "end": 2803
                    },
                    "directive": null,
                    "start": 2772,
                    "end": 2804
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "TSNonNullExpression",
                        "expression": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 2815,
                              "end": 2820
                            },
                            "property": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getKey",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2821,
                                "end": 2827
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 2821,
                              "end": 2829
                            },
                            "optional": false,
                            "computed": true,
                            "start": 2815,
                            "end": 2830
                          },
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2835,
                            "end": 2841
                          },
                          "start": 2814,
                          "end": 2841
                        },
                        "start": 2813,
                        "end": 2843
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2848,
                        "end": 2849
                      },
                      "start": 2813,
                      "end": 2849
                    },
                    "directive": null,
                    "start": 2813,
                    "end": 2850
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "**=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 2860,
                          "end": 2865
                        },
                        "property": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "getKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2866,
                            "end": 2872
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 2866,
                          "end": 2874
                        },
                        "optional": false,
                        "computed": true,
                        "start": 2860,
                        "end": 2875
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2881,
                        "end": 2882
                      },
                      "start": 2859,
                      "end": 2882
                    },
                    "directive": null,
                    "start": 2859,
                    "end": 2883
                  }
                ],
                "start": 2439,
                "end": 2889
              },
              "expression": false,
              "start": 2436,
              "end": 2889
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2412,
            "end": 2889
          }
        ],
        "start": 2156,
        "end": 2891
      },
      "abstract": false,
      "declare": false,
      "start": 2129,
      "end": 2891
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2891
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 17,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "x",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 44,
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
    "value": "]",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "logicalOrAssignment",
    "start": 91,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 119,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 131,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 139,
    "end": 142
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 151,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
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
    "value": "[",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 163,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 170,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 181,
    "end": 184
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 193,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 205,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 212,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 230,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
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
    "value": "number",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 250,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 262,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 270,
    "end": 273
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 283,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 295,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 303,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 315,
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
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 327,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 339,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 341,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 347,
    "end": 350
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 359,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 374,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 386,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 400,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 411,
    "end": 414
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 423,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 437,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 455,
    "end": 458
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 468,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 475,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 490,
    "end": 493
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 503,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 518,
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
    "value": "!",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 530,
    "end": 533
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 542,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 557,
    "end": 560
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 567,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "logicalAndAssignment",
    "start": 576,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 605,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 617,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 625,
    "end": 628
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 637,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 649,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 651,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 656,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 659,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 667,
    "end": 670
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 679,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "[",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 691,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 693,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 698,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 708,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 716,
    "end": 719
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 736,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 748,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 750,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 756,
    "end": 759
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 769,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 781,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 783,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 789,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 792,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 801,
    "end": 804
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 813,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 825,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 827,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 833,
    "end": 836
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 845,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 860,
    "end": 863
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 872,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 886,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 889,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 897,
    "end": 900
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 909,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 923,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 933,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 941,
    "end": 944
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 954,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 961,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "&&=",
    "start": 976,
    "end": 979
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 989,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1004,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1007,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1028,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1040,
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
    "value": "&&=",
    "start": 1043,
    "end": 1046
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1053,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "nullishAssignment",
    "start": 1062,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1088,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1120,
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
    "value": "[",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1132,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1139,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1142,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1150,
    "end": 1153
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1162,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1174,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1181,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1191,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1199,
    "end": 1202
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1212,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1219,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1231,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1239,
    "end": 1242
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1252,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1264,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1266,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "as",
    "start": 1272,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1275,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1284,
    "end": 1287
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1296,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1308,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1316,
    "end": 1319
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1328,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1343,
    "end": 1346
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1355,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1369,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1372,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1392,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1406,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1416,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1424,
    "end": 1427
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1437,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1444,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1472,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1487,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1490,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1499,
    "end": 1502
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1511,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 1526,
    "end": 1529
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1536,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "exponentiationAssignment",
    "start": 1545,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1578,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1590,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1592,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 1598,
    "end": 1601
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1610,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1622,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1624,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1629,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1632,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 1640,
    "end": 1643
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1652,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1664,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1666,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1671,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1681,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 1689,
    "end": 1692
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1702,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1709,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1721,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1723,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 1729,
    "end": 1732
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1742,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1754,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1756,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1762,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1765,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 1774,
    "end": 1777
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1786,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1798,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1800,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 1806,
    "end": 1809
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1818,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 1833,
    "end": 1836
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1845,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1859,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1862,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 1870,
    "end": 1873
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1882,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 1896,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1906,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 1914,
    "end": 1917
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1927,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1934,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 1949,
    "end": 1952
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 1962,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1977,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1980,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 1989,
    "end": 1992
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "getObject",
    "start": 2001,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2016,
    "end": 2019
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2026,
    "end": 2033
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2034,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "getKey",
    "start": 2043,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 2053,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2059,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2065,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2076,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2086,
    "end": 2092
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2102,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2108,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2115,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2129,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2135,
    "end": 2142
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2143,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2151,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "logicalAssignment",
    "start": 2162,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2192,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 2201,
    "end": 2204
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2217,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2225,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2228,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 2236,
    "end": 2239
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2252,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2260,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2270,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 2278,
    "end": 2281
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2295,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2302,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "getKey",
    "start": 2308,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 2319,
    "end": 2322
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2334,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "getKey",
    "start": 2340,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 2351,
    "end": 2354
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2367,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "getKey",
    "start": 2373,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2383,
    "end": 2385
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2386,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 2394,
    "end": 2397
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "exponentiationAssignment",
    "start": 2412,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2449,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2458,
    "end": 2461
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2474,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2482,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2485,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2493,
    "end": 2496
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2509,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2517,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2527,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2535,
    "end": 2538
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2552,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2559,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2568,
    "end": 2571
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2585,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2594,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2597,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2606,
    "end": 2609
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2622,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2631,
    "end": 2634
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2647,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "getKey",
    "start": 2653,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2664,
    "end": 2667
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2680,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Identifier",
    "value": "getKey",
    "start": 2686,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2696,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2699,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2707,
    "end": 2710
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2723,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "getKey",
    "start": 2729,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2739,
    "end": 2748
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2749,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2757,
    "end": 2760
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2774,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2781,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "getKey",
    "start": 2787,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2798,
    "end": 2801
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2815,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "getKey",
    "start": 2821,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2832,
    "end": 2834
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2835,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2844,
    "end": 2847
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2860,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Identifier",
    "value": "getKey",
    "start": 2866,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "**=",
    "start": 2877,
    "end": 2880
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2890,
    "end": 2891
  }
]
```
