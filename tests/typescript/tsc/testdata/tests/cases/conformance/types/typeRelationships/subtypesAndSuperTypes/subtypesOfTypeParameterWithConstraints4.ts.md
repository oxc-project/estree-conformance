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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 91
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 97
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 99,
                "end": 105
              },
              "start": 97,
              "end": 105
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 94,
            "end": 106
          }
        ],
        "start": 92,
        "end": 108
      },
      "abstract": false,
      "declare": false,
      "start": 82,
      "end": 108
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 119
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
              "start": 120,
              "end": 121
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 133
              },
              "typeArguments": null,
              "start": 130,
              "end": 133
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 120,
            "end": 133
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 148
              },
              "typeArguments": null,
              "start": 145,
              "end": 148
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 135,
            "end": 148
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 150,
            "end": 151
          }
        ],
        "start": 119,
        "end": 152
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 156,
                "end": 157
              },
              "typeArguments": null,
              "start": 156,
              "end": 157
            },
            "start": 154,
            "end": 157
          },
          "start": 153,
          "end": 157
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              "typeArguments": null,
              "start": 162,
              "end": 163
            },
            "start": 160,
            "end": 163
          },
          "start": 159,
          "end": 163
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 169
              },
              "typeArguments": null,
              "start": 168,
              "end": 169
            },
            "start": 166,
            "end": 169
          },
          "start": 165,
          "end": 169
        }
      ],
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 192
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 195,
                    "end": 199
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 203
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 207
                  },
                  "start": 195,
                  "end": 207
                },
                "definite": false,
                "start": 191,
                "end": 207
              }
            ],
            "declare": false,
            "start": 187,
            "end": 208
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 218
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 221,
                    "end": 225
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 233
                  },
                  "start": 221,
                  "end": 233
                },
                "definite": false,
                "start": 217,
                "end": 233
              }
            ],
            "declare": false,
            "start": 213,
            "end": 234
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 256
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 259,
                    "end": 263
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 267
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 271
                  },
                  "start": 259,
                  "end": 271
                },
                "definite": false,
                "start": 254,
                "end": 271
              }
            ],
            "declare": false,
            "start": 250,
            "end": 272
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 283
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 286,
                    "end": 290
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 294
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 297,
                    "end": 298
                  },
                  "start": 286,
                  "end": 298
                },
                "definite": false,
                "start": 281,
                "end": 298
              }
            ],
            "declare": false,
            "start": 277,
            "end": 299
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 321
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 324,
                    "end": 328
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 331,
                    "end": 332
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 335,
                    "end": 336
                  },
                  "start": 324,
                  "end": 336
                },
                "definite": false,
                "start": 319,
                "end": 336
              }
            ],
            "declare": false,
            "start": 315,
            "end": 337
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 348
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 351,
                    "end": 355
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 359
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 362,
                    "end": 363
                  },
                  "start": 351,
                  "end": 363
                },
                "definite": false,
                "start": 346,
                "end": 363
              }
            ],
            "declare": false,
            "start": 342,
            "end": 364
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 386
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 389,
                    "end": 393
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 397
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 404,
                      "end": 407
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 400,
                    "end": 409
                  },
                  "start": 389,
                  "end": 409
                },
                "definite": false,
                "start": 384,
                "end": 409
              }
            ],
            "declare": false,
            "start": 380,
            "end": 410
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 419,
                  "end": 421
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 424,
                    "end": 428
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 435,
                      "end": 438
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 431,
                    "end": 440
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 443,
                    "end": 444
                  },
                  "start": 424,
                  "end": 444
                },
                "definite": false,
                "start": 419,
                "end": 444
              }
            ],
            "declare": false,
            "start": 415,
            "end": 445
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 467
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 470,
                    "end": 474
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 477,
                    "end": 478
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 485,
                      "end": 488
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 481,
                    "end": 490
                  },
                  "start": 470,
                  "end": 490
                },
                "definite": false,
                "start": 465,
                "end": 490
              }
            ],
            "declare": false,
            "start": 461,
            "end": 491
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 502
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 505,
                    "end": 509
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 516,
                      "end": 519
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 512,
                    "end": 521
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 524,
                    "end": 525
                  },
                  "start": 505,
                  "end": 525
                },
                "definite": false,
                "start": 500,
                "end": 525
              }
            ],
            "declare": false,
            "start": 496,
            "end": 526
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 548
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 551,
                    "end": 555
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 558,
                    "end": 559
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 566,
                      "end": 569
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 562,
                    "end": 571
                  },
                  "start": 551,
                  "end": 571
                },
                "definite": false,
                "start": 546,
                "end": 571
              }
            ],
            "declare": false,
            "start": 542,
            "end": 572
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 583
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 586,
                    "end": 590
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 597,
                      "end": 600
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 593,
                    "end": 602
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 605,
                    "end": 606
                  },
                  "start": 586,
                  "end": 606
                },
                "definite": false,
                "start": 581,
                "end": 606
              }
            ],
            "declare": false,
            "start": 577,
            "end": 607
          }
        ],
        "start": 171,
        "end": 610
      },
      "expression": false,
      "start": 109,
      "end": 610
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
        "start": 618,
        "end": 620
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
              "start": 621,
              "end": 622
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 621,
            "end": 622
          }
        ],
        "start": 620,
        "end": 623
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 633
            },
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
                  "start": 635,
                  "end": 636
                },
                "typeArguments": null,
                "start": 635,
                "end": 636
              },
              "start": 633,
              "end": 636
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 630,
            "end": 637
          }
        ],
        "start": 624,
        "end": 639
      },
      "abstract": false,
      "declare": false,
      "start": 612,
      "end": 639
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null,
        "start": 647,
        "end": 649
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
              "start": 650,
              "end": 651
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 663
              },
              "typeArguments": null,
              "start": 660,
              "end": 663
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 650,
            "end": 663
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 666
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 678
              },
              "typeArguments": null,
              "start": 675,
              "end": 678
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 665,
            "end": 678
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 680,
              "end": 681
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 680,
            "end": 681
          }
        ],
        "start": 649,
        "end": 682
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 691,
        "end": 693
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 694,
              "end": 697
            },
            "typeArguments": null,
            "start": 694,
            "end": 697
          }
        ],
        "start": 693,
        "end": 698
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 709,
                    "end": 715
                  },
                  "start": 707,
                  "end": 715
                },
                "start": 706,
                "end": 715
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 721
                },
                "typeArguments": null,
                "start": 718,
                "end": 721
              },
              "start": 716,
              "end": 721
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 705,
            "end": 722
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 730
            },
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
                  "start": 732,
                  "end": 733
                },
                "typeArguments": null,
                "start": 732,
                "end": 733
              },
              "start": 730,
              "end": 733
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 727,
            "end": 734
          }
        ],
        "start": 699,
        "end": 742
      },
      "abstract": false,
      "declare": false,
      "start": 641,
      "end": 742
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 752
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
              "start": 753,
              "end": 754
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 763,
                "end": 766
              },
              "typeArguments": null,
              "start": 763,
              "end": 766
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 753,
            "end": 766
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 769
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 781
              },
              "typeArguments": null,
              "start": 778,
              "end": 781
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 768,
            "end": 781
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 784
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 783,
            "end": 784
          }
        ],
        "start": 752,
        "end": 785
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 794,
        "end": 796
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 800
            },
            "typeArguments": null,
            "start": 797,
            "end": 800
          }
        ],
        "start": 796,
        "end": 801
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 812,
                    "end": 818
                  },
                  "start": 810,
                  "end": 818
                },
                "start": 809,
                "end": 818
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 824
                },
                "typeArguments": null,
                "start": 821,
                "end": 824
              },
              "start": 819,
              "end": 824
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 808,
            "end": 825
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 830,
              "end": 833
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 835,
                  "end": 836
                },
                "typeArguments": null,
                "start": 835,
                "end": 836
              },
              "start": 833,
              "end": 836
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 830,
            "end": 837
          }
        ],
        "start": 802,
        "end": 845
      },
      "abstract": false,
      "declare": false,
      "start": 744,
      "end": 845
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null,
        "start": 853,
        "end": 855
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
              "start": 856,
              "end": 857
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 866,
                "end": 869
              },
              "typeArguments": null,
              "start": 866,
              "end": 869
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 856,
            "end": 869
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 871,
              "end": 872
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 881,
                "end": 884
              },
              "typeArguments": null,
              "start": 881,
              "end": 884
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 871,
            "end": 884
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 887
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 886,
            "end": 887
          }
        ],
        "start": 855,
        "end": 888
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 897,
        "end": 899
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 900,
              "end": 903
            },
            "typeArguments": null,
            "start": 900,
            "end": 903
          }
        ],
        "start": 899,
        "end": 904
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 915,
                    "end": 921
                  },
                  "start": 913,
                  "end": 921
                },
                "start": 912,
                "end": 921
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 924,
                  "end": 927
                },
                "typeArguments": null,
                "start": 924,
                "end": 927
              },
              "start": 922,
              "end": 927
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 911,
            "end": 928
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 933,
              "end": 936
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 938,
                  "end": 939
                },
                "typeArguments": null,
                "start": 938,
                "end": 939
              },
              "start": 936,
              "end": 939
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 933,
            "end": 940
          }
        ],
        "start": 905,
        "end": 951
      },
      "abstract": false,
      "declare": false,
      "start": 847,
      "end": 951
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D4",
        "optional": false,
        "typeAnnotation": null,
        "start": 959,
        "end": 961
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
              "start": 962,
              "end": 963
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 972,
                "end": 975
              },
              "typeArguments": null,
              "start": 972,
              "end": 975
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 962,
            "end": 975
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 977,
              "end": 978
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 987,
                "end": 990
              },
              "typeArguments": null,
              "start": 987,
              "end": 990
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 977,
            "end": 990
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 992,
              "end": 993
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 992,
            "end": 993
          }
        ],
        "start": 961,
        "end": 994
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1003,
        "end": 1005
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1006,
              "end": 1007
            },
            "typeArguments": null,
            "start": 1006,
            "end": 1007
          }
        ],
        "start": 1005,
        "end": 1008
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1019,
                    "end": 1025
                  },
                  "start": 1017,
                  "end": 1025
                },
                "start": 1016,
                "end": 1025
              }
            ],
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
                  "start": 1028,
                  "end": 1029
                },
                "typeArguments": null,
                "start": 1028,
                "end": 1029
              },
              "start": 1026,
              "end": 1029
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1015,
            "end": 1030
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1038
            },
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
                  "start": 1040,
                  "end": 1041
                },
                "typeArguments": null,
                "start": 1040,
                "end": 1041
              },
              "start": 1038,
              "end": 1041
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1035,
            "end": 1042
          }
        ],
        "start": 1009,
        "end": 1050
      },
      "abstract": false,
      "declare": false,
      "start": 953,
      "end": 1050
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1058,
        "end": 1060
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
              "start": 1061,
              "end": 1062
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1071,
                "end": 1074
              },
              "typeArguments": null,
              "start": 1071,
              "end": 1074
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1061,
            "end": 1074
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1077
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1089
              },
              "typeArguments": null,
              "start": 1086,
              "end": 1089
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1076,
            "end": 1089
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1091,
              "end": 1092
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1091,
            "end": 1092
          }
        ],
        "start": 1060,
        "end": 1093
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1102,
        "end": 1104
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1105,
              "end": 1106
            },
            "typeArguments": null,
            "start": 1105,
            "end": 1106
          }
        ],
        "start": 1104,
        "end": 1107
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1118,
                    "end": 1124
                  },
                  "start": 1116,
                  "end": 1124
                },
                "start": 1115,
                "end": 1124
              }
            ],
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
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1114,
            "end": 1129
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1134,
              "end": 1137
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1139,
                  "end": 1140
                },
                "typeArguments": null,
                "start": 1139,
                "end": 1140
              },
              "start": 1137,
              "end": 1140
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1134,
            "end": 1141
          }
        ],
        "start": 1108,
        "end": 1152
      },
      "abstract": false,
      "declare": false,
      "start": 1052,
      "end": 1152
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1160,
        "end": 1162
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
              "start": 1163,
              "end": 1164
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1173,
                "end": 1176
              },
              "typeArguments": null,
              "start": 1173,
              "end": 1176
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1163,
            "end": 1176
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1178,
              "end": 1179
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1188,
                "end": 1191
              },
              "typeArguments": null,
              "start": 1188,
              "end": 1191
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1178,
            "end": 1191
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1193,
              "end": 1194
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1193,
            "end": 1194
          }
        ],
        "start": 1162,
        "end": 1195
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1204,
        "end": 1206
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1207,
              "end": 1208
            },
            "typeArguments": null,
            "start": 1207,
            "end": 1208
          }
        ],
        "start": 1206,
        "end": 1209
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1220,
                    "end": 1226
                  },
                  "start": 1218,
                  "end": 1226
                },
                "start": 1217,
                "end": 1226
              }
            ],
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
                  "start": 1229,
                  "end": 1230
                },
                "typeArguments": null,
                "start": 1229,
                "end": 1230
              },
              "start": 1227,
              "end": 1230
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1216,
            "end": 1231
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1236,
              "end": 1239
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1241,
                  "end": 1242
                },
                "typeArguments": null,
                "start": 1241,
                "end": 1242
              },
              "start": 1239,
              "end": 1242
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1236,
            "end": 1243
          }
        ],
        "start": 1210,
        "end": 1254
      },
      "abstract": false,
      "declare": false,
      "start": 1154,
      "end": 1254
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1262,
        "end": 1264
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
              "start": 1265,
              "end": 1266
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1275,
                "end": 1278
              },
              "typeArguments": null,
              "start": 1275,
              "end": 1278
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1265,
            "end": 1278
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1280,
              "end": 1281
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1293
              },
              "typeArguments": null,
              "start": 1290,
              "end": 1293
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1280,
            "end": 1293
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1295,
              "end": 1296
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1295,
            "end": 1296
          }
        ],
        "start": 1264,
        "end": 1297
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1306,
        "end": 1308
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1309,
              "end": 1310
            },
            "typeArguments": null,
            "start": 1309,
            "end": 1310
          }
        ],
        "start": 1308,
        "end": 1311
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1322,
                    "end": 1328
                  },
                  "start": 1320,
                  "end": 1328
                },
                "start": 1319,
                "end": 1328
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1331,
                  "end": 1332
                },
                "typeArguments": null,
                "start": 1331,
                "end": 1332
              },
              "start": 1329,
              "end": 1332
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1318,
            "end": 1333
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1338,
              "end": 1341
            },
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
                  "start": 1343,
                  "end": 1344
                },
                "typeArguments": null,
                "start": 1343,
                "end": 1344
              },
              "start": 1341,
              "end": 1344
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1338,
            "end": 1345
          }
        ],
        "start": 1312,
        "end": 1356
      },
      "abstract": false,
      "declare": false,
      "start": 1256,
      "end": 1356
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1364,
        "end": 1366
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
              "start": 1367,
              "end": 1368
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1377,
                "end": 1380
              },
              "typeArguments": null,
              "start": 1377,
              "end": 1380
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1367,
            "end": 1380
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1382,
              "end": 1383
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1392,
                "end": 1395
              },
              "typeArguments": null,
              "start": 1392,
              "end": 1395
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1382,
            "end": 1395
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1397,
              "end": 1398
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1397,
            "end": 1398
          }
        ],
        "start": 1366,
        "end": 1399
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1408,
        "end": 1410
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1411,
              "end": 1412
            },
            "typeArguments": null,
            "start": 1411,
            "end": 1412
          }
        ],
        "start": 1410,
        "end": 1413
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1424,
                    "end": 1430
                  },
                  "start": 1422,
                  "end": 1430
                },
                "start": 1421,
                "end": 1430
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1433,
                  "end": 1434
                },
                "typeArguments": null,
                "start": 1433,
                "end": 1434
              },
              "start": 1431,
              "end": 1434
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1420,
            "end": 1435
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1440,
              "end": 1443
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1445,
                  "end": 1446
                },
                "typeArguments": null,
                "start": 1445,
                "end": 1446
              },
              "start": 1443,
              "end": 1446
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1440,
            "end": 1447
          }
        ],
        "start": 1414,
        "end": 1455
      },
      "abstract": false,
      "declare": false,
      "start": 1358,
      "end": 1455
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1463,
        "end": 1465
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
              "start": 1466,
              "end": 1467
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1476,
                "end": 1479
              },
              "typeArguments": null,
              "start": 1476,
              "end": 1479
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1466,
            "end": 1479
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1481,
              "end": 1482
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1491,
                "end": 1494
              },
              "typeArguments": null,
              "start": 1491,
              "end": 1494
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1481,
            "end": 1494
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1496,
              "end": 1497
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1496,
            "end": 1497
          }
        ],
        "start": 1465,
        "end": 1498
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1507,
        "end": 1509
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1510,
              "end": 1511
            },
            "typeArguments": null,
            "start": 1510,
            "end": 1511
          }
        ],
        "start": 1509,
        "end": 1512
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1523,
                    "end": 1529
                  },
                  "start": 1521,
                  "end": 1529
                },
                "start": 1520,
                "end": 1529
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1532,
                  "end": 1533
                },
                "typeArguments": null,
                "start": 1532,
                "end": 1533
              },
              "start": 1530,
              "end": 1533
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1519,
            "end": 1534
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1539,
              "end": 1542
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1544,
                  "end": 1545
                },
                "typeArguments": null,
                "start": 1544,
                "end": 1545
              },
              "start": 1542,
              "end": 1545
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1539,
            "end": 1546
          }
        ],
        "start": 1513,
        "end": 1557
      },
      "abstract": false,
      "declare": false,
      "start": 1457,
      "end": 1557
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 1557
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 82,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
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
    "value": "f",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 122,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 137,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 195,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 250,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 257,
    "end": 258
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 324,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "u",
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
    "value": "var",
    "start": 342,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 384,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 400,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 404,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 424,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 431,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 435,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 461,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 465,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 481,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 485,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "var",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 516,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 542,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 551,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 562,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 566,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 577,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 581,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 584,
    "end": 585
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 586,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 593,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 597,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 612,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 618,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 630,
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
    "value": "T",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 641,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 652,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 667,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 675,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 681,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 683,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 691,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 694,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 709,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 718,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 727,
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
    "value": "T",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 744,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 753,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 755,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 763,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 770,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 778,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 786,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 794,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 797,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 812,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 821,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 830,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 847,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "D3",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 858,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 866,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 871,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 873,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 881,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 889,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 897,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 900,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 915,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 924,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 933,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 950,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 953,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "D4",
    "start": 959,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 964,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 972,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 977,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 979,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 987,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 995,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1003,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "foo",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1052,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "D5",
    "start": 1058,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1063,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1071,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1078,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1086,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1094,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1102,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1118,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1154,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "D6",
    "start": 1160,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1165,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1173,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1180,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1188,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1196,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1204,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1220,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1256,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "D7",
    "start": 1262,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1267,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1275,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1282,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1290,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1298,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1306,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1322,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1338,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1358,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "D8",
    "start": 1364,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1369,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1377,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1384,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1392,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1400,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1408,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1424,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1440,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1457,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "D9",
    "start": 1463,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1468,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1483,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1491,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1499,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1507,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1523,
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
    "value": "U",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1539,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1556,
    "end": 1557
  }
]
```
