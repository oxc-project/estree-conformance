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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 24,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "start": 21,
          "end": 30
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 35,
              "end": 41
            },
            "start": 33,
            "end": 41
          },
          "start": 32,
          "end": 41
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 44,
          "end": 50
        },
        "start": 42,
        "end": 50
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 80
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 84,
              "end": 90
            },
            "start": 82,
            "end": 90
          },
          "start": 81,
          "end": 90
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 93,
          "end": 99
        },
        "start": 91,
        "end": 99
      },
      "body": null,
      "expression": false,
      "start": 53,
      "end": 100
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloaded",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 128
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 132,
              "end": 138
            },
            "start": 130,
            "end": 138
          },
          "start": 129,
          "end": 138
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 141,
          "end": 147
        },
        "start": 139,
        "end": 147
      },
      "body": null,
      "expression": false,
      "start": 101,
      "end": 148
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 174
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 175,
              "end": 176
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 175,
            "end": 176
          }
        ],
        "start": 174,
        "end": 177
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "start": 181,
                "end": 182
              },
              "typeArguments": null,
              "start": 181,
              "end": 182
            },
            "start": 179,
            "end": 182
          },
          "start": 178,
          "end": 182
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 186
          },
          "typeArguments": null,
          "start": 185,
          "end": 186
        },
        "start": 183,
        "end": 186
      },
      "body": null,
      "expression": false,
      "start": 150,
      "end": 187
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
            "name": "f00",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 196
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 202
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 207
              },
              "optional": false,
              "computed": false,
              "start": 199,
              "end": 207
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 217
              }
            ],
            "optional": false,
            "start": 199,
            "end": 218
          },
          "definite": false,
          "start": 193,
          "end": 218
        }
      ],
      "declare": false,
      "start": 189,
      "end": 219
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
            "name": "f01",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 227
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 233
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 238
              },
              "optional": false,
              "computed": false,
              "start": 230,
              "end": 238
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 248
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 250,
                "end": 252
              }
            ],
            "optional": false,
            "start": 230,
            "end": 253
          },
          "definite": false,
          "start": 224,
          "end": 253
        }
      ],
      "declare": false,
      "start": 220,
      "end": 254
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
            "name": "f02",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 262
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 268
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 273
              },
              "optional": false,
              "computed": false,
              "start": 265,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 283
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 285,
                "end": 287
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 289,
                "end": 296
              }
            ],
            "optional": false,
            "start": 265,
            "end": 297
          },
          "definite": false,
          "start": 259,
          "end": 297
        }
      ],
      "declare": false,
      "start": 255,
      "end": 298
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
            "name": "f03",
            "optional": false,
            "typeAnnotation": null,
            "start": 303,
            "end": 306
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 312
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 317
              },
              "optional": false,
              "computed": false,
              "start": 309,
              "end": 317
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 327
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 329,
                "end": 331
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 333,
                "end": 335
              }
            ],
            "optional": false,
            "start": 309,
            "end": 336
          },
          "definite": false,
          "start": 303,
          "end": 336
        }
      ],
      "declare": false,
      "start": 299,
      "end": 337
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
            "name": "f04",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 356
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "overloaded",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 369
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 374
              },
              "optional": false,
              "computed": false,
              "start": 359,
              "end": 374
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 384
              }
            ],
            "optional": false,
            "start": 359,
            "end": 385
          },
          "definite": false,
          "start": 353,
          "end": 385
        }
      ],
      "declare": false,
      "start": 349,
      "end": 386
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
            "name": "f05",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 416
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "generic",
                "optional": false,
                "typeAnnotation": null,
                "start": 419,
                "end": 426
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 431
              },
              "optional": false,
              "computed": false,
              "start": 419,
              "end": 431
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 441
              }
            ],
            "optional": false,
            "start": 419,
            "end": 442
          },
          "definite": false,
          "start": 413,
          "end": 442
        }
      ],
      "declare": false,
      "start": 409,
      "end": 443
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
            "name": "c00",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 471
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 477
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 482
              },
              "optional": false,
              "computed": false,
              "start": 474,
              "end": 482
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 483,
                "end": 492
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 494,
                "end": 496
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 498,
                "end": 505
              }
            ],
            "optional": false,
            "start": 474,
            "end": 506
          },
          "definite": false,
          "start": 468,
          "end": 506
        }
      ],
      "declare": false,
      "start": 464,
      "end": 507
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
            "name": "c01",
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 515
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 521
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 526
              },
              "optional": false,
              "computed": false,
              "start": 518,
              "end": 526
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 536
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 538,
                "end": 540
              }
            ],
            "optional": false,
            "start": 518,
            "end": 541
          },
          "definite": false,
          "start": 512,
          "end": 541
        }
      ],
      "declare": false,
      "start": 508,
      "end": 542
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
            "name": "c02",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 560
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 563,
                "end": 566
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 567,
                "end": 571
              },
              "optional": false,
              "computed": false,
              "start": 563,
              "end": 571
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 581
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 583,
                "end": 585
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 587,
                "end": 589
              }
            ],
            "optional": false,
            "start": 563,
            "end": 590
          },
          "definite": false,
          "start": 557,
          "end": 590
        }
      ],
      "declare": false,
      "start": 553,
      "end": 591
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
            "name": "c03",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 609
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 615
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 620
              },
              "optional": false,
              "computed": false,
              "start": 612,
              "end": 620
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 630
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 632,
                "end": 634
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 636,
                "end": 643
              },
              {
                "type": "Literal",
                "value": 30,
                "raw": "30",
                "start": 645,
                "end": 647
              }
            ],
            "optional": false,
            "start": 612,
            "end": 648
          },
          "definite": false,
          "start": 606,
          "end": 648
        }
      ],
      "declare": false,
      "start": 602,
      "end": 649
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
            "name": "a00",
            "optional": false,
            "typeAnnotation": null,
            "start": 665,
            "end": 668
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 671,
                "end": 674
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 680
              },
              "optional": false,
              "computed": false,
              "start": 671,
              "end": 680
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 681,
                "end": 690
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 693,
                    "end": 695
                  },
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 697,
                    "end": 704
                  }
                ],
                "start": 692,
                "end": 705
              }
            ],
            "optional": false,
            "start": 671,
            "end": 706
          },
          "definite": false,
          "start": 665,
          "end": 706
        }
      ],
      "declare": false,
      "start": 661,
      "end": 707
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
            "name": "a01",
            "optional": false,
            "typeAnnotation": null,
            "start": 712,
            "end": 715
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 718,
                "end": 721
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 727
              },
              "optional": false,
              "computed": false,
              "start": 718,
              "end": 727
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 737
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 740,
                    "end": 742
                  }
                ],
                "start": 739,
                "end": 743
              }
            ],
            "optional": false,
            "start": 718,
            "end": 744
          },
          "definite": false,
          "start": 712,
          "end": 744
        }
      ],
      "declare": false,
      "start": 708,
      "end": 745
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
            "name": "a02",
            "optional": false,
            "typeAnnotation": null,
            "start": 760,
            "end": 763
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 766,
                "end": 769
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 770,
                "end": 775
              },
              "optional": false,
              "computed": false,
              "start": 766,
              "end": 775
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 785
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 788,
                    "end": 790
                  },
                  {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 792,
                    "end": 794
                  }
                ],
                "start": 787,
                "end": 795
              }
            ],
            "optional": false,
            "start": 766,
            "end": 796
          },
          "definite": false,
          "start": 760,
          "end": 796
        }
      ],
      "declare": false,
      "start": 756,
      "end": 797
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
            "name": "a03",
            "optional": false,
            "typeAnnotation": null,
            "start": 812,
            "end": 815
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 821
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 822,
                "end": 827
              },
              "optional": false,
              "computed": false,
              "start": 818,
              "end": 827
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 837
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 840,
                    "end": 842
                  },
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 844,
                    "end": 851
                  },
                  {
                    "type": "Literal",
                    "value": 30,
                    "raw": "30",
                    "start": 853,
                    "end": 855
                  }
                ],
                "start": 839,
                "end": 856
              }
            ],
            "optional": false,
            "start": 818,
            "end": 857
          },
          "definite": false,
          "start": 812,
          "end": 857
        }
      ],
      "declare": false,
      "start": 808,
      "end": 858
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 876,
        "end": 877
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 895
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 899,
                      "end": 905
                    },
                    "start": 897,
                    "end": 905
                  },
                  "start": 896,
                  "end": 905
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 910,
                      "end": 916
                    },
                    "start": 908,
                    "end": 916
                  },
                  "start": 907,
                  "end": 916
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 918,
                "end": 920
              },
              "expression": false,
              "start": 895,
              "end": 920
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 884,
            "end": 920
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 925,
              "end": 928
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 935,
                      "end": 939
                    },
                    "start": 933,
                    "end": 939
                  },
                  "start": 929,
                  "end": 939
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 944,
                      "end": 950
                    },
                    "start": 942,
                    "end": 950
                  },
                  "start": 941,
                  "end": 950
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 955,
                      "end": 961
                    },
                    "start": 953,
                    "end": 961
                  },
                  "start": 952,
                  "end": 961
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 964,
                  "end": 970
                },
                "start": 962,
                "end": 970
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 980,
                      "end": 982
                    },
                    "start": 973,
                    "end": 982
                  }
                ],
                "start": 971,
                "end": 984
              },
              "expression": false,
              "start": 928,
              "end": 984
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 925,
            "end": 984
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null,
              "start": 989,
              "end": 999
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 1003,
                      "end": 1009
                    },
                    "start": 1001,
                    "end": 1009
                  },
                  "start": 1000,
                  "end": 1009
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1012,
                  "end": 1018
                },
                "start": 1010,
                "end": 1018
              },
              "body": null,
              "expression": false,
              "start": 999,
              "end": 1019
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 989,
            "end": 1019
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null,
              "start": 1024,
              "end": 1034
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1038,
                      "end": 1044
                    },
                    "start": 1036,
                    "end": 1044
                  },
                  "start": 1035,
                  "end": 1044
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1047,
                  "end": 1053
                },
                "start": 1045,
                "end": 1053
              },
              "body": null,
              "expression": false,
              "start": 1034,
              "end": 1054
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1024,
            "end": 1054
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "overloaded",
              "optional": false,
              "typeAnnotation": null,
              "start": 1059,
              "end": 1069
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1073,
                      "end": 1076
                    },
                    "start": 1071,
                    "end": 1076
                  },
                  "start": 1070,
                  "end": 1076
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1079,
                  "end": 1082
                },
                "start": 1077,
                "end": 1082
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1093,
                        "end": 1096
                      },
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1097,
                        "end": 1106
                      },
                      "start": 1092,
                      "end": 1106
                    },
                    "start": 1085,
                    "end": 1106
                  }
                ],
                "start": 1083,
                "end": 1108
              },
              "expression": false,
              "start": 1069,
              "end": 1108
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1059,
            "end": 1108
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "generic",
              "optional": false,
              "typeAnnotation": null,
              "start": 1113,
              "end": 1120
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 1121,
                      "end": 1122
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1121,
                    "end": 1122
                  }
                ],
                "start": 1120,
                "end": 1123
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "start": 1127,
                        "end": 1128
                      },
                      "typeArguments": null,
                      "start": 1127,
                      "end": 1128
                    },
                    "start": 1125,
                    "end": 1128
                  },
                  "start": 1124,
                  "end": 1128
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1131,
                    "end": 1132
                  },
                  "typeArguments": null,
                  "start": 1131,
                  "end": 1132
                },
                "start": 1129,
                "end": 1132
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1142,
                      "end": 1143
                    },
                    "start": 1135,
                    "end": 1143
                  }
                ],
                "start": 1133,
                "end": 1145
              },
              "expression": false,
              "start": 1120,
              "end": 1145
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1113,
            "end": 1145
          }
        ],
        "start": 878,
        "end": 1147
      },
      "abstract": false,
      "declare": false,
      "start": 870,
      "end": 1147
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
            "name": "c",
            "optional": false,
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
                  "start": 1164,
                  "end": 1165
                },
                "typeArguments": null,
                "start": 1164,
                "end": 1165
              },
              "start": 1162,
              "end": 1165
            },
            "start": 1161,
            "end": 1165
          },
          "init": null,
          "definite": false,
          "start": 1161,
          "end": 1165
        }
      ],
      "declare": true,
      "start": 1149,
      "end": 1166
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 1184,
                "end": 1186
              },
              "start": 1182,
              "end": 1186
            },
            "start": 1179,
            "end": 1186
          },
          "init": null,
          "definite": false,
          "start": 1179,
          "end": 1186
        }
      ],
      "declare": true,
      "start": 1167,
      "end": 1187
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1193,
            "end": 1196
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1199,
                  "end": 1200
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1201,
                  "end": 1204
                },
                "optional": false,
                "computed": false,
                "start": 1199,
                "end": 1204
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1205,
                "end": 1209
              },
              "optional": false,
              "computed": false,
              "start": 1199,
              "end": 1209
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1210,
                "end": 1211
              }
            ],
            "optional": false,
            "start": 1199,
            "end": 1212
          },
          "definite": false,
          "start": 1193,
          "end": 1212
        }
      ],
      "declare": false,
      "start": 1189,
      "end": 1213
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
            "name": "f11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1218,
            "end": 1221
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1224,
                  "end": 1225
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1226,
                  "end": 1229
                },
                "optional": false,
                "computed": false,
                "start": 1224,
                "end": 1229
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1230,
                "end": 1234
              },
              "optional": false,
              "computed": false,
              "start": 1224,
              "end": 1234
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1235,
                "end": 1236
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1238,
                "end": 1240
              }
            ],
            "optional": false,
            "start": 1224,
            "end": 1241
          },
          "definite": false,
          "start": 1218,
          "end": 1241
        }
      ],
      "declare": false,
      "start": 1214,
      "end": 1242
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1247,
            "end": 1250
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1253,
                  "end": 1254
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1255,
                  "end": 1258
                },
                "optional": false,
                "computed": false,
                "start": 1253,
                "end": 1258
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1259,
                "end": 1263
              },
              "optional": false,
              "computed": false,
              "start": 1253,
              "end": 1263
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1264,
                "end": 1265
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1267,
                "end": 1269
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1271,
                "end": 1278
              }
            ],
            "optional": false,
            "start": 1253,
            "end": 1279
          },
          "definite": false,
          "start": 1247,
          "end": 1279
        }
      ],
      "declare": false,
      "start": 1243,
      "end": 1280
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
            "name": "f13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1285,
            "end": 1288
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1291,
                  "end": 1292
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1293,
                  "end": 1296
                },
                "optional": false,
                "computed": false,
                "start": 1291,
                "end": 1296
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1297,
                "end": 1301
              },
              "optional": false,
              "computed": false,
              "start": 1291,
              "end": 1301
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1302,
                "end": 1303
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1305,
                "end": 1307
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 1309,
                "end": 1311
              }
            ],
            "optional": false,
            "start": 1291,
            "end": 1312
          },
          "definite": false,
          "start": 1285,
          "end": 1312
        }
      ],
      "declare": false,
      "start": 1281,
      "end": 1313
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
            "name": "f14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1328,
            "end": 1331
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1334,
                  "end": 1335
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1336,
                  "end": 1339
                },
                "optional": false,
                "computed": false,
                "start": 1334,
                "end": 1339
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1344
              },
              "optional": false,
              "computed": false,
              "start": 1334,
              "end": 1344
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1345,
                "end": 1354
              }
            ],
            "optional": false,
            "start": 1334,
            "end": 1355
          },
          "definite": false,
          "start": 1328,
          "end": 1355
        }
      ],
      "declare": false,
      "start": 1324,
      "end": 1356
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
            "name": "f15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1372,
            "end": 1375
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1378,
                  "end": 1379
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "overloaded",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1380,
                  "end": 1390
                },
                "optional": false,
                "computed": false,
                "start": 1378,
                "end": 1390
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1395
              },
              "optional": false,
              "computed": false,
              "start": 1378,
              "end": 1395
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1396,
                "end": 1397
              }
            ],
            "optional": false,
            "start": 1378,
            "end": 1398
          },
          "definite": false,
          "start": 1372,
          "end": 1398
        }
      ],
      "declare": false,
      "start": 1368,
      "end": 1399
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
            "name": "f16",
            "optional": false,
            "typeAnnotation": null,
            "start": 1438,
            "end": 1441
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1444,
                  "end": 1445
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "generic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1446,
                  "end": 1453
                },
                "optional": false,
                "computed": false,
                "start": 1444,
                "end": 1453
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1454,
                "end": 1458
              },
              "optional": false,
              "computed": false,
              "start": 1444,
              "end": 1458
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1459,
                "end": 1460
              }
            ],
            "optional": false,
            "start": 1444,
            "end": 1461
          },
          "definite": false,
          "start": 1438,
          "end": 1461
        }
      ],
      "declare": false,
      "start": 1434,
      "end": 1462
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
            "name": "c10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1499,
            "end": 1502
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1505,
                  "end": 1506
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1507,
                  "end": 1510
                },
                "optional": false,
                "computed": false,
                "start": 1505,
                "end": 1510
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 1511,
                "end": 1515
              },
              "optional": false,
              "computed": false,
              "start": 1505,
              "end": 1515
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1516,
                "end": 1517
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1519,
                "end": 1521
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1523,
                "end": 1530
              }
            ],
            "optional": false,
            "start": 1505,
            "end": 1531
          },
          "definite": false,
          "start": 1499,
          "end": 1531
        }
      ],
      "declare": false,
      "start": 1495,
      "end": 1532
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
            "name": "c11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1537,
            "end": 1540
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1543,
                  "end": 1544
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1545,
                  "end": 1548
                },
                "optional": false,
                "computed": false,
                "start": 1543,
                "end": 1548
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 1549,
                "end": 1553
              },
              "optional": false,
              "computed": false,
              "start": 1543,
              "end": 1553
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1554,
                "end": 1555
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1557,
                "end": 1559
              }
            ],
            "optional": false,
            "start": 1543,
            "end": 1560
          },
          "definite": false,
          "start": 1537,
          "end": 1560
        }
      ],
      "declare": false,
      "start": 1533,
      "end": 1561
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
            "name": "c12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1576,
            "end": 1579
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1582,
                  "end": 1583
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1584,
                  "end": 1587
                },
                "optional": false,
                "computed": false,
                "start": 1582,
                "end": 1587
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 1588,
                "end": 1592
              },
              "optional": false,
              "computed": false,
              "start": 1582,
              "end": 1592
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1593,
                "end": 1594
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1596,
                "end": 1598
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 1600,
                "end": 1602
              }
            ],
            "optional": false,
            "start": 1582,
            "end": 1603
          },
          "definite": false,
          "start": 1576,
          "end": 1603
        }
      ],
      "declare": false,
      "start": 1572,
      "end": 1604
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
            "name": "c13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1619,
            "end": 1622
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1625,
                  "end": 1626
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1627,
                  "end": 1630
                },
                "optional": false,
                "computed": false,
                "start": 1625,
                "end": 1630
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 1631,
                "end": 1635
              },
              "optional": false,
              "computed": false,
              "start": 1625,
              "end": 1635
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1637
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1639,
                "end": 1641
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1643,
                "end": 1650
              },
              {
                "type": "Literal",
                "value": 30,
                "raw": "30",
                "start": 1652,
                "end": 1654
              }
            ],
            "optional": false,
            "start": 1625,
            "end": 1655
          },
          "definite": false,
          "start": 1619,
          "end": 1655
        }
      ],
      "declare": false,
      "start": 1615,
      "end": 1656
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
            "name": "c14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1671,
            "end": 1674
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1677,
                  "end": 1678
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1679,
                  "end": 1682
                },
                "optional": false,
                "computed": false,
                "start": 1677,
                "end": 1682
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 1683,
                "end": 1687
              },
              "optional": false,
              "computed": false,
              "start": 1677,
              "end": 1687
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1688,
                "end": 1697
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1699,
                "end": 1701
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1703,
                "end": 1710
              }
            ],
            "optional": false,
            "start": 1677,
            "end": 1711
          },
          "definite": false,
          "start": 1671,
          "end": 1711
        }
      ],
      "declare": false,
      "start": 1667,
      "end": 1712
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
            "name": "a10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1728,
            "end": 1731
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1734,
                  "end": 1735
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1736,
                  "end": 1739
                },
                "optional": false,
                "computed": false,
                "start": 1734,
                "end": 1739
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 1740,
                "end": 1745
              },
              "optional": false,
              "computed": false,
              "start": 1734,
              "end": 1745
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1746,
                "end": 1747
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1750,
                    "end": 1752
                  },
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1754,
                    "end": 1761
                  }
                ],
                "start": 1749,
                "end": 1762
              }
            ],
            "optional": false,
            "start": 1734,
            "end": 1763
          },
          "definite": false,
          "start": 1728,
          "end": 1763
        }
      ],
      "declare": false,
      "start": 1724,
      "end": 1764
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
            "name": "a11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1769,
            "end": 1772
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1775,
                  "end": 1776
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1777,
                  "end": 1780
                },
                "optional": false,
                "computed": false,
                "start": 1775,
                "end": 1780
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 1781,
                "end": 1786
              },
              "optional": false,
              "computed": false,
              "start": 1775,
              "end": 1786
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1787,
                "end": 1788
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1791,
                    "end": 1793
                  }
                ],
                "start": 1790,
                "end": 1794
              }
            ],
            "optional": false,
            "start": 1775,
            "end": 1795
          },
          "definite": false,
          "start": 1769,
          "end": 1795
        }
      ],
      "declare": false,
      "start": 1765,
      "end": 1796
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
            "name": "a12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1811,
            "end": 1814
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1817,
                  "end": 1818
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1819,
                  "end": 1822
                },
                "optional": false,
                "computed": false,
                "start": 1817,
                "end": 1822
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 1823,
                "end": 1828
              },
              "optional": false,
              "computed": false,
              "start": 1817,
              "end": 1828
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1829,
                "end": 1830
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1833,
                    "end": 1835
                  },
                  {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 1837,
                    "end": 1839
                  }
                ],
                "start": 1832,
                "end": 1840
              }
            ],
            "optional": false,
            "start": 1817,
            "end": 1841
          },
          "definite": false,
          "start": 1811,
          "end": 1841
        }
      ],
      "declare": false,
      "start": 1807,
      "end": 1842
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
            "name": "a13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1857,
            "end": 1860
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1863,
                  "end": 1864
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1865,
                  "end": 1868
                },
                "optional": false,
                "computed": false,
                "start": 1863,
                "end": 1868
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 1869,
                "end": 1874
              },
              "optional": false,
              "computed": false,
              "start": 1863,
              "end": 1874
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1875,
                "end": 1876
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1879,
                    "end": 1881
                  },
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1883,
                    "end": 1890
                  },
                  {
                    "type": "Literal",
                    "value": 30,
                    "raw": "30",
                    "start": 1892,
                    "end": 1894
                  }
                ],
                "start": 1878,
                "end": 1895
              }
            ],
            "optional": false,
            "start": 1863,
            "end": 1896
          },
          "definite": false,
          "start": 1857,
          "end": 1896
        }
      ],
      "declare": false,
      "start": 1853,
      "end": 1897
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
            "name": "a14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1912,
            "end": 1915
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1918,
                  "end": 1919
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1920,
                  "end": 1923
                },
                "optional": false,
                "computed": false,
                "start": 1918,
                "end": 1923
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 1924,
                "end": 1929
              },
              "optional": false,
              "computed": false,
              "start": 1918,
              "end": 1929
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1930,
                "end": 1939
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1942,
                    "end": 1944
                  },
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 1946,
                    "end": 1953
                  }
                ],
                "start": 1941,
                "end": 1954
              }
            ],
            "optional": false,
            "start": 1918,
            "end": 1955
          },
          "definite": false,
          "start": 1912,
          "end": 1955
        }
      ],
      "declare": false,
      "start": 1908,
      "end": 1956
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
            "name": "f20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1972,
            "end": 1975
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1978,
                "end": 1979
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1980,
                "end": 1984
              },
              "optional": false,
              "computed": false,
              "start": 1978,
              "end": 1984
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1985,
                "end": 1994
              }
            ],
            "optional": false,
            "start": 1978,
            "end": 1995
          },
          "definite": false,
          "start": 1972,
          "end": 1995
        }
      ],
      "declare": false,
      "start": 1968,
      "end": 1996
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
            "name": "f21",
            "optional": false,
            "typeAnnotation": null,
            "start": 2001,
            "end": 2004
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2007,
                "end": 2008
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2009,
                "end": 2013
              },
              "optional": false,
              "computed": false,
              "start": 2007,
              "end": 2013
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2014,
                "end": 2023
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2025,
                "end": 2027
              }
            ],
            "optional": false,
            "start": 2007,
            "end": 2028
          },
          "definite": false,
          "start": 2001,
          "end": 2028
        }
      ],
      "declare": false,
      "start": 1997,
      "end": 2029
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
            "name": "f22",
            "optional": false,
            "typeAnnotation": null,
            "start": 2034,
            "end": 2037
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2040,
                "end": 2041
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2042,
                "end": 2046
              },
              "optional": false,
              "computed": false,
              "start": 2040,
              "end": 2046
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2047,
                "end": 2056
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2058,
                "end": 2060
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2062,
                "end": 2069
              }
            ],
            "optional": false,
            "start": 2040,
            "end": 2070
          },
          "definite": false,
          "start": 2034,
          "end": 2070
        }
      ],
      "declare": false,
      "start": 2030,
      "end": 2071
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
            "name": "f23",
            "optional": false,
            "typeAnnotation": null,
            "start": 2076,
            "end": 2079
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 2082,
                "end": 2083
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2084,
                "end": 2088
              },
              "optional": false,
              "computed": false,
              "start": 2082,
              "end": 2088
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 2089,
                "end": 2098
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2100,
                "end": 2102
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 2104,
                "end": 2106
              }
            ],
            "optional": false,
            "start": 2082,
            "end": 2107
          },
          "definite": false,
          "start": 2076,
          "end": 2107
        }
      ],
      "declare": false,
      "start": 2072,
      "end": 2108
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2120,
            "end": 2121
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 2122,
            "end": 2126
          },
          "optional": false,
          "computed": false,
          "start": 2120,
          "end": 2126
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2127,
            "end": 2128
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2130,
            "end": 2132
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 2134,
            "end": 2141
          }
        ],
        "optional": false,
        "start": 2120,
        "end": 2142
      },
      "directive": null,
      "start": 2120,
      "end": 2143
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2144,
            "end": 2145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 2146,
            "end": 2150
          },
          "optional": false,
          "computed": false,
          "start": 2144,
          "end": 2150
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2151,
            "end": 2152
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2154,
            "end": 2156
          }
        ],
        "optional": false,
        "start": 2144,
        "end": 2157
      },
      "directive": null,
      "start": 2144,
      "end": 2158
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2169,
            "end": 2170
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 2171,
            "end": 2175
          },
          "optional": false,
          "computed": false,
          "start": 2169,
          "end": 2175
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2176,
            "end": 2177
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2179,
            "end": 2181
          },
          {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 2183,
            "end": 2185
          }
        ],
        "optional": false,
        "start": 2169,
        "end": 2186
      },
      "directive": null,
      "start": 2169,
      "end": 2187
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2198,
            "end": 2199
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 2200,
            "end": 2204
          },
          "optional": false,
          "computed": false,
          "start": 2198,
          "end": 2204
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2205,
            "end": 2206
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2208,
            "end": 2210
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 2212,
            "end": 2219
          },
          {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 2221,
            "end": 2223
          }
        ],
        "optional": false,
        "start": 2198,
        "end": 2224
      },
      "directive": null,
      "start": 2198,
      "end": 2225
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2237,
            "end": 2238
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 2239,
            "end": 2244
          },
          "optional": false,
          "computed": false,
          "start": 2237,
          "end": 2244
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2245,
            "end": 2246
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2249,
                "end": 2251
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2253,
                "end": 2260
              }
            ],
            "start": 2248,
            "end": 2261
          }
        ],
        "optional": false,
        "start": 2237,
        "end": 2262
      },
      "directive": null,
      "start": 2237,
      "end": 2263
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2264,
            "end": 2265
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 2266,
            "end": 2271
          },
          "optional": false,
          "computed": false,
          "start": 2264,
          "end": 2271
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2272,
            "end": 2273
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2276,
                "end": 2278
              }
            ],
            "start": 2275,
            "end": 2279
          }
        ],
        "optional": false,
        "start": 2264,
        "end": 2280
      },
      "directive": null,
      "start": 2264,
      "end": 2281
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2292,
            "end": 2293
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 2294,
            "end": 2299
          },
          "optional": false,
          "computed": false,
          "start": 2292,
          "end": 2299
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2300,
            "end": 2301
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2304,
                "end": 2306
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 2308,
                "end": 2310
              }
            ],
            "start": 2303,
            "end": 2311
          }
        ],
        "optional": false,
        "start": 2292,
        "end": 2312
      },
      "directive": null,
      "start": 2292,
      "end": 2313
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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 2324,
            "end": 2325
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 2326,
            "end": 2331
          },
          "optional": false,
          "computed": false,
          "start": 2324,
          "end": 2331
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 2332,
            "end": 2333
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2336,
                "end": 2338
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2340,
                "end": 2347
              },
              {
                "type": "Literal",
                "value": 30,
                "raw": "30",
                "start": 2349,
                "end": 2351
              }
            ],
            "start": 2335,
            "end": 2352
          }
        ],
        "optional": false,
        "start": 2324,
        "end": 2353
      },
      "directive": null,
      "start": 2324,
      "end": 2354
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2375,
        "end": 2378
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 2379,
              "end": 2380
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2389,
                "end": 2396
              },
              "start": 2389,
              "end": 2398
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2379,
            "end": 2398
          }
        ],
        "start": 2378,
        "end": 2399
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2417,
                        "end": 2418
                      },
                      "start": 2417,
                      "end": 2418
                    },
                    "start": 2415,
                    "end": 2418
                  },
                  "start": 2411,
                  "end": 2418
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2423,
                    "end": 2427
                  },
                  "optional": false,
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
                        "start": 2429,
                        "end": 2430
                      },
                      "typeArguments": null,
                      "start": 2429,
                      "end": 2430
                    },
                    "start": 2427,
                    "end": 2430
                  },
                  "value": null,
                  "start": 2420,
                  "end": 2430
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2435,
                  "end": 2439
                },
                "start": 2432,
                "end": 2439
              },
              "start": 2410,
              "end": 2439
            },
            "start": 2408,
            "end": 2439
          },
          "start": 2400,
          "end": 2439
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2447,
                  "end": 2455
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2456,
                  "end": 2460
                },
                "optional": false,
                "computed": false,
                "start": 2447,
                "end": 2460
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2461,
                  "end": 2462
                }
              ],
              "optional": false,
              "start": 2447,
              "end": 2463
            },
            "directive": null,
            "start": 2447,
            "end": 2464
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
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2469,
                  "end": 2477
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2478,
                  "end": 2482
                },
                "optional": false,
                "computed": false,
                "start": 2469,
                "end": 2482
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2483,
                  "end": 2484
                }
              ],
              "optional": false,
              "start": 2469,
              "end": 2485
            },
            "directive": null,
            "start": 2469,
            "end": 2486
          }
        ],
        "start": 2441,
        "end": 2497
      },
      "expression": false,
      "start": 2366,
      "end": 2497
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 2508,
        "end": 2511
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 2512,
              "end": 2513
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2522,
                    "end": 2523
                  },
                  "start": 2522,
                  "end": 2523
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2526,
                    "end": 2527
                  },
                  "start": 2526,
                  "end": 2527
                }
              ],
              "start": 2522,
              "end": 2527
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2512,
            "end": 2527
          }
        ],
        "start": 2511,
        "end": 2528
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2546,
                        "end": 2547
                      },
                      "start": 2546,
                      "end": 2547
                    },
                    "start": 2544,
                    "end": 2547
                  },
                  "start": 2540,
                  "end": 2547
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2552,
                    "end": 2556
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2558,
                          "end": 2559
                        },
                        "typeArguments": null,
                        "start": 2558,
                        "end": 2559
                      },
                      "extendsType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2568,
                          "end": 2569
                        },
                        "start": 2568,
                        "end": 2569
                      },
                      "trueType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2573,
                            "end": 2580
                          }
                        ],
                        "start": 2572,
                        "end": 2581
                      },
                      "falseType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2585,
                            "end": 2592
                          },
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2594,
                            "end": 2601
                          }
                        ],
                        "start": 2584,
                        "end": 2602
                      },
                      "start": 2558,
                      "end": 2602
                    },
                    "start": 2556,
                    "end": 2602
                  },
                  "value": null,
                  "start": 2549,
                  "end": 2602
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2607,
                  "end": 2611
                },
                "start": 2604,
                "end": 2611
              },
              "start": 2539,
              "end": 2611
            },
            "start": 2537,
            "end": 2611
          },
          "start": 2529,
          "end": 2611
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2619,
                  "end": 2627
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2628,
                  "end": 2632
                },
                "optional": false,
                "computed": false,
                "start": 2619,
                "end": 2632
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2633,
                  "end": 2634
                }
              ],
              "optional": false,
              "start": 2619,
              "end": 2635
            },
            "directive": null,
            "start": 2619,
            "end": 2636
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
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2641,
                  "end": 2649
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2650,
                  "end": 2654
                },
                "optional": false,
                "computed": false,
                "start": 2641,
                "end": 2654
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2655,
                  "end": 2656
                }
              ],
              "optional": false,
              "start": 2641,
              "end": 2657
            },
            "directive": null,
            "start": 2641,
            "end": 2658
          }
        ],
        "start": 2613,
        "end": 2669
      },
      "expression": false,
      "start": 2499,
      "end": 2669
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2698,
        "end": 2701
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
              "start": 2702,
              "end": 2703
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2712,
                "end": 2719
              },
              "start": 2712,
              "end": 2721
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2702,
            "end": 2721
          }
        ],
        "start": 2701,
        "end": 2722
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2729,
              "end": 2740
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2753,
                            "end": 2757
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2758,
                            "end": 2760
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2753,
                          "end": 2760
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2761,
                          "end": 2765
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2753,
                        "end": 2765
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 2766,
                          "end": 2770
                        }
                      ],
                      "optional": false,
                      "start": 2753,
                      "end": 2771
                    },
                    "directive": null,
                    "start": 2753,
                    "end": 2772
                  }
                ],
                "start": 2743,
                "end": 2778
              },
              "expression": false,
              "start": 2740,
              "end": 2778
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2729,
            "end": 2778
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 2784,
              "end": 2786
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2790,
                    "end": 2794
                  },
                  "optional": false,
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
                        "start": 2796,
                        "end": 2797
                      },
                      "typeArguments": null,
                      "start": 2796,
                      "end": 2797
                    },
                    "start": 2794,
                    "end": 2797
                  },
                  "value": null,
                  "start": 2787,
                  "end": 2797
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2800,
                  "end": 2804
                },
                "start": 2798,
                "end": 2804
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2805,
                "end": 2807
              },
              "expression": false,
              "start": 2786,
              "end": 2807
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2784,
            "end": 2807
          }
        ],
        "start": 2723,
        "end": 2809
      },
      "abstract": false,
      "declare": false,
      "start": 2692,
      "end": 2809
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2817,
        "end": 2820
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
              "start": 2821,
              "end": 2822
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2831,
                    "end": 2832
                  },
                  "start": 2831,
                  "end": 2832
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2835,
                    "end": 2836
                  },
                  "start": 2835,
                  "end": 2836
                }
              ],
              "start": 2831,
              "end": 2836
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2821,
            "end": 2836
          }
        ],
        "start": 2820,
        "end": 2837
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2844,
              "end": 2855
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2868,
                            "end": 2872
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2873,
                            "end": 2875
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2868,
                          "end": 2875
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2876,
                          "end": 2880
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2868,
                        "end": 2880
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 2881,
                          "end": 2885
                        }
                      ],
                      "optional": false,
                      "start": 2868,
                      "end": 2886
                    },
                    "directive": null,
                    "start": 2868,
                    "end": 2887
                  }
                ],
                "start": 2858,
                "end": 2893
              },
              "expression": false,
              "start": 2855,
              "end": 2893
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2844,
            "end": 2893
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 2899,
              "end": 2901
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2905,
                    "end": 2909
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2911,
                          "end": 2912
                        },
                        "typeArguments": null,
                        "start": 2911,
                        "end": 2912
                      },
                      "extendsType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2921,
                          "end": 2922
                        },
                        "start": 2921,
                        "end": 2922
                      },
                      "trueType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2926,
                            "end": 2933
                          }
                        ],
                        "start": 2925,
                        "end": 2934
                      },
                      "falseType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2938,
                            "end": 2945
                          },
                          {
                            "type": "TSUnknownKeyword",
                            "start": 2947,
                            "end": 2954
                          }
                        ],
                        "start": 2937,
                        "end": 2955
                      },
                      "start": 2911,
                      "end": 2955
                    },
                    "start": 2909,
                    "end": 2955
                  },
                  "value": null,
                  "start": 2902,
                  "end": 2955
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2957,
                "end": 2959
              },
              "expression": false,
              "start": 2901,
              "end": 2959
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2899,
            "end": 2959
          }
        ],
        "start": 2838,
        "end": 2961
      },
      "abstract": false,
      "declare": false,
      "start": 2811,
      "end": 2961
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2961
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
    "value": "foo",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 53,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 61,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 70,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
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
    "value": "number",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 101,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 109,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 118,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 150,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 158,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
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
    "value": "T",
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
    "type": "Keyword",
    "value": "let",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "f00",
    "start": 193,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 199,
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
    "value": "bind",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 208,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 220,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "f01",
    "start": 224,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 234,
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
    "value": "undefined",
    "start": 239,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 248,
    "end": 249
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "f02",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 274,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 289,
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
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "f03",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ".",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 318,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 349,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "f04",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 359,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 370,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 375,
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
    "type": "Keyword",
    "value": "let",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "f05",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 419,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 427,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 432,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 464,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "c00",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 478,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 483,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 496,
    "end": 497
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 498,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 508,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "c01",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 522,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 527,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 536,
    "end": 537
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 538,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "let",
    "start": 553,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "c02",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 563,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 567,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 572,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 581,
    "end": 582
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 585,
    "end": 586
  },
  {
    "type": "Numeric",
    "value": "20",
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
    "value": "let",
    "start": 602,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "c03",
    "start": 606,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 612,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 616,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 621,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 630,
    "end": 631
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 632,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 634,
    "end": 635
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 636,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 643,
    "end": 644
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 645,
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
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 661,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "a00",
    "start": 665,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 671,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 675,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 681,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 692,
    "end": 693
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 697,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 708,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "a01",
    "start": 712,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 718,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 722,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 728,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 739,
    "end": 740
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 740,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 756,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "a02",
    "start": 760,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 766,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 770,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 776,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 787,
    "end": 788
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 788,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 790,
    "end": 791
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 792,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 808,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "a03",
    "start": 812,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 818,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 822,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 828,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 839,
    "end": 840
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 840,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 842,
    "end": 843
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 844,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 851,
    "end": 852
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 870,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 884,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "number",
    "start": 899,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 910,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 925,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 929,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 935,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 944,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 955,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 964,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 973,
    "end": 979
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 980,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 989,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1003,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1012,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 1024,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1038,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1047,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 1059,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1073,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1079,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1085,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1097,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 1113,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1135,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1149,
    "end": 1156
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1157,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1167,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1175,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1179,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1189,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1193,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1205,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1214,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1218,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1226,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1230,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1238,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1247,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1255,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1259,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1271,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1281,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1285,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1293,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1297,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1305,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1309,
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
    "type": "Keyword",
    "value": "let",
    "start": 1324,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 1328,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1336,
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
    "value": "bind",
    "start": 1340,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1345,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1368,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 1372,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "overloaded",
    "start": 1380,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1391,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1434,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 1446,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1454,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1495,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "c10",
    "start": 1499,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1507,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1511,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1519,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1523,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "let",
    "start": 1533,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "c11",
    "start": 1537,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1545,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1549,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1557,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "c12",
    "start": 1576,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1584,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1588,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1596,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1600,
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
    "value": ";",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1615,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "c13",
    "start": 1619,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1627,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1631,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1639,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1643,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 1652,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1667,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "c14",
    "start": 1671,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1679,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1683,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1688,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1699,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1703,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1724,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 1728,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1736,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 1740,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1750,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1754,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1765,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 1769,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1777,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 1781,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1791,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1807,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 1811,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1819,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 1823,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1833,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 1837,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1853,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 1857,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1865,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 1869,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1879,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1883,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 1892,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1908,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 1912,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1920,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 1924,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1930,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1942,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1946,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1968,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1972,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1980,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1985,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1997,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 2001,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2009,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2014,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2025,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2030,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 2034,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2042,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2047,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2058,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2062,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2072,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "f23",
    "start": 2076,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2084,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2089,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2100,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 2104,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2122,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2130,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2134,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2146,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2154,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2171,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2179,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 2183,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2200,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2208,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2212,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 2221,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 2239,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2249,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2253,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 2266,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2276,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 2294,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2304,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 2308,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 2326,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2336,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2340,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Numeric",
    "value": "30",
    "start": 2349,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2366,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2375,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2381,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2389,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2400,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2411,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2420,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2423,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2432,
    "end": 2434
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2435,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2447,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2456,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "callback",
    "start": 2469,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2478,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2499,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2508,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2514,
    "end": 2521
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2529,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2540,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2549,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2552,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2560,
    "end": 2567
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2573,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2585,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2594,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2604,
    "end": 2606
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2607,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2619,
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
    "value": "bind",
    "start": 2628,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 2641,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2650,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2692,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2698,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2704,
    "end": 2711
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2712,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2729,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2753,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2758,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2761,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2766,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2784,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2787,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2790,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2800,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2811,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 2817,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2823,
    "end": 2830
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2844,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2868,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2873,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 2876,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2881,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2899,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2902,
    "end": 2905
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2905,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2913,
    "end": 2920
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2926,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2938,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2947,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2960,
    "end": 2961
  }
]
```
