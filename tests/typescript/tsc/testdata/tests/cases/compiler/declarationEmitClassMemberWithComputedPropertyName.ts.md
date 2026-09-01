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
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 17
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 11,
            "end": 19
          },
          "definite": false,
          "start": 6,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 29
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 32,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 46
              },
              "typeArguments": null,
              "start": 41,
              "end": 46
            },
            "start": 32,
            "end": 46
          },
          "definite": false,
          "start": 27,
          "end": 46
        }
      ],
      "declare": false,
      "start": 21,
      "end": 47
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
            "name": "k3",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 57
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 66
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 60,
            "end": 68
          },
          "definite": false,
          "start": 55,
          "end": 68
        }
      ],
      "declare": false,
      "start": 49,
      "end": 69
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
            "name": "k4",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 78
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "prop",
              "raw": "'prop'",
              "start": 81,
              "end": 87
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 96
              },
              "typeArguments": null,
              "start": 91,
              "end": 96
            },
            "start": 81,
            "end": 96
          },
          "definite": false,
          "start": 76,
          "end": 96
        }
      ],
      "declare": false,
      "start": 70,
      "end": 97
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
        "start": 105,
        "end": 108
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
              "name": "k1",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 125
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 130,
                  "end": 136
                },
                "start": 128,
                "end": 136
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 154,
                      "end": 155
                    },
                    "start": 147,
                    "end": 156
                  }
                ],
                "start": 137,
                "end": 162
              },
              "expression": false,
              "start": 126,
              "end": 162
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 115,
            "end": 162
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k1",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 170
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 175,
                  "end": 181
                },
                "start": 173,
                "end": 181
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
                      "start": 199,
                      "end": 201
                    },
                    "start": 192,
                    "end": 202
                  }
                ],
                "start": 182,
                "end": 208
              },
              "expression": false,
              "start": 171,
              "end": 208
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 167,
            "end": 208
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k2",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 224
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
                      "value": 1,
                      "raw": "1",
                      "start": 245,
                      "end": 246
                    },
                    "start": 238,
                    "end": 247
                  }
                ],
                "start": 228,
                "end": 253
              },
              "expression": false,
              "start": 225,
              "end": 253
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 214,
            "end": 253
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k2",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 261
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
                      "value": "",
                      "raw": "\"\"",
                      "start": 282,
                      "end": 284
                    },
                    "start": 275,
                    "end": 285
                  }
                ],
                "start": 265,
                "end": 291
              },
              "expression": false,
              "start": 262,
              "end": 291
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 258,
            "end": 291
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 306
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
                "start": 309,
                "end": 311
              },
              "expression": false,
              "start": 306,
              "end": 311
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 297,
            "end": 311
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 318
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
                "start": 321,
                "end": 323
              },
              "expression": false,
              "start": 318,
              "end": 323
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 316,
            "end": 323
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k3",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 339
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 343,
              "end": 344
            },
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 329,
            "end": 345
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k3",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 353
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 357,
              "end": 358
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 350,
            "end": 359
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k4",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 375
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 379,
              "end": 380
            },
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 365,
            "end": 381
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k4",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 389
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 393,
              "end": 394
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 386,
            "end": 395
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 410
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 413,
              "end": 414
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 401,
            "end": 415
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 422
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 425,
              "end": 426
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 420,
            "end": 427
          }
        ],
        "start": 109,
        "end": 429
      },
      "abstract": false,
      "declare": false,
      "start": 99,
      "end": 429
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 446
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 452
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 453,
                "end": 455
              },
              "optional": false,
              "computed": true,
              "start": 449,
              "end": 456
            },
            "definite": false,
            "start": 444,
            "end": 456
          }
        ],
        "declare": false,
        "start": 438,
        "end": 457
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 431,
      "end": 457
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 473
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 483
                },
                "typeArguments": null,
                "arguments": [],
                "start": 476,
                "end": 485
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": null,
                "start": 486,
                "end": 488
              },
              "optional": false,
              "computed": true,
              "start": 476,
              "end": 489
            },
            "definite": false,
            "start": 471,
            "end": 489
          }
        ],
        "declare": false,
        "start": 465,
        "end": 490
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 458,
      "end": 490
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 507
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 513
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 516
              },
              "optional": false,
              "computed": true,
              "start": 510,
              "end": 517
            },
            "definite": false,
            "start": 505,
            "end": 517
          }
        ],
        "declare": false,
        "start": 499,
        "end": 518
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 492,
      "end": 518
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 532,
              "end": 534
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 544
                },
                "typeArguments": null,
                "arguments": [],
                "start": 537,
                "end": 546
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 549
              },
              "optional": false,
              "computed": true,
              "start": 537,
              "end": 550
            },
            "definite": false,
            "start": 532,
            "end": 550
          }
        ],
        "declare": false,
        "start": 526,
        "end": 551
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 519,
      "end": 551
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 566,
              "end": 568
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 574
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 577
              },
              "optional": false,
              "computed": false,
              "start": 571,
              "end": 577
            },
            "definite": false,
            "start": 566,
            "end": 577
          }
        ],
        "declare": false,
        "start": 560,
        "end": 578
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 553,
      "end": 578
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 594
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 601,
                  "end": 604
                },
                "typeArguments": null,
                "arguments": [],
                "start": 597,
                "end": 606
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 607,
                "end": 609
              },
              "optional": false,
              "computed": false,
              "start": 597,
              "end": 609
            },
            "definite": false,
            "start": 592,
            "end": 609
          }
        ],
        "declare": false,
        "start": 586,
        "end": 610
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 579,
      "end": 610
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null,
              "start": 625,
              "end": 627
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 633
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 636
              },
              "optional": false,
              "computed": true,
              "start": 630,
              "end": 637
            },
            "definite": false,
            "start": 625,
            "end": 637
          }
        ],
        "declare": false,
        "start": 619,
        "end": 638
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 612,
      "end": 638
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t8",
              "optional": false,
              "typeAnnotation": null,
              "start": 652,
              "end": 654
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 664
                },
                "typeArguments": null,
                "arguments": [],
                "start": 657,
                "end": 666
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k3",
                "optional": false,
                "typeAnnotation": null,
                "start": 667,
                "end": 669
              },
              "optional": false,
              "computed": true,
              "start": 657,
              "end": 670
            },
            "definite": false,
            "start": 652,
            "end": 670
          }
        ],
        "declare": false,
        "start": 646,
        "end": 671
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 639,
      "end": 671
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t9",
              "optional": false,
              "typeAnnotation": null,
              "start": 686,
              "end": 688
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 691,
                "end": 694
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 697
              },
              "optional": false,
              "computed": true,
              "start": 691,
              "end": 698
            },
            "definite": false,
            "start": 686,
            "end": 698
          }
        ],
        "declare": false,
        "start": 680,
        "end": 699
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 673,
      "end": 699
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t10",
              "optional": false,
              "typeAnnotation": null,
              "start": 713,
              "end": 716
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 723,
                  "end": 726
                },
                "typeArguments": null,
                "arguments": [],
                "start": 719,
                "end": 728
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "k4",
                "optional": false,
                "typeAnnotation": null,
                "start": 729,
                "end": 731
              },
              "optional": false,
              "computed": true,
              "start": 719,
              "end": 732
            },
            "definite": false,
            "start": 713,
            "end": 732
          }
        ],
        "declare": false,
        "start": 707,
        "end": 733
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 700,
      "end": 733
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t11",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 751
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 754,
                "end": 757
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 758,
                "end": 760
              },
              "optional": false,
              "computed": false,
              "start": 754,
              "end": 760
            },
            "definite": false,
            "start": 748,
            "end": 760
          }
        ],
        "declare": false,
        "start": 742,
        "end": 761
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 735,
      "end": 761
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "t12",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 778
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 788
                },
                "typeArguments": null,
                "arguments": [],
                "start": 781,
                "end": 790
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 791,
                "end": 793
              },
              "optional": false,
              "computed": false,
              "start": 781,
              "end": 793
            },
            "definite": false,
            "start": 775,
            "end": 793
          }
        ],
        "declare": false,
        "start": 769,
        "end": 794
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 762,
      "end": 794
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 794
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
    "value": "k1",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 21,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 27,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 38,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "k4",
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
    "type": "String",
    "value": "'prop'",
    "start": 81,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 88,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 91,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 99,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
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
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 147,
    "end": 153
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 170,
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
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 192,
    "end": 198
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 199,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 238,
    "end": 244
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Keyword",
    "value": "return",
    "start": 275,
    "end": 281
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 282,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 297,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 365,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 373,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 377,
    "end": 378
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Numeric",
    "value": "2",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 401,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 408,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "value": "p1",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 431,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 438,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 444,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 458,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 465,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 476,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 486,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 492,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 499,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 505,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 510,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 514,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 519,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 526,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 532,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 537,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 541,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 553,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 560,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 566,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 571,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 575,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 579,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 586,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 592,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 597,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 601,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 607,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 612,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 619,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 625,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 630,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 639,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 646,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 657,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 661,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
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
    "value": "[",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "k3",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 673,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 680,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "t9",
    "start": 686,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 691,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 695,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 700,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 707,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 713,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 719,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 723,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "k4",
    "start": 729,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 735,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 742,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "t11",
    "start": 748,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 754,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 758,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 762,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 769,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 775,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 781,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 785,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  }
]
```
