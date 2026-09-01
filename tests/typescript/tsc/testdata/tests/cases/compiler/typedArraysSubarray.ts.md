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
        "name": "int8ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 26
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 42
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Int8Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 49,
                    "end": 58
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 59,
                      "end": 61
                    }
                  ],
                  "start": 45,
                  "end": 62
                },
                "definite": false,
                "start": 39,
                "end": 62
              }
            ],
            "declare": false,
            "start": 35,
            "end": 63
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 71
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 80
                },
                "optional": false,
                "computed": false,
                "start": 68,
                "end": 80
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 68,
              "end": 82
            },
            "directive": null,
            "start": 68,
            "end": 83
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 91
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 100
                },
                "optional": false,
                "computed": false,
                "start": 88,
                "end": 100
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 101,
                  "end": 102
                }
              ],
              "optional": false,
              "start": 88,
              "end": 103
            },
            "directive": null,
            "start": 88,
            "end": 104
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 112
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 121
                },
                "optional": false,
                "computed": false,
                "start": 109,
                "end": 121
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 122,
                  "end": 123
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 125,
                  "end": 127
                }
              ],
              "optional": false,
              "start": 109,
              "end": 128
            },
            "directive": null,
            "start": 109,
            "end": 129
          }
        ],
        "start": 29,
        "end": 131
      },
      "expression": false,
      "start": 0,
      "end": 131
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uint8ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 160
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 176
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Uint8Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 193
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 194,
                      "end": 196
                    }
                  ],
                  "start": 179,
                  "end": 197
                },
                "definite": false,
                "start": 173,
                "end": 197
              }
            ],
            "declare": false,
            "start": 169,
            "end": 198
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 206
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 215
                },
                "optional": false,
                "computed": false,
                "start": 203,
                "end": 215
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 203,
              "end": 217
            },
            "directive": null,
            "start": 203,
            "end": 218
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 226
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 235
                },
                "optional": false,
                "computed": false,
                "start": 223,
                "end": 235
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 236,
                  "end": 237
                }
              ],
              "optional": false,
              "start": 223,
              "end": 238
            },
            "directive": null,
            "start": 223,
            "end": 239
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 247
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 256
                },
                "optional": false,
                "computed": false,
                "start": 244,
                "end": 256
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 257,
                  "end": 258
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 260,
                  "end": 262
                }
              ],
              "optional": false,
              "start": 244,
              "end": 263
            },
            "directive": null,
            "start": 244,
            "end": 264
          }
        ],
        "start": 163,
        "end": 266
      },
      "expression": false,
      "start": 133,
      "end": 266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uint8ClampedArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 302
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 318
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Uint8ClampedArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 342
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 343,
                      "end": 345
                    }
                  ],
                  "start": 321,
                  "end": 346
                },
                "definite": false,
                "start": 315,
                "end": 346
              }
            ],
            "declare": false,
            "start": 311,
            "end": 347
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 355
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 364
                },
                "optional": false,
                "computed": false,
                "start": 352,
                "end": 364
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 352,
              "end": 366
            },
            "directive": null,
            "start": 352,
            "end": 367
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 375
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 384
                },
                "optional": false,
                "computed": false,
                "start": 372,
                "end": 384
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 385,
                  "end": 386
                }
              ],
              "optional": false,
              "start": 372,
              "end": 387
            },
            "directive": null,
            "start": 372,
            "end": 388
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 396
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 405
                },
                "optional": false,
                "computed": false,
                "start": 393,
                "end": 405
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 406,
                  "end": 407
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 409,
                  "end": 411
                }
              ],
              "optional": false,
              "start": 393,
              "end": 412
            },
            "directive": null,
            "start": 393,
            "end": 413
          }
        ],
        "start": 305,
        "end": 415
      },
      "expression": false,
      "start": 268,
      "end": 415
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "int16ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 426,
        "end": 444
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 457,
                  "end": 460
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Int16Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 477
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 478,
                      "end": 480
                    }
                  ],
                  "start": 463,
                  "end": 481
                },
                "definite": false,
                "start": 457,
                "end": 481
              }
            ],
            "declare": false,
            "start": 453,
            "end": 482
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 490
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 499
                },
                "optional": false,
                "computed": false,
                "start": 487,
                "end": 499
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 487,
              "end": 501
            },
            "directive": null,
            "start": 487,
            "end": 502
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 510
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 511,
                  "end": 519
                },
                "optional": false,
                "computed": false,
                "start": 507,
                "end": 519
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 520,
                  "end": 521
                }
              ],
              "optional": false,
              "start": 507,
              "end": 522
            },
            "directive": null,
            "start": 507,
            "end": 523
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 528,
                  "end": 531
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 540
                },
                "optional": false,
                "computed": false,
                "start": 528,
                "end": 540
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 541,
                  "end": 542
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 544,
                  "end": 546
                }
              ],
              "optional": false,
              "start": 528,
              "end": 547
            },
            "directive": null,
            "start": 528,
            "end": 548
          }
        ],
        "start": 447,
        "end": 550
      },
      "expression": false,
      "start": 417,
      "end": 550
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uint16ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 561,
        "end": 580
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 593,
                  "end": 596
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Uint16Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 603,
                    "end": 614
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 615,
                      "end": 617
                    }
                  ],
                  "start": 599,
                  "end": 618
                },
                "definite": false,
                "start": 593,
                "end": 618
              }
            ],
            "declare": false,
            "start": 589,
            "end": 619
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 627
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 636
                },
                "optional": false,
                "computed": false,
                "start": 624,
                "end": 636
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 624,
              "end": 638
            },
            "directive": null,
            "start": 624,
            "end": 639
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 647
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 648,
                  "end": 656
                },
                "optional": false,
                "computed": false,
                "start": 644,
                "end": 656
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 657,
                  "end": 658
                }
              ],
              "optional": false,
              "start": 644,
              "end": 659
            },
            "directive": null,
            "start": 644,
            "end": 660
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 668
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 677
                },
                "optional": false,
                "computed": false,
                "start": 665,
                "end": 677
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 678,
                  "end": 679
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 681,
                  "end": 683
                }
              ],
              "optional": false,
              "start": 665,
              "end": 684
            },
            "directive": null,
            "start": 665,
            "end": 685
          }
        ],
        "start": 583,
        "end": 687
      },
      "expression": false,
      "start": 552,
      "end": 687
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "int32ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 698,
        "end": 716
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 732
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Int32Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 739,
                    "end": 749
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 750,
                      "end": 752
                    }
                  ],
                  "start": 735,
                  "end": 753
                },
                "definite": false,
                "start": 729,
                "end": 753
              }
            ],
            "declare": false,
            "start": 725,
            "end": 754
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 762
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 763,
                  "end": 771
                },
                "optional": false,
                "computed": false,
                "start": 759,
                "end": 771
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 759,
              "end": 773
            },
            "directive": null,
            "start": 759,
            "end": 774
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 779,
                  "end": 782
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 783,
                  "end": 791
                },
                "optional": false,
                "computed": false,
                "start": 779,
                "end": 791
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 792,
                  "end": 793
                }
              ],
              "optional": false,
              "start": 779,
              "end": 794
            },
            "directive": null,
            "start": 779,
            "end": 795
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 800,
                  "end": 803
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 804,
                  "end": 812
                },
                "optional": false,
                "computed": false,
                "start": 800,
                "end": 812
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 813,
                  "end": 814
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 816,
                  "end": 818
                }
              ],
              "optional": false,
              "start": 800,
              "end": 819
            },
            "directive": null,
            "start": 800,
            "end": 820
          }
        ],
        "start": 719,
        "end": 822
      },
      "expression": false,
      "start": 689,
      "end": 822
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uint32ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 833,
        "end": 852
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 868
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Uint32Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 875,
                    "end": 886
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 887,
                      "end": 889
                    }
                  ],
                  "start": 871,
                  "end": 890
                },
                "definite": false,
                "start": 865,
                "end": 890
              }
            ],
            "declare": false,
            "start": 861,
            "end": 891
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 896,
                  "end": 899
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 908
                },
                "optional": false,
                "computed": false,
                "start": 896,
                "end": 908
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 896,
              "end": 910
            },
            "directive": null,
            "start": 896,
            "end": 911
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 916,
                  "end": 919
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 920,
                  "end": 928
                },
                "optional": false,
                "computed": false,
                "start": 916,
                "end": 928
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 929,
                  "end": 930
                }
              ],
              "optional": false,
              "start": 916,
              "end": 931
            },
            "directive": null,
            "start": 916,
            "end": 932
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 937,
                  "end": 940
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 941,
                  "end": 949
                },
                "optional": false,
                "computed": false,
                "start": 937,
                "end": 949
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 950,
                  "end": 951
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 953,
                  "end": 955
                }
              ],
              "optional": false,
              "start": 937,
              "end": 956
            },
            "directive": null,
            "start": 937,
            "end": 957
          }
        ],
        "start": 855,
        "end": 959
      },
      "expression": false,
      "start": 824,
      "end": 959
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "float32ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 970,
        "end": 990
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1003,
                  "end": 1006
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Float32Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1013,
                    "end": 1025
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 1026,
                      "end": 1028
                    }
                  ],
                  "start": 1009,
                  "end": 1029
                },
                "definite": false,
                "start": 1003,
                "end": 1029
              }
            ],
            "declare": false,
            "start": 999,
            "end": 1030
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1035,
                  "end": 1038
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1047
                },
                "optional": false,
                "computed": false,
                "start": 1035,
                "end": 1047
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1035,
              "end": 1049
            },
            "directive": null,
            "start": 1035,
            "end": 1050
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1055,
                  "end": 1058
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1059,
                  "end": 1067
                },
                "optional": false,
                "computed": false,
                "start": 1055,
                "end": 1067
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1068,
                  "end": 1069
                }
              ],
              "optional": false,
              "start": 1055,
              "end": 1070
            },
            "directive": null,
            "start": 1055,
            "end": 1071
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1076,
                  "end": 1079
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1080,
                  "end": 1088
                },
                "optional": false,
                "computed": false,
                "start": 1076,
                "end": 1088
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1089,
                  "end": 1090
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1092,
                  "end": 1094
                }
              ],
              "optional": false,
              "start": 1076,
              "end": 1095
            },
            "directive": null,
            "start": 1076,
            "end": 1096
          }
        ],
        "start": 993,
        "end": 1098
      },
      "expression": false,
      "start": 961,
      "end": 1098
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "float64ArraySubarray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1109,
        "end": 1129
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1142,
                  "end": 1145
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Float64Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1152,
                    "end": 1164
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 1165,
                      "end": 1167
                    }
                  ],
                  "start": 1148,
                  "end": 1168
                },
                "definite": false,
                "start": 1142,
                "end": 1168
              }
            ],
            "declare": false,
            "start": 1138,
            "end": 1169
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1174,
                  "end": 1177
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1178,
                  "end": 1186
                },
                "optional": false,
                "computed": false,
                "start": 1174,
                "end": 1186
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1174,
              "end": 1188
            },
            "directive": null,
            "start": 1174,
            "end": 1189
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1194,
                  "end": 1197
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1198,
                  "end": 1206
                },
                "optional": false,
                "computed": false,
                "start": 1194,
                "end": 1206
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1207,
                  "end": 1208
                }
              ],
              "optional": false,
              "start": 1194,
              "end": 1209
            },
            "directive": null,
            "start": 1194,
            "end": 1210
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1215,
                  "end": 1218
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "subarray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1219,
                  "end": 1227
                },
                "optional": false,
                "computed": false,
                "start": 1215,
                "end": 1227
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1228,
                  "end": 1229
                },
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1231,
                  "end": 1233
                }
              ],
              "optional": false,
              "start": 1215,
              "end": 1234
            },
            "directive": null,
            "start": 1215,
            "end": 1235
          }
        ],
        "start": 1132,
        "end": 1237
      },
      "expression": false,
      "start": 1100,
      "end": 1237
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1237
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "int8ArraySubarray",
    "start": 9,
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
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "Int8Array",
    "start": 49,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 72,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 92,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 113,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
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
    "value": "function",
    "start": 133,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "uint8ArraySubarray",
    "start": 142,
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
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 183,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 194,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 207,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
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
    "value": "arr",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 227,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 236,
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
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 248,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 268,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "uint8ClampedArraySubarray",
    "start": 277,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "Uint8ClampedArray",
    "start": 325,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 343,
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
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 356,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 372,
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
    "value": "subarray",
    "start": 376,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 393,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 397,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 407,
    "end": 408
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 417,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "int16ArraySubarray",
    "start": 426,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 453,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 457,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "Int16Array",
    "start": 467,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 478,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 491,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
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
    "value": "arr",
    "start": 507,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 511,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 528,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 532,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 552,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "uint16ArraySubarray",
    "start": 561,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 589,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 593,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 599,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "Uint16Array",
    "start": 603,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 615,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 628,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 648,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 665,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 669,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 679,
    "end": 680
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 681,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 689,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "int32ArraySubarray",
    "start": 698,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 725,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 729,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 735,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "Int32Array",
    "start": 739,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 752,
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
    "value": "arr",
    "start": 759,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 763,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 779,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 783,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 800,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 804,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 814,
    "end": 815
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 816,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
    "end": 822
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 824,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "uint32ArraySubarray",
    "start": 833,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 861,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 865,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 871,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "Uint32Array",
    "start": 875,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 886,
    "end": 887
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 887,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 896,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 900,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 916,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 920,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 937,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 941,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 949,
    "end": 950
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 951,
    "end": 952
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 953,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 961,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "float32ArraySubarray",
    "start": 970,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1003,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "Float32Array",
    "start": 1013,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1026,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 1039,
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
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1055,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 1059,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1076,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 1080,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1092,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "function",
    "start": 1100,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "float64ArraySubarray",
    "start": 1109,
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
    "value": "{",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1138,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1142,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1148,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "Float64Array",
    "start": 1152,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1165,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1174,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 1178,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 1198,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 1215,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "subarray",
    "start": 1219,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1231,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1236,
    "end": 1237
  }
]
```
