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
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 40
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              },
              "start": 59,
              "end": 67
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "protected",
            "start": 47,
            "end": 68
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sx",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 92
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 94,
                "end": 100
              },
              "start": 92,
              "end": 100
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 73,
            "end": 101
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 137,
                        "end": 141
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 143
                      },
                      "optional": false,
                      "computed": false,
                      "start": 137,
                      "end": 143
                    },
                    "start": 130,
                    "end": 144
                  }
                ],
                "start": 120,
                "end": 150
              },
              "expression": false,
              "start": 117,
              "end": 150
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 106,
            "end": 150
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 174
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 194,
                        "end": 198
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sx",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 199,
                        "end": 201
                      },
                      "optional": false,
                      "computed": false,
                      "start": 194,
                      "end": 201
                    },
                    "start": 187,
                    "end": 202
                  }
                ],
                "start": 177,
                "end": 208
              },
              "expression": false,
              "start": 174,
              "end": 208
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 155,
            "end": 208
          }
        ],
        "start": 41,
        "end": 210
      },
      "abstract": false,
      "declare": false,
      "start": 32,
      "end": 210
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 265
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 276
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 294
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 314,
                            "end": 319
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 320,
                            "end": 321
                          },
                          "optional": false,
                          "computed": false,
                          "start": 314,
                          "end": 321
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 314,
                        "end": 323
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 326,
                          "end": 330
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 331,
                          "end": 332
                        },
                        "optional": false,
                        "computed": false,
                        "start": 326,
                        "end": 332
                      },
                      "start": 314,
                      "end": 332
                    },
                    "start": 307,
                    "end": 333
                  }
                ],
                "start": 297,
                "end": 339
              },
              "expression": false,
              "start": 294,
              "end": 339
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 283,
            "end": 339
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 363
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 383,
                            "end": 388
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 389,
                            "end": 391
                          },
                          "optional": false,
                          "computed": false,
                          "start": 383,
                          "end": 391
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 383,
                        "end": 393
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 396,
                          "end": 400
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sx",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 401,
                          "end": 403
                        },
                        "optional": false,
                        "computed": false,
                        "start": 396,
                        "end": 403
                      },
                      "start": 383,
                      "end": 403
                    },
                    "start": 376,
                    "end": 404
                  }
                ],
                "start": 366,
                "end": 410
              },
              "expression": false,
              "start": 363,
              "end": 410
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 344,
            "end": 410
          }
        ],
        "start": 277,
        "end": 412
      },
      "abstract": false,
      "declare": false,
      "start": 257,
      "end": 412
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 471
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 480,
        "end": 482
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 490
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 493,
                "end": 499
              },
              "start": 491,
              "end": 499
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 489,
            "end": 500
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sx",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 514
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 516,
                "end": 522
              },
              "start": 514,
              "end": 522
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 505,
            "end": 522
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 528
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 548,
                          "end": 553
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 554,
                          "end": 555
                        },
                        "optional": false,
                        "computed": false,
                        "start": 548,
                        "end": 555
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 548,
                      "end": 557
                    },
                    "start": 541,
                    "end": 558
                  }
                ],
                "start": 531,
                "end": 564
              },
              "expression": false,
              "start": 528,
              "end": 564
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 527,
            "end": 564
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 578
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 598,
                          "end": 603
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 604,
                          "end": 606
                        },
                        "optional": false,
                        "computed": false,
                        "start": 598,
                        "end": 606
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 598,
                      "end": 608
                    },
                    "start": 591,
                    "end": 609
                  }
                ],
                "start": 581,
                "end": 615
              },
              "expression": false,
              "start": 578,
              "end": 615
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 569,
            "end": 615
          }
        ],
        "start": 483,
        "end": 617
      },
      "abstract": false,
      "declare": false,
      "start": 463,
      "end": 617
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 637
                },
                "typeArguments": null,
                "start": 635,
                "end": 637
              },
              "start": 633,
              "end": 637
            },
            "start": 631,
            "end": 637
          },
          "init": null,
          "definite": false,
          "start": 631,
          "end": 637
        }
      ],
      "declare": true,
      "start": 619,
      "end": 638
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 657
                },
                "typeArguments": null,
                "start": 655,
                "end": 657
              },
              "start": 653,
              "end": 657
            },
            "start": 651,
            "end": 657
          },
          "init": null,
          "definite": false,
          "start": 651,
          "end": 657
        }
      ],
      "declare": true,
      "start": 639,
      "end": 658
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 675,
                  "end": 677
                },
                "typeArguments": null,
                "start": 675,
                "end": 677
              },
              "start": 673,
              "end": 677
            },
            "start": 671,
            "end": 677
          },
          "init": null,
          "definite": false,
          "start": 671,
          "end": 677
        }
      ],
      "declare": true,
      "start": 659,
      "end": 678
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 713,
          "end": 715
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 716,
          "end": 717
        },
        "optional": false,
        "computed": false,
        "start": 713,
        "end": 717
      },
      "directive": null,
      "start": 713,
      "end": 718
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 719,
            "end": 721
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 723
          },
          "optional": false,
          "computed": false,
          "start": 719,
          "end": 723
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 719,
        "end": 725
      },
      "directive": null,
      "start": 719,
      "end": 726
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 727,
          "end": 729
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "sx",
          "optional": false,
          "typeAnnotation": null,
          "start": 730,
          "end": 732
        },
        "optional": false,
        "computed": false,
        "start": 727,
        "end": 732
      },
      "directive": null,
      "start": 727,
      "end": 733
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
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 736
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sf",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 739
          },
          "optional": false,
          "computed": false,
          "start": 734,
          "end": 739
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 734,
        "end": 741
      },
      "directive": null,
      "start": 734,
      "end": 742
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 777,
          "end": 779
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 780,
          "end": 781
        },
        "optional": false,
        "computed": false,
        "start": 777,
        "end": 781
      },
      "directive": null,
      "start": 777,
      "end": 782
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 785
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 786,
            "end": 787
          },
          "optional": false,
          "computed": false,
          "start": 783,
          "end": 787
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 783,
        "end": 789
      },
      "directive": null,
      "start": 783,
      "end": 790
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null,
          "start": 791,
          "end": 793
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "sx",
          "optional": false,
          "typeAnnotation": null,
          "start": 794,
          "end": 796
        },
        "optional": false,
        "computed": false,
        "start": 791,
        "end": 796
      },
      "directive": null,
      "start": 791,
      "end": 797
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
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 798,
            "end": 800
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sf",
            "optional": false,
            "typeAnnotation": null,
            "start": 801,
            "end": 803
          },
          "optional": false,
          "computed": false,
          "start": 798,
          "end": 803
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 798,
        "end": 805
      },
      "directive": null,
      "start": 798,
      "end": 806
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 837,
          "end": 839
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 840,
          "end": 841
        },
        "optional": false,
        "computed": false,
        "start": 837,
        "end": 841
      },
      "directive": null,
      "start": 837,
      "end": 842
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 843,
            "end": 845
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 846,
            "end": 847
          },
          "optional": false,
          "computed": false,
          "start": 843,
          "end": 847
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 843,
        "end": 849
      },
      "directive": null,
      "start": 843,
      "end": 850
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null,
          "start": 851,
          "end": 853
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "sx",
          "optional": false,
          "typeAnnotation": null,
          "start": 854,
          "end": 856
        },
        "optional": false,
        "computed": false,
        "start": 851,
        "end": 856
      },
      "directive": null,
      "start": 851,
      "end": 857
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
            "name": "C3",
            "optional": false,
            "typeAnnotation": null,
            "start": 858,
            "end": 860
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sf",
            "optional": false,
            "typeAnnotation": null,
            "start": 861,
            "end": 863
          },
          "optional": false,
          "computed": false,
          "start": 858,
          "end": 863
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 858,
        "end": 865
      },
      "directive": null,
      "start": 858,
      "end": 866
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
        "start": 874,
        "end": 875
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 893
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
            "accessibility": "protected",
            "start": 882,
            "end": 894
          }
        ],
        "start": 876,
        "end": 896
      },
      "abstract": false,
      "declare": false,
      "start": 868,
      "end": 896
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 904,
        "end": 905
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 914,
        "end": 915
      },
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 922,
              "end": 923
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
            "start": 922,
            "end": 924
          }
        ],
        "start": 916,
        "end": 926
      },
      "abstract": false,
      "declare": false,
      "start": 898,
      "end": 926
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
        "start": 934,
        "end": 935
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 944,
        "end": 945
      },
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 952,
              "end": 953
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
            "start": 952,
            "end": 954
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
              "start": 966,
              "end": 969
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 973,
                        "end": 974
                      },
                      "typeArguments": null,
                      "start": 973,
                      "end": 974
                    },
                    "start": 971,
                    "end": 974
                  },
                  "start": 970,
                  "end": 974
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 979,
                        "end": 980
                      },
                      "typeArguments": null,
                      "start": 979,
                      "end": 980
                    },
                    "start": 977,
                    "end": 980
                  },
                  "start": 976,
                  "end": 980
                },
                {
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
                        "start": 985,
                        "end": 986
                      },
                      "typeArguments": null,
                      "start": 985,
                      "end": 986
                    },
                    "start": 983,
                    "end": 986
                  },
                  "start": 982,
                  "end": 986
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 991,
                        "end": 992
                      },
                      "typeArguments": null,
                      "start": 991,
                      "end": 992
                    },
                    "start": 989,
                    "end": 992
                  },
                  "start": 988,
                  "end": 992
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 997,
                        "end": 998
                      },
                      "typeArguments": null,
                      "start": 997,
                      "end": 998
                    },
                    "start": 995,
                    "end": 998
                  },
                  "start": 994,
                  "end": 998
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1010,
                          "end": 1011
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1012,
                          "end": 1013
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1010,
                        "end": 1013
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1016,
                        "end": 1017
                      },
                      "start": 1010,
                      "end": 1017
                    },
                    "directive": null,
                    "start": 1010,
                    "end": 1018
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1086,
                          "end": 1087
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1088,
                          "end": 1089
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1086,
                        "end": 1089
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1092,
                        "end": 1093
                      },
                      "start": 1086,
                      "end": 1093
                    },
                    "directive": null,
                    "start": 1086,
                    "end": 1094
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1162,
                          "end": 1163
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1164,
                          "end": 1165
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1162,
                        "end": 1165
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1168,
                        "end": 1169
                      },
                      "start": 1162,
                      "end": 1169
                    },
                    "directive": null,
                    "start": 1162,
                    "end": 1170
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1179,
                          "end": 1180
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1181,
                          "end": 1182
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1179,
                        "end": 1182
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1185,
                        "end": 1186
                      },
                      "start": 1179,
                      "end": 1186
                    },
                    "directive": null,
                    "start": 1179,
                    "end": 1187
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1196,
                          "end": 1197
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1198,
                          "end": 1199
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1196,
                        "end": 1199
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1202,
                        "end": 1203
                      },
                      "start": 1196,
                      "end": 1203
                    },
                    "directive": null,
                    "start": 1196,
                    "end": 1204
                  }
                ],
                "start": 1000,
                "end": 1210
              },
              "expression": false,
              "start": 969,
              "end": 1210
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 959,
            "end": 1210
          }
        ],
        "start": 946,
        "end": 1212
      },
      "abstract": false,
      "declare": false,
      "start": 928,
      "end": 1212
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1220,
        "end": 1221
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1230,
        "end": 1231
      },
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1239
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
            "start": 1238,
            "end": 1240
          }
        ],
        "start": 1232,
        "end": 1242
      },
      "abstract": false,
      "declare": false,
      "start": 1214,
      "end": 1242
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1254,
        "end": 1255
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 1264,
            "end": 1265
          },
          "typeArguments": null,
          "start": 1264,
          "end": 1265
        }
      ],
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1272,
              "end": 1273
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 1272,
            "end": 1274
          }
        ],
        "start": 1266,
        "end": 1276
      },
      "declare": false,
      "start": 1244,
      "end": 1276
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null,
        "start": 1284,
        "end": 1286
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
              "start": 1303,
              "end": 1314
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
                "start": 1317,
                "end": 1324
              },
              "expression": false,
              "start": 1314,
              "end": 1324
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 1293,
            "end": 1324
          }
        ],
        "start": 1287,
        "end": 1326
      },
      "abstract": false,
      "declare": false,
      "start": 1278,
      "end": 1326
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1334,
        "end": 1336
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1353,
              "end": 1354
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
            "accessibility": "protected",
            "start": 1343,
            "end": 1355
          }
        ],
        "start": 1337,
        "end": 1357
      },
      "abstract": false,
      "declare": false,
      "start": 1328,
      "end": 1357
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1364,
        "end": 1366
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1373,
              "end": 1374
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
            "start": 1373,
            "end": 1375
          }
        ],
        "start": 1367,
        "end": 1377
      },
      "abstract": false,
      "declare": false,
      "start": 1358,
      "end": 1377
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1394,
                  "end": 1396
                },
                "typeArguments": null,
                "start": 1394,
                "end": 1396
              },
              "start": 1392,
              "end": 1396
            },
            "start": 1390,
            "end": 1396
          },
          "init": null,
          "definite": false,
          "start": 1390,
          "end": 1396
        }
      ],
      "declare": true,
      "start": 1378,
      "end": 1397
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1414,
                  "end": 1416
                },
                "typeArguments": null,
                "start": 1414,
                "end": 1416
              },
              "start": 1412,
              "end": 1416
            },
            "start": 1410,
            "end": 1416
          },
          "init": null,
          "definite": false,
          "start": 1410,
          "end": 1416
        }
      ],
      "declare": true,
      "start": 1398,
      "end": 1417
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1418,
          "end": 1420
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1423,
          "end": 1425
        },
        "start": 1418,
        "end": 1425
      },
      "directive": null,
      "start": 1418,
      "end": 1426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1464,
          "end": 1466
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1469,
          "end": 1471
        },
        "start": 1464,
        "end": 1471
      },
      "directive": null,
      "start": 1464,
      "end": 1472
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1529,
        "end": 1531
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1548,
              "end": 1549
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
            "accessibility": "protected",
            "start": 1538,
            "end": 1550
          }
        ],
        "start": 1532,
        "end": 1552
      },
      "abstract": false,
      "declare": false,
      "start": 1523,
      "end": 1552
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1559,
        "end": 1561
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1570,
        "end": 1572
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1579,
              "end": 1580
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
            "start": 1579,
            "end": 1581
          }
        ],
        "start": 1573,
        "end": 1583
      },
      "abstract": false,
      "declare": false,
      "start": 1553,
      "end": 1583
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1591,
        "end": 1593
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1600,
              "end": 1601
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
            "start": 1600,
            "end": 1602
          }
        ],
        "start": 1594,
        "end": 1604
      },
      "abstract": false,
      "declare": false,
      "start": 1585,
      "end": 1604
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1658,
        "end": 1660
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1669,
        "end": 1671
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1688,
              "end": 1689
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
            "accessibility": "protected",
            "start": 1678,
            "end": 1690
          }
        ],
        "start": 1672,
        "end": 1692
      },
      "abstract": false,
      "declare": false,
      "start": 1652,
      "end": 1692
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 32,
  "end": 1693
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 47,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 73,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 83,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 106,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 130,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 137,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 155,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 165,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 172,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 187,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "sx",
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
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 257,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 263,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 266,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 283,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "f",
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
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 307,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "+",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 326,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 344,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 354,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 376,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 401,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "class",
    "start": 463,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 469,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 472,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 505,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 512,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 516,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 527,
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
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 541,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 548,
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
    "value": "f",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 569,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 576,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 591,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 598,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 604,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 619,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 627,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 639,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 647,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 651,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 659,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 667,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 671,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 675,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 719,
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
    "value": "f",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 727,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 730,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 734,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 737,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 777,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 783,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 794,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 798,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 801,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 837,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 843,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 851,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 854,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 858,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 861,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "class",
    "start": 868,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 882,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 898,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 906,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 928,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 936,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 959,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 966,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "e",
    "start": 1196,
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
    "value": "x",
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
    "value": "1",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1214,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1222,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1244,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1256,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1278,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 1284,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1293,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1303,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1314,
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
    "value": "{",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1328,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1334,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1343,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1358,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1364,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1378,
    "end": 1385
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1390,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1394,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1398,
    "end": 1405
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1406,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1410,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1414,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1418,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1423,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1464,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1469,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1523,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1529,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1538,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1553,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 1559,
    "end": 1561
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1562,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1570,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1585,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 1591,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1652,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 1658,
    "end": 1660
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1661,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 1669,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1678,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1691,
    "end": 1692
  }
]
```
