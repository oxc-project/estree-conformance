__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
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
                "type": "PrivateIdentifier",
                "name": "a",
                "start": 23,
                "end": 25
              },
              "typeAnnotation": null,
              "value": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 28,
                  "end": 32
                },
                "consequent": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 35,
                  "end": 36
                },
                "alternate": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 39,
                  "end": 42
                },
                "start": 28,
                "end": 42
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 23,
              "end": 42
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "b",
                "start": 47,
                "end": 49
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 47,
              "end": 49
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 489
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
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 491
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 493,
                    "end": 494
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 506,
                            "end": 510
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "a",
                            "start": 511,
                            "end": 513
                          },
                          "optional": false,
                          "computed": false,
                          "start": 506,
                          "end": 513
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 516,
                          "end": 517
                        },
                        "start": 506,
                        "end": 517
                      },
                      "directive": null,
                      "start": 506,
                      "end": 517
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 526,
                            "end": 530
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "b",
                            "start": 531,
                            "end": 533
                          },
                          "optional": false,
                          "computed": false,
                          "start": 526,
                          "end": 533
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 536,
                          "end": 537
                        },
                        "start": 526,
                        "end": 537
                      },
                      "directive": null,
                      "start": 526,
                      "end": 537
                    }
                  ],
                  "start": 496,
                  "end": 543
                },
                "expression": false,
                "start": 489,
                "end": 543
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 478,
              "end": 543
            }
          ],
          "start": 17,
          "end": 545
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 545
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 545
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 550,
            "end": 551
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 558,
              "end": 561
            },
            "typeArguments": null,
            "arguments": [],
            "start": 554,
            "end": 563
          },
          "definite": false,
          "start": 550,
          "end": 563
        }
      ],
      "declare": false,
      "start": 546,
      "end": 563
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 569
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 579
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "str",
                "raw": "'str'",
                "start": 580,
                "end": 585
              }
            ],
            "start": 572,
            "end": 586
          },
          "definite": false,
          "start": 568,
          "end": 586
        }
      ],
      "declare": false,
      "start": 564,
      "end": 586
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 591,
            "end": 592
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 602
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 603,
                "end": 604
              }
            ],
            "start": 595,
            "end": 605
          },
          "definite": false,
          "start": 591,
          "end": 605
        }
      ],
      "declare": false,
      "start": 587,
      "end": 605
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 610,
            "end": 611
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 621
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "str",
                "raw": "'str'",
                "start": 622,
                "end": 627
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 629,
                "end": 630
              }
            ],
            "start": 614,
            "end": 631
          },
          "definite": false,
          "start": 610,
          "end": 631
        }
      ],
      "declare": false,
      "start": 606,
      "end": 631
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 631
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "PrivateIdentifier",
    "value": "a",
    "start": 23,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 28,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 33,
    "end": 34
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 39,
    "end": 42
  },
  {
    "type": "PrivateIdentifier",
    "value": "b",
    "start": 47,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 478,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 493,
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
    "value": "{",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 510,
    "end": 511
  },
  {
    "type": "PrivateIdentifier",
    "value": "a",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 526,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 530,
    "end": 531
  },
  {
    "type": "PrivateIdentifier",
    "value": "b",
    "start": 531,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 546,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 554,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 564,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 572,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 576,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 580,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 587,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 595,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 599,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 614,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 621,
    "end": 622
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 622,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 627,
    "end": 628
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  }
]
```
