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
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 14,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "start": 11,
          "end": 20
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 36
              },
              "typeArguments": null,
              "start": 25,
              "end": 36
            },
            "start": 23,
            "end": 36
          },
          "start": 22,
          "end": 36
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 38,
        "end": 41
      },
      "expression": false,
      "start": 0,
      "end": 41
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
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 50,
            "end": 51
          },
          "definite": false,
          "start": 46,
          "end": 51
        }
      ],
      "declare": false,
      "start": 42,
      "end": 52
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 69,
          "end": 75
        },
        "start": 67,
        "end": 75
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
                },
                "start": 85,
                "end": 88
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 91,
                "end": 93
              },
              "start": 85,
              "end": 93
            },
            "start": 78,
            "end": 94
          }
        ],
        "start": 76,
        "end": 96
      },
      "expression": false,
      "start": 53,
      "end": 96
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
            "name": "fieldNameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 116,
                "end": 122
              },
              "start": 114,
              "end": 122
            },
            "start": 104,
            "end": 122
          },
          "init": {
            "type": "Literal",
            "value": "fieldName1",
            "raw": "\"fieldName1\"",
            "start": 125,
            "end": 137
          },
          "definite": false,
          "start": 104,
          "end": 137
        }
      ],
      "declare": false,
      "start": 98,
      "end": 138
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
            "name": "fieldNameB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              },
              "start": 155,
              "end": 163
            },
            "start": 145,
            "end": 163
          },
          "init": {
            "type": "Literal",
            "value": "fieldName2",
            "raw": "\"fieldName2\"",
            "start": 166,
            "end": 178
          },
          "definite": false,
          "start": 145,
          "end": 178
        }
      ],
      "declare": false,
      "start": 139,
      "end": 179
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
            "name": "fieldNameC",
            "optional": false,
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
            "start": 186,
            "end": 204
          },
          "init": {
            "type": "Literal",
            "value": "fieldName3",
            "raw": "\"fieldName3\"",
            "start": 207,
            "end": 219
          },
          "definite": false,
          "start": 186,
          "end": 219
        }
      ],
      "declare": false,
      "start": 180,
      "end": 220
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 229
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 238
                },
                "start": 236,
                "end": 238
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property",
              "raw": "\"property\"",
              "start": 240,
              "end": 250
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 253,
                "end": 256
              },
              "start": 251,
              "end": 256
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 236,
            "end": 257
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 264
                },
                "start": 262,
                "end": 264
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 272
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 284
              },
              "optional": false,
              "computed": false,
              "start": 266,
              "end": 284
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 287,
                "end": 290
              },
              "start": 285,
              "end": 290
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 262,
            "end": 291
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 298
                },
                "start": 296,
                "end": 298
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property2",
              "raw": "\"property2\"",
              "start": 300,
              "end": 311
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 314,
                "end": 317
              },
              "start": 312,
              "end": 317
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 320,
              "end": 321
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 296,
            "end": 322
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 329
                },
                "start": 327,
                "end": 329
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 337
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 346
              },
              "optional": false,
              "computed": false,
              "start": 331,
              "end": 346
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 349,
                "end": 352
              },
              "start": 347,
              "end": 352
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 355,
              "end": 359
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 327,
            "end": 360
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property3",
              "raw": "\"property3\"",
              "start": 366,
              "end": 377
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 380,
                "end": 383
              },
              "start": 378,
              "end": 383
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 365,
            "end": 384
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 396
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 415
              },
              "optional": false,
              "computed": false,
              "start": 390,
              "end": 415
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 418,
                "end": 421
              },
              "start": 416,
              "end": 421
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 389,
            "end": 422
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property4",
              "raw": "\"property4\"",
              "start": 428,
              "end": 439
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 442,
                "end": 445
              },
              "start": 440,
              "end": 445
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 448,
              "end": 449
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 427,
            "end": 450
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 462
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 468
              },
              "optional": false,
              "computed": false,
              "start": 456,
              "end": 468
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 471,
                "end": 474
              },
              "start": 469,
              "end": 474
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 477,
              "end": 481
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 455,
            "end": 482
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 491
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 488,
              "end": 493
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 496,
                "end": 499
              },
              "start": 494,
              "end": 499
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 487,
            "end": 500
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 507
                },
                "start": 505,
                "end": 507
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 509,
                "end": 512
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 509,
              "end": 514
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 517,
                "end": 520
              },
              "start": 515,
              "end": 520
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 505,
            "end": 521
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 527,
                  "end": 528
                },
                "start": 526,
                "end": 528
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 533
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 530,
              "end": 535
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 538,
                "end": 541
              },
              "start": 536,
              "end": 541
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 544,
              "end": 548
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 526,
            "end": 549
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 565
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 568,
                "end": 571
              },
              "start": 566,
              "end": 571
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 554,
            "end": 572
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 579
                },
                "start": 577,
                "end": 579
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 591
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 594,
                "end": 597
              },
              "start": 592,
              "end": 597
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 577,
            "end": 598
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 605
                },
                "start": 603,
                "end": 605
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 617
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 620,
                "end": 623
              },
              "start": 618,
              "end": 623
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 626,
              "end": 630
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 603,
            "end": 631
          }
        ],
        "start": 230,
        "end": 633
      },
      "abstract": false,
      "declare": false,
      "start": 222,
      "end": 633
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 646,
            "end": 647
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 655,
                      "end": 656
                    },
                    "start": 654,
                    "end": 656
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property",
                  "raw": "\"property\"",
                  "start": 658,
                  "end": 668
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 671,
                    "end": 674
                  },
                  "start": 669,
                  "end": 674
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 654,
                "end": 675
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 682
                    },
                    "start": 680,
                    "end": 682
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 684,
                    "end": 690
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 691,
                    "end": 702
                  },
                  "optional": false,
                  "computed": false,
                  "start": 684,
                  "end": 702
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 705,
                    "end": 708
                  },
                  "start": 703,
                  "end": 708
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 680,
                "end": 709
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 715,
                      "end": 716
                    },
                    "start": 714,
                    "end": 716
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property2",
                  "raw": "\"property2\"",
                  "start": 718,
                  "end": 729
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 732,
                    "end": 735
                  },
                  "start": 730,
                  "end": 735
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 738,
                  "end": 739
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 714,
                "end": 740
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 746,
                      "end": 747
                    },
                    "start": 745,
                    "end": 747
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 749,
                    "end": 755
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 756,
                    "end": 764
                  },
                  "optional": false,
                  "computed": false,
                  "start": 749,
                  "end": 764
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 767,
                    "end": 770
                  },
                  "start": 765,
                  "end": 770
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 773,
                  "end": 777
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 745,
                "end": 778
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property3",
                  "raw": "\"property3\"",
                  "start": 784,
                  "end": 795
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 798,
                    "end": 801
                  },
                  "start": 796,
                  "end": 801
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 783,
                "end": 802
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 808,
                    "end": 814
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 815,
                    "end": 833
                  },
                  "optional": false,
                  "computed": false,
                  "start": 808,
                  "end": 833
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 836,
                    "end": 839
                  },
                  "start": 834,
                  "end": 839
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 807,
                "end": 840
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property4",
                  "raw": "\"property4\"",
                  "start": 846,
                  "end": 857
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 860,
                    "end": 863
                  },
                  "start": 858,
                  "end": 863
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 866,
                  "end": 867
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 845,
                "end": 868
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 874,
                    "end": 880
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 881,
                    "end": 886
                  },
                  "optional": false,
                  "computed": false,
                  "start": 874,
                  "end": 886
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 889,
                    "end": 892
                  },
                  "start": 887,
                  "end": 892
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 895,
                  "end": 899
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 873,
                "end": 900
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 909
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 906,
                  "end": 911
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 914,
                    "end": 917
                  },
                  "start": 912,
                  "end": 917
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 905,
                "end": 918
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 924,
                      "end": 925
                    },
                    "start": 923,
                    "end": 925
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 927,
                    "end": 930
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 927,
                  "end": 932
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 935,
                    "end": 938
                  },
                  "start": 933,
                  "end": 938
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 923,
                "end": 939
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 945,
                      "end": 946
                    },
                    "start": 944,
                    "end": 946
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 948,
                    "end": 951
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 948,
                  "end": 953
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 956,
                    "end": 959
                  },
                  "start": 954,
                  "end": 959
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 962,
                  "end": 966
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 944,
                "end": 967
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 973,
                  "end": 983
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 986,
                    "end": 989
                  },
                  "start": 984,
                  "end": 989
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 972,
                "end": 990
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 996,
                      "end": 997
                    },
                    "start": 995,
                    "end": 997
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 999,
                  "end": 1009
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1012,
                    "end": 1015
                  },
                  "start": 1010,
                  "end": 1015
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 995,
                "end": 1016
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1022,
                      "end": 1023
                    },
                    "start": 1021,
                    "end": 1023
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1025,
                  "end": 1035
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1038,
                    "end": 1041
                  },
                  "start": 1036,
                  "end": 1041
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1044,
                  "end": 1048
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1021,
                "end": 1049
              }
            ],
            "start": 648,
            "end": 1051
          },
          "abstract": false,
          "declare": false,
          "start": 640,
          "end": 1051
        },
        "prefix": true,
        "start": 635,
        "end": 1051
      },
      "directive": null,
      "start": 635,
      "end": 1052
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
        "start": 1060,
        "end": 1061
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1069,
                  "end": 1070
                },
                "start": 1068,
                "end": 1070
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property",
              "raw": "\"property\"",
              "start": 1072,
              "end": 1082
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1085,
                "end": 1088
              },
              "start": 1083,
              "end": 1088
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1068,
            "end": 1089
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1095,
                  "end": 1096
                },
                "start": 1094,
                "end": 1096
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1098,
                "end": 1104
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1116
              },
              "optional": false,
              "computed": false,
              "start": 1098,
              "end": 1116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1119,
                "end": 1122
              },
              "start": 1117,
              "end": 1122
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1094,
            "end": 1123
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1129,
                  "end": 1130
                },
                "start": 1128,
                "end": 1130
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property2",
              "raw": "\"property2\"",
              "start": 1132,
              "end": 1143
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1146,
                "end": 1149
              },
              "start": 1144,
              "end": 1149
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1152,
              "end": 1153
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1128,
            "end": 1154
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1160,
                  "end": 1161
                },
                "start": 1159,
                "end": 1161
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1163,
                "end": 1169
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 1170,
                "end": 1178
              },
              "optional": false,
              "computed": false,
              "start": 1163,
              "end": 1178
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1181,
                "end": 1184
              },
              "start": 1179,
              "end": 1184
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1187,
              "end": 1191
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1159,
            "end": 1192
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property3",
              "raw": "\"property3\"",
              "start": 1198,
              "end": 1209
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1212,
                "end": 1215
              },
              "start": 1210,
              "end": 1215
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1197,
            "end": 1216
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1222,
                "end": 1228
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 1229,
                "end": 1247
              },
              "optional": false,
              "computed": false,
              "start": 1222,
              "end": 1247
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1250,
                "end": 1253
              },
              "start": 1248,
              "end": 1253
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1221,
            "end": 1254
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property4",
              "raw": "\"property4\"",
              "start": 1260,
              "end": 1271
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1274,
                "end": 1277
              },
              "start": 1272,
              "end": 1277
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1280,
              "end": 1281
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1259,
            "end": 1282
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1294
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 1295,
                "end": 1300
              },
              "optional": false,
              "computed": false,
              "start": 1288,
              "end": 1300
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1303,
                "end": 1306
              },
              "start": 1301,
              "end": 1306
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1309,
              "end": 1313
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1287,
            "end": 1314
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1323
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1320,
              "end": 1325
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1328,
                "end": 1331
              },
              "start": 1326,
              "end": 1331
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1319,
            "end": 1332
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1338,
                  "end": 1339
                },
                "start": 1337,
                "end": 1339
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1341,
                "end": 1344
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1341,
              "end": 1346
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1349,
                "end": 1352
              },
              "start": 1347,
              "end": 1352
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1337,
            "end": 1353
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1359,
                  "end": 1360
                },
                "start": 1358,
                "end": 1360
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1362,
                "end": 1365
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1362,
              "end": 1367
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1370,
                "end": 1373
              },
              "start": 1368,
              "end": 1373
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1376,
              "end": 1380
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1358,
            "end": 1381
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1387,
              "end": 1397
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1400,
                "end": 1403
              },
              "start": 1398,
              "end": 1403
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1386,
            "end": 1404
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1410,
                  "end": 1411
                },
                "start": 1409,
                "end": 1411
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1413,
              "end": 1423
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1426,
                "end": 1429
              },
              "start": 1424,
              "end": 1429
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1409,
            "end": 1430
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1436,
                  "end": 1437
                },
                "start": 1435,
                "end": 1437
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null,
              "start": 1439,
              "end": 1449
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1452,
                "end": 1455
              },
              "start": 1450,
              "end": 1455
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1458,
              "end": 1462
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1435,
            "end": 1463
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 1469,
                "end": 1475
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "method",
                "raw": "\"method\"",
                "start": 1478,
                "end": 1486
              },
              "start": 1469,
              "end": 1486
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
                "start": 1490,
                "end": 1492
              },
              "expression": false,
              "start": 1487,
              "end": 1492
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1468,
            "end": 1492
          }
        ],
        "start": 1062,
        "end": 1494
      },
      "abstract": false,
      "declare": false,
      "start": 1054,
      "end": 1494
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 1507,
            "end": 1508
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1516,
                      "end": 1517
                    },
                    "start": 1515,
                    "end": 1517
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property",
                  "raw": "\"property\"",
                  "start": 1519,
                  "end": 1529
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1532,
                    "end": 1535
                  },
                  "start": 1530,
                  "end": 1535
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1515,
                "end": 1536
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1542,
                      "end": 1543
                    },
                    "start": 1541,
                    "end": 1543
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1545,
                    "end": 1551
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1552,
                    "end": 1563
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1545,
                  "end": 1563
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1566,
                    "end": 1569
                  },
                  "start": 1564,
                  "end": 1569
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1541,
                "end": 1570
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1576,
                      "end": 1577
                    },
                    "start": 1575,
                    "end": 1577
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property2",
                  "raw": "\"property2\"",
                  "start": 1579,
                  "end": 1590
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1593,
                    "end": 1596
                  },
                  "start": 1591,
                  "end": 1596
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1599,
                  "end": 1600
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1575,
                "end": 1601
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1607,
                      "end": 1608
                    },
                    "start": 1606,
                    "end": 1608
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1610,
                    "end": 1616
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1617,
                    "end": 1625
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1610,
                  "end": 1625
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1628,
                    "end": 1631
                  },
                  "start": 1626,
                  "end": 1631
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1634,
                  "end": 1638
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1606,
                "end": 1639
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property3",
                  "raw": "\"property3\"",
                  "start": 1645,
                  "end": 1656
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1659,
                    "end": 1662
                  },
                  "start": 1657,
                  "end": 1662
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1644,
                "end": 1663
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1669,
                    "end": 1675
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1676,
                    "end": 1694
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1669,
                  "end": 1694
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1697,
                    "end": 1700
                  },
                  "start": 1695,
                  "end": 1700
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1668,
                "end": 1701
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property4",
                  "raw": "\"property4\"",
                  "start": 1707,
                  "end": 1718
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1721,
                    "end": 1724
                  },
                  "start": 1719,
                  "end": 1724
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1727,
                  "end": 1728
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1706,
                "end": 1729
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1735,
                    "end": 1741
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1742,
                    "end": 1747
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1735,
                  "end": 1747
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1750,
                    "end": 1753
                  },
                  "start": 1748,
                  "end": 1753
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1756,
                  "end": 1760
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1734,
                "end": 1761
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1767,
                    "end": 1770
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1767,
                  "end": 1772
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1775,
                    "end": 1778
                  },
                  "start": 1773,
                  "end": 1778
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1766,
                "end": 1779
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1785,
                      "end": 1786
                    },
                    "start": 1784,
                    "end": 1786
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1788,
                    "end": 1791
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1788,
                  "end": 1793
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1796,
                    "end": 1799
                  },
                  "start": 1794,
                  "end": 1799
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1784,
                "end": 1800
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1806,
                      "end": 1807
                    },
                    "start": 1805,
                    "end": 1807
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1809,
                    "end": 1812
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1809,
                  "end": 1814
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1817,
                    "end": 1820
                  },
                  "start": 1815,
                  "end": 1820
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1823,
                  "end": 1827
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1805,
                "end": 1828
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1834,
                  "end": 1844
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1847,
                    "end": 1850
                  },
                  "start": 1845,
                  "end": 1850
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1833,
                "end": 1851
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1857,
                      "end": 1858
                    },
                    "start": 1856,
                    "end": 1858
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1860,
                  "end": 1870
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1873,
                    "end": 1876
                  },
                  "start": 1871,
                  "end": 1876
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1856,
                "end": 1877
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1883,
                      "end": 1884
                    },
                    "start": 1882,
                    "end": 1884
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1886,
                  "end": 1896
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1899,
                    "end": 1902
                  },
                  "start": 1897,
                  "end": 1902
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1905,
                  "end": 1909
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1882,
                "end": 1910
              },
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "some",
                    "raw": "\"some\"",
                    "start": 1916,
                    "end": 1922
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "method",
                    "raw": "\"method\"",
                    "start": 1925,
                    "end": 1933
                  },
                  "start": 1916,
                  "end": 1933
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
                    "start": 1937,
                    "end": 1939
                  },
                  "expression": false,
                  "start": 1934,
                  "end": 1939
                },
                "kind": "method",
                "computed": true,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1915,
                "end": 1939
              }
            ],
            "start": 1509,
            "end": 1941
          },
          "abstract": false,
          "declare": false,
          "start": 1501,
          "end": 1941
        },
        "prefix": true,
        "start": 1496,
        "end": 1941
      },
      "directive": null,
      "start": 1496,
      "end": 1942
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1950,
        "end": 1951
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1959,
                  "end": 1960
                },
                "start": 1958,
                "end": 1960
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property",
              "raw": "\"property\"",
              "start": 1962,
              "end": 1972
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1975,
                "end": 1978
              },
              "start": 1973,
              "end": 1978
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1958,
            "end": 1979
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1985,
                  "end": 1986
                },
                "start": 1984,
                "end": 1986
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1988,
                "end": 1994
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1995,
                "end": 2006
              },
              "optional": false,
              "computed": false,
              "start": 1988,
              "end": 2006
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2009,
                "end": 2012
              },
              "start": 2007,
              "end": 2012
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1984,
            "end": 2013
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2019,
                  "end": 2020
                },
                "start": 2018,
                "end": 2020
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property2",
              "raw": "\"property2\"",
              "start": 2022,
              "end": 2033
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2036,
                "end": 2039
              },
              "start": 2034,
              "end": 2039
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2042,
              "end": 2043
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2018,
            "end": 2044
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2050,
                  "end": 2051
                },
                "start": 2049,
                "end": 2051
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2053,
                "end": 2059
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 2060,
                "end": 2068
              },
              "optional": false,
              "computed": false,
              "start": 2053,
              "end": 2068
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2071,
                "end": 2074
              },
              "start": 2069,
              "end": 2074
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2077,
              "end": 2081
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2049,
            "end": 2082
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property3",
              "raw": "\"property3\"",
              "start": 2088,
              "end": 2099
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2102,
                "end": 2105
              },
              "start": 2100,
              "end": 2105
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2087,
            "end": 2106
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2112,
                "end": 2118
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 2119,
                "end": 2137
              },
              "optional": false,
              "computed": false,
              "start": 2112,
              "end": 2137
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2140,
                "end": 2143
              },
              "start": 2138,
              "end": 2143
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2111,
            "end": 2144
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property4",
              "raw": "\"property4\"",
              "start": 2150,
              "end": 2161
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2164,
                "end": 2167
              },
              "start": 2162,
              "end": 2167
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2170,
              "end": 2171
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2149,
            "end": 2172
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2178,
                "end": 2184
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 2185,
                "end": 2190
              },
              "optional": false,
              "computed": false,
              "start": 2178,
              "end": 2190
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2193,
                "end": 2196
              },
              "start": 2191,
              "end": 2196
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2199,
              "end": 2203
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2177,
            "end": 2204
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2210,
                "end": 2213
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2210,
              "end": 2215
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2218,
                "end": 2221
              },
              "start": 2216,
              "end": 2221
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2209,
            "end": 2222
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2228,
                  "end": 2229
                },
                "start": 2227,
                "end": 2229
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2231,
                "end": 2234
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2231,
              "end": 2236
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2239,
                "end": 2242
              },
              "start": 2237,
              "end": 2242
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2227,
            "end": 2243
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2249,
                  "end": 2250
                },
                "start": 2248,
                "end": 2250
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2252,
                "end": 2255
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2252,
              "end": 2257
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2260,
                "end": 2263
              },
              "start": 2258,
              "end": 2263
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2266,
              "end": 2270
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2248,
            "end": 2271
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 2277,
                "end": 2283
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "method",
                "raw": "\"method\"",
                "start": 2286,
                "end": 2294
              },
              "start": 2277,
              "end": 2294
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
                "start": 2298,
                "end": 2300
              },
              "expression": false,
              "start": 2295,
              "end": 2300
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2276,
            "end": 2300
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2306,
              "end": 2316
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2319,
                "end": 2322
              },
              "start": 2317,
              "end": 2322
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2305,
            "end": 2323
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2329,
                  "end": 2330
                },
                "start": 2328,
                "end": 2330
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 2332,
              "end": 2342
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2345,
                "end": 2348
              },
              "start": 2343,
              "end": 2348
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2328,
            "end": 2349
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2355,
                  "end": 2356
                },
                "start": 2354,
                "end": 2356
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null,
              "start": 2358,
              "end": 2368
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2371,
                "end": 2374
              },
              "start": 2369,
              "end": 2374
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2377,
              "end": 2381
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2354,
            "end": 2382
          }
        ],
        "start": 1952,
        "end": 2384
      },
      "abstract": false,
      "declare": false,
      "start": 1944,
      "end": 2384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 2397,
            "end": 2398
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2406,
                      "end": 2407
                    },
                    "start": 2405,
                    "end": 2407
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property",
                  "raw": "\"property\"",
                  "start": 2409,
                  "end": 2419
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2422,
                    "end": 2425
                  },
                  "start": 2420,
                  "end": 2425
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2405,
                "end": 2426
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2432,
                      "end": 2433
                    },
                    "start": 2431,
                    "end": 2433
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2435,
                    "end": 2441
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2442,
                    "end": 2453
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2435,
                  "end": 2453
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2456,
                    "end": 2459
                  },
                  "start": 2454,
                  "end": 2459
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2431,
                "end": 2460
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2466,
                      "end": 2467
                    },
                    "start": 2465,
                    "end": 2467
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property2",
                  "raw": "\"property2\"",
                  "start": 2469,
                  "end": 2480
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2483,
                    "end": 2486
                  },
                  "start": 2481,
                  "end": 2486
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2489,
                  "end": 2490
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2465,
                "end": 2491
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2497,
                      "end": 2498
                    },
                    "start": 2496,
                    "end": 2498
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2500,
                    "end": 2506
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2507,
                    "end": 2515
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2500,
                  "end": 2515
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2518,
                    "end": 2521
                  },
                  "start": 2516,
                  "end": 2521
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2524,
                  "end": 2528
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2496,
                "end": 2529
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property3",
                  "raw": "\"property3\"",
                  "start": 2535,
                  "end": 2546
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2549,
                    "end": 2552
                  },
                  "start": 2547,
                  "end": 2552
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2534,
                "end": 2553
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2559,
                    "end": 2565
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2566,
                    "end": 2584
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2559,
                  "end": 2584
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2587,
                    "end": 2590
                  },
                  "start": 2585,
                  "end": 2590
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2558,
                "end": 2591
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property4",
                  "raw": "\"property4\"",
                  "start": 2597,
                  "end": 2608
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2611,
                    "end": 2614
                  },
                  "start": 2609,
                  "end": 2614
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2617,
                  "end": 2618
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2596,
                "end": 2619
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2625,
                    "end": 2631
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2632,
                    "end": 2637
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2625,
                  "end": 2637
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2640,
                    "end": 2643
                  },
                  "start": 2638,
                  "end": 2643
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2646,
                  "end": 2650
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2624,
                "end": 2651
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2657,
                    "end": 2660
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2657,
                  "end": 2662
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2665,
                    "end": 2668
                  },
                  "start": 2663,
                  "end": 2668
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2656,
                "end": 2669
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2675,
                      "end": 2676
                    },
                    "start": 2674,
                    "end": 2676
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2678,
                    "end": 2681
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2678,
                  "end": 2683
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2686,
                    "end": 2689
                  },
                  "start": 2684,
                  "end": 2689
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2674,
                "end": 2690
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2696,
                      "end": 2697
                    },
                    "start": 2695,
                    "end": 2697
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2699,
                    "end": 2702
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2699,
                  "end": 2704
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2707,
                    "end": 2710
                  },
                  "start": 2705,
                  "end": 2710
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2713,
                  "end": 2717
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2695,
                "end": 2718
              },
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "some",
                    "raw": "\"some\"",
                    "start": 2724,
                    "end": 2730
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "method",
                    "raw": "\"method\"",
                    "start": 2733,
                    "end": 2741
                  },
                  "start": 2724,
                  "end": 2741
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
                    "start": 2745,
                    "end": 2747
                  },
                  "expression": false,
                  "start": 2742,
                  "end": 2747
                },
                "kind": "method",
                "computed": true,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2723,
                "end": 2747
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2753,
                  "end": 2763
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2766,
                    "end": 2769
                  },
                  "start": 2764,
                  "end": 2769
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2752,
                "end": 2770
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2776,
                      "end": 2777
                    },
                    "start": 2775,
                    "end": 2777
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2779,
                  "end": 2789
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2792,
                    "end": 2795
                  },
                  "start": 2790,
                  "end": 2795
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2775,
                "end": 2796
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2802,
                      "end": 2803
                    },
                    "start": 2801,
                    "end": 2803
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2805,
                  "end": 2815
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2818,
                    "end": 2821
                  },
                  "start": 2816,
                  "end": 2821
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2824,
                  "end": 2828
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2801,
                "end": 2829
              }
            ],
            "start": 2399,
            "end": 2831
          },
          "abstract": false,
          "declare": false,
          "start": 2391,
          "end": 2831
        },
        "prefix": true,
        "start": 2386,
        "end": 2831
      },
      "directive": null,
      "start": 2386,
      "end": 2832
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 2840,
        "end": 2841
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2849,
                  "end": 2850
                },
                "start": 2848,
                "end": 2850
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property",
              "raw": "\"property\"",
              "start": 2852,
              "end": 2862
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2865,
                "end": 2868
              },
              "start": 2863,
              "end": 2868
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2848,
            "end": 2869
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2875,
                  "end": 2876
                },
                "start": 2874,
                "end": 2876
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2878,
                "end": 2884
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 2885,
                "end": 2896
              },
              "optional": false,
              "computed": false,
              "start": 2878,
              "end": 2896
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2899,
                "end": 2902
              },
              "start": 2897,
              "end": 2902
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2874,
            "end": 2903
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2909,
                  "end": 2910
                },
                "start": 2908,
                "end": 2910
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property2",
              "raw": "\"property2\"",
              "start": 2912,
              "end": 2923
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2926,
                "end": 2929
              },
              "start": 2924,
              "end": 2929
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2932,
              "end": 2933
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2908,
            "end": 2934
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2940,
                  "end": 2941
                },
                "start": 2939,
                "end": 2941
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2943,
                "end": 2949
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 2950,
                "end": 2958
              },
              "optional": false,
              "computed": false,
              "start": 2943,
              "end": 2958
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2961,
                "end": 2964
              },
              "start": 2959,
              "end": 2964
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2967,
              "end": 2971
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2939,
            "end": 2972
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property3",
              "raw": "\"property3\"",
              "start": 2978,
              "end": 2989
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2992,
                "end": 2995
              },
              "start": 2990,
              "end": 2995
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2977,
            "end": 2996
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3002,
                "end": 3008
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 3009,
                "end": 3027
              },
              "optional": false,
              "computed": false,
              "start": 3002,
              "end": 3027
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3030,
                "end": 3033
              },
              "start": 3028,
              "end": 3033
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3001,
            "end": 3034
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property4",
              "raw": "\"property4\"",
              "start": 3040,
              "end": 3051
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3054,
                "end": 3057
              },
              "start": 3052,
              "end": 3057
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 3060,
              "end": 3061
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3039,
            "end": 3062
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3068,
                "end": 3074
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 3075,
                "end": 3080
              },
              "optional": false,
              "computed": false,
              "start": 3068,
              "end": 3080
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3083,
                "end": 3086
              },
              "start": 3081,
              "end": 3086
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 3089,
              "end": 3093
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3067,
            "end": 3094
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3100,
                "end": 3103
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3100,
              "end": 3105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3108,
                "end": 3111
              },
              "start": 3106,
              "end": 3111
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3099,
            "end": 3112
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3118,
                  "end": 3119
                },
                "start": 3117,
                "end": 3119
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3121,
                "end": 3124
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3121,
              "end": 3126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3129,
                "end": 3132
              },
              "start": 3127,
              "end": 3132
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3117,
            "end": 3133
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3139,
                  "end": 3140
                },
                "start": 3138,
                "end": 3140
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3142,
                "end": 3145
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3142,
              "end": 3147
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3150,
                "end": 3153
              },
              "start": 3148,
              "end": 3153
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 3156,
              "end": 3160
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3138,
            "end": 3161
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 3167,
                "end": 3173
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "method",
                "raw": "\"method\"",
                "start": 3176,
                "end": 3184
              },
              "start": 3167,
              "end": 3184
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
                "start": 3188,
                "end": 3190
              },
              "expression": false,
              "start": 3185,
              "end": 3190
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3166,
            "end": 3190
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 3196,
              "end": 3206
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3209,
                "end": 3212
              },
              "start": 3207,
              "end": 3212
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3195,
            "end": 3213
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3219,
                  "end": 3220
                },
                "start": 3218,
                "end": 3220
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 3222,
              "end": 3232
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3235,
                "end": 3238
              },
              "start": 3233,
              "end": 3238
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3218,
            "end": 3239
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 3245,
                "end": 3251
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "method2",
                "raw": "\"method2\"",
                "start": 3254,
                "end": 3263
              },
              "start": 3245,
              "end": 3263
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
                "start": 3267,
                "end": 3269
              },
              "expression": false,
              "start": 3264,
              "end": 3269
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3244,
            "end": 3269
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3275,
                  "end": 3276
                },
                "start": 3274,
                "end": 3276
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null,
              "start": 3278,
              "end": 3288
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3291,
                "end": 3294
              },
              "start": 3289,
              "end": 3294
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 3297,
              "end": 3301
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3274,
            "end": 3302
          }
        ],
        "start": 2842,
        "end": 3304
      },
      "abstract": false,
      "declare": false,
      "start": 2834,
      "end": 3304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": null,
            "start": 3317,
            "end": 3318
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3326,
                      "end": 3327
                    },
                    "start": 3325,
                    "end": 3327
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property",
                  "raw": "\"property\"",
                  "start": 3329,
                  "end": 3339
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3342,
                    "end": 3345
                  },
                  "start": 3340,
                  "end": 3345
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3325,
                "end": 3346
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3352,
                      "end": 3353
                    },
                    "start": 3351,
                    "end": 3353
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3355,
                    "end": 3361
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3362,
                    "end": 3373
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3355,
                  "end": 3373
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3376,
                    "end": 3379
                  },
                  "start": 3374,
                  "end": 3379
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3351,
                "end": 3380
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3386,
                      "end": 3387
                    },
                    "start": 3385,
                    "end": 3387
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property2",
                  "raw": "\"property2\"",
                  "start": 3389,
                  "end": 3400
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3403,
                    "end": 3406
                  },
                  "start": 3401,
                  "end": 3406
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3409,
                  "end": 3410
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3385,
                "end": 3411
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3417,
                      "end": 3418
                    },
                    "start": 3416,
                    "end": 3418
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3420,
                    "end": 3426
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3427,
                    "end": 3435
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3420,
                  "end": 3435
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3438,
                    "end": 3441
                  },
                  "start": 3436,
                  "end": 3441
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3444,
                  "end": 3448
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3416,
                "end": 3449
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property3",
                  "raw": "\"property3\"",
                  "start": 3455,
                  "end": 3466
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3469,
                    "end": 3472
                  },
                  "start": 3467,
                  "end": 3472
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3454,
                "end": 3473
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3479,
                    "end": 3485
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3486,
                    "end": 3504
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3479,
                  "end": 3504
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3507,
                    "end": 3510
                  },
                  "start": 3505,
                  "end": 3510
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3478,
                "end": 3511
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property4",
                  "raw": "\"property4\"",
                  "start": 3517,
                  "end": 3528
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3531,
                    "end": 3534
                  },
                  "start": 3529,
                  "end": 3534
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3537,
                  "end": 3538
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3516,
                "end": 3539
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3545,
                    "end": 3551
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3552,
                    "end": 3557
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3545,
                  "end": 3557
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3560,
                    "end": 3563
                  },
                  "start": 3558,
                  "end": 3563
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3566,
                  "end": 3570
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3544,
                "end": 3571
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3577,
                    "end": 3580
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3577,
                  "end": 3582
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3585,
                    "end": 3588
                  },
                  "start": 3583,
                  "end": 3588
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3576,
                "end": 3589
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3595,
                      "end": 3596
                    },
                    "start": 3594,
                    "end": 3596
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3598,
                    "end": 3601
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3598,
                  "end": 3603
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3606,
                    "end": 3609
                  },
                  "start": 3604,
                  "end": 3609
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3594,
                "end": 3610
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3616,
                      "end": 3617
                    },
                    "start": 3615,
                    "end": 3617
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3619,
                    "end": 3622
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3619,
                  "end": 3624
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3627,
                    "end": 3630
                  },
                  "start": 3625,
                  "end": 3630
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3633,
                  "end": 3637
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3615,
                "end": 3638
              },
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "some",
                    "raw": "\"some\"",
                    "start": 3644,
                    "end": 3650
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "method",
                    "raw": "\"method\"",
                    "start": 3653,
                    "end": 3661
                  },
                  "start": 3644,
                  "end": 3661
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
                    "start": 3665,
                    "end": 3667
                  },
                  "expression": false,
                  "start": 3662,
                  "end": 3667
                },
                "kind": "method",
                "computed": true,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3643,
                "end": 3667
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3673,
                  "end": 3683
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3686,
                    "end": 3689
                  },
                  "start": 3684,
                  "end": 3689
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3672,
                "end": 3690
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3696,
                      "end": 3697
                    },
                    "start": 3695,
                    "end": 3697
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3699,
                  "end": 3709
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3712,
                    "end": 3715
                  },
                  "start": 3710,
                  "end": 3715
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3695,
                "end": 3716
              },
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "some",
                    "raw": "\"some\"",
                    "start": 3722,
                    "end": 3728
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "method2",
                    "raw": "\"method2\"",
                    "start": 3731,
                    "end": 3740
                  },
                  "start": 3722,
                  "end": 3740
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
                    "start": 3744,
                    "end": 3746
                  },
                  "expression": false,
                  "start": 3741,
                  "end": 3746
                },
                "kind": "method",
                "computed": true,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3721,
                "end": 3746
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3752,
                      "end": 3753
                    },
                    "start": 3751,
                    "end": 3753
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3755,
                  "end": 3765
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3768,
                    "end": 3771
                  },
                  "start": 3766,
                  "end": 3771
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3774,
                  "end": 3778
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3751,
                "end": 3779
              }
            ],
            "start": 3319,
            "end": 3781
          },
          "abstract": false,
          "declare": false,
          "start": 3311,
          "end": 3781
        },
        "prefix": true,
        "start": 3306,
        "end": 3781
      },
      "directive": null,
      "start": 3306,
      "end": 3782
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 3790,
        "end": 3791
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3799,
                  "end": 3800
                },
                "start": 3798,
                "end": 3800
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property",
              "raw": "\"property\"",
              "start": 3802,
              "end": 3812
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3815,
                "end": 3818
              },
              "start": 3813,
              "end": 3818
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3798,
            "end": 3819
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3825,
                  "end": 3826
                },
                "start": 3824,
                "end": 3826
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3828,
                "end": 3834
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 3835,
                "end": 3846
              },
              "optional": false,
              "computed": false,
              "start": 3828,
              "end": 3846
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3849,
                "end": 3852
              },
              "start": 3847,
              "end": 3852
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3824,
            "end": 3853
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3859,
                  "end": 3860
                },
                "start": 3858,
                "end": 3860
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property2",
              "raw": "\"property2\"",
              "start": 3862,
              "end": 3873
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3876,
                "end": 3879
              },
              "start": 3874,
              "end": 3879
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 3882,
              "end": 3883
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3858,
            "end": 3884
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3890,
                  "end": 3891
                },
                "start": 3889,
                "end": 3891
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3893,
                "end": 3899
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 3900,
                "end": 3908
              },
              "optional": false,
              "computed": false,
              "start": 3893,
              "end": 3908
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3911,
                "end": 3914
              },
              "start": 3909,
              "end": 3914
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 3917,
              "end": 3921
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3889,
            "end": 3922
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property3",
              "raw": "\"property3\"",
              "start": 3928,
              "end": 3939
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3942,
                "end": 3945
              },
              "start": 3940,
              "end": 3945
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3927,
            "end": 3946
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3952,
                "end": 3958
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 3959,
                "end": 3977
              },
              "optional": false,
              "computed": false,
              "start": 3952,
              "end": 3977
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3980,
                "end": 3983
              },
              "start": 3978,
              "end": 3983
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3951,
            "end": 3984
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property4",
              "raw": "\"property4\"",
              "start": 3990,
              "end": 4001
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4004,
                "end": 4007
              },
              "start": 4002,
              "end": 4007
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 4010,
              "end": 4011
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3989,
            "end": 4012
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 4018,
                "end": 4024
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 4025,
                "end": 4030
              },
              "optional": false,
              "computed": false,
              "start": 4018,
              "end": 4030
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4033,
                "end": 4036
              },
              "start": 4031,
              "end": 4036
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 4039,
              "end": 4043
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4017,
            "end": 4044
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4050,
                "end": 4053
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 4050,
              "end": 4055
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4058,
                "end": 4061
              },
              "start": 4056,
              "end": 4061
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4049,
            "end": 4062
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4068,
                  "end": 4069
                },
                "start": 4067,
                "end": 4069
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4071,
                "end": 4074
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 4071,
              "end": 4076
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4079,
                "end": 4082
              },
              "start": 4077,
              "end": 4082
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4067,
            "end": 4083
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4089,
                  "end": 4090
                },
                "start": 4088,
                "end": 4090
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4092,
                "end": 4095
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 4092,
              "end": 4097
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4100,
                "end": 4103
              },
              "start": 4098,
              "end": 4103
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 4106,
              "end": 4110
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4088,
            "end": 4111
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4117,
                  "end": 4118
                },
                "start": 4116,
                "end": 4118
              }
            ],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 4120,
                "end": 4126
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "method",
                "raw": "\"method\"",
                "start": 4129,
                "end": 4137
              },
              "start": 4120,
              "end": 4137
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
                "start": 4141,
                "end": 4143
              },
              "expression": false,
              "start": 4138,
              "end": 4143
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4116,
            "end": 4143
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 4149,
              "end": 4159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4162,
                "end": 4165
              },
              "start": 4160,
              "end": 4165
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4148,
            "end": 4166
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4172,
                  "end": 4173
                },
                "start": 4171,
                "end": 4173
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 4175,
              "end": 4185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4188,
                "end": 4191
              },
              "start": 4186,
              "end": 4191
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4171,
            "end": 4192
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 4198,
                "end": 4204
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "method2",
                "raw": "\"method2\"",
                "start": 4207,
                "end": 4216
              },
              "start": 4198,
              "end": 4216
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
                "start": 4220,
                "end": 4222
              },
              "expression": false,
              "start": 4217,
              "end": 4222
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4197,
            "end": 4222
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4228,
                  "end": 4229
                },
                "start": 4227,
                "end": 4229
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null,
              "start": 4231,
              "end": 4241
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4244,
                "end": 4247
              },
              "start": 4242,
              "end": 4247
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 4250,
              "end": 4254
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4227,
            "end": 4255
          }
        ],
        "start": 3792,
        "end": 4257
      },
      "abstract": false,
      "declare": false,
      "start": 3784,
      "end": 4257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "J",
            "optional": false,
            "typeAnnotation": null,
            "start": 4270,
            "end": 4271
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4279,
                      "end": 4280
                    },
                    "start": 4278,
                    "end": 4280
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property",
                  "raw": "\"property\"",
                  "start": 4282,
                  "end": 4292
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4295,
                    "end": 4298
                  },
                  "start": 4293,
                  "end": 4298
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4278,
                "end": 4299
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4305,
                      "end": 4306
                    },
                    "start": 4304,
                    "end": 4306
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4308,
                    "end": 4314
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4315,
                    "end": 4326
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4308,
                  "end": 4326
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4329,
                    "end": 4332
                  },
                  "start": 4327,
                  "end": 4332
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4304,
                "end": 4333
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4339,
                      "end": 4340
                    },
                    "start": 4338,
                    "end": 4340
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property2",
                  "raw": "\"property2\"",
                  "start": 4342,
                  "end": 4353
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4356,
                    "end": 4359
                  },
                  "start": 4354,
                  "end": 4359
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4362,
                  "end": 4363
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4338,
                "end": 4364
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4370,
                      "end": 4371
                    },
                    "start": 4369,
                    "end": 4371
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4373,
                    "end": 4379
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4380,
                    "end": 4388
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4373,
                  "end": 4388
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4391,
                    "end": 4394
                  },
                  "start": 4389,
                  "end": 4394
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4397,
                  "end": 4401
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4369,
                "end": 4402
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property3",
                  "raw": "\"property3\"",
                  "start": 4408,
                  "end": 4419
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4422,
                    "end": 4425
                  },
                  "start": 4420,
                  "end": 4425
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4407,
                "end": 4426
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4432,
                    "end": 4438
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4439,
                    "end": 4457
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4432,
                  "end": 4457
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4460,
                    "end": 4463
                  },
                  "start": 4458,
                  "end": 4463
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4431,
                "end": 4464
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property4",
                  "raw": "\"property4\"",
                  "start": 4470,
                  "end": 4481
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4484,
                    "end": 4487
                  },
                  "start": 4482,
                  "end": 4487
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4490,
                  "end": 4491
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4469,
                "end": 4492
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4498,
                    "end": 4504
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4505,
                    "end": 4510
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4498,
                  "end": 4510
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4513,
                    "end": 4516
                  },
                  "start": 4511,
                  "end": 4516
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4519,
                  "end": 4523
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4497,
                "end": 4524
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4530,
                    "end": 4533
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4530,
                  "end": 4535
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4538,
                    "end": 4541
                  },
                  "start": 4536,
                  "end": 4541
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4529,
                "end": 4542
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4548,
                      "end": 4549
                    },
                    "start": 4547,
                    "end": 4549
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4551,
                    "end": 4554
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4551,
                  "end": 4556
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4559,
                    "end": 4562
                  },
                  "start": 4557,
                  "end": 4562
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4547,
                "end": 4563
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4569,
                      "end": 4570
                    },
                    "start": 4568,
                    "end": 4570
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4572,
                    "end": 4575
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4572,
                  "end": 4577
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4580,
                    "end": 4583
                  },
                  "start": 4578,
                  "end": 4583
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4586,
                  "end": 4590
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4568,
                "end": 4591
              },
              {
                "type": "MethodDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4597,
                      "end": 4598
                    },
                    "start": 4596,
                    "end": 4598
                  }
                ],
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "some",
                    "raw": "\"some\"",
                    "start": 4600,
                    "end": 4606
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "method",
                    "raw": "\"method\"",
                    "start": 4609,
                    "end": 4617
                  },
                  "start": 4600,
                  "end": 4617
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
                    "start": 4621,
                    "end": 4623
                  },
                  "expression": false,
                  "start": 4618,
                  "end": 4623
                },
                "kind": "method",
                "computed": true,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 4596,
                "end": 4623
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4629,
                  "end": 4639
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4642,
                    "end": 4645
                  },
                  "start": 4640,
                  "end": 4645
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4628,
                "end": 4646
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4652,
                      "end": 4653
                    },
                    "start": 4651,
                    "end": 4653
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4655,
                  "end": 4665
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4668,
                    "end": 4671
                  },
                  "start": 4666,
                  "end": 4671
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4651,
                "end": 4672
              },
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "some",
                    "raw": "\"some\"",
                    "start": 4678,
                    "end": 4684
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "method2",
                    "raw": "\"method2\"",
                    "start": 4687,
                    "end": 4696
                  },
                  "start": 4678,
                  "end": 4696
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
                    "start": 4700,
                    "end": 4702
                  },
                  "expression": false,
                  "start": 4697,
                  "end": 4702
                },
                "kind": "method",
                "computed": true,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 4677,
                "end": 4702
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4708,
                      "end": 4709
                    },
                    "start": 4707,
                    "end": 4709
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4711,
                  "end": 4721
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4724,
                    "end": 4727
                  },
                  "start": 4722,
                  "end": 4727
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4730,
                  "end": 4734
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4707,
                "end": 4735
              }
            ],
            "start": 4272,
            "end": 4737
          },
          "abstract": false,
          "declare": false,
          "start": 4264,
          "end": 4737
        },
        "prefix": true,
        "start": 4259,
        "end": 4737
      },
      "directive": null,
      "start": 4259,
      "end": 4738
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4738
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
    "value": "x",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 25,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 53,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 62,
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
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 85,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 89,
    "end": 90
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 98,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "fieldNameA",
    "start": 104,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "\"fieldName1\"",
    "start": 125,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 139,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "fieldNameB",
    "start": 145,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "String",
    "value": "\"fieldName2\"",
    "start": 166,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 180,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "fieldNameC",
    "start": 186,
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
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "String",
    "value": "\"fieldName3\"",
    "start": 207,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 239,
    "end": 240
  },
  {
    "type": "String",
    "value": "\"property\"",
    "start": 240,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 253,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 273,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 287,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 299,
    "end": 300
  },
  {
    "type": "String",
    "value": "\"property2\"",
    "start": 300,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 311,
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
    "value": "any",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "@",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 331,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 338,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "any",
    "start": 349,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Null",
    "value": "null",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 365,
    "end": 366
  },
  {
    "type": "String",
    "value": "\"property3\"",
    "start": 366,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 390,
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
    "value": "isConcatSpreadable",
    "start": 397,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 427,
    "end": 428
  },
  {
    "type": "String",
    "value": "\"property4\"",
    "start": 428,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 456,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 463,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 471,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Null",
    "value": "null",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 488,
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
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 496,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 509,
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
    "value": "]",
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
    "type": "Identifier",
    "value": "any",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 530,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 538,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Null",
    "value": "null",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "fieldNameA",
    "start": 555,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 568,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "fieldNameB",
    "start": 581,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "fieldNameC",
    "start": 607,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Null",
    "value": "null",
    "start": 626,
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
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 635,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 640,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "@",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 657,
    "end": 658
  },
  {
    "type": "String",
    "value": "\"property\"",
    "start": 658,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 671,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 684,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 691,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 705,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 717,
    "end": 718
  },
  {
    "type": "String",
    "value": "\"property2\"",
    "start": 718,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 732,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 749,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 756,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 767,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772
  },
  {
    "type": "Null",
    "value": "null",
    "start": 773,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 783,
    "end": 784
  },
  {
    "type": "String",
    "value": "\"property3\"",
    "start": 784,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 798,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "isConcatSpreadable",
    "start": 815,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 836,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 845,
    "end": 846
  },
  {
    "type": "String",
    "value": "\"property4\"",
    "start": 846,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 860,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 864,
    "end": 865
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 874,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 881,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 889,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 893,
    "end": 894
  },
  {
    "type": "Null",
    "value": "null",
    "start": 895,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 906,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 914,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 927,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 948,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 956,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 960,
    "end": 961
  },
  {
    "type": "Null",
    "value": "null",
    "start": 962,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "fieldNameA",
    "start": 973,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 986,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "fieldNameB",
    "start": 999,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "any",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "fieldNameC",
    "start": 1025,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "any",
    "start": 1038,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1044,
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
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1054,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "String",
    "value": "\"property\"",
    "start": 1072,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "any",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1098,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 1105,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1119,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "String",
    "value": "\"property2\"",
    "start": 1132,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1146,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1152,
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
    "value": "@",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1163,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 1170,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1181,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1187,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "String",
    "value": "\"property3\"",
    "start": 1198,
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
    "value": "any",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1222,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "isConcatSpreadable",
    "start": 1229,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1250,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "String",
    "value": "\"property4\"",
    "start": 1260,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1274,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1288,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 1295,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1303,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1309,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1320,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1328,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1341,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1349,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1362,
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
    "value": ")",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1370,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1376,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "fieldNameA",
    "start": 1387,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1400,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "fieldNameB",
    "start": 1413,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1426,
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
    "value": "@",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "fieldNameC",
    "start": 1439,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1452,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1458,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 1469,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 1478,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1496,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1501,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "String",
    "value": "\"property\"",
    "start": 1519,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1532,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1545,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 1552,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1566,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "String",
    "value": "\"property2\"",
    "start": 1579,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1593,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1610,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 1617,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1628,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1634,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "String",
    "value": "\"property3\"",
    "start": 1645,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1659,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1669,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "isConcatSpreadable",
    "start": 1676,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1697,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "String",
    "value": "\"property4\"",
    "start": 1707,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1721,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1735,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 1742,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1750,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1756,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1767,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1770,
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
    "value": "]",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1775,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1788,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1792,
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
    "value": ":",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1796,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1809,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1817,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1823,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "fieldNameA",
    "start": 1834,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1847,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "@",
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
    "type": "Punctuator",
    "value": "[",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "fieldNameB",
    "start": 1860,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1873,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "fieldNameC",
    "start": 1886,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1899,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1905,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 1916,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 1925,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1944,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "String",
    "value": "\"property\"",
    "start": 1962,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1975,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1988,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 1995,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2009,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "String",
    "value": "\"property2\"",
    "start": 2022,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2036,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2053,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 2060,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2071,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2077,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "String",
    "value": "\"property3\"",
    "start": 2088,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2102,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2112,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "isConcatSpreadable",
    "start": 2119,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2140,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "String",
    "value": "\"property4\"",
    "start": 2150,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2164,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2178,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 2185,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2193,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2199,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2210,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2218,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2231,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2239,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2252,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2260,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2266,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 2277,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 2286,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "fieldNameA",
    "start": 2306,
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
    "value": ":",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2319,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "fieldNameB",
    "start": 2332,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2345,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "fieldNameC",
    "start": 2358,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2371,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2377,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2386,
    "end": 2390
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2391,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "String",
    "value": "\"property\"",
    "start": 2409,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2422,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2435,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 2442,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2456,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "String",
    "value": "\"property2\"",
    "start": 2469,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2483,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2500,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 2507,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2518,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2524,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "String",
    "value": "\"property3\"",
    "start": 2535,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2549,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2559,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "isConcatSpreadable",
    "start": 2566,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2587,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "String",
    "value": "\"property4\"",
    "start": 2597,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2611,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2625,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 2632,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2640,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2646,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2657,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2665,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2678,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2686,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2699,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2707,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2713,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 2724,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 2733,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Identifier",
    "value": "fieldNameA",
    "start": 2753,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2766,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Identifier",
    "value": "fieldNameB",
    "start": 2779,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2792,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "fieldNameC",
    "start": 2805,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2818,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2824,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2834,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "String",
    "value": "\"property\"",
    "start": 2852,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2865,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2878,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 2885,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2899,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "String",
    "value": "\"property2\"",
    "start": 2912,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2926,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2943,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 2950,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2961,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2967,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "String",
    "value": "\"property3\"",
    "start": 2978,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2992,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3002,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "isConcatSpreadable",
    "start": 3009,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3030,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "String",
    "value": "\"property4\"",
    "start": 3040,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3054,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3068,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 3075,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3083,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3089,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3100,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3108,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3121,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3129,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3142,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3150,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3156,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 3167,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 3176,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Identifier",
    "value": "fieldNameA",
    "start": 3196,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3209,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "fieldNameB",
    "start": 3222,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3235,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 3245,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "String",
    "value": "\"method2\"",
    "start": 3254,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3268,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Identifier",
    "value": "fieldNameC",
    "start": 3278,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3291,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3297,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3306,
    "end": 3310
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3311,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "String",
    "value": "\"property\"",
    "start": 3329,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3342,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3355,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 3362,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3376,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "String",
    "value": "\"property2\"",
    "start": 3389,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3403,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3410,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3420,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 3427,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3438,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3444,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "String",
    "value": "\"property3\"",
    "start": 3455,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3469,
    "end": 3472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3479,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Identifier",
    "value": "isConcatSpreadable",
    "start": 3486,
    "end": 3504
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3507,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "String",
    "value": "\"property4\"",
    "start": 3517,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3529,
    "end": 3530
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3531,
    "end": 3534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3545,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 3552,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3560,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3566,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3577,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3585,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3598,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3606,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3619,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3627,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3631,
    "end": 3632
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3633,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 3644,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3651,
    "end": 3652
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 3653,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3666,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Identifier",
    "value": "fieldNameA",
    "start": 3673,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3686,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3696,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Identifier",
    "value": "fieldNameB",
    "start": 3699,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3712,
    "end": 3715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 3722,
    "end": 3728
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3729,
    "end": 3730
  },
  {
    "type": "String",
    "value": "\"method2\"",
    "start": 3731,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3741,
    "end": 3742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3745,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3752,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Identifier",
    "value": "fieldNameC",
    "start": 3755,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3768,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3772,
    "end": 3773
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3774,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3778,
    "end": 3779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3784,
    "end": 3789
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3798,
    "end": 3799
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "String",
    "value": "\"property\"",
    "start": 3802,
    "end": 3812
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3815,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3828,
    "end": 3834
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3834,
    "end": 3835
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 3835,
    "end": 3846
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3849,
    "end": 3852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3858,
    "end": 3859
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "String",
    "value": "\"property2\"",
    "start": 3862,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3876,
    "end": 3879
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3880,
    "end": 3881
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 3889,
    "end": 3890
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3892,
    "end": 3893
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3893,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 3900,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3911,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3917,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "String",
    "value": "\"property3\"",
    "start": 3928,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3940,
    "end": 3941
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3942,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3952,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "isConcatSpreadable",
    "start": 3959,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3980,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "String",
    "value": "\"property4\"",
    "start": 3990,
    "end": 4001
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4001,
    "end": 4002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4004,
    "end": 4007
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4018,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 4025,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4033,
    "end": 4036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4037,
    "end": 4038
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4039,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4050,
    "end": 4053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4054,
    "end": 4055
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4055,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4056,
    "end": 4057
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4058,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4071,
    "end": 4074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4076,
    "end": 4077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4077,
    "end": 4078
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4079,
    "end": 4082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4082,
    "end": 4083
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4088,
    "end": 4089
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4092,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4096,
    "end": 4097
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4097,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4100,
    "end": 4103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4106,
    "end": 4110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4116,
    "end": 4117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4119,
    "end": 4120
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 4120,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4127,
    "end": 4128
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 4129,
    "end": 4137
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4148,
    "end": 4149
  },
  {
    "type": "Identifier",
    "value": "fieldNameA",
    "start": 4149,
    "end": 4159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4162,
    "end": 4165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4165,
    "end": 4166
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4172,
    "end": 4173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4174,
    "end": 4175
  },
  {
    "type": "Identifier",
    "value": "fieldNameB",
    "start": 4175,
    "end": 4185
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4186,
    "end": 4187
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4188,
    "end": 4191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4191,
    "end": 4192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4197,
    "end": 4198
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 4198,
    "end": 4204
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4205,
    "end": 4206
  },
  {
    "type": "String",
    "value": "\"method2\"",
    "start": 4207,
    "end": 4216
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4217,
    "end": 4218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4218,
    "end": 4219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4220,
    "end": 4221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4221,
    "end": 4222
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4227,
    "end": 4228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4230,
    "end": 4231
  },
  {
    "type": "Identifier",
    "value": "fieldNameC",
    "start": 4231,
    "end": 4241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4241,
    "end": 4242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4244,
    "end": 4247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4250,
    "end": 4254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4256,
    "end": 4257
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4259,
    "end": 4263
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4264,
    "end": 4269
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 4270,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4278,
    "end": 4279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4279,
    "end": 4280
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "String",
    "value": "\"property\"",
    "start": 4282,
    "end": 4292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4295,
    "end": 4298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4298,
    "end": 4299
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4304,
    "end": 4305
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4305,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4308,
    "end": 4314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4314,
    "end": 4315
  },
  {
    "type": "Identifier",
    "value": "toStringTag",
    "start": 4315,
    "end": 4326
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4327,
    "end": 4328
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4329,
    "end": 4332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4332,
    "end": 4333
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4339,
    "end": 4340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4341,
    "end": 4342
  },
  {
    "type": "String",
    "value": "\"property2\"",
    "start": 4342,
    "end": 4353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4354,
    "end": 4355
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4356,
    "end": 4359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4362,
    "end": 4363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4370,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4372,
    "end": 4373
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4373,
    "end": 4379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 4380,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4389,
    "end": 4390
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4391,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4395,
    "end": 4396
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4397,
    "end": 4401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "String",
    "value": "\"property3\"",
    "start": 4408,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4422,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4425,
    "end": 4426
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4431,
    "end": 4432
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4432,
    "end": 4438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4438,
    "end": 4439
  },
  {
    "type": "Identifier",
    "value": "isConcatSpreadable",
    "start": 4439,
    "end": 4457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4458,
    "end": 4459
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4460,
    "end": 4463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "String",
    "value": "\"property4\"",
    "start": 4470,
    "end": 4481
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4481,
    "end": 4482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4484,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4488,
    "end": 4489
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 4490,
    "end": 4491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4491,
    "end": 4492
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4497,
    "end": 4498
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4498,
    "end": 4504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4504,
    "end": 4505
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 4505,
    "end": 4510
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4510,
    "end": 4511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4511,
    "end": 4512
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4513,
    "end": 4516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4517,
    "end": 4518
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4519,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4529,
    "end": 4530
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4530,
    "end": 4533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4533,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4535,
    "end": 4536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4536,
    "end": 4537
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4538,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4541,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4547,
    "end": 4548
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4551,
    "end": 4554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4554,
    "end": 4555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4556,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4559,
    "end": 4562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4562,
    "end": 4563
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4568,
    "end": 4569
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4569,
    "end": 4570
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4572,
    "end": 4575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4575,
    "end": 4576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4576,
    "end": 4577
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4577,
    "end": 4578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4578,
    "end": 4579
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4580,
    "end": 4583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4584,
    "end": 4585
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4586,
    "end": 4590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4590,
    "end": 4591
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4596,
    "end": 4597
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4597,
    "end": 4598
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4599,
    "end": 4600
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 4600,
    "end": 4606
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 4609,
    "end": 4617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4617,
    "end": 4618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4619,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4621,
    "end": 4622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4622,
    "end": 4623
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4628,
    "end": 4629
  },
  {
    "type": "Identifier",
    "value": "fieldNameA",
    "start": 4629,
    "end": 4639
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4639,
    "end": 4640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4640,
    "end": 4641
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4642,
    "end": 4645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4645,
    "end": 4646
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4651,
    "end": 4652
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4652,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Identifier",
    "value": "fieldNameB",
    "start": 4655,
    "end": 4665
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4665,
    "end": 4666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4666,
    "end": 4667
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4668,
    "end": 4671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4671,
    "end": 4672
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4677,
    "end": 4678
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 4678,
    "end": 4684
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4685,
    "end": 4686
  },
  {
    "type": "String",
    "value": "\"method2\"",
    "start": 4687,
    "end": 4696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4696,
    "end": 4697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4697,
    "end": 4698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4698,
    "end": 4699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4700,
    "end": 4701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4701,
    "end": 4702
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 4707,
    "end": 4708
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4708,
    "end": 4709
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4710,
    "end": 4711
  },
  {
    "type": "Identifier",
    "value": "fieldNameC",
    "start": 4711,
    "end": 4721
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4721,
    "end": 4722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4722,
    "end": 4723
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4724,
    "end": 4727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4730,
    "end": 4734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4734,
    "end": 4735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4736,
    "end": 4737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4737,
    "end": 4738
  }
]
```
